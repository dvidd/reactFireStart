import React from "react";
import { Text, Image, TouchableOpacity } from "react-native";

import styles from "../../config/styles"

async function onButtonPress() {
  // Get the users ID token
  alert("No disponible al momento");
}

function FacebookSignIn() {
  return (
    
    <TouchableOpacity onPress={() => onButtonPress()} style={[styles.SocialButton, styles.SocialFacebook]}>
      <Image
        style={styles.SocialIcon}
        source={require("../../assets/facebook.png")}
      ></Image>
      <Text style={[styles.SocialText]}>Login with Facebook</Text>
    </TouchableOpacity>
  );
}


export default FacebookSignIn;
