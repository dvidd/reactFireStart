import React from "react";
import { TouchableOpacity, Dimensions } from "react-native";

import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export const Icon = (name,color,route) => {
    const windowWidth = Dimensions.get('window').width;

    const navigation = useNavigation();
    return (
    <TouchableOpacity onPress={() => navigation.navigate(route)}>
        <Ionicons name={name}  style={{paddingLeft: windowWidth * 0.05}}   color={color} size={30} />
    </TouchableOpacity>
    )
}