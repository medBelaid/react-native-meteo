import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Greeting from './components/Greeting';
import Search from './components/Search';

const Tabs = TabNavigator({
  Search: {screen: Search},
  Greeting: {screen: Greeting}
},{
  tabBarPosition: 'bottom',
  tabBarOptions: {
    showIcon: true,
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
      <View style={styles.container}>
        <StatusBar hidden={true}/>
        <Tabs/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
