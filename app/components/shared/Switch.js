
import React from "react";
import { View, Text , Switch} from "react-native";



import styles from "../config/styles"

export default  SwitchComponent = (props) => {
    return (
        <View   style={[styles.notificationToggle,{padding: "5%"}]}>
        <View style={{flex: 10}}>
          <Text style={styles.h2}>{props.text}
        </Text>
        </View>
        <View style={{flex: 2}}>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={props.value ? "#fff" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={props.change}
          value={props.value}
        />
        </View>
        
        </View>
        
    )
}