import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://transcrab-demo.netlify.app', // 后续可修改为实际域名
  base: '/', // Netlify 使用根路径
  output: 'static',
  trailingSlash: 'always',
});