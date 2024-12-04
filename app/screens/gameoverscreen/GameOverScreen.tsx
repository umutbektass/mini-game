import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Title from '@/app/components/ui/Title'
import Color from '@/app/contants/color'

const GameOverScreen = () => {
  return (
    <View style={styles.rootScreen}> 
     <Title>Game Over</Title>
     <View style={styles.imageContainer}>
    <Image style={styles.image} source={require('../../../assets/images/success.png')}/>
     </View>
    </View>
  )
}

export default GameOverScreen

const styles = StyleSheet.create({
  rootScreen:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    padding:24
  },
  imageContainer:{
    width:300,
    height:300,
    borderRadius:150,
    borderWidth:3,
    borderColor:Color.primary800,
    overflow:'hidden',
    margin:36
  },
  image:{
    width:'100%',
    height:'100%',
   }
})