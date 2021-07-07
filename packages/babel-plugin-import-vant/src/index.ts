import camelCase from 'camelcase';

export default (): any[] => [
  [
    'import',
    {
      libraryName: 'vant-react-native',
      customName: (name: string) => {
        if (name === 'icon') {
          return '@vant-react-native/icons';
        }
        if (name.match(/^van-icon-/)) {
          return `@vant-react-native/icons/lib/${camelCase(name, { pascalCase: true })}`;
        }
        return `@vant-react-native/${name}`;
      },
    },
    'vant-react-native',
  ],
  [
    'import',
    {
      libraryName: '@vant-react-native/icons',
      customName: (name: string) => {
        return `@vant-react-native/icons/lib/${camelCase(name, { pascalCase: true })}`;
      },
    },
    '@vant-react-native/icons',
  ],
];
