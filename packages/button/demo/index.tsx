/* eslint-disable no-alert */
import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
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
            alert('默认按钮');
          }}
        >
          默认按钮
        </Button>
        <Button
          style={styles.button}
          type="primary"
          onPress={() => {
            alert('主要按钮');
          }}
        >
          主要按钮
        </Button>
        <Button
          style={styles.button}
          type="info"
          onPress={() => {
            alert('信息按钮');
          }}
        >
          信息按钮
        </Button>
        <Button
          style={styles.button}
          type="warning"
          onPress={() => {
            alert('警告按钮');
          }}
        >
          警告按钮
        </Button>
        <Button
          style={styles.button}
          type="danger"
          onPress={() => {
            alert('危险按钮');
          }}
        >
          危险按钮
        </Button>
        <Text style={styles.textStyle}>朴素按钮</Text>
        <Button style={styles.button} type="primary" plain>
          朴素按钮
        </Button>
        <Button style={styles.button} type="info" plain>
          朴素按钮
        </Button>
        <Text style={styles.textStyle}>细边框</Text>
        <Button style={styles.button} type="primary" plain hairline>
          细边框按钮
        </Button>
        <Button style={styles.button} type="info" plain hairline>
          细边框按钮
        </Button>

        <Text style={styles.textStyle}>禁用状态</Text>
        <Button style={styles.button} type="primary" disabled>
          禁用状态
        </Button>
        <Button style={styles.button} type="info" disabled>
          禁用状态
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
    paddingHorizontal: 10,
  },
  textStyle: {
    color: '#d3d3d3',
    fontSize: 16,
    marginVertical: 10,
  },
});
