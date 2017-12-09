// initialize state
const QuestionsReducer = (state = {}, action) => {
	switch (action.type){
		case 'GET_QUESTIONS':
			return state;
		default:
			return state;
	}
}

export default QuestionsReducer;