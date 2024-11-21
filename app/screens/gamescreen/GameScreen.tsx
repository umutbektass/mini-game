import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Title from '@/app/components/Title'

const GameScreen = () => {
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <Text>GameScreen</Text>
    </View>
  )
}

export default GameScreen

const styles = StyleSheet.create({
  screen:{
    flex:1,
    padding:24
  }
})