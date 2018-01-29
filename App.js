import React, {Component} from 'react';
import {
	StyleSheet,
	Text,
	ScrollView,
	AsyncStorage,
	SafeAreaView,
	Button
} from 'react-native';
import {connect} from 'react-redux';
import {NotesCard} from './src/components/NotesCard';
import {store} from './src/store/index';
import {addNote, deleteNote, loadNotes, editNote} from './src/actions/index';

class App extends Component<{}> {

	handleAdd = () => {
		this.props.addNote()
	};

	handleDelete = (id) => {
		this.props.deleteNote(id)
	};

	componentDidMount() {
		AsyncStorage.getItem('notes', (err, res) => {
			this.props.loadNotes(res);
		});
	}

	componentWillReceiveProps() {
		AsyncStorage.setItem('notes', JSON.stringify(store.getState()))
	}

	render() {
		console.log(this.props.notes);
		return (
			<SafeAreaView style={styles.container}>
				<ScrollView
					contentContainerStyle={{
						justifyContent: 'center',
						alignItems: 'center',
						paddingHorizontal: 10
					}}
				>
					<Text>Place for notes!</Text>
					<Button title="ADD NOTE" onPress={this.handleAdd}/>
					{!this.props.notes.length ?
						<Text>No notes available!</Text> :
						this.props.notes.map((item, index) => (
							<NotesCard
								key={index}
								onAdd={this.handleAdd}
								onDelete={() => this.handleDelete(item.id)}
								text={item.text}
								id={item.id}
								editNote={this.props.editNote}
							/>
						))}
				</ScrollView>
			</SafeAreaView>
		);
	}
}

const mapStateToProps = (state) => ({
	notes: state.notesData
});

const mapDispatchToProps = {
	addNote, deleteNote, loadNotes, editNote
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FFFFFF',
		marginTop: 26
	}
});
