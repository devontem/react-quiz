import React, { Component } from 'react';
import axios from 'axios';
import Quiz from './../../components/Quiz/Quiz';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
	return {
		...state // spread state properties
	}
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		getQuestions: ()=> {
			dispatch({
				type: 'GET_QUESTIONS',
				payload: axios.get('/questions.json')
			});
		},
		getAnswers: (userResponses)=> {
			dispatch({
				type: 'GET_ANSWERS',
				// fake HTTP request
				payload: new Promise((resolve, reject) => {
					axios.get('/answers.json').then((answers)=>{
						var res = answers.data || [];
						res = res.map((obj, i)=>{
							return {...obj, correct: obj.answer_index === userResponses[i] };
						});
						resolve({ data: res });
					});
				})
			});
		},
		saveSelection: (question_index, answer_index) => {
			dispatch({
				type: 'SAVE_SELECTION',
				question_index,
				answer_index
			});
		}
	}
};

class QuestionsContainer extends Component {
	componentWillMount(){
		this.props.getQuestions();
	}

	render(){
		return <Quiz {...this.props} />
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsContainer);