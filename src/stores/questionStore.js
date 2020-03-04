import {
  writable
} from 'svelte/store';
import {
  questions
} from '../routes/quiz/_questions';

export const questionStore = createQuestions()

function createQuestions() {
  const {
    subscribe,
    set,
    update
  } = writable(1);

  return {
    subscribe,
    changeQuestion: (id) => {
      let num = Math.floor(Math.random() * questions.length);
      id !== num ? set(num) : num - 1 === 0 ? set(num + 1) : set(num - 1)
    }
  };
}