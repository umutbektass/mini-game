import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Color from '@/app/contants/color'
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
        color:'white',
        fontSize:24,
        borderColor:'white',
        borderWidth:2,
        textAlign:'center',
        padding:12,
        fontFamily:'open-sans-bold'
    }
})