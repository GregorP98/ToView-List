import React from "react";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Paragraph from "../components/Paragraph";
import Button from "../components/Button";
import MovieList from "../components/MovieList";

export default function Dashboard({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>ToView List</Header>
      <Paragraph>Here are some of the top shows right now:</Paragraph>
      <MovieList />
      <Button
        mode="outlined"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: "StartScreen" }],
          })
        }
      >
        Logout
      </Button>
    </Background>
  );
}

// const styles = StyleSheet.create({
//   button: {
//     alignItems: "flex-end",
//   },
// });
