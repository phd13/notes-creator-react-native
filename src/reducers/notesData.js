// import {initialState} from '../state/index'
import {actionTypes} from '../constants/actionTypes';
const initialState = [{id: 0, text: 'Hello, I\'m a card!'}];

export const notesData = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.ADD_NOTE:
			return [...state, action.payload];
		case actionTypes.DELETE_NOTE:
			const notes = state.notesData.filter((item) => item.id === action.payload);
			return [...state, notes];
		default:
			return state
	}
};
