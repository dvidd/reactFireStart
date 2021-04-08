import React, { useState, useContext } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View , ScrollView, SafeAreaView} from "react-native";


import { AuthContext } from "../navigation/AuthProvider";


import Socials from "../components/AuthSocials/Socials";

import styles from "../config/styles"

function Register({ navigation }) {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { register } = useContext(AuthContext);

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1, backgroundColor: "#fff"}}>
      <View style={style.main}>
      <View style={style.logoContainer}>
        <View style={style.textsLogo}>
        <Text style={styles.title}>Register</Text>
        <Text style={styles.subtitle}>Create you account</Text>
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
          onPress={() => register(email, password)}
        >
          <Text style={styles.buttonTitle}> Register </Text>
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

export default Register;



// import React, { useState, useContext } from "react";
// import { StyleSheet, Text, TextInput, TouchableOpacity, View , ScrollView, SafeAreaView} from "react-native";


// import { AuthContext } from "../navigation/AuthProvider";

// import styles from "../config/Styles";



// import Google from "../components/Social/Google";
// import Facebook from "../components/Social/Facebook";
// import Apple from "../components/Social/Apple";



// export default function Register({ navigation }) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const { register } = useContext(AuthContext);

//   return (
//     <ScrollView contentContainerStyle={{ flexGrow: 1 }} >
//       <View style={style.main}>
       
//       <View style={style.form}>
//         <Text style={styles.title}>Registro</Text>
//         <Text style={styles.subtitle}>Crea una cuenta en Safegym!</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="E-mail"
//           placeholderTextColor="#aaaaaa"
//           onChangeText={text => setEmail(text)}
//           value={email}
//           underlineColorAndroid="transparent"
//           autoCapitalize="none"
//         />
//         <TextInput
//           style={styles.input}
//           placeholderTextColor="#aaaaaa"
//           secureTextEntry
//           placeholder="Password"
//           onChangeText={text => setPassword(text)}
//           value={password}
//           underlineColorAndroid="transparent"
//           autoCapitalize="none"
//         />
//         <TouchableOpacity
//           style={styles.button}
//           onPress={() => register(email, password)}
//         >
//           <Text style={styles.buttonTitle}> Sign In </Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           onPress={() => navigation.navigate("Login")}
//           style={styles.footerView}
//         >
//           <Text style={styles.footerText}>
//             ¿Already have an account?
//             <Text style={styles.footerLink}> Login </Text>
//           </Text>
//         </TouchableOpacity>
//         </View>
//       </View>
//       <View style={style.buttonsContainer}>
//             <Text style={styles.subtitle}>Inicia sesión </Text>

//             <Google/>
//             <Facebook/>
//             <Apple/>


//             <TouchableOpacity onPress={() => navigation.navigate("Register")} style={[styles.SocialButton, styles.SocialEmail]}>
//               <Text style={[styles.SocialText, styles.textBlack]}>Inicia con email</Text>
//             </TouchableOpacity>
//       </View>

//       </ScrollView>
//   );
// }


// const style = StyleSheet.create({
//   main: {
//     flex:3,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     height: "100%"

//   },
//   form: {
//     flex:1,
//     width: "90%",
//     // marginTop: "10%"
//   },
//   buttonsContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",

//   },

// });