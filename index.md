---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "戴森球的博客"
  text: "Let’s build from here"
  tagline: 每一行代码都是改变世界的力量
  image:
   src: /mylogo.png
   alt: 头像
  actions:
    - theme: brand
      text: 进入博客
      link: /markdown-examples
    - theme: alt
      text: 开始学习
      link: /api-examples
features:
  - icon: 🐧
    title: Feature A 
    details: 📊hello world,I an daisenqiu!<br>🎓我来自贵州医科大学<br>📋我正在学习前端TypeScript,nodejs<br>👀我喜欢骑行🚴打篮球🏀
  - icon: 🐁
    title: Feature B
    details: 📙分享学习笔记，前端，后端，数据库<br>👾记录面试<br>✅写一些我的碎碎念
  - icon: 🚦
    title: Feature C
    details: ⚠️我将持续施工...<br>🎠26届的牛马<br>😭在象牙塔中也要与时代共同进步
---

:::tip
怎么联系我?
⛄[gitee](https://i.csdn.net/#/user-center/profile?spm=1001.2101.3001.5111)
❄️[github](https://github.com/daisenqiu399)
💃[CSDN](https://blog.csdn.net/2201_75919511?type=blog)
🐭 [稀土掘金](https://juejin.cn/user/3661827143369704)
:::

<video width="100%" height="auto"  autoplay muted controls>
  <source src="./public/lv_0_20240910214339_compressed.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

```md
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello, World!</title>
</head>
<body>
    <h1>Hello, World!</h1>
</body>
</html>
```
:tada: :100:
:sloth:
| Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |


代码聚焦
```js
export default {
  data () {
    return {
      msg: 'Focused!' // [!code focus]
    }
  }
}
```

代码颜色
```js
export default {
  data () {
    return {
      msg: 'Removed' // [!code --]
      msg: 'Added' // [!code ++]
    }
  }
}
```

{{ 1 + 1 }}

<span v-for="i in 3">{{ i }}</span>

---
hello: world
---

<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

## Markdown Content

The count is: {{ count }}

<button :class="$style.button" @click="count++">Increment</button>

<style module>
.button {
  color: red;
  font-weight: bold;
  weight:50px;
  height:50px;
  background-color:green;
}
</style>

