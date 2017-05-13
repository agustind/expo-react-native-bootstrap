import Expo from 'expo'
import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { SideMenu, List, ListItem, SearchBar} from 'react-native-elements'
import { ScrollView, ListView, Screen, Icon, Tile, Card, Subtitle, Caption, Image, GridRow, Divider, Row, Heading, Title, NavigationBar } from '@shoutem/ui'
import Config from '../config'

export default class IndexPage extends React.Component{

	constructor(props) {
        super(props);
        this.renderRow = this.renderRow.bind(this);
        this.state = {
            contentLoaded: false,
            content: [],
        }
    }

    // set navigation parameters
    static route = {
        navigationBar: {
            backgroundColor: Config.COLOR_BRANDING,
            tintColor: Config.COLOR_TINT_NAVIGATION_BAR,
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
                contentLoaded: true,
                content: data.data
            });
            console.log(data.data)
        });
        
    }

    // renders one row of two items
	renderRow(rowData, sectionId, index) {

        // rowData contains grouped data for one row, 
        // so we need to remap it into cells and pass to GridRow
        if (index === '0') {
            return (
                <TouchableOpacity key={index}>
                    <Image
                        styleName="large"
                        source={{ uri: rowData[0].image }}>
                        <Tile>
                            <Title styleName="md-gutter-bottom">{rowData[0].name}</Title>
                            <Subtitle styleName="sm-gutter-horizontal">cdssdds</Subtitle>
                        </Tile>
                    </Image>
                    <Divider styleName="line" />
                </TouchableOpacity>
            );
        }


        const cellViews = rowData.map((item, id) => {
            return (
                <TouchableOpacity key={id} styleName="flexible">
                      <Card styleName="flexible">
                            <Image
                              styleName="medium-wide"
                              source={{ uri: item.image  }}
                            />
                            <View style={styles.cell}>
                                <Subtitle numberOfLines={3}>{item.name}</Subtitle>
                                <View styleName="horizontal">
                                    <Caption styleName="collapsible" numberOfLines={2}>cdscds</Caption>
                                </View>
                            </View>
                      </Card>
                </TouchableOpacity>
            );
        })

		return (
            <GridRow columns={2}>
                {cellViews}
            </GridRow>
     	)
	}


    render() {
        if(!this.state.contentLoaded){
            return <Expo.AppLoading />;
        }

        // Group the content into rows with 2 columns, except for the
        // first article. The first article is treated as a featured article
        let isFirstArticle = true;
        const groupedData = GridRow.groupByRows(this.state.content, 2, () => {
            if (isFirstArticle) {
                isFirstArticle = false;
                return 2;
            }
            return 1;
        });

        return (
            <Screen>
                <ListView
                    data={groupedData}
                    renderRow={this.renderRow}
                />
            </Screen>
        );
    }

}


const styles = StyleSheet.create({
    cell: {
        padding: 10
    }
});