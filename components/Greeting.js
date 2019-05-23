import React from 'react';
import moment from 'moment';
import 'moment/locale/fr';
import { Text, Image, Button, StyleSheet, View, Picker, AppState, Alert } from 'react-native';

import style from '../style';

moment.locale('fr');

export default class Greeting extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      seconds: 5,
    };
  }

  static navigationOptions = {
    tabBarIcon: () => {
      return <Image source={require("../imgs/gree.png")} style={{width: 25, height:25}} />
    }
  }

  componentDidMount() {
    AppState.addEventListener('change', this.handleAppStateChange);
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this.handleAppStateChange);
  }

  handleAppStateChange = (appState) => {
    if(appState === 'background') {
      console.log('app is in background', this.state.seconds);
    }
  }

  onPressGoHome = () => {
    this.props.navigation.navigate('Search');
  }
  onPressButton() {
    Alert.alert('You tapped the button!')
  }
  render() {
    const date = moment().format("dddd DD-MM-YYYY");
    let numOfMonths = moment('2018-08-25').diff(moment(), 'months');
    let numOfDays = moment('2018-08-25').diff(moment(), 'days');
    const today = moment().format('DD');
    const diffDays = numOfDays - numOfMonths * 30;

    return (
      <View style={style.container}>
        <View style={{marginBottom: 5}}>
          <Text style={{ fontSize: 20 }}>{date}</Text>
          <Text style={{ fontSize: 20 }}>il reste {numOfMonths} mois et {diffDays} jours</Text>
          <Text style={{ fontSize: 20 }}>et je serai marié :)</Text>
          <Text style={{ fontSize: 23, textAlign: 'center' }}>Choose your notification time in seconds</Text>
          <Picker
            style={{ width: 100 }}
            selectedValue={ this.state.seconds }
            onValueChange={ (seconds) => this.setState({ seconds }) }
          >
            <Picker.Item label="5" value={5} />
            <Picker.Item label="10" value={10} />
            <Picker.Item label="15" value={15} />
          </Picker>
        </View>
        <View style={style.buttonContainer}>
          <Button
            onPress={this.onPressGoHome}
            title="Go Home"
            color={style.red}
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
        <View style={style.buttonContainer}>
          <Button
               onPress={this.onPressButton}
               title="Press Me"
               color="#841584"
             />
         </View>
      </View>
    );
  }
}
