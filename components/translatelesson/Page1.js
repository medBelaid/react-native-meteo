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

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.onPressGoHome(user)
      } else {
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

  onPressGoHome = (user) => {
    firebase.auth().signInAnonymously()
    .then((data) => {
      console.log('login successfuly', data);
      Alert.alert('login successfuly');
      this.setState({isAuthenticated: true});
      const resetAction = NavigationActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({ routeName: 'Page2', params: user }),
        ],
      })
      this.props.navigation.dispatch(resetAction)
    })
    .catch((error) => {
      console.log('error auth: ',error);
      Alert.alert('error auth');
    });
  }

  async logInFacebook() {
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('134464790675685', {
        permissions: ['public_profile'],
      });
    if (type === 'success') {
      const credential = firebase.auth.FacebookAuthProvider.credential(token);
      firebase.auth().signInWithCredential(credential)
      .catch((error) => {console.log(error);});
      // Get the user's name using Facebook's Graph API
      const response = await fetch(
        `https://graph.facebook.com/me?access_token=${token}`);
      Alert.alert(
        'Logged in!',
        `Hi ${(await response.json()).name}!`,
      );
    }
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
          <View style={{margin: 20}}>
            <Button
               onPress={this.logInFacebook}
               title="Login With Facebook"
               color="#494299"
             />
          </View>
          <View style={{margin: 20}}>
            <Button
               onPress={this.onRegister}
               title="Register"
               color="#841584"
             />
          </View>
        </View>
      </View>
    );
  }
}
