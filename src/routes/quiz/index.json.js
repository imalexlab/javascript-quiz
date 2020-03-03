import questions from './_questions.js';

const contents = JSON.stringify(questions.map(question => {
	return {
    slug: question.slug,
    id: question.id,
    answer: question.answer,
    choices: question.choices,
    explanation: question.explanation,
    title: question.question,
    code: question.snippet
	};
}));

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
  });

	res.end(contents);
}