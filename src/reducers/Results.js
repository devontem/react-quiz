var arr,
	initialState = { selection: [] };

// initialize state
const ResultsReducer = (state = initialState, action) => {
	switch (action.type){
		case 'SAVE_SELECTION':
			arr = [...state.selection]; // copy answer selections
			arr[action.question_index] = action.answer_index; // overwrite question_index being saved
			return { selection: arr };
		default:
			return state;
	}
}

export default ResultsReducer;