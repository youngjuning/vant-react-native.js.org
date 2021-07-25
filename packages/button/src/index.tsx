import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { themes } from '@vant-react-native/themes';

console.log('defaultTheme', themes);

export default class Button extends Component {
  render() {
    return (
      <View>
        <Text style={{ fontSize: 20, color: '#007fff' }}> WIP: Button Component.</Text>
      </View>
    );
  }
}
