import React from 'react';
import { Text, Image, Button, StyleSheet, View } from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import style from '../../style';
import Page1 from './Page1';
import Page2 from './Page2';

class Home extends React.Component {

  static navigationOptions = {
    tabBarIcon: () => {
      return <Image source={require("../../imgs/translate.png")} style={{width: 25, height:25}} />
    }
  }

  goP1 = () => {
    this.props.navigation.navigate('Page1');
  }
  goP2 = () => {
    this.props.navigation.navigate('Page2');
  }

  render() {
    return (
      <View style={style.container}>
        <Button
          onPress={this.goP1}
          title="Page 1"
          color={style.red}
          accessibilityLabel="Learn more about this purple button"
          style={{marginBottom: 10}}
        />
        <Button
          onPress={this.goP2}
          title="Page 2"
          color={style.red}
          accessibilityLabel="Learn more about this purple button"
        />
    </View>
  )
  }

}

export default StackNavigator({
  Home: {screen: Home},
  Page1: {screen: Page1},
  Page2: {screen: Page2},
});
