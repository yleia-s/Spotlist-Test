import React from "react";
import { View, Image, StyleSheet } from "react-native";

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
      <Image style={{ width: 150, height: 150 }} source={images.logo} />
      <Image style={{ height: 50 }} source={images.options.selectIndustry} />
      <Image style={styles.stretch} source={images.options.barber} />
      <Image style={styles.stretch} source={images.options.beautician} />
      <Image style={styles.stretch} source={images.options.makeup} />
      <Image style={styles.stretch} source={images.options.nails} />
      <Image style={styles.stretch} source={images.options.esthetician} />
      <Image style={styles.stretch} source={images.options.masseuse} />
      <Image
        style={{ flexDirection: "column", justifyContent: "center" }}
        source={images.cancel}
      />
    </View>
  );
};

export default Page;

