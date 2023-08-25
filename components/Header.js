import { StyleSheet, View, Text } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";


const Header = ({ headerText, headerIcon }) => {
  const { container, headerTxt } = styles;
  return (
    <View style={container}>
      <Text style={headerTxt}>{headerText}</Text>
      <FontAwesome name={headerIcon} size={24} color="#f96163"/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 20,
    padding: 10
  },
  headerTxt: {
    flex: 1,
    fontSize: 22,
    fontWeight: "bold"
  }
})

export default Header