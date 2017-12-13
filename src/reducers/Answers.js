let message,
	answers,
	initialState = { data: [] };

const AnswersReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_ANSWERS':
			return state;
		case 'GET_ANSWERS_PENDING':
			return {...state, pending: true, quiz_submitted: false };
		case 'GET_ANSWERS_FULFILLED':
			answers = (action.payload && action.payload.data) ? action.payload.data : []; 
			return {...state, pending: false, data: answers, quiz_submitted: true };
		case 'GET_ANSWERS_REJECTED':
			message = "There was an error fetching answers";
			message += (action.payload && action.payload.message) ? `: ${action.payload.message}` : "";
			return {...state, pending: false, error: true, message: message, quiz_submitted: false }
		default:
			return state;
	}
}

export default AnswersReducer;