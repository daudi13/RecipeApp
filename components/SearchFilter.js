import { FontAwesome } from '@expo/vector-icons';
import React from 'react'
import { View, StyleSheet, TextInput } from "react-native";


const SearchFilter = ({ icon, placeholder }) => {
  const { searchBox, placeholderTxt, iconStyle } = styles;
  return (
    <View style={searchBox}>
      <TextInput style={placeholderTxt} placeholder={placeholder}/>
      <FontAwesome style={iconStyle} name={icon} size={15} color="#f96163"/>
    </View>
  )
}

const styles = StyleSheet.create({
  searchBox: {
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginVertical: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 7,
  },
  placeholderTxt: {
    flex: 1
  },
  iconStyle: {
    paddingHorizontal: 5
  }
})

export default SearchFilter;