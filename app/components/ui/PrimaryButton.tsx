import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Color from '../../contants/color'
type PrimaryButtonProps = {
    children:React.ReactNode,
    onPress:()=>void
}


const PrimaryButton:React.FC<PrimaryButtonProps> = ({children,onPress}) => {
  return (
    <View style={styles.buttonOuterContainer}>
    <Pressable android_ripple={{color:Color.primary600}} 
    style={({pressed})=> pressed ? [styles.buttonInnerContainer,styles.pressed] : styles.buttonInnerContainer} onPress={onPress}>
      <Text style={styles.buttonText}>{children}</Text>
    </Pressable>
    </View>
  )
}

export default PrimaryButton

const styles = StyleSheet.create({
  buttonOuterContainer:{
   shadowColor:'black',
   shadowOffset:{width:0,height:0},
   shadowOpacity:0.2,
   shadowRadius:10,
  },
  buttonInnerContainer:{
    backgroundColor:Color.primary500,
    borderRadius:28,
    paddingVertical:8,
    paddingHorizontal:16,
    elevation:2,
    margin:4
  },
  buttonText:{
    color:'white',
    textAlign:'center'
  },
  pressed:{
    opacity:0.75
  }
  
})
