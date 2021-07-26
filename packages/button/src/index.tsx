import React, { FunctionComponent } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  TouchableHighlightProps,
  ActivityIndicator,
} from 'react-native';
import { useStyle, useIndicatorColor } from './style';

interface ButtonProps extends TouchableHighlightProps {
  children?: React.ReactNode;
  type?: 'default' | 'primary' | 'info' | 'warning' | 'danger';
  plain?: boolean;
  hairline?: boolean;
  disabled?: boolean;
  loading?: boolean;
  loadingText?: string;
  square?: boolean;
  round?: boolean;
  size?: 'large' | 'normal' | 'small' | 'mini';
}

const Button: FunctionComponent<ButtonProps> = props => {
  const styles = useStyle(props);
  const indicatorColor = useIndicatorColor(props);
  const { style, ...restProps } = props;

  return (
    <TouchableHighlight style={[styles.wrapper, style]} {...restProps}>
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
  disabled: false,
  loading: false,
  square: false,
  round: false,
  size: 'normal',
};
Button.displayName = 'Button';

export default Button;
