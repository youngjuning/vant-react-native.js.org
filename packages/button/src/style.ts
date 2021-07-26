import { StyleSheet } from 'react-native';
import { Theme, useTheme } from '@vant-react-native/theme';

export const useStyle = props => {
  const theme = useTheme<Theme>();
  const getBackgroundColor = () => {
    if (props.plain) {
      return theme.white;
    }
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

  const getBorderColor = () => {
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
        return theme['gray-3'];
    }
  };

  const getTextColor = () => {
    if (props.plain) {
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
          return theme['gray-3'];
      }
    } else if (props.type === 'default') {
      return theme.black;
    } else {
      return theme.white;
    }
  };

  const styles = StyleSheet.create({
    contentWrapper: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
    },
    indicator: {
      marginRight: theme['padding-xs'],
    },
    textStyle: {
      color: getTextColor(),
    },
    wrapper: {
      backgroundColor: getBackgroundColor(),
      borderColor: getBorderColor(),
      borderRadius: theme['border-radius-sm'],
      borderWidth: props.hairline ? theme['border-width-hairline'] : theme['border-width-base'],
      opacity: props.disabled ? 0.5 : 1,
      padding: 15,
    },
  });
  return styles;
};
