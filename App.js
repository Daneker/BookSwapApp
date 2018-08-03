import React, { Component } from "react";
import { AppLoading, Font } from "expo";
import { View } from "react-native";
import Router from "./src/router";

export default class App extends Component {
  state = {
    loaded: false
  };
  componentWillMount() {
    this._loadAssetsAsync();
  }
  _loadAssetsAsync = async () => {
    await Font.loadAsync({
      Montserrat: require("./src/assets/fonts/Montserrat-Regular.ttf"),
      MontserratLight: require("./src/assets/fonts/Montserrat-Light.ttf"),
      MontserratBold: require("./src/assets/fonts/Montserrat-SemiBold.ttf")
    });
    this.setState({ loaded: true });
  };

  render() {
    if (!this.state.loaded) {
      return <AppLoading />;
    }
    return (
      <View style={{flex: 1}}>
        <Router />
      </View>
    );
  }
}
