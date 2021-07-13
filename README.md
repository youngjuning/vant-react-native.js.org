# `vant-react-native`

## Install

```sh
yarn add vant-react-native
```

Or

```sh
npm install vant-react-native
```

## Usage

```tsx
import React, { Component } from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import { Icon } from 'vant-react-native';

type IconNameType = React.ComponentProps<typeof Icon>['name'];

export default class IconList extends Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <View style={{ flexWrap: 'wrap', flexDirection: 'row' }}>
            {data.map((item, index) => {
              const paddingLength = data.length % 4 || 4;
              return (
                <View
                  key={item}
                  style={{
                    width: '25%',
                    marginBottom: index < data.length - paddingLength ? 40 : 0,
                    alignItems: 'center',
                  }}
                >
                  <Icon name={item} size={18}/>
                  <Text style={{ color: '#646566', marginTop: 10,fontSize:10 }}>{item}</Text>
                </View>
              );
            })}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const data: IconNameType[] = [
  'location-o',
  'like-o',
  'star-o',
  'phone-o',
  'setting-o',
  'fire-o',
  'coupon-o',
  'cart-o',
  'shopping-cart-o',
  'cart-circle-o',
  'friends-o',
  'comment-o',
  'gem-o',
  'gift-o',
  'point-gift-o',
  'send-gift-o',
  'service-o',
  'bag-o',
  'todo-list-o',
  'balance-list-o',
  'close',
  'clock-o',
  'question-o',
  'passed',
];
```
