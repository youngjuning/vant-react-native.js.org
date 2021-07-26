import React, { FunctionComponent } from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  TouchableHighlightProps,
  ActivityIndicator,
} from 'react-native';
import { useStyle } from './style';

interface ButtonProps extends TouchableHighlightProps {
  children: React.ReactNode;
  type?: 'default' | 'primary' | 'info' | 'warning' | 'danger';
  plain?: boolean;
  hairline?: boolean;
  disabled?: boolean;
}

const Button: FunctionComponent<ButtonProps> = props => {
  const styles = useStyle(props);
  const { style, ...restProps } = props;
  return (
    <View style={[styles.wrapper, style]}>
      <TouchableHighlight {...restProps}>
        <View style={styles.contentWrapper}>
          <ActivityIndicator size="small" color="#00ff00" style={styles.indicator} />
          {typeof props.children === 'string' ? (
            <Text style={styles.textStyle}>{props.children}</Text>
          ) : (
            props.children
          )}
        </View>
      </TouchableHighlight>
    </View>
  );
};

Button.defaultProps = {
  type: 'default',
  plain: false,
  hairline: false,
  disabled: false,
};
Button.displayName = 'Button';

export default Button;
