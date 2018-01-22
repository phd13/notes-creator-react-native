import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Button from '../../components/Button';

export const NotesCard = (props) => {
	return (
		<View style={styles.container}>
			<Text style={{width: '80%'}}>{props.text} {props.id}</Text>
			<View style={styles.buttons}>
				<Button text='x' action={props.handleDelete}/>
				<Button text='+' action={props.handleAdd}/>
			</View>
		</View>
	)
};

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
