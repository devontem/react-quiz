import React from 'react';
import Question from './../Question/Question';

const Quiz = (props) => {
	let { questions, results, saveSelection } = props;
	let question_components = [], 
		answers = (props.answers.data) ? props.answers.data : [], // store answers when answers are retrieved
		lock_quiz = props.answers.data_retrieved; // lock quiz when answers are retrieved

	// set up question components
	if (questions.data && questions.data.length) {
		question_components = questions.data.map((item, i) => {
			return <Question key={item.id} 
								{...item} 
								lock_quiz={lock_quiz}
								saveSelection={saveSelection.bind(this)}
								answer={answers.find((obj)=>obj.id === item.id)} />
		});
	}

	return (
		<div>
			{ question_components }
		</div>
	);
}

export default Quiz;