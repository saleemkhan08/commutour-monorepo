import React, { ReactElement } from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

const Sample = ({ children }): ReactElement => {
  return (
    <View style={styles.container}>
      <Text>{"It's Actually Working Now"}</Text>
      {children}
    </View>
  );
}

export default Sample;
