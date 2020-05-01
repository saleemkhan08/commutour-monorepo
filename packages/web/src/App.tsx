import React from "react";
import logo from "./logo.svg";
import Sample from "@thnki/common";
import "./App.css";
import { View, Text } from "react-native"

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Sample>
            <View>
              <Text> Web App Test</Text>
            </View>
          </Sample>
        </p>
      </header>
    </div>
  );
};

export default App;
