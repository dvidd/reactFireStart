import React, { useState, useContext } from "react";
import { Text, TextInput, TouchableOpacity, View, Icon } from "react-native";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { AuthContext } from "../navigation/AuthProvider";

import LoginSocial from "../components/LoginSocial/LoginSocial/";
import styles from "../config/Styles";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useContext(AuthContext);

  return (
    <KeyboardAwareScrollView
      style={styles.login}
      keyboardShouldPersistTaps="always"
    >
      <View style={styles.form}>
        <View style={styles.textcontainer}>
          <Text style={styles.title}>Login</Text>
          <Text style={styles.subtitle}>Welcome back!</Text>
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
          onPress={() => login(email, password)}
        >
          <Text style={styles.buttonTitle}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Register")}
          style={styles.footerView}
        >
          <Text style={styles.footerText}>
            ¿Don't have an account?
            <Text style={styles.footerLink}> Sign In</Text>
          </Text>
        </TouchableOpacity>

        <LoginSocial style={styles.minpadding} />
      </View>
    </KeyboardAwareScrollView>
  );
}
