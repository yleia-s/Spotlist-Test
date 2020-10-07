import React from "react";
import { View, Image, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1d7264",
    paddingTop: 75,
  },
  logo: {
    paddingTop: 125,
    padding: 75,
    width: 75,
    height: 75,
    alignSelf: "center",
  },
  selectIndustry: {
    alignSelf: "center",
  },
  options: {
    alignSelf: "center",
    width: 400,
  },
  cancel: {
    alignSelf: "center",
  },
});

const images = {
  options: {
    barber: require("./assets/Barber.png"),
    beautician: require("./assets/Beautician.png"),
    makeup: require("./assets/Makeup.png"),
    nails: require("./assets/Nails.png"),
    esthetician: require("./assets/Esthetician.png"),
    masseuse: require("./assets/Message.png"),
  },
  background: require("./assets/Background.png"),
  logo: require("./assets/splash.png"),
  selectIndustry: require("./assets/selectIndustry.png"),
  cancel: require("./assets/Cancel.png"),
};

const Page = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={images.logo} />
      <Image style={styles.selectIndustry} source={images.selectIndustry} />
      <Image style={styles.options} source={images.options.barber} />
      <Image style={styles.options} source={images.options.beautician} />
      <Image style={styles.options} source={images.options.makeup} />
      <Image style={styles.options} source={images.options.nails} />
      <Image style={styles.options} source={images.options.esthetician} />
      <Image style={styles.options} source={images.options.masseuse} />
      <Image style={styles.cancel} source={images.cancel} />
    </View>
  );
};

export default Page;
