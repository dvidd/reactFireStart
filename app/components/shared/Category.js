import { Text, TouchableOpacity } from "react-native";
import React from "react";


import styles from "../config/styles"
export default  Category = ({ item, navigation }) => {
    return (
        <TouchableOpacity style={ [ styles.categoryIcon]} onPress={() => navigation.navigate("Categoria", { name: item.text })} >
            <TouchableOpacity style={styles.categoryBox}>
                <Text style={styles.categoryText}>{item.text}</Text>
            </TouchableOpacity>
           
        </TouchableOpacity>
    );
};