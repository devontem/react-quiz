import React, { Component } from 'react';
import axios from 'axios';
import Quiz from './../../components/Quiz/Quiz';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
	return {
		state
	}
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		getQuestions: ()=> {
			dispatch({
				type: 'GET_QUESTIONS',
				payload: axios.get('/questions.json')
			})
		},
		getAnswers: ()=> {
			dispatch({
				type: 'GET_ANSWERS',
				payload: axios.get('/answers.json')
			})
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