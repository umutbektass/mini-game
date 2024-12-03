import { Alert, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Title from "@/app/components/ui/Title";
import NumberContainer from "@/app/components/NumberContainer";
import PrimaryButton from "@/app/components/ui/PrimaryButton";
import Card from "@/app/components/ui/Card";
import InstructionTitle from "@/app/components/ui/InstructionTitle";
import Ionicons from '@expo/vector-icons/Ionicons';

const generateRandomBetween = (min: number, max: number, exclude: number) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (exclude === rndNum) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

type GameScreenProps = {
  userNumber: number;
  onGameOver: () => void;
};

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen: React.FC<GameScreenProps> = ({ userNumber, onGameOver }) => {
  const initialGuess = generateRandomBetween(
    1,
    100,
    userNumber
  );
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    if (userNumber === currentGuess) {
      onGameOver();
    }
  }, [currentGuess, userNumber]);

  const nextGuessHandler = (direction: String) => {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && userNumber < currentGuess)
    ) {
      Alert.alert("Don't lie", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }
    if (direction == "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
  };
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
      <InstructionTitle style={styles.instructionTitle}>Higher or lower?</InstructionTitle>
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
        <PrimaryButton onPress={() => nextGuessHandler("lower")}>
        <Ionicons name="remove" size={18} color="white" />
        </PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
        <PrimaryButton onPress={() => nextGuessHandler("greater")}>
        <Ionicons name="add" size={18} color="white" />
        </PrimaryButton>
        </View>
      </View>
      </Card>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  instructionTitle:{
    marginBottom:12
  },
  buttonsContainer:{
    flexDirection:'row',
  },
  buttonContainer:{
    flex:1
  }
});
