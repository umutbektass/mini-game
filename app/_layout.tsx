import { useFonts } from 'expo-font';

import {  useEffect, useState } from 'react';
import 'react-native-reanimated';

import { ImageBackground, SafeAreaView, StyleSheet,ActivityIndicator,View } from 'react-native';
import {StartGameScreen ,GameScreen,GameOverScreen} from './screens'
import { LinearGradient } from 'expo-linear-gradient';
import Color from './contants/color';
import { SplashScreen } from 'expo-router';
// Prevent the splash screen from auto-hiding before asset loading is complete.

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    'open-sans': require('../assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('../assets/fonts/OpenSans-Bold.ttf'),

  });

    useEffect(()=>{
      if(!fontsLoaded){
        <View style={[styles.rootScreen,{alignItems:'center',justifyContent:'center'}]}>
            <ActivityIndicator size='large'/>
        </View>
      }
    },[fontsLoaded])

  const [userNumber,setUserNumber] = useState<number>()
  const [gameIsOver,setGameIsOver] = useState<boolean>(false)
 
  const pickedNumberHandler = (pickNumber:number)=>{
    setUserNumber(pickNumber)
  }

  const gameOverHandler =()=>{
    setGameIsOver(true)
  }
    let screen = <StartGameScreen  onPickNumber={pickedNumberHandler}/>




    if(userNumber){
      screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>
    }
    if(gameIsOver){
      screen = <GameOverScreen/>
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


