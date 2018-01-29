import {initialState} from '../state/index';
import {actionTypes} from '../constants/actionTypes';

export default (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.ADD_NOTE:
			return [...state, action.payload];
		case actionTypes.DELETE_NOTE: {
			const notes = state.filter((item) => item.id !== action.payload);
			return [...notes];
		}
		case actionTypes.LOAD_NOTES:
			return action.payload;
		case actionTypes.EDIT_NOTE: {
			const notes = state.map((item) => {
				if (item.id === action.payload.id) {
					item.text = action.payload.text
				}
				return item
			});
			return [...notes];
		}
		default:
			return state
	}
};
