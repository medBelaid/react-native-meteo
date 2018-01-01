import React from 'react';
import { Text, Image, Button, StyleSheet, View } from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import style from '../../style';


export default class Page2 extends React.Component {
  static navigationOptions = {
    tabBarIcon: () => {
      return <Image source={require("../../imgs/translate.png")} style={{width: 25, height:25}} />
    }
  }
  render() {
    return (
      <View style={style.container}>
        <Text>Page 2</Text>
      </View>
    );
  }
}
