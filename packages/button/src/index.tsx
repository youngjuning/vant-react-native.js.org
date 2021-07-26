import React, { FunctionComponent } from 'react';
import { Text, View, TouchableHighlight, TouchableHighlightProps } from 'react-native';
import { useTheme, Theme } from '@vant-react-native/theme';
import getButtonStyle from './style';

interface ButtonProps extends TouchableHighlightProps {
  children: React.ReactNode;
  type?: 'default' | 'primary' | 'info' | 'warning' | 'danger';
}

const Button: FunctionComponent<ButtonProps> = props => {
  const theme = useTheme<Theme>();
  const styles = getButtonStyle(theme, props.type);
  return (
    <TouchableHighlight {...props}>
      <View style={styles.container}>
        <Text style={styles.textStyle}>{props.children}</Text>
      </View>
    </TouchableHighlight>
  );
};

Button.defaultProps = {
  type: 'default',
};
Button.displayName = 'Button';

export default Button;
