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
		getAnswers: ()=> {
			dispatch({
				type: 'GET_ANSWERS',
				payload: axios.get('/answers.json')
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
		console.log(this.props);
		this.props.getQuestions();
	}

	render(){
		return <Quiz {...this.props} />
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsContainer);