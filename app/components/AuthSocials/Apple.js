import React from "react";
import { Text, Image, TouchableOpacity } from "react-native";

import styles from "../../config/styles"

async function onButtonPress() {
  alert("No disponible al momento");
}

function Welcome() {
  return (
    <TouchableOpacity onPress={() => onButtonPress()} style={[styles.SocialButton, styles.SocialApple]}>
      <Image
        style={styles.SocialIcon}
        source={require("../../assets/apple.png")}
      ></Image>
      <Text style={[styles.SocialText]}>Login with Apple</Text>
    </TouchableOpacity>
  );
}
export default Welcome;
