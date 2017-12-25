import React from 'react';
import moment from 'moment';
import 'moment/locale/fr';
import { Text, StyleSheet, View, Image } from 'react-native';
import globalStyle from '../style';
import FadeInView from './animation/fadeInView'

moment.locale('fr');

export default class weatherRow extends React.Component {

  day = (format) => {
    let day = moment(this.props.day.dt * 1000).format(format)
    return (
      <Text>{ day.toUpperCase() }</Text>
    )
  }

  icon () {
    const type = this.props.day.weather[0].main.toLowerCase()
    let image
    switch (type) {
      case 'clouds':
        image = require('../imgs/clouds.png')
        break;
      case 'rain':
        image = require('../imgs/rain.png')
        break;
      default:
        image = require('../imgs/sun.png')
    }
    return <Image source={image} style={{width: 50, height:50}} />
  }

  render() {
    return (
      <FadeInView>
        <View style={style.view}>
          <Text style={style.bold}>{this.day('ddd')} {this.day('DD/MM')}</Text>
          {this.icon()}
          <Text style={style.temp}>{(this.props.day.temp.day / 10).toFixed(1)} °C</Text>
        </View>
      </FadeInView>
    );
  }
}

const style = StyleSheet.create({
  view: {
    backgroundColor: globalStyle.pink,
    borderBottomWidth: 1,
    borderBottomColor: globalStyle.red,
    paddingHorizontal: 20,
    paddingVertical: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  temp: {
    color: '#E797BD',
    fontSize: 22
  },
  bold: {
    fontWeight: 'bold'
  }
})
