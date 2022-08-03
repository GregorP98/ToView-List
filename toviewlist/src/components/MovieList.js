import React, { useState } from "react";
import { Image, View, Text } from "react-native-web";
import { ScrollView } from "react-native";
import { StyleSheet } from "react-native";
import { theme } from "../core/theme";

export default function MovieList() {
  const [movies, setEachMovie] = useState([
    {
      key: "1",
      title: "The Shawshank Redemption",
      year: "1994",
      image:
        "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX128_CR0,3,128,176_AL_.jpg",
      imDbRating: "9.2",
    },
    {
      key: "2",
      title: "The Godfather",
      year: "1972",
      image:
        "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,1,128,176_AL_.jpg",
      imDbRating: "9.2",
    },
    {
      key: "3",
      title: "The Dark Knight",
      year: "2008",
      image:
        "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX128_CR0,3,128,176_AL_.jpg",
      imDbRating: "9.0",
    },
    {
      key: "4",
      title: "The Godfather Part II",
      year: "1974",
      image:
        "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,1,128,176_AL_.jpg",
      imDbRating: "9.0",
    },
    {
      key: "5",
      title: "12 Angry Men",
      year: "1957",
      image:
        "https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX128_CR0,3,128,176_AL_.jpg",
      imDbRating: "8.9",
    },
  ]);

  return (
    <View style={styles.container}>
      <ScrollView>
        {movies.map((data) => {
          return (
            <View key={data.key} style={styles.item}>
              <Image source={data.image} style={styles.image} />
              <View style={styles.info}>
                <Text style={styles.text}>{data.title}</Text>
                <Text style={styles.text}>{data.year}</Text>
                <Text style={styles.text}>Rating:{data.imDbRating}</Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.surface,
    paddingTop: 10,
    paddingHorizontal: 10,
    marginBottom: 0,
  },
  item: {
    borderColor: theme.colors.primary,
    borderWidth: 5,
    padding: 5,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 125,
    marginBottom: 8,
    borderRadius: 5,
    marginRight: 15,
  },
  info: {
    flex: 1,
    backgroundColor: theme.colors.surface,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

//changing font colour makes everything white
