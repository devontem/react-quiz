// initialize state
const ResultsReducer = (state = {}, action) => {
	switch (action.type){
		case 'VALIDATE_QUIZ':
			console.log('logged state', state);
			return state;
		default:
			return state;
	}
}

export default ResultsReducer;