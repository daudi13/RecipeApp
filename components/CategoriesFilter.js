import React from 'react';
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { categories, colors } from '../Constant';

const CategoriesFilter = () => {
  const { btn, btnTxt, scrollSec } = styles;
  return (
    <View>
      <ScrollView
        horizontal
        style={scrollSec}
        showsHorizontalScrollIndicator={false}
      >
        {
          categories.map((category, index) => (
            <View style={[btn, {backgroundColor: index === 0 ? colors.COLOR_PRIMARY : colors.COLOR_LIGHT}]}>
              <Text style={[btnTxt, {color: index === 0 ? colors.COLOR_LIGHT : colors.COLOR_DARK}]}>{category.category}</Text>
            </View>
          ))
        }
      </ScrollView>
    </View>
  )
}


const styles = StyleSheet.create({
  scrollSec: {
    marginVertical: 20
  },
  btn: {
    width: 150,
    marginLeft: 20,
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 13,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 7,
  },
  btnTxt: {
    color: "#fff",
    fontSize: 15
  }
})
export default CategoriesFilter