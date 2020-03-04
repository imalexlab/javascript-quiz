<script context="module">
  export async function preload({ params, query }) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    const res = await this.fetch(`quiz/${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { question: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import { afterUpdate } from "svelte";
  import { questionStore } from "../../stores/questionStore.js";
  export let question;
  let displayAnswer = false;
  let userAnswered;

  afterUpdate(() => {
    questionStore.changeQuestion(question.id);
  });

  function handleChange(e) {
    const userAnswer = e.target.value;
    userAnswered = true;

    if (userAnswer === question.answer) displayAnswer = true;
  }
</script>

<style>
  h1 {
    text-align: center;
  }

  label {
    width: 100%;
    display: flex;
    justify-content: left;
    align-items: baseline;
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  #choices {
    border: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  .choice {
    display: flex;
    justify-content: space-between;
    border: 1px solid #b8b8d1;
    padding: 1rem;
    align-items: center;
    border-radius: 20px;
    margin: 0.875rem;
    width: 300px;
  }

  .choiceKey {
    font-weight: 800;
    font-size: 20px;
    margin-right: 5px;
  }
</style>

<svelte:head>
  <title>Javascript Question</title>
</svelte:head>

<div class="content">
  <h1>{question.question}</h1>
  <h1>{$questionStore}</h1>
  {#if question.snippet}
    <pre>
      <code>{question.snippet}</code>
    </pre>
  {/if}
  <form>
    <fieldset id="choices">
      {#each question.choices as choice}
        <div class="choice">
          <label for={choice.key}>
            <span class="choiceKey">{choice.key}:</span>
            <p>
              {@html choice.value}
            </p>
          </label>
          <input
            type="radio"
            id={choice.key}
            value={choice.key}
            name="choices"
            on:change={handleChange}
            disabled={userAnswered} />
        </div>
      {/each}
    </fieldset>
  </form>
  {#if userAnswered}
    {#if displayAnswer}
      <p>Correct! Answer is: {question.answer}</p>
      <p>
        {@html question.explanation}
      </p>
    {:else}
      <p>Wrong answer :(</p>
      <p>Correct answer was: {question.answer}</p>
      <p>
        {@html question.explanation}
      </p>
    {/if}
  {/if}

  <a rel="prefetch" href="quiz/{$questionStore}">Change question</a>
</div>
