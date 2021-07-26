import React, { FunctionComponent } from 'react';
import { Text, View, TouchableHighlight, TouchableHighlightProps } from 'react-native';
import { useStyle } from './style';

interface ButtonProps extends TouchableHighlightProps {
  children: React.ReactNode;
  type?: 'default' | 'primary' | 'info' | 'warning' | 'danger';
}

const Button: FunctionComponent<ButtonProps> = props => {
  const styles = useStyle(props);
  const { style, ...restProps } = props;
  return (
    <View style={[styles.wrapper, style]}>
      <TouchableHighlight {...restProps}>
        <View style={styles.container}>
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
};
Button.displayName = 'Button';

export default Button;
