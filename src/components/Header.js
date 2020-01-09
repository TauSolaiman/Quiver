import React from  'react'
import { View, Text, StyleSheet } from 'react-native';


export function Header() {
  return (
      <View style={headerContainer}>
        <Text style={header}>Quiver</Text>
      </View>
  )
}


const styles = StyleSheet.create({
  headerContainer: {
    display: "flex",
    marginTop: 55,
    alignItems: "center",
    backgroundColor: '#000000'
  },
  header: {
    color: "#00BFA5",
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 20
  }
})

const { headerContainer, header } = styles


export default Header
