import React from 'react';
import './Question.css';

const Question = (props) => {
	let { saveSelection, id, quiz_submitted, answer, selection } = props;
	let options, getClasses, hanldeClick;

	// handle saving selection
	hanldeClick = (e, id, i)=>{
		e.preventDefault();
		if (!quiz_submitted) saveSelection(id, i); // only save selection if quiz is not submitted
	}

	// method to compute necessary css classes
	getClasses = (index) => {
		var classes = ''
		if (quiz_submitted){
			if (index === selection){
				classes = 'selection ' + ((selection === answer) ? 'green' : 'red' );
			} else if (index === answer){
				classes += 'green'
			}
		} else {
			classes += (index === selection) ? 'active ' : '';
		}
		return classes;
	}

	options = props.options.map((item, i) => {
		return <a href="#" onClick={(e) => hanldeClick(e, id, i)} key={i} className={"list-group-item list-group-item-action flex-column align-items-start " + getClasses.call(this, i) }>
			    <div className="d-flex w-100 justify-content-between">
			    	<h5 className="mb-1">{ String.fromCharCode(97+i) }) {item}</h5>
					<span className="symbol"></span>

			    </div>
			  </a>
	});

	return (
		<div className="question">
			<h3>{id+1}) {props.question}</h3>
			{ options }
		</div>
	);
}

export default Question;