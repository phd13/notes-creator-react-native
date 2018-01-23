import React, {Component} from 'react';
import {
	StyleSheet,
	Text,
	ScrollView,
	AsyncStorage
} from 'react-native';
import {connect} from 'react-redux';
import {actionTypes} from './src/constants/actionTypes';
import {NotesCard} from './src/components/NotesCard';
import {store} from './src/store/index';
import {addNote, deleteNote, loadNotes} from './src/actions/index';

class App extends Component<{}> {

	handleAdd = () => {

		this.props.dispatch({
			type: actionTypes.ADD_NOTE,
			payload: {
				id: Math.floor(Math.random() * 1000),
				text: 'I\'m the new note, hello!'
			}
		})
	};

	handleDelete = (id) => {

		this.props.dispatch({
			type: actionTypes.DELETE_NOTE,
			payload: id
		})
	};

	componentDidMount() {
		AsyncStorage.getItem('notes', (err, res) => {

			this.props.dispatch({
				type: actionTypes.LOAD_NOTES,
				payload: JSON.parse(res).notesData
			})
		})
	}

	componentWillReceiveProps() {
		AsyncStorage.setItem('notes', JSON.stringify(store.getState()))
	}

	render() {
		return (
			<ScrollView
				style={styles.container}
				contentContainerStyle={{
					justifyContent: 'center',
					alignItems: 'center'
				}}
			>
				<Text>Place for notes!</Text>
				{this.props.notes.map((item, index) => (
					<NotesCard
						key={index}
						onAdd={this.handleAdd}
						onDelete={() => this.handleDelete(item.id)}
						text={item.text}
						id={item.id}
					/>
				))}
			</ScrollView>
		);
	}
}

const mapStateToProps = (state) => ({
	notes: state.notesData
});

export default connect(mapStateToProps)(App);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FFFFFF',
		marginTop: 26,
		paddingHorizontal: 10
	}
});
