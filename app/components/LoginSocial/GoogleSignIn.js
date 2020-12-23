import React from "react";
import { StyleSheet, Text, Image, TouchableOpacity } from "react-native";

import { GoogleSignin } from "@react-native-community/google-signin";
import auth from "@react-native-firebase/auth";

GoogleSignin.configure({
  webClientId:
    "1022624461266-6sgqslje0h8vq2fphckmc45rdfmcvegb.apps.googleusercontent.com"
});

async function onButtonPress() {
  // Get the users ID token
  const { idToken } = await GoogleSignin.signIn();

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // Sign-in the user with the credential
  return auth().signInWithCredential(googleCredential);
}

function Welcome() {
  return (
    <TouchableOpacity onPress={() => onButtonPress()} style={[styles.button]}>
      <Image
        style={styles.google}
        source={require("../../assets/googleBold.png")}
      ></Image>
      <Text style={[styles.text]}>Login with Google</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    top: 0,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    width: 350,
    height: 50,
    borderRadius: 14,
    paddingVertical: 10,
    paddingHorizontal: 12,
    backgroundColor: "#4285F4",
    shadowColor: "#4285F4",
    shadowOpacity: 0.4,
    color: "#fff",
    shadowOffset: { height: 10, width: 0 },
    shadowRadius: 20
  },

  google: {
    width: 25,
    height: 25,
    position: "absolute",
    marginLeft: 0,
    left: 30,
    right: -120
  },

  text: {
    fontSize: 16,
    textTransform: "uppercase",
    color: "#fff"
  }
});

export default Welcome;
