import React from 'react';
import Question from './../Question/Question';

const Quiz = (props) => {
	let question_components = [], 
		selection, 
		answer, 
		total_correct_answers = 0;

	// set up question components
	question_components = props.questions.data.map((item, i) => {
		selection = props.results.selection[item.id]; // user selection for question
		answer = (props.answers.data.find((obj) => obj.id === item.id) || {}).answer_index; // answer
		if (selection === answer) total_correct_answers++; // increment counter on right answer

		return <Question key={item.id} 
							{...item} 
							selection={selection} 
							answer={answer} 
							quiz_submitted={props.answers.quiz_submitted}
							saveSelection={props.saveSelection.bind(this)} />
		});

	return (
		<div>
			{ question_components }
			<button onClick={props.getAnswers.bind(this)}>Submit</button>

			{ (props.answers.quiz_submitted) ?
				<div>Score: {total_correct_answers} / { props.questions.data.length }</div> : '' }
		</div>
	);
}

export default Quiz;