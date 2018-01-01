import React from 'react';
import { Text, StyleSheet, View, ListView, ActivityIndicator, Image } from 'react-native';
import style from './style';
import axios from 'axios';
import { connect } from 'react-redux';

class userList extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      tabBarIcon: () => {
        return <Image source={require("./imgs/user.png")} style={{width: 28, height:28}} />
      }
    }
  }

  constructor(props) {
    super(props);
    console.log('props: ',props);
  }

  render() {
    if(!this.props.superusers){
      return (
        <View style={style.container}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
    )
  } else {
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      return (
        <View>
          <ListView
            dataSource={ds.cloneWithRows(this.props.superusers)}
            renderRow={(row) => <Text>{row.first_name}</Text>}
          />
        </View>
      );
    }
  }
}

const mapStateToProps = state => {
  return { superusers: state.superusers }
}

export default connect(mapStateToProps)(userList)
