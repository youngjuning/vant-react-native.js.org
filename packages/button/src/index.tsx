import React, { FunctionComponent } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  TouchableHighlightProps,
  ActivityIndicator,
  GestureResponderEvent,
} from 'react-native';
import { useStyle, useIndicatorColor } from './style';

interface ButtonProps extends TouchableHighlightProps {
  children?: React.ReactNode;
  /**
   * @description       Can be set to primary、info、warning、danger
   * @description.zh-CN 类型，可选值为 primary、info、warning、danger
   */
  type?: 'default' | 'primary' | 'info' | 'warning' | 'danger';
  /**
   * @description       Whether to be plain button
   * @description.zh-CN 是否为朴素按钮
   */
  plain?: boolean;
  /**
   * @description       Whether to be hairline button
   * @description.zh-CN 是否使用细边框
   */
  hairline?: boolean;
  /**
   * @description       Whether show loading status
   * @description.zh-CN 是否显示为加载状态
   */
  loading?: boolean;
  /**
   * @description       Loading text
   * @description.zh-CN 加载状态提示文字
   */
  loadingText?: string;
  /**
   * @description       Whether to be square button
   * @description.zh-CN 是否为方形按钮
   */
  square?: boolean;
  /**
   * @description       Whether to be round button
   * @description.zh-CN 是否为圆形按钮
   */
  round?: boolean;
  /**
   * @description       Custom Color
   * @description.zh-CN 按钮颜色
   */
  color?: string;
  /**
   * @description       Can be set to large、small、mini
   * @description.zh-CN 尺寸，可选值为
   */
  size?: 'large' | 'normal' | 'small' | 'mini';
  /**
   * @description        Double press event
   * @description.zh-CN 双击事件，200 毫秒内按压两次被触发，间隔时间可通过 onDoublePress 自定义
   */
  onDoublePress?: (event: GestureResponderEvent) => void;
  /**
   * @description        The time interval (in milliseconds) between when onPress is triggered and when onDoublePress is called.
   * @description.zh-CN 从 onPress 触发到 onDoublePress 被调用的时间间隔（毫秒）。
   */
  delayDoublePress?: number;
}

const Button: FunctionComponent<ButtonProps> = props => {
  const styles = useStyle(props);
  const indicatorColor = useIndicatorColor(props);
  const { style, ...restProps } = props;

  let lastTime = 0;
  let clickCount = 1;
  let timeout = null;
  const _onPress = (event: GestureResponderEvent) => {
    const now = Date.now();
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      props.onPress(event);
      clickCount = 1;
      lastTime = 0;
    }, props.delayDoublePress);
    if (clickCount === 2 && now - lastTime <= props.delayDoublePress) {
      clearTimeout(timeout);
      clickCount = 1;
      lastTime = 0;
      props.onDoublePress(event);
    } else {
      clickCount++;
      lastTime = now;
    }
  };

  return (
    <TouchableHighlight style={[styles.wrapper, style]} {...restProps} onPress={_onPress}>
      <View style={styles.container}>
        {props.loading ? (
          <>
            <ActivityIndicator
              size="small"
              animating
              color={indicatorColor}
              style={styles.indicator}
            />
            {props.loadingText ? <Text style={styles.textStyle}>{props.loadingText}</Text> : null}
          </>
        ) : null}
        {typeof props.children === 'string' ? (
          <Text style={styles.textStyle}>{props.children}</Text>
        ) : (
          props.children
        )}
      </View>
    </TouchableHighlight>
  );
};

Button.defaultProps = {
  type: 'default',
  plain: false,
  hairline: false,
  loading: false,
  square: false,
  round: false,
  size: 'normal',
  color: '',
  onDoublePress: () => {},
  delayDoublePress: 200,
};
Button.displayName = 'Button';

export default Button;
