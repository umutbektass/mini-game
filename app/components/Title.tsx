import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Color from '../contants/Color'
type TitleProps = {
    children:React.ReactNode
}

const Title:React.FC<TitleProps> = ({children}) => {
  return (
  
      <Text style={styles.title}>{children}</Text>
  )
}

export default Title

const styles = StyleSheet.create({
    title:{
        color:Color.accent500,
        fontSize:24,
        fontWeight:'bold',
        borderColor:Color.accent500,
        borderWidth:2,
        textAlign:'center',
        padding:12
    }
})