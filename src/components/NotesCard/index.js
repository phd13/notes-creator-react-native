import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export const NotesCard = (props) => {
	return (
		<View style={styles.container}>
			<Text style={{width: '80%'}}>{props.text} {props.id}</Text>
			<View style={styles.buttons}>
				<TouchableOpacity
					activeOpacity={0.8}
					onPress={props.onDelete}
					style={{
					borderWidth: 1, width: '50%', justifyContent: 'center',
					alignItems: 'center'
				}}>
					<Text>X</Text>
				</TouchableOpacity>
				<TouchableOpacity
					activeOpacity={0.8}
					onPress={props.onAdd}
					style={{
					borderWidth: 1, width: '50%', justifyContent: 'center',
					alignItems: 'center'
				}}>
					<Text>+</Text>
				</TouchableOpacity>
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
