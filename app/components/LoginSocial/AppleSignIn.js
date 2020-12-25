import React from "react";
import { StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import auth from "@react-native-firebase/auth";
import { appleAuth } from "@invertase/react-native-apple-authentication";

async function onAppleButtonPress() {
  // Start the sign-in request
  const appleAuthRequestResponse = await appleAuth.performRequest({
    requestedOperation: appleAuth.Operation.LOGIN,
    requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME]
  });

  // Ensure Apple returned a user identityToken
  if (!appleAuthRequestResponse.identityToken) {
    throw "Apple Sign-In failed - no identify token returned";
  }

  // Create a Firebase credential from the response
  const { identityToken, nonce } = appleAuthRequestResponse;
  const appleCredential = auth.AppleAuthProvider.credential(
    identityToken,
    nonce
  );

  // Sign the user in with the credential
  return auth().signInWithCredential(appleCredential);
}

function AppleButtonRender() {
  return (
    <TouchableOpacity
      onPress={() => onAppleButtonPress()}
      style={[styles.button]}
    >
      <Image
        style={styles.google}
        source={require("../../assets/apple.png")}
      ></Image>
      <Text style={[styles.text]}>Login with Apple</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    bottom: 5,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    width: 350,
    height: 50,
    borderRadius: 14,
    paddingVertical: 10,
    paddingHorizontal: 12,
    backgroundColor: "#3F3E3F",
    shadowColor: "#3F3E3F",
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

export default AppleButtonRender;
