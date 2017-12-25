import React from 'react';
import { StyleSheet, Text, Image, TextInput, View, Button, ToastAndroid } from 'react-native';
import { StackNavigator } from 'react-navigation';
import style from '../style';
import List from './List';

class Search extends React.Component {

  static navigationOptions = {
    title: 'Rechercher une ville',
    tabBarIcon: () => {
      return <Image source={require("../imgs/search.png")} style={{width: 28, height:28}} />
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      text: 'Useless Placeholder',
      city: 'Sfax',
    };
  }

  onPressLearnMore = () => {
    console.log('ok');
    ToastAndroid.showWithGravityAndOffset(
      this.state.text,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50
    );
  }

  submit = () => {
    this.props.navigation.navigate('Result', {city: this.state.city});
  }

  render() {
    let pic = {
      uri: 'https://scontent-cdg2-1.xx.fbcdn.net/v/t34.0-12/25674030_10212040458580804_2087637073_n.png?oh=24a00d4ca540dc71d62961cfc7888d24&oe=5A420A1B'
    };
    return (
      <View style={style.container}>
        <Button
          onPress={this.submit}
          title="Rechercher"
          color={style.red}
          accessibilityLabel="Learn more about this purple button"
        />
        <TextInput
          style={{padding: 5}}
          onChangeText={(city) => this.setState({city})}
          value={this.state.city}
        />
        <TextInput
          style={{padding: 5}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <Image source={pic} style={{width: 300, height: 110, marginVertical: 20}}/>
        <Text>Changes you make will automatically reload.</Text>
        <Button
          onPress={this.onPressLearnMore}
          title="Show Toast"
          color={style.red}
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}

const navigationOptions = {
  headerStyle: style.header,
  headerTitleStyle: style.headerTitle
}

export default StackNavigator({
  Search: {screen: Search, navigationOptions},
  Result: {screen: List, navigationOptions},
});
