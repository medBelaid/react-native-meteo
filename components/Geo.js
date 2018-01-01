import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MapView from 'react-native-maps'
import { Image, View } from 'react-native';
import style from '../style'

export default class Geo extends Component {

  static navigationOptions = {
    tabBarIcon: () => {
      return <Image source={require("../imgs/geo.png")} style={{width: 20, height:20}} />
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      initialPosition: {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0,
        longitudeDelta: 0
      },
      markerPosition: {
        latitude: 0,
        longitude: 0
      },
    };
  }

  render() {
    const description = 'Dailymotion attire 300 millions' +
    'd’utilisateurs qui regardent 3,5 milliards' +
    'de vidéos sur son player chaque mois, à travers le monde.';
    return (
      <View style={style.container}>
        <MapView
          style={style.map}
          initialRegion={{
            latitude: 48.8820177,
            longitude: 2.2938669,
            latitudeDelta: 0.2,
            longitudeDelta: 0.2
          }}
        >
          <MapView.Marker
            coordinate={{latitude: 48.8820177, longitude: 2.2938669}}
            image={require("../imgs/dailymotion.png")}
            title={'Dailymotion'}
            description={description}
          />
          <MapView.Marker
            coordinate={{latitude: 48.8795757, longitude: 2.2441687}}
            image={require("../imgs/bessand.jpg")}
            title={'Bessand Recrutement'}
            description={'cabinet spécialisé dans l\'embauche en CDI de développeurs web et/ou mobiles. Nous avons de nombreux postes à pourvoir. '}
          />
          <MapView.Marker
            coordinate={{latitude: 48.8827705, longitude: 2.3162018}}
            image={require("../imgs/link.png")}
            title={'Link-value'}
            description={'Que serait l’innovation, sans les individus qui la conçoivent et la vivent ?'}
          />
          <MapView.Marker
            coordinate={{latitude: 48.8824019, longitude: 2.2691062}}
            image={require("../imgs/sunevit.png")}
            title={'Sunevit'}
            description={'Que serait l’innovation, sans les individus qui la conçoivent et la vivent ?'}
          />
          <MapView.Marker
            coordinate={{latitude: 48.915478, longitude: 2.332398}}
            image={require("../imgs/venteprive.png")}
            title={'Vente Privée'}
            description={'VOTRE SHOPPING 24/24H EN TOUTE SÉRÉNITÉ'}
          />
        </MapView>
      </View>
  );
  }
};
