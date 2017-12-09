// initialize state
const AnswersReducer = (state = {}, action) => {
	switch (action.type){
		case 'GET_ANSWERS':
			return state;
		default:
			return state
	}
}

export default AnswersReducer;