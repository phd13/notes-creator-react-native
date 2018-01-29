import {actionTypes} from '../constants/actionTypes';

export const loadNotes = (res) => (dispatch) => {
	try {
		dispatch({
			type: actionTypes.LOAD_NOTES,
			payload: JSON.parse(res).notesData
		})
	} catch (err) {
		dispatch({
			type: actionTypes.LOAD_NOTES,
			payload: ''
		})
	}
};

export const deleteNote = (id) => (dispatch) => {
	dispatch({
		type: actionTypes.DELETE_NOTE,
		payload: id
	})
};

export const editNote = (id, text) => (dispatch) => {
	dispatch({
		type: actionTypes.EDIT_NOTE,
		payload: {id, text}
	})
};

export const addNote = () => (dispatch) => {
	dispatch({
		type: actionTypes.ADD_NOTE,
		payload: {
			id: Math.floor(Math.random() * 1000),
			text: 'Tap here to edit!'
		}
	})
};