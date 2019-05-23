import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { TabNavigator } from 'react-navigation';
import * as firebase from 'firebase';

import Reducers from './reducers';
import Greeting from './components/Greeting';
import Search from './components/Search';
import Geo from './components/Geo';
import Home from './components/translatelesson/Home';
import userList from './userList';

const firebaseConfig = {
  apiKey: "AIzaSyBZzFM0h4HbfZ92kGv0RBWTTDbinqPbW_0",
  authDomain: "meteo-45163.firebaseapp.com",
  databaseURL: "https://meteo-45163.firebaseio.com",
  storageBucket: "meteo-45163.appspot.com" };

firebase.initializeApp(firebaseConfig);



const Tabs = TabNavigator({
  Geo: {screen: Geo},
  Search: {screen: Search},
  Greeting: {screen: Greeting},
  Home: {screen: Home},
  userList: {screen: userList}
},{
  tabBarPosition: 'bottom',
  tabBarOptions: {
    showIcon: true,
    showLabel: false,
    indicatorStyle: {
      height: 3,
      backgroundColor: "#fff",
    },
    style: {
      backgroundColor: "#a2273c",
      borderTopWidth: 2,
      borderColor: "#3f101c",
    }
  }
})

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(Reducers)}>
        <View style={styles.container}>
          <StatusBar hidden={true}/>
          <Tabs/>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
