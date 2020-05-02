import React, { ReactNode } from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

interface IProps {
  children: ReactNode;
}

const Sample: React.FC<IProps> = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text>{"It's Working with the new changes"}</Text>
      {children}
    </View>
  );
}

Sample.propTypes = {
  children: PropTypes.node
}

export default Sample;
