import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import Button from '../../components/Button';

export class NotesCard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			editing: false,
			inputValue: ''
		};
		this._handlePress = this._handlePress.bind(this);
		this._handleBlur = this._handleBlur.bind(this);
	}

	_handlePress() {
		this.setState({editing: true, inputValue: this.props.text}, () => this.input.focus());
	}

	_handleBlur() {
		const { id, editNote } = this.props;
		const text = this.state.inputValue;
		editNote(id, text);
		this.setState({editing: false});
	}

	render() {
		return (
			<View style={styles.container}>
				{this.state.editing ?
					<TextInput
						onChangeText={(inputValue) => this.setState({inputValue})}
						onBlur={this._handleBlur}
						value={this.state.inputValue}
						ref={ref => this.input = ref}
						style={{width: '80%', backgroundColor: '#FFFFFF'}}
					/>
					:
					<Text
						onPress={this._handlePress}
						style={{width: '80%'}}
					>
						{this.props.text}
					</Text>}
				<View style={styles.buttons}>
					<Button text='x' action={this.props.onDelete}/>
					<Button text='+' action={this.props.onAdd}/>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#E5E5E5',
		borderRadius: 6,
		width: '100%',
		height: 50,
		marginVertical: 5,
		flexDirection: 'row',
		padding: 10
	},
	buttons: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'stretch',
		width: '20%'
	}
});
