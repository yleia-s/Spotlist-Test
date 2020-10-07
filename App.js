import React from "react";
import { View, Image, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  stretch: {
    width: 500,
    height: 50,
    resizeMode: "stretch",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
});

const Page = () => {
  return (
    <View style={styles.container}>
      <Image
        style={{ width: 150, height: 150 }}
        source={require("./assets/splash.png")}
      />
      <Image
        style={{ height: 50 }}
        source={require("./assets/selectIndustry.png")}
      />
      <Image style={styles.stretch} source={require("./assets/Barber.png")} />
      <Image
        style={styles.stretch}
        source={require("./assets/Beautician.png")}
      />
      <Image style={styles.stretch} source={require("./assets/Makeup.png")} />
      <Image style={styles.stretch} source={require("./assets/Nails.png")} />
      <Image
        style={styles.stretch}
        source={require("./assets/Esthetician.png")}
      />
      <Image style={styles.stretch} source={require("./assets/Message.png")} />
      <Image
        style={{ flexDirection: "column", justifyContent: "center" }}
        source={require("./assets/Cancel.png")}
      />
    </View>
  );
};

export default Page;
