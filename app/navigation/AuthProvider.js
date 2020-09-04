import React, { createContext, useState } from "react";
import auth from "@react-native-firebase/auth";

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
            alert("Loged!");
          } catch (error) {
            if (error.code === "auth/email-already-in-use") {
              alert("That email address is already in use!");
            }

            if (error.code === "auth/invalid-email") {
              alert("That email address is invalid!");
            } else {
              alert("Something went wrong try later");
            }
          }
        },
        register: async (email, password) => {
          try {
            await auth().createUserWithEmailAndPassword(email, password);
            alert("User account created & signed in!");
          } catch (error) {
            if (error.code === "auth/email-already-in-use") {
              alert("That email address is already in use!");
            }

            if (error.code === "auth/invalid-email") {
              alert("That email address is invalid!");
            } else {
              alert("Something went wrong try later");
            }
          }
        },
        logout: async () => {
          try {
            await auth().signOut();
            alert("User logout!");
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
