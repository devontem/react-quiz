import { combineReducers } from 'redux';
import QuestionsReducer from './Questions';
import AnswersReducer from './Answers';
import ResultsReducer from './Results';

const reducers = combineReducers({
	questions: QuestionsReducer,
	answers: AnswersReducer,
	results: ResultsReducer
});

export default reducers;