import React, { Component } from 'react';
import { Text, SafeAreaView } from 'react-native';
import { Icon } from 'vant-react-native';

export default class App extends Component {
  render() {
    return (
      <SafeAreaView>
        <Text> textInComponent </Text>
        <Icon name="add" />
      </SafeAreaView>
    );
  }
}
