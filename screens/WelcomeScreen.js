import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity,n } from 'react-native';

const WelcomeScreen = ({navigation}) => {
  const { container, heroText, coverText, welcomeBtn, btnText } = styles;
  return (
    <View style={container}>
      <Image source={require("../assets/images/welcome1.png")} />
      <Text style={heroText}>40k+ Premium Recipes</Text>
      <Text style={coverText}>Cook Like A chef</Text>
      <TouchableOpacity style={welcomeBtn} onPress={() => navigation.navigate("RecipeList")}>
        <Text style={btnText}>Let's Go</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  heroText: {
    color: "#f96163",
    fontSize: 20,
    fontWeight: "bold"
  },
  coverText: {
    fontSize: 42,
    fontWeight: 'bold',
    marginTop: 44,
    color: "#3c444c",
    marginBottom: 30
  },
  welcomeBtn: {
    backgroundColor: "#f96163",
    borderRadius: 18,
    paddingVertical: 18,
    width: 300,
    alignItems: "center"
  },
  btnText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "700"
  }
})

export default WelcomeScreen