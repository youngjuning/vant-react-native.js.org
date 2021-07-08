import { defineConfig, IConfig } from 'dumi';

export default defineConfig({
  title: 'vant-react-native',
  mode: 'site',
  logo: 'https://img01.yzcdn.cn/vant/logo.png',
  favicon: 'https://img01.yzcdn.cn/vant/logo.png',
  resolve: {
    includes: ['docs', 'packages/button', 'packages/icons'],
  },
  navs: [
    null,
    {
      title: 'GitHub',
      path: 'https://github.com/youngjuning/vant-react-native',
    },
  ]
  // more config: https://d.umijs.org/config
} as IConfig);
