import { defineConfig, IConfig } from 'dumi';

const isProd =
  process.env.NODE_ENV === 'production';

export default defineConfig({
  title: 'vant-react-native',
  mode: 'site',
  logo: 'https://img01.yzcdn.cn/vant/logo.png',
  favicon: 'https://img01.yzcdn.cn/vant/logo.png',
  resolve: {
    includes: ['docs', 'packages/button', 'packages/icons'],
  },
  base: isProd ? '/vant-react-native': '/',
  publicPath: isProd ? 'https://cdn.jsdelivr.net/gh/youngjuning/vant-react-native@gh-pages/': '/',
  navs: [
    null,
    {
      title: 'GitHub',
      path: 'https://github.com/youngjuning/vant-react-native',
    },
  ]
  // more config: https://d.umijs.org/config
} as IConfig);
