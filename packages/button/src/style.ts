import { StyleSheet } from 'react-native';
import { Theme } from '@vant-react-native/themes';

const getButtonStyle = (theme: Theme, type: string) => {
  const getBackgroundColor = () => {
    switch (type) {
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
      borderColor: getBackgroundColor(),
      borderWidth: 1,
      justifyContent: 'center',
      padding: 15,
    },
    textStyle: {
      color: type === 'default' ? theme.black : theme.white,
    },
  });
  return styles;
};
export default getButtonStyle;
