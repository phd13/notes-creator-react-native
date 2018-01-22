import React from 'react';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import App from './App';
import {store} from './src/store';

const Root = () => {
	return (
		<Provider store={store}>
			<App/>
		</Provider>
	)
};

AppRegistry.registerComponent('NotesCreator', () => Root);
