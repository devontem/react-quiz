let questions, 
	message;

// initialize state
const QuestionsReducer = (state = { data: [] }, action) => {
	switch (action.type){
		case 'GET_QUESTIONS':
			return state;
		case 'GET_QUESTIONS_PENDING':
			return { pending: true };
		case 'GET_QUESTIONS_FULFILLED':
			questions = (action.payload && action.payload.data) ? action.payload.data : []; 
			return { pending: false, data: questions };
		case 'GET_QUESTIONS_REJECTED':
			message = "There was an error fetching questions";
			message += (action.payload && action.payload.message) ? `: ${action.payload.message}` : "";
			return { pending: false, error: true, message: message, data_retrieved: false }
		default:
			return state;
	}
}

export default QuestionsReducer;