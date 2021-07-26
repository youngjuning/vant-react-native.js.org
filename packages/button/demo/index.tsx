/* eslint-disable no-alert */
import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button } from 'vant-react-native';

export default class ButtonDemo extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.textStyle}>按钮类型</Text>
        <Button style={styles.button} type="default" onPress={() => alert('默认按钮')}>
          默认按钮
        </Button>
        <Button style={styles.button} type="primary" onPress={() => alert('主要按钮')}>
          主要按钮
        </Button>
        <Button style={styles.button} type="info" onPress={() => alert('信息按钮')}>
          信息按钮
        </Button>
        <Button style={styles.button} type="warning" onPress={() => alert('警告按钮')}>
          警告按钮
        </Button>
        <Button style={styles.button} type="danger" onPress={() => alert('危险按钮')}>
          危险按钮
        </Button>
        <Text style={styles.textStyle}>朴素按钮</Text>
        <Button style={styles.button} type="primary" plain onPress={() => alert('朴素按钮')}>
          朴素按钮
        </Button>
        <Button style={styles.button} type="info" plain>
          朴素按钮
        </Button>
        <Text style={styles.textStyle}>细边框</Text>
        <Button
          style={styles.button}
          type="primary"
          plain
          hairline
          onPress={() => alert('细边框按钮')}
        >
          细边框按钮
        </Button>
        <Button style={styles.button} type="info" plain hairline>
          细边框按钮
        </Button>

        <Text style={styles.textStyle}>禁用状态</Text>
        <Button style={styles.button} type="primary" disabled>
          禁用状态
        </Button>
        <Button style={styles.button} type="info" plain disabled>
          禁用状态
        </Button>

        <Text style={styles.textStyle}>加载状态</Text>
        <Button
          style={styles.button}
          type="primary"
          loading
          loadingText="加载中..."
          onPress={() => alert('加载状态')}
        />
        <Button style={styles.button} type="warning" plain loading loadingText="加载中..." />
        <Button style={styles.button} type="default" loading loadingText="加载中..." />

        <Text style={styles.textStyle}>按钮形状</Text>
        <Button style={styles.button} type="primary" round onPress={() => alert('圆形按钮')}>
          圆形按钮
        </Button>
        <Button style={styles.button} type="info" square>
          方形按钮
        </Button>
        <Text style={styles.textStyle}>按钮尺寸</Text>
        <View
          style={{ justifyContent: 'space-around', flexDirection: 'row', alignItems: 'center' }}
        >
          <Button
            style={styles.button}
            size="large"
            type="primary"
            onPress={() => alert('大号按钮')}
          >
            大号按钮
          </Button>
          <Button style={styles.button} type="primary" onPress={() => alert('普通按钮')}>
            普通按钮
          </Button>
          <Button
            style={styles.button}
            type="primary"
            size="small"
            onPress={() => alert('大号按钮')}
          >
            小号按钮
          </Button>
          <Button
            style={styles.button}
            type="primary"
            size="mini"
            onPress={() => alert('迷你按钮')}
          >
            迷你按钮
          </Button>
        </View>
        <Text style={styles.textStyle}>自定义颜色</Text>
        <Button style={styles.button} color="#7232dd">
          单色按钮
        </Button>
        <Button style={styles.button} color="#7232dd" plain>
          单色按钮
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
