import React from "react";
import { Image, View, Text, StyleSheet } from "react-native";
import { theme } from "../core/theme";

export default function Episode(props) {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <Image source={require("../assets/logo.png")} style={styles.image} />;
        <Text style={styles.text} {...props} />
      </View>
      <View style={styles.tickbox}></View>
    </View>
  );
}
/* <Image style={styles.episodeImage} source="logo.png"/> */
/*<Text>{episode.name}</Text>}*/
const styles = StyleSheet.create({
  item: {
    backgroundColor: "theme.colors.surface",
    padding: 15,
    borderRadius: 10,
    flexDirectio: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },

  image: {
    width: 24,
    height: 24,
    marginBottom: 8,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: "80%",
  },
  tickbox: {
    width: 12,
    height: 12,
    borderColor: "theme.colors.surface",
    borderWidth: 2,
    borderHeight: 5,
  },
});
