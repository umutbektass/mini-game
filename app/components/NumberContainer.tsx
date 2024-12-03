import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Color from '../contants/color'

type NumberContainerProps = {
    children: React.ReactNode
}


const NumberContainer:React.FC<NumberContainerProps> = ({children}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  )
}

export default NumberContainer

const styles = StyleSheet.create({
    container:{
        borderWidth:4,
        borderColor:Color.accent500,
        padding:18,
        margin:24,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center'
    },
    numberText:{
        color:Color.accent500,
        fontSize:36,
        fontFamily:'open-sans-bold',
        

    }
})