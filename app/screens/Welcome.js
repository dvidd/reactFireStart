import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity
} from "react-native";

import variables from "../config/Variables";
import LoginSocial from "../components/LoginSocial/LoginSocial";

function Welcome({ navigation }) {
  return (
    <ImageBackground
      source={{
        uri:
          "https://images.unsplash.com/photo-1545733099-152483684cb5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
      }}
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/logo.png")}
        ></Image>
        <Text style={styles.title}>React Fire Start</Text>
      </View>

      <View style={styles.container}>
        <LoginSocial />
        <TouchableOpacity
          onPress={() => navigation.navigate("Register")}
          style={[styles.buttonRegister]}
        >
          <Text style={[styles.textRegister]}>Login with email</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: 230,
    borderRadius: 50,
    width: "100%",
    flexDirection: "column"
  },
  logo: {
    width: 140,
    height: 140
  },
  logoContainer: {
    position: "absolute",
    top: 100,
    alignItems: "center"
  },
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  title: {
    fontSize: 40,
    textAlign: "center",
    fontWeight: "bold",
    color: variables.white,
    marginTop: 10,
    fontFamily: variables.font
  },
  titleText: {
    top: 30,
    fontSize: 25,

    fontWeight: "bold",
    color: variables.dark
  },

  buttonRegister: {
    display: "flex",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    elevation: 8,
    width: 350,
    height: 50,
    top: 60,
    borderRadius: 14,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderColor: variables.white,
    borderWidth: 2,
    shadowColor: variables.white,
    color: variables.white,
    shadowOpacity: 0.4,
    shadowOffset: { height: 10, width: 0 },
    shadowRadius: 20
  },

  textRegister: {
    fontSize: 16,
    textTransform: "uppercase",
    color: variables.white
  }
});

export default Welcome;
