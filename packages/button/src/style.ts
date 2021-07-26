import { StyleSheet } from 'react-native';
import { Theme, useTheme } from '@vant-react-native/theme';

export const useStyle = props => {
  const theme = useTheme<Theme>();
  const getBackgroundColor = () => {
    switch (props.type) {
      case 'primary':
        return theme['success-color'];
      case 'info':
        return theme['primary-color'];
      case 'warning':
        return theme['warning-color'];
      case 'danger':
        return theme['danger-color'];
      default:
        return theme.white;
    }
  };
  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      backgroundColor: getBackgroundColor(),
      padding: 15,
    },
    textStyle: {
      color: props.type === 'default' ? theme.black : theme.white,
    },
    wrapper: {
      borderColor: props.type === 'default' ? theme['gray-3'] : getBackgroundColor(),
      borderRadius: 2,
      borderWidth: 1,
    },
  });
  return styles;
};
