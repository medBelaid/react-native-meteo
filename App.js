import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { TabNavigator } from 'react-navigation';

import Reducers from './reducers';
import Greeting from './components/Greeting';
import Search from './components/Search';
import Geo from './components/Geo';
import Home from './components/translatelesson/Home';
import userList from './userList';

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
