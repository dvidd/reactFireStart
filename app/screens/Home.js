import React, { useContext } from "react";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  View
} from "react-native";

import { AuthContext } from "../navigation/AuthProvider";

import variables from "../config/variables";

function Home() {
  const { user, logout } = useContext(AuthContext);
  // Get user document with an ID of ABC

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>{variables.name}</Text>
      </View>
      <TouchableOpacity onPress={() => logout()}>
        <Text style={styles.logout}>Logout</Text>
        <Text style={styles.small}>{user.uid}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    color: variables.primary,
    fontFamily: variables.font,
    top: 10,
    textAlign: "center",
    fontWeight: "bold"
  },
  small: {
    textAlign: "center",
    fontSize: 15
  },
  container: {
    backgroundColor: "#fff",
    flex: 1,
    textAlign: "center",
    justifyContent: "space-between"
  },
  text: {
    fontSize: 26
  },
  logout: {
    flexDirection: "column",
    fontWeight: "bold",
    fontSize: 24,
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textDecorationColor: "#000",
    textAlign: "center",
    bottom: 0
  }
});

export default Home;
