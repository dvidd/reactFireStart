

import React from "react";

import {
    Text,
    Animated,
    StyleSheet,
    Image,
    View
  } from "react-native";


import styles from "../config/styles"

export default Card = ({ item }) => {
    return (
        <Animated.View
            style={[ Styles.whiteCard, Styles.tinyMargin]}>
                <View style={Styles.textContainer}>
                    <Text style={[styles.h2, Styles.row, Styles.simplePaddingRight]}>{item.name}</Text>
                    <Text style={[styles.h2, Styles.row, Styles.simplePaddingBottom, Styles.simplePaddingRight]}>📍 {item.hotel}</Text>
                    <Text style={[styles.h5, Styles.row, Styles.simplePaddingBottom, Styles.simplePaddingRight]}>{item.hour} | {item.date}</Text>
                </View>

                <Image source={{uri: item.image}} style={Styles.imageCard}></Image>
        </Animated.View>

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
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        flexDirection: "row"
      },
      textContainer: {
          flex: 2
      },
      tinyMargin: {
        margin: 6,
      },
      imageCard: {
        height: "100%",
        flex: 1,
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
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