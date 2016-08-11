import React, { Component } from 'react';
import {
  StyleSheet, 
  View,
  Image,
  TouchableHighlight,
  ListView,
  Text
} from 'react-native';

var PropertyView = require('./PropertyView');

class SearchResult extends Component {
	constructor(props) {
		super(props);
		var dataSource = new ListView.DataSource (
			{rowHasChanged: (r1, r2) => r1.guid !== r2.guid}
		);
		this.state = {
			dataSource: dataSource.cloneWithRows(this.props.listings)
		};
	}

	renderRow(rowData, sectionID, rowID) {
		var price = rowData.price_formatted.split(' ')[0];
		return (
				<TouchableHighlight underlayColor='#dddddd'
					onPress={() => this.rowPressed(rowData)}>
					<View>
        				<View style={styles.rowContainer}>
        					<Image style={styles.thumb} source={{uri:rowData.img_url}} />
          					<View style={styles.textContainer}>	
          						<Text style={styles.price}>£{price}</Text>
          						<Text style={styles.title} numberOfLines={2}>{rowData.title}</Text>
          					</View>
        				</View>
        			<View style={styles.separator} />
        			</View>
      			</TouchableHighlight>
		);
	}

	render() {
		return (
			<ListView
        		dataSource={this.state.dataSource}
        		renderRow={this.renderRow.bind(this)}/>
		)
	}

	rowPressed(rowData) {
		this.props.navigator.push({
			title:"Property",
			component:PropertyView,
			passProps:{property:rowData},
		});
	}
}

var styles = StyleSheet.create({
  thumb: {
    width: 80,
    height: 80,
    marginRight: 10
  },
  textContainer: {
    flex: 1
  },
  separator: {
    height: 1,
    backgroundColor: '#dddddd'
  },
  price: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#48BBEC'
  },
  title: {
    fontSize: 20,
    color: '#656565'
  },
  rowContainer: {
    flexDirection: 'row',
    padding: 10
  }
});

module.exports = SearchResult;