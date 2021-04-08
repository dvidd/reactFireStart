
import React from "react";

import {
    Text,
    TouchableOpacity,
    Image,
    Animated,
    StyleSheet
  } from "react-native";



import styles from "../../config/styles"

export default Card = ({ item, navigation }) => {
    return (
        <Animated.View
            style={[ Styles.whiteCard, Styles.tinyMargin]}>
            <TouchableOpacity onPress={() => navigation.navigate("Room")}>
                <Image style={[Styles.imageCard, Styles.roundBoxTop]} source={{ uri: item.roomInfo.images[0] }} />
                <Text style={[styles.h2, Styles.row, Styles.simplePaddingRight]}>{item.roomInfo.name}</Text>
                <Text style={[styles.h4, Styles.row, Styles.simplePaddingBottom, Styles.simplePaddingRight]}>{item.roomInfo.description.split('').slice(0, 28)}...</Text>
                <Text style={[styles.h5, Styles.row, Styles.simplePaddingBottom, Styles.simplePaddingRight]}>Disponible ✅</Text>
            </TouchableOpacity></Animated.View>

    );
};



const Styles = StyleSheet.create({
    whiteCard: {
        flex: 1,
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: 'grey',
        elevation: 2,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
      },
      tinyMargin: {
        margin: 6,
      },
      imageCard: {
        width: '100%',
        height: 150,
      },
      roundBoxTop: {
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
      },
      row: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
      },
      simplePaddingTop: {
        paddingTop: 18,
      },
      simplePaddingRight: {
        paddingRight: 18,
      },
      simplePaddingLeft: {
        paddingLeft: 18,
      },
    
    
  });