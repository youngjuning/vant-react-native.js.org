import React, { Component } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import ButtonDemo from './packages/button/demo';

class App extends Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <ButtonDemo />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default App;
