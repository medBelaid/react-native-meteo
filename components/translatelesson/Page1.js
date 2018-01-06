import React from 'react';
import { Text, Image, Button, StyleSheet, View, Alert } from 'react-native';
import firebase from 'firebase';
import { NavigationActions } from 'react-navigation';
import { FormLabel, FormInput } from 'react-native-elements'

import style from '../../style';


export default class Page1 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null,
      showSpinner: true,
      isAuthenticated: false,
      email: "malika@mohamed.love",
      password: "070707070789",
    };
  }

  static navigationOptions = {
    tabBarIcon: () => {
      return <Image source={require("../../imgs/translate.png")} style={{width: 25, height:25}} />
    }
  }

  componentDidMount() {

    this.fireBaseListener = firebase.auth().onAuthStateChanged(auth => {
      if (auth) {
        this.firebaseRef = firebase.database().ref('users')
        this.firebaseRef.child(auth.uid).on('value', snap => {
          const user = snap.val()
          if (user != null) {
            Alert.alert('user');
            this.setState({user});
            this.firebaseRef.child(auth.uid).off('value')
            this.onPressGoHome(user)
          }
        })
      } else {
        Alert.alert('error auth');
        this.setState({ showSpinner: false })
      }
    })
  }

  onRegister = () => {
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
    .then((loggedInUser) => {
      this.setState({user: loggedInUser});
      console.log('register successfuly', loggedInUser);
      Alert.alert('register successfuly '+loggedInUser.providerData[0].email );
    })
    .catch((error) => {
      console.log('error signIn', error, typeof error);
      Alert.alert('error: '+error.Error);
    });
  };

  logIn = () => {
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    .then((loggedInUser) => {
      this.setState({user: loggedInUser});
      console.log('login successfuly', loggedInUser);
      Alert.alert('login successfuly '+loggedInUser.providerData[0].email);
    })
    .catch((error) => {
      console.log('error signIn', error);
      Alert.alert('error: '+error.Error);
    });
  };

  onPressGoHome = () => {
    firebase.auth().signInAnonymously()
    .then((data) => {
      console.log('login successfuly', data);
      Alert.alert('login successfuly');
      this.setState({isAuthenticated: true});
      const user = this.state.user;
      const resetAction = NavigationActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({ routeName: 'Page2', params: "hamdoulah" }),
        ],
      })
      this.props.navigation.dispatch(resetAction)
    })
    .catch((error) => {
      console.log('error auth: ',error);
      Alert.alert('error auth');
    });
  }

  render() {
    return (
      <View style={style.container}>
        <View style={style.buttonContainer}>
          <FormLabel>Email</FormLabel>
          <FormInput onChangeText={(email) => this.setState({email})} value={this.state.email} />
          <FormLabel>Password</FormLabel>
          <FormInput onChangeText={(password) => this.setState({password})} value={this.state.password} minLength = {6}/>
          <View style={style.buttonContainer}>
            <Button
               onPress={this.logIn}
               title="Login"
               color="#841584"
             />
          </View>
          <View style={style.buttonContainer}>
            <Button
               onPress={this.onRegister}
               title="Register"
               color="#841584"
             />
          </View>
        </View>
        <Text>une goutte de sueur couler sous votre chemise quatre</Text>
        <View style={style.buttonContainer}>
          <Button
            onPress={this.onPressGoHome}
            title="Go Home"
            color={style.red}
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
      </View>
    );
  }
}
