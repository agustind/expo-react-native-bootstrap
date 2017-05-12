import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { createRouter, StackNavigation, DrawerNavigation, DrawerNavigationItem, } from '@expo/ex-navigation';
import Config from '../config'

// import pages to use in the router
import NewsPage from './news'
import AboutPage from './about'


// set the routes
const Router = createRouter(() => ({
	news: () => NewsPage,
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
			initialItem='news'
			drawerWidth={ 300 }
			drawerStyle={ styles.drawerStyle }
			renderHeader={ this._renderHeader }>

				<DrawerNavigationItem
				id='news'
				selectedStyle={ styles.selectedItemStyle }
				renderTitle={ isSelected => this._renderTitle('News', isSelected) }>

					<StackNavigation
					id='home'
					initialRoute={ Router.getRoute('news') } />

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
				 <Image
				 	style={{width: 300, height: 100}}
          			source={require('../assets/icons/drawer-header.png')}
        			/>
			</View>
			);
	}

	_renderTitle(text: string, isSelected: boolean) {
		return (
			<Text style={ [styles.titleText, isSelected ? styles.selectedTitleText : {}] }>
				{ text }
			</Text>
			);
	}
	
}

const styles = StyleSheet.create({
	header: {
		marginTop: 50,
		height: 100,
		marginBottom: 20
	},

	drawerStyle: {
		backgroundColor: Config.COLOR_DRAWER_BG
	},

	selectedItemStyle: {
		backgroundColor: Config.COLOR_BRANDING
	},

	titleText: {
		color: Config.COLOR_DRAWER_LINK,
		fontWeight: 'bold'
	},

	selectedTitleText: {
		color: 'white'
	}
});
