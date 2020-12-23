import React, { createContext, useState } from "react";
import auth from "@react-native-firebase/auth";

import { Alert } from "react-native";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          try {
            await auth().signInWithEmailAndPassword(email, password);
            Alert.alert("Logout!");
          } catch (error) {
            if (error.code === "auth/email-already-in-use") {
              Alert.alert("This email is already in use, login");
            }

            if (error.code === "auth/invalid-email") {
              Alert.alert("Invalid email address");
            } else {
              Alert.alert("Something went wrong try later");
            }
          }
        },
        register: async (email, password) => {
          try {
            await auth().createUserWithEmailAndPassword(email, password);
            Alert.alert("User created correctly!");
          } catch (error) {
            if (error.code === "auth/email-already-in-use") {
              Alert.alert("This email is already in use, login");
            }

            if (error.code === "auth/invalid-email") {
              Alert.alert("Invalid email address");
            } else {
              Alert.alert("Something went wrong try later");
            }
          }
        },
        logout: async () => {
          try {
            await auth().signOut();
            Alert.alert("You logout!");
          } catch (e) {
            console.error(e);
          }
        }
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
