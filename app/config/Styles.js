import { StyleSheet } from "react-native";

import variables from "./Variables";

export default StyleSheet.create({
  container: {
    height: "60%",
    borderRadius: 50,
    width: "100%",
    flexDirection: "column"
  },
  login: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff"
  },

  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  form: {
    backgroundColor: "#fff",
    padding: 40,
    width: "100%",
    height: "100%",

    flexDirection: "column",
    justifyContent: "flex-end"
  },
  text: {
    color: variables.dark,
    fontSize: 37,
    fontWeight: "bold",
    paddingTop: 16,
    alignItems: "center",
    fontFamily: "Chalkboard SE"
  },
  subtitle: {
    color: variables.primary,
    fontSize: 46,
    width: "100%",
    fontWeight: "bold",
    alignItems: "center",
    fontFamily: variables.font,
    top: 0
  },
  textcontainer: {
    top: -20
  },

  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: variables.secondary,
    marginTop: 100,
    fontFamily: variables.font
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
    color: variables.dark,
    shadowOpacity: 0.4,
    shadowOffset: { height: 10, width: 0 },
    shadowRadius: 20,
    width: "100%",
    borderBottomColor: "#DADDD8",
    borderBottomWidth: 1
  },
  button: {
    backgroundColor: variables.dark,
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
    paddingBottom: 30,
    fontSize: 16,
    color: variables.dark
  },
  or: {
    top: -40,
    marginBottom: 20,
    fontSize: 14,
    color: variables.dark
  },
  footerLink: {
    color: variables.primary,
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
