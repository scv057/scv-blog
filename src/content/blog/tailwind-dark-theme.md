---
title: 'tailwind-dark-theme:用 CSS 变量简化暗黑模式'
description: '频繁写 dark: 修饰符太麻烦了——借助 CSS 变量和 tailwind 插件,快速构建自己的暗黑模式方案。'
pubDate: 'Aug 13 2023'
lang: zh
category: engineering
---

### mission

随着技术的发展,暗黑模式在很多操作系统上逐渐成为了"一等公民",越来越多的网站都支持了暗黑模式。*tailwind* 提供了 `dark` variant 来帮助我们构建自己的暗黑模式。但是,一路使用下来,发现用起来并没有那么流畅,频繁的写 `dark:` 还是比较麻烦的,这时候,我就想或许有什么方法,能够让事情变得简单。

### tailwind darkMode 使用方法

首先我们来看在 tailwind 里面怎么使用 darkMode:

首先我们要在配置文件里设置 darkMode,然后,在需要支持暗色模式的地方,添加 `dark:` 修饰符,并指定暗色模式下的类。

```js
// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  // ...
}
```

```html
<!-- index.html -->

<!-- Dark mode not enabled -->
<html>
<body>
  <!-- Will be white -->
  <div class="bg-white dark:bg-black">
    <!-- ... -->
  </div>
</body>
</html>

<!-- Dark mode enabled -->
<html class="dark">
<body>
  <!-- Will be black -->
  <div class="bg-white dark:bg-black">
    <!-- ... -->
  </div>
</body>
</html>
```

### tailwind 方案的缺点

1. 看起来还是比较方便的,但是当你的项目越来越大,越来越多的地方需要做暗色模式的适配时,事情就开始变得麻烦起来,你就需要不停的重复写 `dark:`;

2. 默认 tailwind 颜色的名字是描述颜色的,`color1 dark:color2` 用起来不如 `btn-color dark:btn-dark-color` 清晰;

因此我们要解决几个问题:

1. 减少 repeat

2. 让颜色名更加功能化

3. 保持兼容

### tailwind DarkMode 原理

So,怎么解决才好呢?不如我们先看下原理,看下 `dark` variant 是怎么实现的。F12 打开控制台,跳转到相应的位置,我们可以发现:

```css
:is(.dark .dark\:bg\-black) {
	...
}
```

可以看到原理很简单,当遇到 `dark:className` 的时候生成 `:is(.dark .dark\:className)` 这样的一条规则就好了,当祖先中有带 "dark" 的 class 时,这条规则就命中开始生效。了解了这个原理之后,我们就可以很轻松的实现我们自己的 theme,比如粉色主题什么的,通过 plugin 去注册我们自己的 variant。

```js
// plugin.js

plugin(function({addVariant}){
  addVariant('pink', [`:is(.pink .pink\:&)`]) // class Mode下
  addVariant('pink', [`:is([data='pink'] .pink\:&)`]) // 自定义选择器下
  addVariant('pink', [`@media (prefers-color-scheme: pink)`]) // 默认media模式下
})
```

### 使用 css 变量

到这里,我们还是没有解决需要重复写 `dark:` 的问题,有没有方法,只用写一遍就行!!答案呼之欲出,CSS Variable,我们只需要在切换主题的时候修改变量的值。下面是大致的实现过程。

```js
// plugin.js

// 借助tailwind插件首先我们需要一份color scheme
const colors = {
  "light-background-color": "white",
  "dark-background-color": "#0e0027",
};

// 然后将 colors 转换成css变量
const v = toCssVariable(colors);
/**
  v: {
  '.light': {'--bg-color': 'white'},
  '.dark': {'--bg-color': '#0e0027'}
}
  **/

// 利用plugin或者直接在css文件中
plugin(function({addUtilities}){
  addUtilities(v)
})
```

```css
/* global.css */
@layer base {
  .dark: {
  --bg-color: '#0e0027'
  }
  .light: {
  --bg-color: 'white'
  }
}
```

```tsx
// theme.tsx
const Theme = (props)=>{
  const theme = useState('light');

  return <body className={theme}></body>
}
```

### 总结

[GitHub]: https://github.com/scv057/TailwindCSS-dark-theme

通过 CSS 变量和 tailwind 插件的能力,我们可以快速的构建我们自己的暗黑模式,我也把插件放在 [GitHub][GitHub] 上了,你也可以 npm 下载下来体验一下。

```shell
npm i @andrew_xie/tailwind-dark-theme
```

如果你有任何问题欢迎在 [GitHub][GitHub] 上面开 issue,来讨论。
