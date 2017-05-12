import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { createRouter, StackNavigation, DrawerNavigation, DrawerNavigationItem, } from '@expo/ex-navigation';




// import pages to use in the router
import IndexPage from './index'
import AboutPage from './about'


// set the routes
const Router = createRouter(() => ({
	home: () => IndexPage,
	about: () => AboutPage
}));



// Treat the DrawerNavigationLayout route like any other route -- you may want to set
// it as the intiial route for a top-level StackNavigation

export default class DrawerNavigationLayout extends React.Component {
	static route = {
		navigationBar: {
			visible: false,
		}
	};

	render() {
		return (
			<DrawerNavigation
			id='main'
			initialItem='home'
			drawerWidth={ 300 }
			renderHeader={ this._renderHeader }>

				<DrawerNavigationItem
				id='home'
				selectedStyle={ styles.selectedItemStyle }
				renderTitle={ isSelected => this._renderTitle('Home', isSelected) }>

					<StackNavigation
					id='home'
					initialRoute={ Router.getRoute('home') } />

				</DrawerNavigationItem>

				<DrawerNavigationItem
				id='about'
				selectedStyle={ styles.selectedItemStyle }
				renderTitle={ isSelected => this._renderTitle('About', isSelected) }>

					<StackNavigation
					id='about'
					initialRoute={ Router.getRoute('about') } />

				</DrawerNavigationItem>

			</DrawerNavigation>
			);
	}

	_renderHeader = () => {
		return (
			<View style={ styles.header }>
				<Text>Pagescsdcsd</Text>
			</View>
			);
	};

	_renderTitle(text: string, isSelected: boolean) {
		return (
			<Text style={ [styles.titleText, isSelected ? styles.selectedTitleText : {}] }>
			{ text }
			</Text>
			);
	}
	;
}

const styles = StyleSheet.create({
	header: {
		height: 20
	},

	selectedItemStyle: {
		backgroundColor: 'blue'
	},

	titleText: {
		fontWeight: 'bold'
	},

	selectedTitleText: {
		color: 'white'
	}
});
