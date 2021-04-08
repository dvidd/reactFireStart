import { StyleSheet } from "react-native";

import variables from "./variables";

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
    padding: 10,
    width: "100%",
    height: "100%",

  },
  text: {
    color: variables.dark,
    fontSize: 37,
    fontWeight: "bold",
    paddingTop: 16,
    alignItems: "center",
    fontFamily: "Chalkboard SE"
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
    borderRadius: 0,
    overflow: "hidden",
    backgroundColor: "white",
    marginTop: 10,
    marginBottom: 10,
    borderBottomColor: "black",
    shadowColor: "#fff",
    color: variables.dark,
    shadowOpacity: 0.4,
    shadowOffset: { height: 10, width: 0 },
    shadowRadius: 20,
    width: "100%",
    borderBottomColor: "#DADDD8",
    borderBottomWidth: 1,
  },
  inputMd: {
    top: 30,
    height: 58,
    borderRadius: 0,
    overflow: "hidden",
    backgroundColor: "white",
    marginTop: 10,
    marginBottom: 10,
    borderBottomColor: "black",
    shadowColor: "#fff",
    color: variables.dark,
    shadowOpacity: 0.4,
    shadowOffset: { height: 10, width: 0 },
    shadowRadius: 20,
    width: "100%",
    borderBottomColor: "#DADDD8",
    borderBottomWidth: 1,
    fontSize: 30,
    marginBottom: 30,

  },

  
  inputBig: {
    height: 88,
    borderRadius: 0,
    overflow: "hidden",
    backgroundColor: "white",
    marginTop: 10,
    marginBottom: 10,
    borderBottomColor: "black",
    shadowColor: "#fff",
    color: variables.dark,
    shadowOpacity: 0.4,
    shadowOffset: { height: 10, width: 0 },
    shadowRadius: 20,
    width: "100%",
    borderBottomColor: "#DADDD8",
    borderBottomWidth: 1,
    fontSize: 40,
  },
  notEditable: {
    color: "#d2d2d2",
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
  },

  minpadding: {
    top: 20,
    paddingTop: 30
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
    borderColor: variables.white,
    borderWidth: 2,
    shadowColor: variables.white,
    color: variables.white,
    shadowOpacity: 0.4,
    shadowOffset: { height: 10, width: 0 },
    shadowRadius: 20
  },

  textRegister: {
    fontSize: 16,
    textTransform: "uppercase",
    color: variables.white
  },

  // Social Buttons 

  SocialButton: {
    marginTop: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    maxWidth: 350,
    height: 50,
    borderRadius: 14,
    paddingVertical: 10,
    paddingHorizontal: 12,
    backgroundColor: "#000",
    shadowColor: "#000",
    shadowOpacity: 0.4,
    color: "#fff",
    shadowOffset: { height: 10, width: 0 },
    shadowRadius: 20
  },

  SocialIcon: {
    width: 25,
    height: 25,
    position: "absolute",
    marginLeft: 0,
    left: 30,
    right: -120
  },

  SocialText: {
    fontSize: 16,
    textTransform: "uppercase",
    color: "#fff"
  },
  SocialFacebook: {
    backgroundColor: "#3b5998",
    shadowColor: "#3b5998",
  },
  SocialGoogle: {
    backgroundColor: "#4285F4",
    shadowColor: "#4285F4",
  },
  SocialApple: {
    backgroundColor: "#3F3E3F",
    shadowColor: "#3F3E3F",
  },

  SocialEmail: {
    backgroundColor: "transparent",
    shadowOpacity: 0,
    borderWidth: 1
  },
  // Texts
  title: {
    fontSize: 35,
    color: "#000",
    textAlign: "left",
    fontFamily: variables.font,
    fontWeight: "bold"
  },
  h1: {
    fontSize: 25,
    color: "#000",
    textAlign: "left",
    fontFamily: variables.font,
    fontWeight: "bold"
  },
  h2: {
    fontSize: 18,
    color: "#000",
    textAlign: "left",
    fontFamily: variables.font,
    fontWeight: "bold"
  },
  subtitle: {
    fontSize: 23,
    color: "grey",
    fontFamily: variables.font,

  },
  textBlack: {
    color: "#000",
  },

  // Category item
  categoryIcon: {
    width: 100,
    height: 100,
 justifyContent: "center", alignItems: "center"

  },
  categoryBox: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#fff",
    shadowColor: "grey",
    color: variables.white,
    shadowOpacity: 0.4,
    shadowOffset: { height: 2, width: 0 },
    shadowRadius: 2,
 justifyContent: "center", alignItems: "center"
  },
  categoryText: {
    fontSize: 32
  },
  // Profile 
  thumnail: {
    width: 140,
    height: 140,
    borderRadius: 80
  },
  containerBox: {
    width: "90%"
  },
  // Butons 
  buttonBig: {
    backgroundColor: variables.dark,
    height: 58,
    borderRadius: 14,
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
    marginBottom: 10
  },
  buttonBigTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold"
  },
  // Preferences :

  notificationToggle: {
    flexDirection: "row",
    top: 40,
  },


  // Textos 
  h2:{
    fontFamily: variables.font,
    fontSize: 15,
    paddingTop: 5,
    left: 9,
  },
  h4: {
      left: 9,
      fontSize:13 * 1.2,
      lineHeight:9 * 2,
      color: "#BCCCD4"

  },
  h5: {
    left: 9,
    fontSize:13 * 1.2,
    lineHeight:9 * 2,
    color:"#000",
    fontWeight: "bold",
    paddingTop: 5,
    paddingBottom: 15,
    padding: 15,
    paddingLeft:0


  }


});