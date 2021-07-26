import { StyleSheet } from 'react-native';
import { Theme, useTheme } from '@vant-react-native/theme';
import Button from './index';

type ButtonProps = React.ComponentProps<typeof Button>;

export const useIndicatorColor = (props: ButtonProps): string => {
  const theme = useTheme<Theme>();
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
        return theme.black;
    }
  } else if (props.type === 'default') {
    return theme.black;
  } else {
    return theme.white;
  }
};

export const useStyle = (props: ButtonProps) => {
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

  const getBorderRadius = () => {
    if (props.round) {
      return theme['border-radius-max'];
    }
    if (props.square) {
      return 0;
    }
    return theme['border-radius-sm'];
  };

  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      backgroundColor: getBackgroundColor(),
      borderColor: getBorderColor(),
      borderRadius: getBorderRadius(),
      borderWidth: props.hairline ? theme['border-width-hairline'] : theme['border-width-base'],
      flexDirection: 'row',
      justifyContent: 'center',
      opacity: props.disabled ? 0.5 : 1,
      padding: 15,
    },
    indicator: {
      marginRight: theme['padding-xs'],
    },
    textStyle: {
      color: getTextColor(),
    },
    wrapper: {
      borderRadius: getBorderRadius(),
    },
  });
  return styles;
};
