import Expo from 'expo'
import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { SideMenu, List, ListItem, SearchBar} from 'react-native-elements'
import { ScrollView, ListView, Screen, Icon, Tile, Card, Subtitle, Image, Divider, Row, Heading, Title, NavigationBar } from '@shoutem/ui'
import Config from '../config'

export default class IndexPage extends React.Component{

	constructor(props) {
        super(props);
        this.state = {
            content: [],
        }
    }

    // set navigation parameters
    static route = {
        navigationBar: {
            title: 'News',
        }
    }


    // opens another page
    _handlePress = () => {
        this.props.navigator.push('about');
    }


    // load fonts and get json data
    async componentWillMount(){

        var this_component = this;

        // gets data from the server
        fetch(Config.API_URL + '?page=1')
        .then(function(response){
            return response.json()
        }).then(function(data){
            this_component.setState({
                content: data.data
            });
            console.log(data.data)
        });
    }

	// renders a list row
    renderRow(item, scope){
        return (
            <Card key={item.key}>
                <Image
                    styleName="medium-wide"
                    source={{uri: '//shoutem.github.io/img/ui-toolkit/examples/image-10.png'}}
                />
                <View styleName="content">
                  <Subtitle>{item.name}</Subtitle>
                </View>
            </Card>
        )
    }

	render() {
		return (
			<View style={styles.container}>
                
            	<ListView
                	data={this.state.content}
                	renderRow={ (item) => this.renderRow(item, this) } 
            	/>
                
        	</View>
     	)
	}

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});