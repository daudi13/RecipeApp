import React from 'react'
import { SafeAreaView, Text, StyleSheet, View} from "react-native";
import Header from '../components/Header';
import SearchFilter from '../components/SearchFilter';
import CategoriesFilter from '../components/CategoriesFilter';

const RecipeScreen = () => {
  const {container, subTitle, categoriesSec} = styles
  return (
    <SafeAreaView style={container}>
      <Header headerText={"Hi, Daudi"} headerIcon={"bell-o"} />
      <SearchFilter icon={"search"} placeholder={"enter your favourite recipe"} />
      <View style={categoriesSec}>
        <Text style={subTitle}>Categories</Text>
        <CategoriesFilter/>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10
  },
  subTitle: {
    fontSize: 22,
    fontWeight: "bold"
  },
  categoriesSec: {
    marginTop: 22
  }
})

export default RecipeScreen