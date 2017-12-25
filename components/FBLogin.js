import React, { Component } from 'react';
import PropTypes from 'prop-types';
var { FBLogin, FBLoginManager } = require('react-native-facebook-login');

export default class Login extends Component {
  render() {
    return (
      <FBLogin />
    );
  }
};
