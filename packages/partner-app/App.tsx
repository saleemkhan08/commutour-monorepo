import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Sample from "@thnki/common";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
export default function App() {
  return (
    <View style={styles.container}>
      <Sample>
        <Text>Partner App Test</Text>
      </Sample>
    </View>
  );
}


