import React, { Component } from "react";
import { View } from "react-native";
import GoogleSignIn from "./GoogleSignIn";
import AppleSignIn from "./AppleSignIn";

class LoginSocial extends Component {
  render() {
    return (
      <View style={{ top: 50 }}>
        <GoogleSignIn />
        <AppleSignIn />
      </View>
    );
  }
}
export default LoginSocial;
