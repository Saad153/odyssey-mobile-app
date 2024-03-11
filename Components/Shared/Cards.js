import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Avatar, ScrollView } from "native-base";

const Cards = ({ data }) => {
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={styles.container}
    >
      <View style={styles.cardCon}>
        <View>
          <Text>Project 1 large</Text>
          <Text>Progress 20%</Text>
        </View>
        <View>
          <Avatar
            source={{
              uri: "https://w7.pngwing.com/pngs/749/859/png-transparent-computer-icons-avatar-child-small-money-child-face-heroes-thumbnail.png",
            }}
          />
        </View>
        <View style={{ flex: 1, flexDirection: "row", gap: 10 }}>
          <Text
            style={{
              flex: 1,
              backgroundColor: "#2a3683",
              borderRadius: 20,
              padding: 10,
              color: "white",
              textAlign:"center"
            }}
          >
            Details
          </Text>
          <Text
            style={{
              flex: 1,
              backgroundColor: "#2a3683",
              borderRadius: 20,
              padding: 10,
              color: "white",
              textAlign:"center"
            }}
          >
            Check
          </Text>
        </View>
      </View>
      <View style={styles.cardCon}>
        <View>
          <Text>Project 1 large</Text>
          <Text>Progress 20%</Text>
        </View>
        <View>
          <Avatar
            source={{
              uri: "https://w7.pngwing.com/pngs/749/859/png-transparent-computer-icons-avatar-child-small-money-child-face-heroes-thumbnail.png",
            }}
          />
        </View>
        <View style={{ flex: 1, flexDirection: "row", gap: 10 }}>
          <Text
            style={{
              flex: 1,
              backgroundColor: "#2a3683",
              borderRadius: 20,
              padding: 10,
              color: "white",
            }}
          >
            Details
          </Text>
          <Text
            style={{
              flex: 1,
              backgroundColor: "#2a3683",
              borderRadius: 20,
              padding: 10,
              color: "white",
            }}
          >
            Check
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Cards;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    height: "100%",
    padding: 5,
  },
  cardCon: {
    flex: 1,
    gap: 10,
    margin: 5,
    width: 270,
    height: 170,
    backgroundColor: "#F5F5FF",
    borderRadius: 20,
    padding: 10,
    color: "#FFF",
  },
});
