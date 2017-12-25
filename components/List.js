import React from 'react';
import { Text, StyleSheet, View, ListView, ActivityIndicator, Image } from 'react-native';
import style from '../style';
import axios from 'axios';
import WeatherRow from './WeatherRow';

export default class List extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: `Météo / ${navigation.state.params.city}`,
      tabBarIcon: () => {
        return <Image source={require("../imgs/weather.png")} style={{width: 28, height:28}} />
      }
    }
  }

  constructor(props) {
    super(props);
    console.log('state', this.props.navigation.state);
    this.state = {
      report: null,
      city: this.props.navigation.state.params.city,
    };
    this.fetchWeather();
  }

  fetchWeather () {
    axios.get(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${this.props.navigation.state.params.city}&APPID=d12af9abf09e3fe1042aaa8e1c213445`)
    .then((response) => {
      console.log('result weather: ', response.data);
      this.setState({report: response.data});
    })
  }

  render() {
    if(!this.state.report){
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
            dataSource={ds.cloneWithRows(this.state.report.list)}
            renderRow={(row) => <WeatherRow day={row} />}
          />
        </View>
      );
    }
  }
}
