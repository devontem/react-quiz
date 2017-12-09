import React from 'react';

const Question = (props) => {
	let { saveSelection, id, quiz_submitted, answer, selection } = props;

	// when quiz is submitted, calculate results
	if (quiz_submitted){
		console.log('RESULTS: #'+id, 'right answer? ', answer===selection, ' ---- ', selection, answer);
	}

	// save selection on change

	// lock question on `lock_quiz param`

	// if `lock_quiz`, show answer && show selection -- compare both

	return (
		<div>
			<h3>{props.question}</h3>
			<ol>
				{ props.options.map((item, i) => <li onClick={saveSelection.bind(this, id, i)} key={i} className="">{item}</li>)}
			</ol>
		</div>
	);
}

export default Question;