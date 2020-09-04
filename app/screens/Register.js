import React, { useState, useContext } from "react";
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ImageBackground,
  StyleSheet
} from "react-native";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import colors from "../config/Colors";

import { AuthContext } from "../navigation/AuthProvider";

export default function Register({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { register } = useContext(AuthContext);

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
        <KeyboardAwareScrollView
          style={{ flex: 1, width: "100%" }}
          keyboardShouldPersistTaps="always"
        >
          <View style={styles.form}>
            <View style={styles.textcontainer}>
              <Text style={styles.text}>Register</Text>
              <Text style={styles.subtitle}>Create an account!</Text>
            </View>

            <TextInput
              style={styles.input}
              placeholder="E-mail"
              placeholderTextColor="#aaaaaa"
              onChangeText={text => setEmail(text)}
              value={email}
              underlineColorAndroid="transparent"
              autoCapitalize="none"
            />
            <TextInput
              style={styles.input}
              placeholderTextColor="#aaaaaa"
              secureTextEntry
              placeholder="Password"
              onChangeText={text => setPassword(text)}
              value={password}
              underlineColorAndroid="transparent"
              autoCapitalize="none"
            />
            <TouchableOpacity
              style={styles.button}
              onPress={() => register(email, password)}
            >
              <Text style={styles.buttonTitle}> Register </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Login")}
              style={styles.footerView}
            >
              <Text style={styles.footerText}>
                Already have an account?
                <Text style={styles.footerLink}> Login </Text>
              </Text>
            </TouchableOpacity>

            <View style={styles.googleButton}>
              <Text style={styles.or}> Or </Text>
              <Text style={styles.googleText}>Login with Google</Text>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </View>
    </ImageBackground>
  );
}

styles = StyleSheet.create({
  container: {
    height: "60%",
    borderRadius: 50,
    width: "100%",
    flexDirection: "column"
  },

  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  form: {
    backgroundColor: "#fff",
    padding: 40,
    borderRadius: 50,
    width: "100%",
    height: 600,

    flexDirection: "column",
    justifyContent: "flex-end"
  },
  text: {
    color: colors.primary,
    fontSize: 37,
    fontWeight: "bold",
    paddingTop: 16,
    alignItems: "center",
    fontFamily: "Futura"
  },
  subtitle: {
    color: colors.secondary,
    fontSize: 27,
    fontWeight: "bold",
    alignItems: "center",
    fontFamily: "Futura",
    top: 0
  },
  textcontainer: {
    top: -20
  },

  title: {
    fontSize: 35,
    fontWeight: "bold",
    color: colors.white,
    marginTop: 10,
    fontFamily: "Futura"
  },
  logo: {
    flex: 1,
    height: 120,
    width: 120,
    margin: 30,
    top: 40,
    bottom: 20
  },
  input: {
    height: 48,
    borderRadius: 15,
    overflow: "hidden",
    backgroundColor: "white",
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 16,
    borderBottomColor: "black",
    shadowColor: "#fff",
    color: colors.primary,
    shadowOpacity: 0.4,
    shadowOffset: { height: 10, width: 0 },
    shadowRadius: 20,
    width: "100%",
    borderBottomColor: "#DADDD8",
    borderBottomWidth: 1
  },
  button: {
    backgroundColor: colors.primary,
    marginTop: 30,
    height: 48,
    borderRadius: 14,
    alignItems: "center",
    width: "100%",
    justifyContent: "center"
  },
  buttonTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold"
  },
  footerView: {
    flex: 1,
    alignItems: "center",
    marginTop: 40
  },
  footerText: {
    fontSize: 16,
    color: colors.primary
  },
  or: {
    top: -40,
    marginBottom: 20,
    fontSize: 14,
    color: colors.primary
  },
  footerLink: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 16
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
  googleButton: {
    flex: 1,
    alignItems: "center"
  },
  googleText: {
    top: -40,
    fontSize: 15,
    fontWeight: "bold"
  }
});
