import React from "react";
import { Text, Image, TouchableOpacity } from "react-native";

import { GoogleSignin } from "@react-native-community/google-signin";
import auth from "@react-native-firebase/auth";

GoogleSignin.configure({
  webClientId:
    "851377400433-mencs393r5gjgqb26hei0vqk9s07q2cp.apps.googleusercontent.com"
});

import styles from "../../config/styles"

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
    <TouchableOpacity onPress={() => onButtonPress()} style={[styles.SocialButton, styles.SocialGoogle]}>
      <Image
        style={styles.SocialIcon}
        source={require("../../assets/googleBold.png")}
      ></Image>
      <Text style={[styles.SocialText]}>Login with google</Text>
    </TouchableOpacity>
  );
}



export default Welcome;
