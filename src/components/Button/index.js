import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

export const Button = (props) => {
	return (
		<TouchableOpacity
			activeOpacity={0.8}
			onPress={props.action}
			style={styles.button}>
			<Text>{props.text}</Text>
		</TouchableOpacity>
	)
};

const styles = StyleSheet.create({
	button: {
		borderWidth: 1,
		width: '50%',
		justifyContent: 'center',
		alignItems: 'center',
		marginHorizontal: 1
	}
});

export default Button;
