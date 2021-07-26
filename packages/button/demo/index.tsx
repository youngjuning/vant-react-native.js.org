import React, { Component } from 'react';
import { ScrollView, StyleSheet, Alert, Text } from 'react-native';
import { Button } from 'vant-react-native';

export default class ButtonDemo extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.textStyle}>按钮类型</Text>
        <Button
          style={styles.button}
          type="default"
          onPress={() => {
            Alert.alert('默认按钮');
          }}
        >
          默认按钮
        </Button>
        <Button
          style={styles.button}
          type="primary"
          onPress={() => {
            Alert.alert('主要按钮');
          }}
        >
          主要按钮
        </Button>
        <Button
          style={styles.button}
          type="info"
          onPress={() => {
            Alert.alert('信息按钮');
          }}
        >
          信息按钮
        </Button>
        <Button
          style={styles.button}
          type="warning"
          onPress={() => {
            Alert.alert('警告按钮');
          }}
        >
          警告按钮
        </Button>
        <Button
          style={styles.button}
          type="danger"
          onPress={() => {
            Alert.alert('危险按钮');
          }}
        >
          危险按钮
        </Button>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    marginBottom: 15,
  },
  container: {
    paddingHorizontal: 15,
  },
  textStyle: {
    color: 'white',
    fontSize: 16,
    marginBottom: 10,
  },
});
