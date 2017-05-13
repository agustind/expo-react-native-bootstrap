import Expo from 'expo'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { Screen, Card, Image, View, Subtitle, Caption } from '@shoutem/ui'

export default class AboutPage extends React.Component{

	constructor(props) {
		super(props);
		// set initial state here
	}

	// set navigation parameters
    static route = {
       	navigationBar: {
            backgroundColor: Config.COLOR_BRANDING,
            tintColor: Config.COLOR_TINT_NAVIGATION_BAR,
            title: 'About',
        }
    }

	render() {
		return (
			<View>
				
				  <Image
				  styleName="featured"
				  source={{ uri: 'https://pbs.twimg.com/profile_images/2489883385/hwsuppe0ew3vxk4hb6lv_400x400.png'}} />

				  <View styleName="content">
				    <Subtitle>Choosing The Right Boutique Hotel For You</Subtitle>
				    <Caption>21 hours ago</Caption>
				  </View>
			
			</View>
		);	
	}

}