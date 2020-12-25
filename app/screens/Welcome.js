import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView
} from "react-native";

import variables from "../config/Variables";
import LoginSocial from "../components/LoginSocial/LoginSocial";

function Welcome({ navigation }) {
  return (
    <View style={styles.background}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/logo.png")}
        ></Image>
        <Text style={styles.title}>{variables.name}</Text>
        <Text style={styles.subtitle}>{variables.subtitle}</Text>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: 260,
    borderRadius: 50,
    width: "100%",
    flexDirection: "column"
  },
  logo: {
    width: 300,
    height: 336.95
  },
  logoContainer: {
    position: "absolute",
    top: 130,
    alignItems: "center"
  },
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#ffff"
  },
  title: {
    fontSize: 40,
    textAlign: "center",
    fontWeight: "bold",
    color: variables.dark,
    marginTop: 10,
    fontFamily: variables.font
  },
  subtitle: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    color: variables.secondary,
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
    borderColor: variables.dark,
    borderWidth: 2,
    shadowColor: variables.dark,
    color: variables.white,
    shadowOpacity: 0.4,
    shadowOffset: { height: 10, width: 0 },
    shadowRadius: 20
  },

  textRegister: {
    fontSize: 16,
    textTransform: "uppercase",
    color: variables.dark
  }
});

export default Welcome;
