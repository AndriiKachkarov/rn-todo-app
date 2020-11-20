import React from 'react';
import {Text, View, StyleSheet} from "react-native";

export const Navbar = (props) => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.text}>{props.title}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  navbar: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#2b2dab',
    paddingBottom: 5
  },
  text: {
    color: 'white',
    fontSize: 20
  }
});
