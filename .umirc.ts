import { defineConfig, IConfig } from 'dumi';

const isProd =
  process.env.NODE_ENV === 'production' && process.env.PREVIEW_PR !== "true";

export default defineConfig({
  title: 'vant-react-native',
  mode: 'site',
  logo: 'https://img01.yzcdn.cn/vant/logo.png',
  favicon: 'https://img01.yzcdn.cn/vant/logo.png',
  base: isProd ? '/vant-react-native': '/',
  publicPath: isProd ? 'https://cdn.jsdelivr.net/gh/youngjuning/vant-react-native@gh-pages/': '/',
  exportStatic: {},
  hash: true,
  scripts: ['https://s9.cnzz.com/z_stat.php?id=1280093214&web_id=1280093214'],
  styles: ['a[title=站长统计] { display: none; }'],
  metas: [
    {
      name: 'keywords',
      content: 'vant, react-native, vant-react-native',
    },
    {
      name: 'description',
      content: '轻量、可靠的 React Native 组件库',
    },
  ],
  navs: [
    null,
    {
      title: 'GitHub',
      path: 'https://github.com/youngjuning/vant-react-native',
    },
  ]
  // more config: https://d.umijs.org/config
} as IConfig);
