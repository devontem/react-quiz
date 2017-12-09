var arr;

// initialize state
const ResultsReducer = (state = { selection: [] }, action) => {
	switch (action.type){
		case 'SAVE_SELECTION':
			arr = [...state.selection]; // copy answer selections
			arr[action.question_index] = action.answer_index; // overwrite question_index being saved
			return { selection: arr };
		case 'INCREMENT_USER_SCORE':
			return {...state, score: state.score + 1 }
		default:
			return state;
	}
}

export default ResultsReducer;