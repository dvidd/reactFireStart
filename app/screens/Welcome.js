import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity
} from "react-native";

import colors from "../config/Colors";

function Welcome({ navigation }) {
  return (
    <ImageBackground
      style={styles.background}
      source={{
        uri:
          "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80"
      }}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/logo.png")}
        ></Image>
        <Text style={styles.title}>React Fire Start</Text>
      </View>

      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          style={[styles.button]}
        >
          <Text style={[styles.text]}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Register")}
          style={[styles.buttonRegister]}
        >
          <Text style={[styles.textRegister]}>Register</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: 250,
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
    fontSize: 35,
    textAlign: "center",
    fontWeight: "bold",
    color: colors.white,
    marginTop: 10,
    fontFamily: "Futura"
  },
  titleText: {
    top: 30,
    fontSize: 25,

    fontWeight: "bold",
    color: colors.primary
  },
  button: {
    display: "flex",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    elevation: 8,
    width: 350,
    height: 50,
    top: 70,
    borderRadius: 14,
    paddingVertical: 10,
    paddingHorizontal: 12,
    backgroundColor: "#fff",
    shadowColor: "#fff",
    shadowOpacity: 0.4,
    shadowOffset: { height: 10, width: 0 },
    shadowRadius: 20
  },

  buttonRegister: {
    display: "flex",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    elevation: 8,
    width: 350,
    height: 50,
    top: 80,
    borderRadius: 14,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderColor: "#fff",
    borderWidth: 2,
    shadowColor: "#fff",
    color: "#fff",
    shadowOpacity: 0.4,
    shadowOffset: { height: 10, width: 0 },
    shadowRadius: 20
  },

  text: {
    fontSize: 16,
    textTransform: "uppercase",
    color: "#000"
  },
  textRegister: {
    fontSize: 16,
    textTransform: "uppercase",
    color: "#fff"
  }
});

export default Welcome;
