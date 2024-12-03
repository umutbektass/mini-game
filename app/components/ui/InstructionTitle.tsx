import { StyleSheet, Text, View ,StyleProp,TextStyle} from 'react-native'
import React from 'react'
import Color from '@/app/contants/color'
type InstructionTitleProps = {
    children: React.ReactNode,
    style?:StyleProp<TextStyle>
}
const InstructionTitle:React.FC<InstructionTitleProps> = ({children,style}) => {
  return (
      <Text style={[styles.text,style]} >{children}</Text>
  )
}

export default InstructionTitle

const styles = StyleSheet.create({
    text:{
        color:Color.accent500,
        fontSize:24,
        fontFamily:'open-sans'

    }
})