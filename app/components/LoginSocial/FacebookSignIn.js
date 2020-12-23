import React from "react";
import { StyleSheet, Text, Image, TouchableOpacity } from "react-native";

async function onButtonPress() {
  // Get the users ID token
  alert("No disponible al momento");
}

function FacebookSignIn() {
  return (
    <TouchableOpacity onPress={() => onButtonPress()} style={[styles.button]}>
      <Image
        style={styles.google}
        source={require("../../assets/facebook.png")}
      ></Image>
      <Text style={[styles.text]}>Login with Facebook</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    top: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    width: 350,
    height: 50,
    borderRadius: 14,
    paddingVertical: 10,
    paddingHorizontal: 12,
    backgroundColor: "#3b5998",
    shadowColor: "#3b5998",
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

export default FacebookSignIn;
