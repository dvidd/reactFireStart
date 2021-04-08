import React, { useState, useContext } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View , ScrollView} from "react-native";


import { AuthContext } from "../navigation/AuthProvider";


import Socials from "../components/AuthSocials/Socials";


import styles from "../config/styles"


function Login({ navigation }) {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useContext(AuthContext);

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1, backgroundColor: "#fff"}}>
      <View style={style.main}>
      <View style={style.logoContainer}>
        <View style={style.textsLogo}>
        <Text style={styles.title}>Login</Text>
        <Text style={styles.subtitle}>Log in your account</Text>
        </View>
        <View style={style.LogoBox}>
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
          <Text style={styles.buttonTitle}> Log in </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Register")}
          style={styles.footerView}
        >
          <Text style={styles.footerText}>
            ¿Don't have an account?
            <Text style={styles.footerLink}> Register </Text>
          </Text>
        </TouchableOpacity>

        </View>
      </View>

      <View style={style.buttonsContainer}>
      <Text style={styles.subtitle}>Login with </Text>

      <Socials/>
     

      <TouchableOpacity onPress={() => navigation.navigate("Register")} style={[styles.SocialButton, styles.SocialEmail]}>
        <Text style={[styles.SocialText, styles.textBlack]}>Login with email</Text>
      </TouchableOpacity>


      </View>
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  main: {
    flex:1,
    backgroundColor: "#fff",
  },
  logoContainer: {
    flex: 3,
    alignItems: "center",

  },
  textsLogo: {
    flex: 5,
    justifyContent: "center",
    marginTop: 60,
    width: "85%"
  },
  LogoBox: {
    flex: 2,
    width: "85%"
  },
  logo: {
    width: 250,
    height: 250
  },

  buttonsContainer: {
    flex: 2,
    alignItems: "center",
  },
 
});

export default Login;