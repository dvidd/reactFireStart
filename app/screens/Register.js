import React, { useState, useContext } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { AuthContext } from "../navigation/AuthProvider";

import styles from "../config/Styles";
import LoginSocial from "../components/LoginSocial/LoginSocial/";

export default function Register({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { register } = useContext(AuthContext);

  return (
    <KeyboardAwareScrollView
      style={styles.login}
      keyboardShouldPersistTaps="always"
    >
      <View style={styles.form}>
        <View style={styles.textcontainer}>
          <Text style={styles.title}>Sign In</Text>
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
          <Text style={styles.buttonTitle}> Sign In </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          style={styles.footerView}
        >
          <Text style={styles.footerText}>
            ¿Already have an account?
            <Text style={styles.footerLink}> Login </Text>
          </Text>
        </TouchableOpacity>
        <LoginSocial />
      </View>
    </KeyboardAwareScrollView>
  );
}
