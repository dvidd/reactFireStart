import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from '@expo/vector-icons';

import styles from "../../config/styles"
export default  Button = ({ text, icon , func, outline}) => {
    return (
        <TouchableOpacity  style={ [ styles.SocialButton,  { backgroundColor:"#000"}, outline === true ?{ backgroundColor: "#fff", borderColor: "000", borderWidth: 2, shadowRadius: 0, shadowColor: "#fff", shadow: "transparent"} : {}]} onPress={() => func()}>
            <Ionicons style={styles.SocialIcon} color="#fff" name={icon} size={25}/>
            <Text style={[styles.SocialText,  outline === true ?{ color: "#000"} : {}]} >{text}</Text>
        </TouchableOpacity>
    );
};