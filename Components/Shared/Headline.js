import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Heading } from "native-base";
//icons import
import {
  MaterialIcons,
  MaterialCommunityIcons,
  Entypo,
} from "@expo/vector-icons";

const Headline = () => {
  return (
    <>
      <View
        style={{
          display: "flex",
          justifyContent: "flex-start",
          marginBottom: 10,
        }}
      >
        <Heading pl="3" size="md">
          Activities
        </Heading>
      </View>
      <View style={styles.container}>
        <TouchableOpacity style={styles.subContainer}>
          <View style={styles.box1}>
            <MaterialIcons name="account-balance" size={40} color="#ba55d3" />
          </View>
          <Text style={styles.text}>Accounts</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.subContainer}>
          <View style={styles.box2}>
            <MaterialCommunityIcons name="keyboard" size={40} color="#ffbf00" />
          </View>
          <Text style={styles.text}>Jobs</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.subContainer}>
          <View style={styles.box3}>
            <Entypo name="book" size={40} color="#f77fbe" />
          </View>
          <Text style={styles.text}>Vouchers</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.subContainer}>
          <View style={styles.box4}>
            <MaterialCommunityIcons
              name="motorbike"
              size={40}
              color="#3cd070"
            />
          </View>
          <Text style={styles.text}>Riders</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Headline;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom: 10,
  },
  subContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text:{
    textAlign:"center"
  },
  box1: {
    borderRadius: 50,
    borderWidth: 3,
    padding: 10,
    borderColor: "#ba55d3",
    backgroundColor: "#E6E6FA",
  },
  box2: {
    borderRadius: 50,
    borderWidth: 3,
    padding: 10,
    borderColor: "#ffbf00",
    backgroundColor: "#fffdd0",
  },
  box3: {
    borderRadius: 50,
    borderWidth: 3,
    padding: 10,
    borderColor: "#f77fbe",
    backgroundColor: "#ffddf4",
  },
  box4: {
    borderRadius: 50,
    borderWidth: 4,
    padding: 10,
    borderColor: "#3cd070",
    backgroundColor: "#d0f0c0",
  },
});
