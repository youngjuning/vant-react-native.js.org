export default () => {
  return [
    'import',
    {
      libraryName: 'vant-react-native',
      customName: (name: string) => {
        if (name === 'icon') {
          return '@vant-react-native/icons';
        }
        return `@vant-react-native/${name}`;
      },
    },
  ];
};
