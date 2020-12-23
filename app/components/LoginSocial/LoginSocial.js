import React, { Component } from "react";
import { View } from "react-native";
import GoogleSignIn from "./GoogleSignIn";

class LoginSocial extends Component {
  render() {
    return (
      <View style={{ top: 50 }}>
        <GoogleSignIn />
      </View>
    );
  }
}
export default LoginSocial;
