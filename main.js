// import libraries
import React from 'react'
import { StyleSheet } from 'react-native'
import Expo from 'expo'
import Config from './config'

import { createRouter, NavigationProvider, StackNavigation } from '@expo/ex-navigation';

// import drawer
import DrawerNavigationLayout from './pages/drawer'

// set the route to the drawer
const Router = createRouter(() => ({
  	drawer: () => DrawerNavigationLayout
}));


// App component
class App extends React.Component {

	  // set initial state
	  constructor(props) {
	    super(props);
	    this.state = {
	      fontsAreLoaded: false
	    }
	  }

	  // load fonts and get json data
	  // this is called before the component gets mounted
	  // check the react lifecycle to understand more
	  async componentWillMount() {
		    await Expo.Font.loadAsync({
			      'Rubik-Regular': require('./node_modules/@shoutem/ui/fonts/Rubik-Regular.ttf'),
			      'Roboto': require('native-base/Fonts/Roboto.ttf'),
			      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
			      'rubicon-icon-font': require('./node_modules/@shoutem/ui/fonts/rubicon-icon-font.ttf')
		    });
		    
		    this.setState({
		      	fontsAreLoaded: true
		    });
	  }

	  // render main view
	  render() {
		    // if not fonts loaded yet, show the spinner
		    if (!this.state.fontsAreLoaded) {
		      return <Expo.AppLoading />;
		    }

		    // otherwise render the main structure
		    return (
		      <NavigationProvider router={ Router }>
		        <StackNavigation initialRoute="drawer" />
		      </NavigationProvider>
		      );
	  }
}

Expo.registerRootComponent(App);
