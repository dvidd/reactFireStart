import React, { useContext } from "react";
import { Text, View, TouchableOpacity, StyleSheet, Image } from "react-native";

import { AuthContext } from "../navigation/AuthProvider";

function Home() {
  const { user, logout } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Page</Text>

      <TouchableOpacity onPress={() => logout()}>
        <Text style={styles.logout}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 26
  },
  logout: {
    top: 50,
    fontWeight: "bold",
    fontSize: 24,
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textDecorationColor: "#000"
  }
});

export default Home;
