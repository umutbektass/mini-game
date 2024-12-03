import { Alert, Keyboard, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import PrimaryButton from '@/app/components/ui/PrimaryButton'
import Color from '../../contants/color'
import Title from '@/app/components/ui/Title'
import Card from '@/app/components/ui/Card'
import InstructionTitle from '@/app/components/ui/InstructionTitle'
type StartGameScreenProps = {
  onPickNumber:(pickNumber:number)=>void
}

const StartGameScreen:React.FC<StartGameScreenProps> = ({onPickNumber}) => {
  const [enteredNumber,setEnteredNumber]= useState<string>('')


  const numberInputHandler = (text:string)=>{
      setEnteredNumber(text)
  }

  const resetInputHandler = ()=>{
    setEnteredNumber('')
  }
  const confirmInputHandler = ()=>{
    const chosenNumber = parseInt(enteredNumber)
    if(isNaN(chosenNumber) || chosenNumber<=0 || chosenNumber>99){
      console.log("invalid number")
      return Alert.alert('Invalid Number',"Number has to be a number between 1 and 99."
        ,[{text:'Okay',style:'destructive',onPress:resetInputHandler}])
    }
    Keyboard.dismiss()
    onPickNumber(chosenNumber)
  }
  return (
    <View style={styles.rootScreen}>
      <Title>Guess My Number</Title>
      <Card>
        <InstructionTitle >Enter a number</InstructionTitle>
      <TextInput style={styles.numberInput} keyboardType='number-pad' maxLength={2}  value={enteredNumber} onChangeText={numberInputHandler}/>
      <View style={styles.buttonsContainer}>
    <View style={styles.buttonContainer}>
    <PrimaryButton onPress={resetInputHandler} >Reset</PrimaryButton>
    </View>
    <View style={styles.buttonContainer}>
      <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
      </View>
      </View>
    </Card>
    </View>

  )
}

export default StartGameScreen

const styles = StyleSheet.create({
  rootScreen:{
    flex:1,
    alignItems:'center',
    paddingTop:100,
    paddingHorizontal:24,
  },
  inputContainer:{
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
  },
  numberInput:{
    height:50,
    width:70,
    fontSize:32,
    borderBottomColor:Color.accent500,
    borderBottomWidth:2,
    color:Color.accent500,
    marginVertical:15,
    fontWeight:'bold',
    textAlign:'center'
  },
  buttonsContainer:{
    marginTop:10,
    flexDirection:'row'
  },
  buttonContainer:{
    flex:1
  }
})