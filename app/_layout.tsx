import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { ImageBackground, SafeAreaView, StyleSheet } from 'react-native';
import {StartGameScreen ,GameScreen} from './screens'
import { LinearGradient } from 'expo-linear-gradient';
import Color from './contants/Color';
// Prevent the splash screen from auto-hiding before asset loading is complete.

export default function RootLayout() {
  const [userNumber,setUserNumber] = useState<number>()

  const pickedNumberHandler = (pickNumber:number)=>{
    setUserNumber(pickNumber)
  }
    let screen = <StartGameScreen  onPickNumber={pickedNumberHandler}/>

    


    if(userNumber){
      screen = <GameScreen/>
    }

  return (
  <LinearGradient colors={[Color.primary500, Color.accent500]}  style={[styles.rootScreen]}>
    <ImageBackground imageStyle={styles.backgroundStyle} style={styles.rootScreen}
     source={require('../assets/images/background.png')} resizeMode='cover'>
      <SafeAreaView style={styles.rootScreen}>
    {screen}
    </SafeAreaView>

   </ImageBackground>
  </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen:{
    flex:1
  },
  backgroundStyle:{
    opacity:0.15
  }
})


