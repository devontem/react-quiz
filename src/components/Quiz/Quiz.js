import React from 'react';
import Question from './../Question/Question';

const Quiz = (props) => {
	let question_components = [], 
		selection, 
		answer, 
		answerObj,
		total_correct_answers = 0,
		handleClick,
		isFormValid;

	// handle the submit button 
	handleClick = () => {
		isFormValid = (props.results.selection.length === props.questions.data.length && props.results.selection.every((v) => v !== undefined));
		(isFormValid) ? props.getAnswers(props.results.selection) : alert('Please fill out all fields');
	}

	// set up question components
	question_components = props.questions.data.map((item, i) => {

		selection = props.results.selection[item.id]; // user selection for question
		if (props.answers.quiz_submitted) {
			answerObj = (props.answers.data.find((obj) => obj.id === item.id) || {});
			answer = answerObj.answer_index; // answer
			if (answerObj.correct) total_correct_answers++; // increment counter on right answer
		}

		return <Question key={item.id} 
							{...item} 
							selection={selection} 
							answer={answer} 
							quiz_submitted={props.answers.quiz_submitted}
							saveSelection={props.saveSelection.bind(this)} />
		});

	return (
		<div className="list-group quiz">

			{ question_components }

			{ (props.questions.error || props.answers.error) ? 
				<div class="alert alert-danger">
				  <strong>Error!</strong> {props.questions.message || props.answers.message}
				</div> : '' }

			{ (!props.questions.error ) ?
				<button type="button" className="btn btn-primary btn-lg btn-block" onClick={handleClick.bind(this)}>Get Answers</button> : '' }

			{ (props.answers.quiz_submitted) ?
				<div className="alert alert-success results text-center" role="alert"><h4 className="alert-heading">Results are in!</h4><h1>Score: {total_correct_answers} / { props.questions.data.length }</h1></div> : '' }

		</div>
	)
}

export default Quiz;