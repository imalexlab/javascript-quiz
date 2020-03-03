<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`quiz.json`).then(r => r.json()).then(questions => {
			return { questions };
		});
	}
</script>

<script>
	export let questions;
</script>

<style>
	ul {
		margin: 0 0 1em 0;
		line-height: 1.5;
	}
</style>

<svelte:head>
	<title>Quiz</title>
</svelte:head>

<h1>Recent questions</h1>

<ul>
	{#each questions as question}
		<!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
		<li><a rel='prefetch' href='quiz/{question.slug}'>{question.id}</a></li>
	{/each}
</ul>