let questions, 
	message,
	initialState = { data: [] };

const QuestionsReducer = (state = initialState, action) => {
	switch (action.type){
		case 'GET_QUESTIONS':
			return state;
		case 'GET_QUESTIONS_PENDING':
			return {...state, error: false, pending: true };
		case 'GET_QUESTIONS_FULFILLED':
			questions = (action.payload && action.payload.data) ? action.payload.data : []; 
			return {...state, pending: false, error: false, data: questions };
		case 'GET_QUESTIONS_REJECTED':
			message = "There was an error fetching questions";
			message += (action.payload && action.payload.message) ? `: ${action.payload.message}` : "";
			return {...state, pending: false, error: true, message: message }
		default:
			return state;
	}
}

export default QuestionsReducer;