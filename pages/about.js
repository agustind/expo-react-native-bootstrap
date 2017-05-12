import Expo from 'expo'
import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

export default class AboutPage extends React.Component{

	constructor(props) {
		super(props);
		// set initial state here
	}

	// set navigation parameters
    static route = {
        navigationBar: {
            title: 'About',
        }
    }

	render() {
		return (
			<Text>This is the about page content</Text>
		);	
	}

}