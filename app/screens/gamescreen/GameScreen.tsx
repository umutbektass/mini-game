import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Title from '@/app/components/ui/Title'
import NumberContainer from '@/app/components/NumberContainer'

const generateRandomBetween = (min:number,max:number,exclude:number)=>{
  const rndNum = Math.floor(Math.random() * (max-min))+min

  if(exclude === rndNum){
    return generateRandomBetween(min,max,exclude);
  } else {
    return rndNum;
  }
}

type GameScreenProps = {
  userNumber:number
}

const GameScreen:React.FC<GameScreenProps> = ({userNumber}) => {
  const initialGuess = generateRandomBetween(1,100,userNumber)
  const [currentGuess,setCurrentGuess] = useState(initialGuess)
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
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