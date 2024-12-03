import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Color from '@/app/contants/color'

type CardProps = {
  children: React.ReactNode
}

const Card:React.FC<CardProps> = ({children}) => {
  return (
    <View style={styles.card}>
        {children}
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    card:{
        marginTop:20,
        borderRadius:8,
        padding:16,
        backgroundColor:Color.primary700,
        elevation:24,
        shadowColor:'black',
        shadowOffset:{width:0,height:5},
        shadowRadius:6,
        shadowOpacity:0.4,
        alignItems:'center',
        justifyContent:'center'
    }
})