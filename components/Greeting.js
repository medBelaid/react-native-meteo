import React from 'react';
import moment from 'moment';
import 'moment/locale/fr';
import { Text, Image, Button, StyleSheet, View } from 'react-native';
import style from '../style';

moment.locale('fr');

export default class Greeting extends React.Component {
  static navigationOptions = {
    tabBarIcon: () => {
      return <Image source={require("../imgs/gree.png")} style={{width: 25, height:25}} />
    }
  }
  onPressGoHome = () => {
    this.props.navigation.navigate('Search');
  }
  render() {
    const date = moment().format("dddd DD-MM-YYYY");
    let janvier = moment('2018-01-26').diff(moment(), 'days');

    return (
      <View style={style.container}>
        <Text>Hello Mohamed Belaid!</Text>
        <Text style={{ fontSize: 20 }}>{date}</Text>
        <Text style={{ fontSize: 20 }}>il reste {janvier} jours et je serai marié</Text>
        <Button
          onPress={this.onPressGoHome}
          title="Go Home"
          color={style.red}
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}
