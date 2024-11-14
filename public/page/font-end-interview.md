# 前端八股总结
⚠️本项目将持续施工,如果你发现错误，欢迎给我提pr<br>
🐸本文是前端八股总结，问题来自面经，牛客群友，以及常见前端面试问题，由于作者水平有限，不对内容准确性保证<br>
🌟参考CSDN的很多作者（如侵删），参考vue官网、mdn,菜鸟教程，以及阿里云开发社区，致以崇高的敬意<br>
💢文章分为html,css,JavaScript,axios,工程化和计算机网络六部分<br>
🗽拿到喜欢的offer

# html

块级元素：块状就是元素显示为矩形，主要用于网页色布局和网页结构的搭建

```md
<address> //定义地址
<caption> //定义表格标题
<dd> //定义列表中定义条目
<div> //定义文档中分区或节
<dl> //定义列表
<dt> //定义列表中的项目
<fieldset> //定义一个框架集
<form> //定义表单
<h1> //定义最大标题
<h2> //定义副标题
<h3> //定义标题
<h4> //定义标题
<h5> //定义标题
<h6> //定义最小标题
<hr> //创建一条水平线
<legend> //元素为fieldset元素自定义标题
<li> //标签定义列表项目
<noframes>  //为那些不支持框架的浏览器显示文本，于frameset元素内部
<noscript> //定义在脚本未被执行时的替代内容
<ol> //定义有序列表
<ul>  //定义无序列表
<p> //定义标签段落
<pre> //定义预格式化文本
<table> //标签定义HTML表格
<tbody> //定义标签表格主体
<td> //表格中的标准单元格
<tfoot> //定义表格的页脚
<th>  //定义表格单元格
<thead> //标签定义表格的表头
<tr>  //定义表格中的行
```



行内元素：行内元素可以不设置宽和高，但可以与其他行内元素位于同一行

```md
<a>  //标签可以定义锚
<abbr> //表示一个缩写形式
<acronym> //定义只取首字母缩写
<b>  //字体加粗
<bdo>  //可覆盖默认的文本方向
<big>  //大号字体加粗
<br>  //换行
<cite>  //引用进行定义
<code>  //代码块
<dfn> //定义一个定义项目
<em>  //定义为强调的内容
<i>  //斜体文本效果
<kbd>  //定义键盘文本
<label>  //标签为input元素定义标注
<q> //定义短引用
<samp>  //定义样本文本
<select>  //定义单选或多选菜单
<small>  //呈现小号字体效果
<span>  //组合文档中的行内元素
<strong> //加粗
<sub>  //定义下标文本
<sup>  //定义上标文本
<textarea>  //多行文本输入控件
<tt>  //打字机或者等宽的文本效果
<var>  //定义变量
```



行内块元素：可以自由设置宽高，也可以在一行中放置多个行内块元素

```md
<button> //普通按钮
<input>   //创建表单元素
<textarea>  //创建表单文本域
<img>  //插入图片
```



元素显示模式转换

转换为块级元素

```css
a{
    display:block;
}
```

转化为行内元素

```css{
div{
    display:inline;
}
```

转化为行内块元素

```css{
span{
    display:inline-block;
}
```



## HTML新特性

语义化标签：header,footer,nav,aside,article,section

本地存储：localStorage和sessionStorage

多媒体标签：audio ,video

新的表单控件：required,placeholder,autofocus,autocomplete,multiple

input类型：color,date,email,month,number,search,tel,time,url,week



## 页面头部meta标签有什么作用

- 如果设置了 `name` 属性，`<meta>` 元素提供的是文档级别（*document-level*）的元数据，应用于整个页面。
- 如果设置了 `http-equiv` 属性，`<meta>` 元素则是编译指令，提供的信息与类似命名的 HTTP 头部相同。
- 如果设置了 `charset`属性，`<meta>` 元素是一个字符集声明，告诉文档使用哪种字符编码。
- 如果设置了 `itemprop` 属性，`<meta>` 元素提供用户定义的元数据。



## SEO

**首页description写法**，一般是将首页的标题、关键词和一些特殊栏目的内容融合到里面，写成简单的介绍。

**文章页keywords写法，**建议大家提取文章中的关键词，比如我的文章主要是讲SEO优化的，那么我关键词肯定是SEO优化，如果你觉得你提取关键词的能力较差，也可以选择文章中出现比较多的词来作为关键词，比如我现在写的内容是关于title、keywords、description的，那我的文章页关键词就是这3个。



## label标签有什么作用

`<label>` 元素（标签）表示用户界面中某个元素的说明。

```html
<div class="preference">
  <label for="cheese">Do you like cheese?</label>
  <input type="checkbox" name="cheese" id="cheese" />
</div>

<div class="preference">
  <label for="peas">Do you like peas?</label>
  <input type="checkbox" name="peas" id="peas" />
</div>

```


# css

## 选择器

ID选择器：#id

类别选择器;.class

元素选择器：element

伪类元素选择骑;:link,:visited,:hover,:active,:focus

属性选择器：[attribute]

后代选择器：A>B

兄弟选择器：A+B,A~B

通用选择器;*

## 优先级顺序
:::info
!important>内联样式>ID选择器>类选择器/属性选择器/伪类选择器>元素选择器/伪元素选择器>关系选择器/同用选择器>继承
:::


example

```css
// 1. 使用ID选择器:
#main-nav {
  background-color: blue;
}

// 2. 元素选择器：
div{
  width:100%;
  height:100%;
}

// 3. 使用类别选择器:
.button {
  background-color: red;
}

// 4. 使用属性选择器:
a[href^="https://"] {
  color: green;
}

// 5. 使用伪类选择器:
a:hover {
  color: yellow;
}

// 6. 使用后代选择器:
.main-nav ul {
  padding: 0;
}

// 7. 使用子元素选择器:
.main-nav > ul {
  list-style-type: none;
}

// 8. 使用兄弟选择器:
h1 + p {
  font-size: 16px;
}

// 9. 使用通用选择器:
* {
  box-sizing: border-box;
}

```



## 盒模型

🌍css盒子模型是网页布局的基础，可以将页面上所有元素看做成一个矩形的盒子，这些盒子由四个部分组成，内容区(content),内边距(padding),边框(boder),外边距（margin),css盒子模型分为标准盒模型和怪异盒模型，这两个概念与盒子模型的计算方式有关

在css3中，通过box-sizing属性可以控制盒子模型的计算方式，CSS3中的box-sizing属性有三个值，content-box,border-box和inherit

`1`、content-box:默认值，模型的宽度和高度只包括内容，不包括边框和内边距(标准盒模型)

`2`、border-box:模型的宽度和高度包括内容，内边距和边框，但不包括外边距(怪异盒模型)

`3`、inherit:继承父元素的box-sizing值

## BFC和IFC

BFC和IFC是css布局中的概念，他们分别代表块级格式化上下文和内联格式上下文

BFC是块级格式上下文，它时一个独立的布局环境，其中块级盒子垂直排列，在BFC中，盒子的垂直边距会发生折叠，浮动元素也会参与高度计算

IFC是行内格式化上下文，它是一种水平的格式化上下文，其中行内级盒子从左到右水平排列，直到一行被填满，然后换行，在IFC中，盒子的垂直对齐方式由vertical-align属性决定，行高由包含该行内级盒子中最高的盒子决定



### BFC的生成规则有如下几条

根元素即为一个BFC

浮动元素(float不为nne),绝对定位元素(position为absolute或fixed)，display值为inline-block,table-caption,flex,inline-flex,grid,inline-grid的元素，overflow值不为visiable的块元素

```css
// HTML 代码为:
<div class="container">
  <div class="box"></div>
  <div class="box"></div>
</div>

// CSS 代码为：
.container {
  border: 1px solid black;
  overflow: hidden;
}

.box {
  width: 100px;
  height: 100px;
  margin: 10px;
  float: left;
  background-color: lightblue;
}

```



📢:应用场景，解决浮动元素引起的高度塌陷问题，防止垂直外边距重叠，创建自适应两栏布局，实现多列文本布局，扩展，如果页面布局造成了浮动塌陷问题，除了使用clearfix技术强制容器在浮动元素之后换行，还可以设置一个触发BFC的样式，就是上面那个列子中设置了overflow:hideen的样式



IFC（内联格式化上下文）

IFC指的是一个内联元素渲染区域，它时一种水平的格式化上下文，具有一定的隔离特性，同一个IFC内部的元素在渲染时相互影响，但外部元素不产生任何影响，在IFC中，盒子从左到右排列，直到一行被填满，然后换行，行内级盒子的垂直对齐方式由vertical-align属性决定，行高由包含该行内级盒子最高的盒子决定

IFC中的布局规则包括

根元素即为一个IFC,inline-block元素,表格单元格(table-cell),display值为inline-flex,inline-grid的元素

example

```css
// HTML 代码为:
<div class="container">
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
</div>

// CSS 代码为:
.container {
  border: 1px solid black;
  width: 300px;
}

.box {
  display: inline-block;
  width: 100px;
  height: 100px;
  margin: 10px;
  background-color: lightblue;
}

```

解释，这里没有用flex布局

📢:应用场景：内联元素的居中对齐，解决内联元素的空隙问题，禁止文本被浮动元素覆盖，实现多行文本的两端对齐布局



页面布局：

**静态布局**：常见于pc端，是给页面设定固定的宽高且居中布局，web网站开发的单位一般用px<br>

**浮动布局**：浮动布局是调用浮动属性来使得元素向左或向右移动从而共享一行，直到碰到包含框或者另一个浮动框。浮动元素是脱离文档流的，不占据页面空间，但不脱离文本流，且浮动会将行内元素和行内块元素转化为块元素<br>

**定位布局**：定位布局是给元素设置 position 属性从而控制元素显示在不规则的位置，偏向于单个元素定位操作。<br>
**栅格布局**：栅格布局也被称为网格布局，它是一种新兴的布局方式，常用的有瀑布流等。它的布局很简单，就是把一个区域划分为一个个的格子排列好，再把需要的元素填充进去。<br>
**table布局**：table 布局是在父元素使用 display:table; 子元素使用 display:table-row或 display:table-cell; 子元素会默认自动平均划分父元素的空间。<br>
**弹性（flex）布局**：flexible 模型又被称为 flexbox，它不像栅格布局可以同时处理行跟列，只能处理单行或者当列，是一维的布局模型。<br>
**圣杯布局**：圣杯布局跟双飞翼的布局区别在于中间是否有包括两边的区域，圣杯布局是没有的，两边或者一边非主要部分填充父元素的 padding；而双飞翼布局是有的，但多了一层 dom 节点，非主要部分用的是 center 部分的 margin 空间。<br>
**自适应布局**：总结的来说就是创建多个静态布局，每个布局对应一个屏幕的分辨率范围，每个静态布局页面的元素大小不会因为窗口的改变而变化，除非从一个静态布局变到另外一个布局，不然在同一设备下还是固定的布局。常用的方式有使用 CSS 的 @media 媒体查询，也有高成本的 JS 进行设计开发，或者使用第三方开源框架 bootstrap，这个能够很好的支持多个浏览器。<br>
**流式布局**：流式布局也叫百分比布局（也有叫非固定像素布局），是页面中的元素根据屏幕分辨率自动进行适配调整，页面元素大小会发生变化，但是整体布局不会发生变化，始终都是满屏显示。它使用的是百分比定义宽，但高一般会被固定住，这种布局在早期是为了适应不同尺寸的PC屏幕，但现在在移动端比较常见。<br>
**响应式布局**：响应式通过检测视口分辨率判断是pc端、平板还是手机，针对不同的客户端在客户端做处理，来展示不同的布局和内容从而达到令人满意的效果，屏幕大小的变化会导致元素的位置和大小都改变，可以说是流式布局和自适应布局的结合体，一套界面布局即可适应所有不同的尺寸和终端，可想而知设计考虑的比自适应复杂的多。<br>



## flex:1 到底代表什么 

​    是一个简写方式，相当于同时设置了 `flex-grow: 1`、`flex-shrink: 1`、`flex-basis: 0` 这三个属性。满足项目的自适应需求。



## 事件委托

:::danger
由此，我们正式介绍事件委托，事件委托是利用事件的冒泡原理来实现的，事件从最内层的节点开始，然后逐步向上传播事件，

举个例子：页面上有这么一个节点树，div>ul>li;比如给最里面的li加一个click点击事件，那么这个事件就会一层一层的往外执行，执行顺序li>ul>div，有这样一个机制，那么我们给最外面的div加点击事件，那么里面的ul，li做点击事件的时候，都会冒泡到最外层的div上。
:::

## 伪类和伪元素

`1`、伪类和伪元素都是CSS选择器，它们用来选择文档树以外的元素，或者选择文档树中无法用简单选择器表示的状态。但它们之间有一些重要的区别。<br>
`2`、伪类用来选择元素的特殊状态。例如，:hover伪类用来选择鼠标悬停在其上的元素，:focus伪类用来选择获得焦点的元素。伪类通常用于添加一些特殊的样式，以反映元素的状态。<br>
`3`、伪元素用来创建一些不在文档树中的元素，并为其添加样式。例如，::before伪元素用来在一个元素之前插入内容，::after伪元素用来在一个元素之后插入内容。伪元素通常用于添加装饰性内容。<br>
🔫**总之，伪类和伪元素的主要区别在于它们的作用对象不同。伪类作用于已经存在的元素，而伪元素创建新的元素。**



## 长度单位

`1`、px、em和rem都是CSS中的长度单位，但它们之间有一些重要的区别。<br>
`2`、px（像素）是一个绝对长度单位，它表示屏幕上的一个物理像素。由于不同设备的屏幕分辨率不同，所以1px在不同设备上可能表示不同的物理尺寸。<br>
`3`、em是一个相对长度单位，它相对于当前元素的字体大小。例如，如果一个元素的字体大小为16px，那么1em就等于16px。em单位常用于设置元素的字体大小、边距和填充等属性。<br>
`4`、rem（root em）也是一个相对长度单位，它相对于根元素（元素）的字体大小。例如，如果根元素的字体大小为16px，那么1rem就等于16px。rem单位常用于实现响应式布局。<br>

## position属性

`static`:默认值，元素按照正常文档流进行定位<br>

`relative`:元素按照正常文档流进行定位，但可以通过top,bottom和left属性相对于其正常位置进行偏移<br>

`absolute`:元素脱离正常得文档流，相对于最近得非static定位祖先元素进行定位，如果没有非static定位得祖先元素，则相对于初始包含块进行定位<br>

`fixed`:元素脱离正常文档流，相对于浏览器窗口进行定位<br>

`sticky`:元素在正常文档流中，但可以根据用户得滚动固定在指定位置<br>



## 让一个元素水平垂直居中🍏

`1`、使用flex布局，可以在父元素上设置display:flex,并且使用align-items:center和justify-content:center,来实现水平垂直居中<br>

`2`、使用绝对定位和负边距，可以在父元素上设置position:relative,然后在子元素上设置position:absolute;并且使用top:50%,left:50%和负边距（例如margin-top:-10px;margin-left:-10px；)来实现水平垂直居中<br>

`3`、使用绝对定位和transform,可以在父元素上设置position:relative,然后在子元素上设置position:absolute,并且使用top:50%,left:50%,和transform:translate(-50%,50%)来实现水平平垂直居中<br>

`4`、使用表格布局：可以在父元素上设置 display: table-cell; vertical-align: middle; text-align:center; 来实现水平垂直居中。<br>
`5`、使用网格布局：可以在父元素上设置 display: grid;，并且使用 place-items: center; 来实现水平垂直居中。<br>
`6`、使用行内块元素和文本对齐：可以在父元素上设置 text-align: center; 和 line-height: 200px;（其中200px是父元素的高度），然后在子元素上设置 display: inline-block; vertical-align: middle; 来实现水平垂直居中。<br>

## 隐藏页面中某个元素

使用 display: none;：这会将元素从页面布局中完全移除，就像它从未存在过一样。<br>
使用 visibility: hidden;：这会将元素隐藏，但它仍然占据页面布局中的空间。<br>
使用 opacity: 0;：这会将元素的透明度设置为0，使其完全透明，但它仍然占据页面布局中的空间，并且仍然可以与用户交互（例如，可以点击）。<br>
使用 position: absolute; 和 left: -9999px;：这会将元素移出屏幕外，使其不可见。<br>

## 背景图像
```css

`background-clip` 设置元素的背景（背景图片或颜色）是否延伸到边框、内边距盒子、内容盒子下面。

background-clip: border-box;

background-clip: padding-box;

background-clip: content-box;

background-clip: text;
color: transparent;

**`background-image`** 属性用于为一个元素设置一个或者多个背景图像。

background-image: url("../../media/examples/lizard.png");

background-image: linear-gradient(rgba(0, 0, 255, 0.5), rgba(255, 255, 0, 0.5)),
                  url("../../media/examples/lizard.png");

```



## 精灵图和 base64 的区别是什么？

`精灵图`：把多张小图整合到一张大图上，利用定位的一些属性把小图显示在页面上，
当访问页面可以减少请求，提高加载速度<br>
`base64`：传输 8Bit 字节代码的编码方式，把原本二进制形式转为 64 个字符的单位，
最后组成字符串<br>
base64 是会和 html css 一起下载到浏览器中，减少请求，减少跨域问题，但是一些
低版本不支持，若 base64 体积比原图片大，不利于 css 的加载。

## svg 格式了解多少？

SVG 意为可缩放矢量图形（Scalable Vector Graphics）。<br>

SVG 是一种用于描述二维图形的 XML 标记语言，与位图图像不同，SVG图像以文本形式存储，并且可以缩放到任意大小而不会失真，因为它们基于数学描述而不是像素。<br>

SVG 图形是可伸缩的，无需分辨率依赖，这意味着它们可以在不失真的情况下被放大或缩小。<br>

SVG 广泛应用于网页设计、图标制作、数据可视化和其他图形相关的领域<br>

## 过渡和动画

```css
p {
  animation-duration: 3s;
  animation-name: slidein;
}

@keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%;
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}


```

增加关键帧

```css
75% {
  font-size: 300%;
  margin-left: 25%;
  width: 150%;
}

```

重复动画

```css
p {
  animation-duration: 3s;
  animation-name: slidein;
  animation-iteration-count: infinite;
}

```



来回运动

```css
p {
  animation-duration: 3s;
  animation-name: slidein;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}

```



## 阴影

**`box-shadow`** 属性用于在元素的框架上添加阴影效果。你可以在同一个元素上设置多个阴影效果，并用逗号将他们分隔开。该属性可设置的值包括阴影的 X 轴偏移量、Y 轴偏移量、模糊半径、扩散半径和颜色。

```CSS
box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, .2);
```



# JavaScript

ES6，全称 ECMAScript 6.0，是 JavaScript 语言的下一代标准，于 2015 年 6 月正式发布。它为 JavaScript 带来了许多新的语法特性和功能，使得 JavaScript 语言可以用来编写复杂的大型应用程序，成为企业级开发语言。



## ES6的新特性

`1`、新的原始类型和变量声明：let和const关键字用于声明块级作用域的变量和常量<br>

`2`、箭头函数：使用=>符号定义函数，可以更简洁的编写函数<br>

`3`、模板字符串：使用反引号(`)定义字符串，可以在字符串中嵌入表达式<br>

`4`、解构赋值：允许从数组或对象中提取值并赋给变量<br>

`5`、类：使用class关键字定义类，支持继承，构造函数，静态方法等面向对象编程的新特性<br>

`6`、模块化：使用import和export关键字导入和导出模块<br>

`7`、Promise:用于处理异步操作的结果<br>

`8`、迭代器和生成器，支持迭代器和生成器，可以更方便的遍历数据结构<br>

`9`、Set和Map数据结构，新增了Set和Map数据结构，用于存储位移值和键值对<br>



## 数据类型

🍐1、值类型：字符串（String）、数字（Number）、布尔（Boolean）、空（Null）、未定义（Undefined）、Symbol和BigInt。其中，Symbol是ES6引入的一种新的原始数据类型，表示独一无二的值。<br>
🍐2、引用数据类型：对象（Object）、数组（Array）和函数（Function），还有两个特殊的对象：正则（RegExp）和日期（Date）。<br>

## 数据类型常用检测方法

🍓1、 typeof：typeof操作符可以返回一个字符串，表示未经计算的操作数的类型。优点在于它简单易用，可以快速检测基本数据类型。但它也有一些缺点，例如它无法区分Object、Array和Null，因为都会返回"object"。<br>

🍓2、 instanceof：instanceof操作符主要用于检测引用数据类型，它用于检测构造函数的prototype属性是否出现在某个实例对象的原型链上。因此，它并不适用于检测所有数据类型。优点在于它可以检测引用数据类型，判断一个实例是否属于某个类。但它也有一些缺点，例如它无法检测基本数据类型。<br>

```js
console.log([] instanceof Array); // 输出true
console.log({} instanceof Object); // 输出true


```

🍓3、Object.prototype.toString.call()：这种方法可以用来检测对象的类型。优点在于它可以准确地检测所有数据类型，包括基本数据类型和引用数据类型。但它也有一些缺点，例如使用起来比较麻烦，需要调用Object.prototype.toString.call()方法，并传入要检测的值作为参数。<br>

```js
console.log(Object.prototype.toString.call('Hello, World!')); // 输出'[object String]'

```



## 数据类型转换方法
:::tip

在JavaScript中，数据类型转换分为两种：隐式类型转换和显式类型转换。
:::
1、隐式类型转换：指在运算过程中，JavaScript会自动将一种数据类型转换为另一种数据类型，以便进行运算。例如，在字符串和数字相加时，数字会被自动转换为字符串，然后进行字符串拼接。

```js
let x = '3' + 4; // x的值为'34'
let y = '3' - 4; // y的值为-1

```

2、显式类型转换：指通过调用特定的函数或方法来手动进行数据类型转换。例如，可以使用Number()函数将字符串转换为数字，或使用String()函数将数字转换为字符串。

```js
// 使用Number()函数将字符串转换为整数
let a = Number('3') + 4; // a的值为7
// 使用String()函数将整数转换为字符串
let b = String(3) + 4; // b的值为'34'
// 使用一元加号运算符将字符串转换为数字
let x = +'3'; // x的值为3

```



## **箭头函数和普通函数的区别**

- 箭头函数是普通函数的简写，但是它不具备很多普通函数的特性
- this指向问题，箭头函数的this指向它定义时所在的对象，而不是调用时所在的对象
- 箭头函数没有独立的 this、argument 和super，并且不可被用作方法。
- 不会进行函数提升
- 不能new
- 箭头函数不能用作构造函数，当使用 new 调用时会出错。它们也没有 prototype 属性。

## js获取dom

- getElementById：通过元素的ID属性获取DOM元素。

- getElementsByClassName：通过元素的class属性获取DOM元素

- getElementsByTagName：通过元素的标签名获取DOM元素

- querySelector：通过CSS选择器获取DOM元素

- querySelectorAll：通过CSS选择器获取DOM元素



## setTimeout 不准确的原因和解决办法：

事件循环延迟：JavaScript 是单线程的，如果事件循环中有其他任务阻塞了执行，setTimeout 的回调可能会延迟执行。前一个任务耗时过长，定时器不是立刻放入事件队列中的，而是同步任务执行完了之后，timer 模块计算时间到了，再放入队列中，<br>
:::tip
解决方法：确保 setTimeout 的回调函数尽量简短，避免长时间的计算或者阻塞操作。
浏览器最小时间间隔：大多数浏览器的 setTimeout 最小时间间隔为 4 毫秒。
:::
解决方法：如果需要更精确的定时器，可以使用 requestAnimationFrame，但它的用途通常不同于 setTimeout。

## setInterval 不准确的原因和解决办法：

累积误差：setInterval 的执行时间会受到前一个回调函数执行时间的影响，导致累积误差；即定时器回调函数耗时过长，累积误差通常会导致下一个回调函数的执行比预期的要晚。但是就时间间隔来看还是很均匀的。
:::tip
解决方法：【如过你想让执行的时间是绝对时间】在每次回调中计算下一次的执行时间，而不是依赖于固定的时间间隔。这样可以避免累积误差。这个就是使用 setTimeout 模拟 setInterval
:::
常见情况：在 ajax 请求的时候使用 setInterval，网络慢的时候一个请求很长时间才返回，所以会出现连续发好几个请求的现象

## 深拷贝和浅拷贝

💟深拷贝和浅拷贝是针对引用数据类型（如Object和Array）的概念。浅拷贝只复制指向某个对象的指针，而不复制对象本身，新旧对象还是共享同一块内存。但深拷贝会另外创造一个一模一样的对象，新对象跟原对象不共享内存，修改新对象不会改到原对象。<br>
当我们把一个对象赋值给一个新的变量时，赋的其实是该对象的在栈中的地址，而不是堆中的数据。也就是两个对象指向的是同一个存储空间，无论哪个对象发生改变，其实都是改变的存储空间的内容，因此，两个对象是联动的。浅拷贝是按位拷贝对象，它会创建一个新对象，这个对象有着原始对象属性值的一份精确拷贝。如果属性是基本类型，拷贝的就是基本类型的值；如果属性是内存地址（引用类型），拷贝的就是内存地址 ，因此如果其中一个对象改变了这个地址，就会影响到另一个对象。



## 深拷贝和浅拷贝实现方法

`1`、浅拷贝可以通过多种方法实现。例如，可以使用Object.assign()方法进行浅拷贝，也可以使用扩展运算符…进行浅拷贝。此外，还可以使用Array.prototype.concat()和Array.prototype.slice()方法对数组进行浅拷贝

```js
let obj1 = { a: 1, b: { c: 2 } };
let obj2 = Object.assign({}, obj1);
obj1.b.c = 3;
console.log(obj2.b.c); // 输出3，因为obj2.b和obj1.b指向同一个对象

// 使用扩展运算符...进行浅拷贝：
let obj1 = { a: 1, b: { c: 2 } };
let obj2 = {...obj1};
obj1.b.c = 3;
console.log(obj2.b.c); // 输出3，因为obj2.b和obj1.b指向同一个对象

// 使用Array.prototype.concat()对数组进行浅拷贝：
let arr1 = [1, 2, { a: 3 }];
let arr2 = arr1.concat();
arr1[2].a = 4;
console.log(arr2[2].a); // 输出4，因为arr2[2]和arr1[2]指向同一个对象

```



`2`、深拷贝可以通过多种方法实现。例如，可以使用递归的方式实现深拷贝，也可以通过JSON对象实现深拷贝，即先使用JSON.stringify()将对象转换为JSON字符串，再使用JSON.parse()将字符串解析成新的对象。

```js
// 使用递归实现深拷贝：
function deepClone(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }
    let result = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            result[key] = deepClone(obj[key]);
        }
    }
    return result;
}
let obj1 = { a: 1, b: { c: 2 } };
let obj2 = deepClone(obj1);
obj1.b.c = 3;
console.log(obj2.b.c); // 输出2，因为obj2是obj1的深拷贝，它们之间没有引用关系

// 使用JSON.stringify()和JSON.parse()实现深拷贝：
let obj1 = { a: 1, b: { c: 2 } };
let obj2 = JSON.parse(JSON.stringify(obj1));
obj1.b.c = 3;
console.log(obj2.b.c); // 输出2，因为obj2是obj1的深拷贝，它们之间没有引用关系

```



`3`、此外，还可以通过jQuery的extend方法实现深浅拷贝: extend()方法的第一个参数是一个布尔值，用来指定是否进行深拷贝。如果该参数为true，则进行深拷贝；否则进行浅拷贝。

```js
let obj1 = { a: 1, b: { c: 2 } };
let obj2 = jQuery.extend(true, {}, obj1);
obj1.b.c = 3;
console.log(obj2.b.c); // 输出2，因为obj2是obj1的深拷贝，它们之间没有引用关系

```



## 作用域和作用域链

`1`、作用域链是指在JavaScript中，变量的查找机制。当代码在一个环境中执行时，会创建变量对象的一个作用域链（scope chain）。这个作用域链保证了对执行环境有权访问的所有变量和函数的有序访问。<br>
`2`、作用域链的前端是当前执行环境的变量对象，如果这个执行环境是函数，则将其活动对象作为变量对象。活动对象在最开始时只包含一个变量，即arguments对象（这个对象在全局环境中是不存在的）。作用域链中的下一个变量对象来自包含（外部）环境，再下一个变量对象则来自下一个包含环境。这样一直延续到全局执行环境；全局执行环境的变量对象始终都是作用域链中的最后一个对象。

:::tip
其实作用域链的理解比较简单，就是当查找变量时，会从作用域链的前端开始，逐级向后查找，直到找到为止。如果在整个作用域链中都没有找到该变量，则该变量未定义。
:::


## 闭包

闭包是指一个函数能够访问其定义时的词法作用域，即使这个函数在其定义时的作用域之外执行。闭包可以让你从内部函数访问外部函数作用域。
在JavaScript中，函数在创建时会保存一个指向其定义时的词法作用域的引用。当这个函数被调用时，它会使用这个引用来确定其外部变量的值。这就是闭包。

那么闭包中定义的变量怎么回收呢♻️？

**在JavaScript中，内存管理是自动进行的。当一个变量不再被引用时，它所占用的内存就会被垃圾回收器回收。**

在闭包中定义的变量也是如此。当闭包不再被引用时，它所引用的外部变量也就不再被引用，因此它们所占用的内存就会被垃圾回收器回收。
所以有两种情况：<br>

当全局变量作为闭包变量的时候，那么闭包变量就会因为上下文的存在（一直被引用）而保存到页面关闭。<br>
当局部变量作为闭包变量的时候，其一是引用完毕立即回收（可以赋予null），其二是可以一直引用依然保存在内存中直到不再被引用则会回收。

## 原型和原型链

`1`、原型（prototype）是一个对象，它是用来创建其他对象的模板。每个函数都有一个 prototype 属性，它指向该函数的原型对象。<br>
`2`、原型链是由一系列原型对象组成的链条。每个对象都有一个原型对象与之关联，这个原型对象也是一个普通对象，它也有自己的原型对象，这样层层递进，就形成了一个链条，这个链条就是原型链。<br>
`3`、原型链的作用是实现继承。当访问一个对象的属性时，如果该属性不存在于该对象中，则会沿着原型链向上查找，直到找到该属性或者到达原型链的顶端。

原型关系: 指的是对象与其原型对象之间的关系。每个对象都有一个内部属性 [[Prototype]]，它指向该对象的原型对象。在 JavaScript 中，可以通过 **proto** 属性来访问这个内部属性。<br>

```js
// 假设我们有一个构造函数 Person 和一个实例对象 p：

function Person(name) {
  this.name = name;
}

Person.prototype.sayName = function() {
  console.log(this.name);
}

var p = new Person('Tom');

// 在这个例子中，p 的原型对象就是 Person.prototype。我们可以通过 p.__proto__ 来访问它：

console.log(p.__proto__ === Person.prototype); // true


```



## ES6新语法特性：let && const

var，let和const都是用来声明变量的，但它们之间有一些区别。var声明的变量属于函数作用域，而let和const声明的变量属于块级作用域。此外，var声明的变量存在变量提升现象，而let和const没有。在同一块级作用域中，let变量不能重新声明，而const常量不能修改。简单的来说就是，var定义全局变量且可以覆盖，let定义块级作用域变量且不能再一次进行声明({})，const定义不允许修改的块级作用域常量。

```js
function exampleVar() {
  var x = 1;
  if (true) {
    var x = 2;
    console.log(x); // 输出2
  }
  console.log(x); // 输出2
}

function exampleLet() {
  let x = 1;
  if (true) {
    let x = 2;
    console.log(x); // 输出2
  }
  console.log(x); // 输出1
}

function exampleConst() {
  const x = 1;
  if (true) {
    const x = 2;
    console.log(x); // 输出2
  }
  console.log(x); // 输出1
}


```

## map和forEach的区别

 ♐map和forEach的区别,都是遍历数组中的每一项forEach和map方法里每次执行匿名函数都支持3个参数，map方法返回一个新的数组，数组中的元素为原始数组调用函数处理后的值

## slice和splice的区别

♐slice和splice的区别,slice切片的意思，根据传入的起始和终止下标，获取该范围数组，splice可根据传入参数个数不同实现删除，插入操作，直接操作原数组，第一个参数为起始下标，第二个参数为要删除的个数，第三个为要删除的个数，第三个为要增加的数据





## 数组扁平化

数组扁平化
数组的扁平化就是将一个嵌套多层的数组转换为只有一层的数组，扁平化也是面试中常见的考题。举个简单的例子，假设有个名为 flatDeep 的函数能实现数组扁平化效果，代码运行效果如下面：<br>

像上述能实现扁平化的flatDeep函数实现方式有好几种，下面就尝试这几种方式实现一个flatDeep函数吧

```js
var array = [1, [2, [3, [4, 5]]]];
console.log(flatDeep(array)); // [1, 2, 3, 4，5]

```



### 方法一：递归

通过循环递归的方式，一项一项地去遍历数组，如果每一项还是一个数组，那么就继续往下遍历，实现方式，如下所示：

```js
var array = [1, [2, [3, [4, 5]]]];
function flatDeep(arr){
	let result = [];
	for(let i = 0; i < arr.length; i++) {
		if(Array.isArray(arr[i])){
			result = result.concat(flatDeep(arr[i]))
		} else {
			result.push(arr[i])
		}
	}
	return result;
}
console.log(flatDeep(array));

```



### 方法二：toString和split结合

先通过toString()把数组转成String对象，再结合split() 方法使用逗号分隔符将String对象分割成字符串数组，再用map函数将数组中的字符串转成数字。

```js
var array = [1, [2, [3, [4, 5]]]];
function flatDeep(arr){
	let result = [];
	return result = arr.toString().split(',').map(Number)
}
console.log(flatDeep(array));

```



## 模块成员的导入与导出
:::danger

关于模块成员的导入与导出，必须得提一下，一定要配对使用。使用vue的export或者export default进行导出的，使用import进行导入。而使用nodejs的module.exports或者exports进行导出的，就得使用require(‘模块名称’)来进行导入使用。不得相互混用。
export default是向外暴露成员的，可以使用任意的变量来接收
:::
```js
<template>
   <div>
       <h1>我是hello组件</h1>
   </div>
</template>

<script>
export default {
   data(){
       return{
         msg:'我是hello组件的数据msg'
       }
   },
   methods:{

   },
}
</script>


<style lang="stylus" scoped>

</style>

```



其他模块可直接使用 `*import 自定义名字 from 路径* `进行导入使用

`1`. 在一个模块中，export default只允许向外暴露一次。<br>
`2`. 在一个模块中，可以同时使用export defau和export向外暴露成员。<br>

`3`. 使用export向外暴露的成员，只能使用{}的形式来进行接收。<br>

```js
export const  HELLO = 'hello'
export const  WORLD = 'world'
export const  HELLOWORLD = 'helloworld'

```

✳️import {HELLO} from 路径<br>

✳️nodejs导出变量 moudle.exports和exports<br>

✳️exports = module.exports = {};<br>

**exports可以不断的添加属性或方法，多个module.exports导出时会覆盖前一个module.exports**



## this指向问题

🚩在JavaScript中，this关键字指向函数执行时的当前对象。this的指向取决于函数调用的方式，而不是函数定义的位置。<br>

🚩在全局作用域中，this指向全局对象（在浏览器中是window对象，在Node.js中是global对象）。<br>
🚩在函数调用中，如果函数不是作为对象的方法被调用，那么this指向全局对象。<br>
🚩在作为对象方法调用时，this指向调用该方法的对象。<br>
🚩在构造函数中，this指向新创建的对象。<br>
🚩在事件处理程序中，this指向触发事件的元素。<br>
🚩此外，可以使用call()、apply()和bind()方法显式地设置函数调用时的this值。<br>

```js
// 1.在全局作用域中，this指向全局对象：
console.log(this === window); // 输出true（在浏览器中）

// 2.在函数调用中，如果函数不是作为对象的方法被调用，那么this指向全局对象：
function foo() {
    console.log(this === window); // 输出true（在浏览器中）
}
foo();

// 3.在作为对象方法调用时，this指向调用该方法的对象：
let obj = {
    myMethod: function() {
        console.log(this === obj); // 输出true
    }
};
obj.myMethod();

// 4.在构造函数中，this指向新创建的对象：
function MyConstructor() {
    this.myProperty = 'Hello World!';
    console.log(this instanceof MyConstructor); // 输出true
}
let myInstance = new MyConstructor();

// 5.在事件处理程序中，this指向触发事件的元素：
<button id="myButton">点击!</button>
<script>
    let button = document.getElementById('myButton');
    button.onclick = function() {
        console.log(this === button); // 输出true
    };
</script>

// 6.使用call()、apply()和bind()方法显式地设置函数调用时的this值：
function foo() {
    console.log(this);
}
let obj = { a: 1 };
foo.call(obj); // 输出{ a: 1 }
foo.apply(obj); // 输出{ a: 1 }
let bar = foo.bind(obj);
bar(); // 输出{ a: 1 }


```



## 此外还有一些特殊情况会影响this的指向问题：

在严格模式下，如果函数不是作为对象的方法被调用，那么this的值为undefined。<br>
在DOM事件处理程序中，如果使用addEventListener()方法添加事件处理程序，那么事件处理程序中的this指向触发事件的元素。但是，如果使用attachEvent()方法（仅在旧版本的IE中可用），那么事件处理程序中的this指向全局对象。<br>
在回调函数中，this的指向取决于回调函数被调用的方式。例如，在setTimeout()和setInterval()中，回调函数中的this指向全局对象。在数组方法（如forEach()、map()、filter()等）中，回调函数中的this指向全局对象，除非显式地设置了thisArg参数。<br>
在箭头函数中，this的值取决于箭头函数定义时所在的上下文。箭头函数不会创建自己的this值，而是从外层作用域继承this值。<br>
如果使用了ES6的类语法，那么类中的方法默认是在严格模式下执行的，因此类方法中的this指向取决于方法调用的方式。<br>

```js
// 1.在严格模式下，函数调用中的this指向undefined：
'use strict';
function foo() {
    console.log(this);
}
foo(); // 输出undefined

// 2.在DOM事件处理程序中，使用addEventListener()方法添加事件处理程序，事件处理程序中的this指向触发事件的元素：
<button id="myButton">Click me!</button>
<script>
    let button = document.getElementById('myButton');
    button.addEventListener('click', function() {
        console.log(this); // 输出<button id="myButton">Click me!</button>
    });
</script>

// 3.在回调函数中，this的指向取决于回调函数被调用的方式：
// 在setTimeout()中，回调函数中的this指向全局对象
setTimeout(function() {
    console.log(this === window); // 输出true（在浏览器中）
}, 1000);

// 在数组方法中，回调函数中的this指向全局对象，除非显式地设置了thisArg参数
let arr = [1, 2, 3];
arr.forEach(function() {
    console.log(this === window); // 输出true（在浏览器中）
});
arr.forEach(function() {
    console.log(this === obj);
}, obj); // 输出true

// 4.在箭头函数中，this的值取决于箭头函数定义时所在的上下文：
let obj = {
    myMethod: function() {
        let arrowFunction = () => {
            console.log(this === obj); // 输出true
        };
        arrowFunction();
    }
};
obj.myMethod();

// 5.在类方法中，this指向取决于方法调用的方式：
class MyClass {
    myMethod() {
        console.log(this);
    }
}
let myInstance = new MyClass();
myInstance.myMethod(); // 输出MyClass实例
let myMethod = myInstance.myMethod;
myMethod(); // 输出undefined（在严格模式下）或全局对象（在非严格模式下）


```



## EventLoop 事件循环

EventLoop 即 事件循环，是指浏览器或 Node 的一种解决 javaScript 单线程运行时不会阻塞的一种机制，也就是我们经常使用异步的原理。<br>
JavaScript 运行时包含了一个待处理消息的消息队列。每一个消息都关联着一个用以处理这个消息的回调函数。在事件循环期间的某个时刻，运行时会从最先进入队列的消息开始处理队列中的消息。被处理的消息会被移出队列，并作为输入参数来调用与之关联的函数。<br>
这个模型与其他语言中的模型截然不同，比如 C 和 Java。它永不阻塞，处理 I/O 通常通过事件和回调来执行，所以当一个应用正等待一个 IndexedDB 查询返回或者一个 XHR 请求返回时，它仍然可以处理其他事情，比如用户输入。



## 宏任务和微任务

在 JavaScript 引擎中，任务分为两种类型：微任务（microtask）和宏任务（macrotask）。微任务是指在当前任务执行结束后立即执行的任务，它可以看作是在当前任务的“尾巴”添加的任务。常见的微任务包括 Promise 回调和 process.nextTick。宏任务是指在下一轮事件循环中执行的任务。常见的宏任务包括 setTimeout、setInterval、setImmediate、requestAnimationFrame 等。
微任务和宏任务是绑定的，每个宏任务在执行时，会创建自己的微任务队列。比如一个宏任务在执行过程中，产生了 100 个微任务，执行每个微任务的时间是 10 毫秒，那么执行这 100 个微任务的时间就是 1000 毫秒，也可以说这 100 个微任务让宏任务的执行时间延长了 1000 毫秒。

**宏任务和微任务与事件循环有着密切的关系。在事件循环中，每个宏任务执行完后，都会检查微任务队列并执行队列中的所有微任务，然后再执行下一个宏任务。这个过程会一直重复，直到队列中没有消息为止。**

![image-20240916215722919](./public/屏幕截图%202024-09-16%20215713.png)



```js
console.log('script start');

setTimeout(function() {
  console.log('setTimeout');
}, 0);

Promise.resolve().then(function() {
  console.log('promise1');
}).then(function() {
  console.log('promise2');
});

console.log('script end');

// 输出结果:
script start
script end
promise1
promise2
setTimeout


```



## setTimeout Promise Async/Await 的区别

setTimeout 是 JavaScript 中的一个异步函数，用于在指定的时间间隔后执行一段代码。它属于延迟方法，会被放到最后，也就是主线程空闲的时候才会触发🔰 <br>
Promise 是 JavaScript 中的一种对象，用于处理异步操作的结果。它本身是同步的立即执行函数，当在执行体中执行 resolve() 或者 reject() 的时候，此时是异步操作，会先执行 then/catch 等，等主栈完成后，才会去执行 resolve()/reject() 中的方法。🔰 <br>
Async/Await 是 JavaScript 中的一种语法，用于处理异步操作，使代码看起来像同步代码一样。async 用于定义一个异步函数，await 用于等待异步操作的结果。当遇到 await 的时候，会让出主线程，阻塞后面的代码的执行。async 函数需要等待 await 后的函数执行完成并且有了返回结果（Promise 对象）之后，才能继续执行下面的代码。🔰 



🚃优先级:

Promise 的回调属于微任务，所以它会在当前宏任务执行完后立即执行。<br>
setTimeout 属于宏任务，所以它会在下一轮事件循环中执行。<br>
Async/Await 是基于 Promise 的语法糖，它能实现的效果都能用 then 链来实现。当遇到 await 的时候，会让出主线程，阻塞后面的代码的执行。所以 await 后面的代码相当于 promise.then() 里面的代码。<br>

```js
console.log('script start');

setTimeout(function() {
  console.log('setTimeout');
}, 0);

Promise.resolve().then(function() {
  console.log('promise1');
}).then(function() {
  console.log('promise2');
});

async function async1() {
  console.log('async1 start');
  await async2();
  console.log('async1 end');
}

async function async2() {
  console.log('async2');
}

async1();

console.log('script end');

// 输出结果:
script start
async1 start
async2
script end
promise1
promise2
async1 end
setTimeout


```



解释: 首先，同步代码 console.log(‘script start’)、console.log(‘async1 start’)、console.log(‘async2’) 和 console.log(‘script end’) 被执行。然后，setTimeout 被添加到宏任务队列中。接着，Promise.resolve().then 中的回调被添加到微任务队列中。当同步代码执行完后，事件循环检查微任务队列并执行队列中的所有微任务，即 console.log(‘promise1’) 和 console.log(‘promise2’)。最后，事件循环执行下一个宏任务，即 setTimeout 中的回调。



## 节流&&触底加载 防抖&&实时搜索

节流（Throttle）是一种控制函数执行频率的技术。当事件被频繁触发时，节流函数会按照一定的频率来执行函数。它可以保证在一段时间内，不管事件触发了多少次，函数都只会执行一次，且是最先被触发调用的那次。<br>
举个例子，假设你正在滚动一个页面，每滚动一段距离就会触发一个事件。如果这个事件被频繁触发，可能会导致页面卡顿。这时候，你可以使用节流来控制事件的执行频率，让它每隔一段时间才执行一次。<br>
节流通常用于优化性能，避免因为事件触发过于频繁而导致的页面卡顿或浏览器崩溃。

场景:

滚动事件：当用户滚动页面时，可以使用节流来控制滚动事件的执行频率，让它每隔一段时间才执行一次。<br>
窗口大小调整：当用户调整浏览器窗口大小时，可以使用节流来控制调整事件的执行频率，让它每隔一段时间才执行一次。<br>
鼠标移动：当用户移动鼠标时，可以使用节流来控制鼠标移动事件的执行频率，让它每隔一段时间才执行一次。<br>
滚动事件当然是 触底加载 比较多了。现在用这个作为示例:<br>

```js
// 节流函数
function throttle(fn, delay) {
  let timer = null;
  return function() {
    if (!timer) {
      timer = setTimeout(() => {
        fn.apply(this, arguments);
        timer = null;
      }, delay);
    }
  }
}

// 加载函数
function loadMore() {
  // 加载更多内容
  console.log('Loading more content...');
}

// 监听滚动事件
window.addEventListener('scroll', throttle(function() {
  // 滚动到页面底部时触发加载函数
  if (document.documentElement.scrollTop + window.innerHeight === document.documentElement.scrollHeight) {
    loadMore();
  }
}, 500));


```



解释: 在这个例子中，我们定义了一个节流函数 throttle，它接受两个参数：一个是要执行的函数 fn，另一个是延迟时间 delay。当事件被触发时，节流函数会按照指定的频率来执行函数。然后，我们定义了一个加载函数 loadMore，用来加载更多内容。接着，我们监听了滚动事件，并使用节流函数来控制加载函数的执行频率。当滚动到页面底部时，会触发加载函数。🚛🚛



## 防抖

📝防抖（Debounce）是一种控制函数执行频率的技术。当事件被频繁触发时，防抖函数会推迟执行函数。只有当等待一段时间后也没有再次触发该事件，那么才会真正执行函数。<br>
举个例子，假设你正在输入一个搜索关键词，每输入一个字符就会触发一个搜索事件。如果这个事件被频繁触发，可能会导致页面卡顿或浏览器崩溃。这时候，你可以使用防抖来控制搜索事件的执行频率，让它在用户停止输入一段时间后才执行。<br>
防抖通常用于优化性能，避免因为事件触发过于频繁而导致的页面卡顿或浏览器崩溃。

场景:

📝输入框实时搜索：当用户在输入框中输入内容时，可以使用防抖来控制搜索事件的执行频率，让它在用户停止输入一段时间后才执行。<br>
窗口大小调整：当用户调整浏览器窗口大小时，可以使用防抖来控制调整事件的执行频率，让它在用户停止调整一段时间后才执行。<br>
按钮点击：当用户点击一个按钮时，可以使用防抖来防止用户连续点击，避免重复提交表单。<br>
那么就用 实时搜索 作为示例:

```js
// 防抖函数
function debounce(fn, delay) {
  let timer = null;
  return function() {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, arguments);
    }, delay);
  }
}

// 搜索函数
function search(keyword) {
  // 执行搜索操作
  console.log(`Searching for ${keyword}...`);
}

// 获取输入框元素
const input = document.querySelector('input');

// 监听输入事件
input.addEventListener('input', debounce(function(event) {
  // 获取输入框的值
  const keyword = event.target.value;
  // 执行搜索操作
  search(keyword);
}, 500));


```



📝解释: 在这个例子中，我们定义了一个防抖函数 debounce，它接受两个参数：一个是要执行的函数 fn，另一个是延迟时间 delay。当事件被触发时，防抖函数会推迟执行函数。如果在等待时间内再次触发该事件，那么会重新计算等待时间。然后，我们定义了一个搜索函数 search，用来执行搜索操作。接着，我们获取了输入框元素，并监听了输入事件。当用户在输入框中输入内容时，会触发输入事件。我们使用防抖函数来控制搜索函数的执行频率，让它在用户停止输入一段时间后才执行。



## 垃圾回收机制

🚵JavaScript 的垃圾回收机制是用来防止内存泄漏的。内存泄漏指的是当已经不需要某块内存时，这块内存还存在着。在项目中，如果存在大量不被释放的内存（堆/栈/上下文），页面性能会变得很慢。当某些代码操作不能被合理释放，就会造成内存泄漏。垃圾回收机制就是间歇性地、不定期地寻找到不再使用的变量，并释放掉它们所指向的内存。<br>

🚵JavaScript 的垃圾回收算法主要有两种：引用计数（reference counting）和标记清除（mark-and-sweep）。<br>

🚵引用计数算法通过跟踪每个值被引用的次数来工作。当声明了一个变量并将一个引用类型值赋给该变量时，则这个值的引用次数就是 1。如果同一个值又被赋给另一个变量，则该值的引用次数加 1。相反，如果包含对这个值引用的变量又取得了另外一个值，则这个值的引用次数减 1。当这个值的引用次数变成 0 时，则说明没有办法再访问这个值了，因此就可以将其占用的内存空间回收回来。<br>

🚵标记清除算法将“不再使用的变量”定义为“无法访问到这个变量”。垃圾收集器在运行的时候会给存储在内存中的所有变量都加上标记（可以使用任何标记方式）。然后，它会去掉环境中的变量以及被环境中的变量引用的变量的标记。而在此之后再被加上标记的变量即为准备删除的变量，原因是环境中的变量已经无法访问到这些变量了。最后，垃圾收集器完成内存清除工作，销毁那些带标记的值并回收它们所占用的内存空间。<br>



## new

过程：

🚜首先，创建一个全新的对象。然后，将这个对象的原型链（proto）指向函数的 .prototype。<br>
🚜接着，将这个对象绑定到函数中的 this，然后执行函数，函数内部可以借助 this 给这个对象添加属性。<br>
🚜最后，如果这个函数没有返回其他对象的话，new 操作符就会将上面步骤创建的对象返回出去。但如果该函数最后返回了一个其他对象的话，new 操作符就会把这个函数返回的对象<br>🚜返回出去。也就是判断函数的返回值类型，如果是值类型，返回创建的对象。如果是引用类型，就返回这个引用类型的对象。

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}

var person1 = new Person('幼儿园技术家', 25);
console.log(person1.name); // 输出: 幼儿园技术家
console.log(person1.age); // 输出: 25


```



## 三种常用方法实现继承

### 1、使用原型链

```js
function Animal(name) {
  this.name = name;
}

Animal.prototype.sayName = function() {
  console.log(this.name);
}

function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
  console.log('Woof!');
}

let dog = new Dog('Max', 'German Shepherd');
dog.sayName(); // Max
dog.bark(); // Woof!


```



2、使用 class 关键字来定义类，并使用 extends 关键字来实现继承。

```js
class Animal {
  constructor(name) {
    this.name = name;
  }

  sayName() {
    console.log(this.name);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  bark() {
    console.log('Woof!');
  }
}

let dog = new Dog('Max', 'German Shepherd');
dog.sayName(); // Max
dog.bark(); // Woof!


```



### 3、使用混入（Mixin）

```js
let Animal = {
  sayName: function() {
    console.log(this.name);
  }
}

function Dog(name, breed) {
  this.name = name;
  this.breed = breed;
}

Object.assign(Dog.prototype, Animal);

Dog.prototype.bark = function() {
  console.log('Woof!');
}

let dog = new Dog('Max', 'German Shepherd');
dog.sayName(); // Max
dog.bark(); // Woof!


```



## 手写bind方法

```js
// 可以通过在 Function.prototype 上添加一个新方法来手写实现 bind 方法
Function.prototype.myBind = function(context) {
  var self = this;
  var args = Array.prototype.slice.call(arguments, 1);
  return function() {
    var bindArgs = Array.prototype.slice.call(arguments);
    return self.apply(context, args.concat(bindArgs));
  }
}

var obj = {
  name: '戴森球技术家'
}

function sayName(age) {
  console.log(this.name);
  console.log(age);
}

var boundSayName = sayName.myBind(obj, 25);
boundSayName(); // 输出: 戴森球技术家 \n 25


```

释：在上面的示例中，我们定义了一个 myBind 方法，它接受一个参数 context，表示绑定的上下文对象。然后我们使用 apply 方法将函数的执行上下文绑定到指定的对象上，并传入相应的参数。最后我们可以调用绑定后的函数。



## CmmonJS和ESM

CommonJS和ESM是两种不同的JavaScript模块化规范。CommonJS主要用于服务器端，比如Node.js，而ESM是ECMAScript 6中引入的模块化标准，它既可以用于前端，也可以用于后端。



```js
// CommonJS
var foo = require('foo');
module.exports = foo;

// ESM
import foo from 'foo';
export default foo;


```



## 柯里化

柯里化（Currying）是一种处理多元函数的方法，它是指将一个多参数的函数转化为单参数函数的方法。它是数学家柯里（Haskell Curry）提出的。
柯里化的主要作用是将一个复杂的函数拆分成多个简单的函数，使得每个函数只接受一个参数。这样做可以让我们更灵活地使用这些函数，比如可以将它们组合起来，或者将它们作为参数传递给其他函数。

```js
function add(x, y) {
  return x + y;
}

function curriedAdd(x) {
  return function(y) {
    return add(x, y);
  }
}

var add5 = curriedAdd(5);
console.log(add5(3)); // 输出: 8


```



## call bind apply

🚡在解决this指向问题中提到了call、apply 和 bind，那么现在来介绍一下。<br>

🚡call、apply 和 bind 都是JavaScript中的函数方法，它们都可以用来改变函数的执行上下文（即函数内部的 this 指向）。<br>

🚡call 和 apply 的作用相似，它们都可以用来立即调用一个函数，并指定函数内部的 this 指向。它们的区别在于传递参数的方式不同：call 方法接受若干个参数，第一个参数是 this 指向的对象，后面的参数依次传递给函数；而 apply 方法接受两个参数，第一个参数是 this 指向的对象，第二个参数是一个数组，数组中的元素依次传递给函数。<br>

🚡bind 方法与 call 和 apply 不同，它不会立即调用函数，而是返回一个新的函数。这个新函数与原函数具有相同的行为，但是它内部的 this 指向被绑定到了 bind 方法的第一个参数上。除了第一个参数外，bind 方法还可以接受若干个参数，这些参数会被预先传递给新函数。<br>

```js
function sayName(greeting) {
  console.log(`${greeting}, my name is ${this.name}`);
}

var obj = {
  name: '戴森球技术家'
}

sayName.call(obj, 'Hello'); // 输出: Hello, my name is 戴森球技术家
sayName.apply(obj, ['Hello']); // 输出: Hello, my name is 戴森球技术家

var boundSayName = sayName.bind(obj);
boundSayName('Hello'); // 输出: Hello, my name is 戴森球技术家


```



# axios

## 什么是Promise

   `Promise`异步编程的一种解决方案。`Promise`是一个构造函数，接收一个函数作为参数，返回一个 Promise 实例。

```js
let p = new Promise(function(resolve, reject){
		//做一些异步操作
		setTimeout(function(){
			console.log('执行完成Promise');
			resolve('要返回的数据可以任何数据例如接口返回数据');
		}, 2000);
	});
```

Promise对象有三种状态，他们分别是 `pending`（等待中） `resolved`（已完成）`rejected`（拒绝）<br>
Promise.all哪怕一个请求失败了也能得到其余正确的请求结果的解决方案<br>
promise 的then会返回一个新的 promise 对象，能保证 then 方 可以进行链式调用<br>



## fetch和axios的区别

axios 的特点🚀
① 底层是 XHR, 支持 Promise<br>
② 支持防止 CSRF, 提供并发接口<br>
③ 支持请求和相应的拦截、转换与取消<br>
fetch 的缺点🚀<br>
① 报错：只对网络请求报错，400、500都是成功<br>
② cookie：默认不会携带 cookie，需要配置 credentials: ‘include’<br>
③ 不支持取消，不支持超时控制。<br>
④ 没有办法检测请求的进度，而 XHR 可以。<br>



## 封装axios

```js
import axios from 'axios'
import { useUserStore } from '@/stores/userStore'
import router from '@/router'

const httpInstance=axios.create({
    baseURL:'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout:10000
})

//拦截器
//axios拦截器
httpInstance.interceptors.request.use(config=>{
   
    //从pinia获取token数据
    const userStore=useUserStore()
    //按照后端的要求拼接token数据
    const token=userStore.userInfo.token
    if(token){
        config.headers.Authorization=`Bearer ${token}`
    }
    return config
},e=>Promise.reject(e))

//axios响应式拦截器
httpInstance.interceptors.response.use(res=>res.data,e=>{
    //错误提示
    ElMessage({
        type:'warning',
        message:e.response.data.message
    })

    //401token失效处理
    //清除本地用户数据
    //跳转到登录页
    const userStore=useUserStore()
    if(e.response.status===401){
        userStore.clearUserInfo()
        router.push('/login')

    }
    return Promise.reject(e)
})

export default httpInstance
```

# vue

Vue 是一款用于构建用户界面的 JavaScript 框架。它基于标准 HTML、CSS 和 JavaScript 构建，并提供了一套声明式的、组件化的编程模型，帮助你高效地开发用户界面。
Vue 是一个典型的 MVVM 模型的框架。MVVM 是 Model-View-ViewModel 的缩写，它是一种基于前端开发的架构模式，其核心是提供对 View 和 ViewModel 的双向数据绑定。这使得 ViewModel 的状态改变可以自动传递给 View，即所谓的数据双向绑定。

## MVC与MVVM

MVC 是 Model-View-Controller 的缩写，它将应用程序分成三个部分：Model 负责存储数据和业务逻辑，View 负责展示数据，Controller 负责接收用户输入并更新 Model 和 View。在 MVC 模式中，View 和 Model 是相互独立的，它们之间通过 Controller 来进行通信。
MVVM 是 Model-View-ViewModel 的缩写，它也将应用程序分成三个部分：Model 负责存储数据和业务逻辑，View 负责展示数据，ViewModel 则负责连接 View 和 Model。与 MVC 不同的是，在 MVVM 模式中，View 和 ViewModel 之间有着双向数据绑定的联系。这意味着当 ViewModel 中的数据发生变化时，View 会自动更新；而当 View 中的数据发生变化时，ViewModel 也会自动更新。

## 底层实现原理
🗽🗽🗽🗽🗽🗽🗽🗽🗽🗽<br>
Vue 的底层实现原理主要包括数据双向绑定和虚拟 DOM两部分。<br>

🗽数据双向绑定是指当数据发生变化时，视图会自动更新；而当视图发生变化时，数据也会自动更新。Vue 实现数据双向绑定的方式是通过数据劫持和发布订阅模式相结合。<br>

🗽数据劫持：Vue 会拦截 data 对象中所有属性的读取和写入操作。在 Vue 2.x 版本中，数据劫持是通过 Object.defineProperty() 方法实现的；而在 Vue 3.x 版本中，数据劫持则是通过 Proxy 对象实现的。<br>
🗽发布订阅模式：当我们修改 data 中的某个属性时，Vue 会通知所有订阅了该属性变化的观察者（Watcher），并执行相应的回调函数。这些回调函数通常会更新视图，以保证视图与数据保持同步。<br>
🗽虚拟 DOM 是一种用 JavaScript 对象表示 DOM 的技术。它可以让我们在不直接操作 DOM 的情况下更新视图。Vue 在更新视图时会先生成一个新的虚拟 DOM 树，然后将新旧虚拟 DOM 树进行对比，找出它们之间的差异。最后，Vue 会根据这些差异来更新真实的 DOM 树。这个过程被称为“patching”。<br>

## 使用虚拟DOM有以下几个好处：
:::info
提高渲染性能：直接操作真实DOM通常是非常慢的，因为浏览器需要执行很多额外的工作，如样式计算、布局和重绘。使用虚拟DOM可以减少对真实DOM的操作次数，从而提高渲染性能。
跨平台：虚拟DOM是一个抽象层，它可以运行在任何支持JavaScript的平台上。这意味着你可以使用Vue来构建跨平台应用，如桌面应用、移动应用和Web应用。
更容易测试：由于虚拟DOM是一个纯粹的数据结构，它更容易进行测试和调试。
相对于手动操作真实DOM，使用虚拟DOM通常可以获得更好的性能。但这并不是绝对的，因为虚拟DOM也有一些开销，如创建虚拟DOM树和计算差异。在某些情况下，手动操作真实DOM可能会更快。但总体来说，使用虚拟DOM可以让我们更容易地构建高性能和跨平台的应用。

:::

## scoped 原理

1. 作用：让样式在本组件中生效，不影响其他组件
2. 原理：给组件节点新增自定义属性，然后css根据属性选择器添加样式，类似于下面…

## 生命周期

Vue 的生命周期指的是 Vue 实例从创建到销毁的整个过程。在这个过程中，Vue 实例会经历一系列的生命周期钩子函数，这些钩子函数可以让我们在特定的时刻执行特定的操作。<br>

`beforeCreate`：在实例初始化之后，数据观测和事件配置之前被调用。<br>
`created`：在实例创建完成后被立即调用。此时，实例已完成以下配置：数据观测、属性和方法的运算、watch/event 事件回调。但是，挂载阶段还没开始，el 属性目前不可见。<br>
`beforeMount`：在挂载开始之前被调用。相关的 render 函数首次被调用。<br>
`mounted`：在 el 被新创建的 vm.el 替换，并挂载到实例上去之后调用。如果根实例挂载了一个文档内元素，当 mounted 被调用时，vm.$el 也在文档内。<br>
`beforeUpdate`：在数据更新之前调用，发生在虚拟 DOM 打补丁之前。这里适合在更新之前访问现有的 DOM。<br>
`updated`：在由于数据更改导致的虚拟 DOM 重新渲染和打补丁之后调用。当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。<br>
`beforeDestroy`：在实例销毁之前调用。此时实例仍然完全可用。<br>
`destroyed`：在实例销毁之后调用。此时，所有的指令绑定都被解除，所有的事件监听器都被移除，所有的子实例也都被销毁。<br>


## Vuex

Vuex是一个专为Vue.js应用程序开发的状态管理模式+库。使用Vuex时，每一个Vuex应用的核心就是store（仓库）。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。它可以帮助我们管理共享状态，解决多组件数据通信问题。

![image-20240916223408617](./public/屏幕截图%202024-09-16%20223352.png)

🎡简单来说，Vuex就像一个容器，它包含了你的应用中大部分的状态。当Vue组件从store中读取状态时，若store中的状态发生变化，那么相应的组件也会相应地得到高效更新。<br>

🎡你可以通过store.state来获取状态对象，并通过store.commit方法触发状态变更。在Vue组件中，可以通过this.$store访问store实例，但不能直接改变store中的状态。改变store中的状态的唯一途径就是显式地提交mutation，而非直接改变store.state.count。这样使得我们可以方便地跟踪每一个状态的变化，从而让我们能够实现一些工具帮助我们更好地了解我们的应用。



## Vuex主要包括以下几个核心模块：

`State`：Vuex使用单一状态树，用一个对象就包含了全部的应用层级状态。每个应用将仅仅包含一个store实例。单一状态树让我们能够直接定位任一特定的状态片段，在调试的过程中也能轻易地取得整个当前应用状态的快照。<br>
`Getter`：有时候我们需要从store中的state中派生出一些状态，例如对列表进行过滤并计数。Vuex允许我们在store中定义getter（可以认为是store的计算属性）。就像计算属性一样，getter的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。<br>
`Mutation`：更改Vuex的store中的状态的唯一方法是提交mutation。Vuex中的mutation非常类似于事件：每个mutation都有一个字符串的事件类型（type）和一个回调函数（handler）。这个回调函数就是我们实际进行状态更改的地方，并且它会接受state作为第一个参数。<br>
`Action`：Action类似于mutation，不同在于：Action提交的是mutation，而不是直接变更状态；Action可以包含任意异步操作。Action函数接受一个与store实例具有相同方法和属性的context对象，因此你可以调用context.commit提交一个mutation，或者通过context.state和context.getters来获取state和getters。<br>
`Module`：由于使用单一状态树，应用的所有状态会集中到一个比较大的对象。当应用变得非常复杂时，store对象就有可能变得相当臃肿。为了解决这个问题，Vuex允许我们将store分割成模块（module）。每个模块拥有自己的state、mutation、action、getter、甚至是嵌套子模块。<br>
一些常见的Vuex使用场景包括：用户的个人信息管理模块、电商项目的购物车模块、我的订单模块（订单列表中点击取消订单，然后更新对应的订单列表）、在订单结算页获取需要的优惠券并更新订单优惠信息等。🎡

```js
// store.js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  getters: {
    doubleCount: state => state.count * 2
  },
  mutations: {
    increment(state) {
      state.count++
    }
  },
  actions: {
    increment(context) {
      context.commit('increment')
    }
  }
})

// main.js
import Vue from 'vue'
import App from './App.vue'
import store from './store'

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})

// App.vue
<template>
  <div>
    <p>{{ count }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.state.count
    }
  },
  methods: {
    increment() {
      this.$store.dispatch('increment')
    }
  }
}
</script>


```




## v-if和v-show区别？
:::tip
​        v-if控制Dom是否存在，v-show控制样式
:::
## 为什么避免 v-if 和 v-for 用在一起

​        当 Vue 处理指令时，v-for 比 v-if 具有更高的优先级，这意味着 v-if 将分别重复运行于每个 v-for 循环中，带来性能方面的浪费。

## Vue Router

🎯Vue Router 是 Vue 官方的客户端路由解决方案。<br>

🎯客户端路由的作用是在单页应用 (SPA) 中将浏览器的 URL 和用户看到的内容绑定起来。当用户在应用中浏览不同页面时，URL 会随之更新，但页面不需要从服务器重新加载。<br>

🎯Vue Router 基于 Vue 的组件系统构建，你可以通过配置**路由**来告诉 Vue Router 为每个 URL 路径显示哪些组件。<br>

🎯让我们首先来看根组件, `App.vue`。<br>


## App.vue

```js
<template>
  <h1>Hello App!</h1>
  <p>
    <strong>Current route path:</strong> {{ $route.fullPath }}
  </p>
  <nav>
    <RouterLink to="/">Go to Home</RouterLink>
    <RouterLink to="/about">Go to About</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>
```

```md
在这个 `template` 中使用了两个由 Vue Router 提供的组件: `RouterLink` 和 `RouterView`。

不同于常规的 `<a>` 标签，我们使用组件 `RouterLink` 来创建链接。这使得 Vue Router 能够在不重新加载页面的情况下改变 URL，处理 URL 的生成、编码和其他功能。我们将会在之后的部分深入了解 `RouterLink` 组件。

`RouterView` 组件可以使 Vue Router 知道你想要在哪里渲染当前 URL 路径对应的**路由组件**。它不一定要在 `App.vue` 中，你可以把它放在任何地方，但它需要在某处被导入，否则 Vue Router 就不会渲染任何东西。

上述示例还使用了 `{{ $route.fullPath }}` 。你可以在组件模板中使用 `$route` 来访问当前的路由对象。
```

### 建路由器实例

```vue
import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from './HomeView.vue'
import AboutView from './AboutView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})
```



如果我们使用选项式 API，我们可以在 JavaScript 中如下访问这两个属性：`this.$router` 和 `this.$route`。在演练场示例中的 `HomeView.vue` 组件中，路由器就是这样获取的。

```vue
export default {
  methods: {
    goToAbout() {
      this.$router.push('/about')
    },
  },
}
```



## Vue路由传参的方式

#####   params 传参：刷新后会丢失数据

```js
//编程式
this.$router.push({
    name: 'home', //注意使用 params 时一定不能使用 path
    params: { username: this.username },
  })
 
//声明式
<router-link :to="{ name: 'home', params: { username: username } }">
```

##### query 传参：

```js
//编程式
this.$router.push({
    path: '/home',
    query: { username: this.username },
  })
 
//声明式
<router-link :to="{ path: '/home', query: { username: username } }">
```



## 导航守卫

你可以使用 `router.beforeEach` 注册一个全局前置守卫：

```js
const router = createRouter({ ... })

router.beforeEach((to, from) => {
  // ...
  // 返回 false 以取消导航
  return false
})
```

你可以为路由组件添加以下配置：

- `beforeRouteEnter`
- `beforeRouteUpdate`
- `beforeRouteLeave`

```js
<script>
export default {
  beforeRouteEnter(to, from) {
    // 在渲染该组件的对应路由被验证前调用
    // 不能获取组件实例 `this` ！
    // 因为当守卫执行时，组件实例还没被创建！
  },
  beforeRouteUpdate(to, from) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 `/users/:id`，在 `/users/1` 和 `/users/2` 之间跳转的时候，
    // 由于会渲染同样的 `UserDetails` 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 因为在这种情况发生的时候，组件已经挂载好了，导航守卫可以访问组件实例 `this`
  },
  beforeRouteLeave(to, from) {
    // 在导航离开渲染该组件的对应路由时调用
    // 与 `beforeRouteUpdate` 一样，它可以访问组件实例 `this`
  },
}
</script>
```



## route和router的区别详解

​    **router**是用来**操作路由**的

​    route**是用来**获取路由信息的。` $route.path $route.[params] route.query等`



## Vue.use()是干什么的

首先 Vue.use 本身是一个函数;
判断插件是否注册；
如果插件自带insatll属性，执行它，同时传递一个Vue构造函数作为第一个参数，以及use中的其他参数；
如果插件本身就是函数，执行它，同时传递一个Vue构造函数作为第一个参数，以及use中的其他参数
记录这个插件已经注册

## 组件之间的通信方式

### 父传子

父组件：

```js
<template>
  <div>
    <h1>我是父组件</h1>
    <!-- ：title名称与子组件prop中的名称一致
    =”title“ 与父组件中data数据中的title名称一致 -->
    <children :title="title" :contents="content"></children>
  </div>
</template>>
<script>
import Children from "./Children";
export default {
  data() {
    return {
      title: "我是父组件的标题",
      content: "我是内容"
    };
  },
  components: {
    Children
  }
};
</script>


```

子组件

```js
<template>
  <div>
    <h1>children</h1>
    <span>{{title}}</span>
    <br />
    <span>{{contents}}</span>
  </div>
</template>>
<script>
export default {
  props: {
    title: String,
    contents: String
  }
};
</script>>

```

👕父组件中引入子组件、注册子组件，tempalte中使用子组件； import 、components、
子组件： props中创建一个属性，接受父组件传的值；
在template中使用 {{contents}}；
父组件中的 ， `：title`与子组件中prop添加的属性名称要一致；
=”title“与父组件中data数据中的title名称要一致；

###  子组件向父组件传值

### props / $emit

`1`.在子组件中创建一个按钮，给按钮绑定一个点击事件<br>

`2`.在响应该点击事件的函数中使用$emit来触发一个自定义事件，并传递一个参数

子组件

```js
<template>
  <div>
    <h1>children</h1>
      <button @click="sendTOParent">向父组件传值</button>
  </div>
</template>>
<script>
export default {
  data() {
    return {
      data: "子组件中的信息"
    };
  },
  methods:{
        sendTOParent(){
            this.$emit('listenToChildEvent',this.data)
        }
    }
};
</script>>

```



父组件

```js
<template>
  <div>
    <h1>我是父组件</h1>
    <children v-on:listenToChildEvent = 'showMsgfromChild'></children>
  </div>
</template>>
<script>
import Children from "./Children";
export default {
  data() {
    return {
    };
  },
   methods:{
        showMsgfromChild(data){
            console.log(data)
        }
    },
   components: {
    Children
  },
};
</script>

```

文字版解释：
:::danger
子组件中需要以某种方式例如点击事件的方法来触发一个自定义事件
将需要传的值作为$emit的第二个参数，该值将作为实参传给响应自定义事件的方法
在父组件中注册子组件并在子组件标签上绑定对自定义事件的监听
:::
### ref / $refs

```js
// 父组件
<template>
  <div>
    <child :msg="msg" @changeMsg="changeMsg"></child>
  </div>
</template>

<script>
import Child from './Child.vue'
export default {
  components: { Child },
  data() {
    return {
      msg: 'Hello'
    }
  },
  methods: {
    changeMsg(newMsg) {
      this.msg = newMsg
    }
  }
}
</script>

// 子组件
<template>
  <div>
    <p>{{ msg }}</p>
    <button @click="changeMsg">Change Msg</button>
  </div>
</template>

<script>
export default {
  props: ['msg'],
  methods: {
    changeMsg() {
      this.$emit('changeMsg', 'Hi')
    }
  }
}
</script>


```



eventBus事件总线（ $emit / $on）

```js
// eventBus.js
import Vue from 'vue'
export const eventBus = new Vue()

// 组件A
<template>
  <div>
    <button @click="emitEvent">Emit Event</button>
  </div>
</template>

<script>
import { eventBus } from './eventBus.js'
export default {
  methods: {
    emitEvent() {
      eventBus.$emit('myEvent', 'Hello')
    }
  }
}
</script>

// 组件B
<template>
  <div>{{ msg }}</div>
</template>

<script>
import { eventBus } from './eventBus.js'
export default {
  data() {
    return {
      msg: ''
    }
  },
  mounted() {
    eventBus.$on('myEvent', (data) => {
      this.msg = data
    })
  }
}
</script>


```



### provide/inject

```js
// 祖先组件
<template>
  <div>
    <child></child>
  </div>
</template>

<script>
import Child from './Child.vue'
export default {
  components: { Child },
  provide() {
    return {
      msg: 'Hello'
    }
  }
}
</script>

// 子孙组件
<template>
  <div>{{ msg }}</div>
</template>

<script>
export default {
  inject: ['msg']
}
</script>


```



## computed与watch

⚡computed和watch都是Vue实例的选项，用来监听数据变化并执行相应的操作。<br>

⚡computed：计算属性是基于它们的依赖进行缓存的。计算属性只有在它的相关依赖发生改变时才会重新求值。这就意味着只要相关依赖没有发生改变，多次访问计算属性会立即返回之前的计算结果，而不必再次执行函数。计算属性默认只有getter，不过在需要时你也可以提供一个setter。<br>

```js
new Vue({
  el: '#app',
  data: {
    message: 'Hello'
  },
  computed: {
    reversedMessage: function () {
      return this.message.split('').reverse().join('')
    }
  }
})


```

⚡watch：当你需要在数据变化时执行异步或开销较大的操作时，可以使用watch。watch选项允许我们执行异步操作（访问一个API），限制我们执行该操作的频率，并在我们得到最终结果前，设置中间状态。

```js
new Vue({
  el: '#app',
  data: {
    message: 'Hello'
  },
  watch: {
    message: function (newVal, oldVal) {
      console.log('message changed from', oldVal, 'to', newVal)
    }
  }
})


```

区别：🐰🐰

🐰计算属性是基于它们的依赖进行缓存的。只有在相关依赖发生改变时，计算属性才会重新求值。这意味着只要相关依赖没有发生改变，多次访问计算属性会立即返回之前的计算结果，而不必再次执行函数。相比之下，watch选项中的函数每次都会执行。<br>
🐰计算属性通常用来计算一个值，这个值是基于它的依赖进行计算的。当你需要根据数据变化来改变数据时，可以使用计算属性。相比之下，watch选项通常用来执行异步操作或开销较大的操作。<br>
🐰计算属性是响应式的，当它们的依赖发生改变时，它们会自动更新。相比之下，watch选项需要手动设置监听的数据。<br>
当你需要根据数据变化来改变数据时，可以使用计算属性；当你需要根据数据变化来执行异步操作或开销较大的操作时，可以使用watch。<br>



## ref与reactive的区别

1. ref返回一个包含value属性的对象，而reactive返回一个响应式的Proxy对象。
2. 在使用上，ref更方便一些，使用起来更简单直观。而reactive比较灵活，可以将任意对象转换成响应式数据，并且可以进行深层次的响应式处理。

## Vue.nextTick的原理及实现



🌱Vue.nextTick是一个全局API，用于在下一次DOM更新循环结束之后延迟执行一个回调函数。它的实现依赖于JavaScript的事件循环和微任务队列。<br>

🌱在Vue 2.x中，Vue.nextTick的实现使用了一个异步队列来存储所有等待执行的回调函数。当一个回调函数被传递给Vue.nextTick时，它会被推入这个异步队列中。然后，Vue会使用一个内部函数来异步刷新这个队列，以便在下一次DOM更新循环结束之后执行所有等待的回调函数。<br>

🌱为了异步刷新队列，Vue会尝试使用原生的Promise.then、MutationObserver或setImmediate来实现异步延迟。如果这些方法都不可用，它会退而使用setTimeout(fn, 0)。<br>

🌱在Vue 3.x中，Vue.nextTick的实现类似于Vue 2.x，但使用了更现代的API来实现异步延迟。它首先尝试使用原生的Promise.then，如果不可用则退而使用setTimeout(fn, 0)。<br>

```js
<template>
  <div>
    <p ref="message">{{ message }}</p>
    <button @click="updateMessage">Update</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello'
    }
  },
  methods: {
    updateMessage() {
      this.message = 'Updated'
      console.log(this.$refs.message.textContent) // => 'Hello'
      this.$nextTick(() => {
        console.log(this.$refs.message.textContent) // => 'Updated'
      })
    }
  }
}
</script>


```



## 组件中data是一个函数的原因

🌵在Vue组件中，data必须是一个函数，而不是一个对象。这是因为当一个组件被多次使用时，每个实例都应该维护一份被返回对象的独立的拷贝。<br>

🌵如果data是一个对象，那么所有组件实例将共享同一个数据对象。这意味着当一个组件实例改变了数据对象时，其他组件实例的数据也会受到影响。<br>

🌵为了避免这个问题，Vue要求组件的data选项必须是一个函数。当一个组件被实例化时，Vue会调用这个函数来获取组件的初始数据。由于每个组件实例都会调用这个函数来获取自己的数据，所以每个组件实例都会维护一份独立的数据拷贝。<br>



## 前端路由

前端路由是指在单页应用（SPA）中，通过改变URL并不向服务器发送请求，而是通过JavaScript来控制页面内容的切换。这种方式可以让用户在不离开当前页面的情况下，浏览不同的内容。<br>

`hash模式`：在这种模式下，URL中的hash（即#符号后面的部分）用来表示路由状态。当hash发生变化时，浏览器不会向服务器发送请求，而是触发hashchange事件。我们可以监听这个事件，并根据新的hash值来更新页面内容。这种方式兼容性好，但URL中会多出一个#符号，可能会影响美观。<br>
`history模式`：在这种模式下，我们使用HTML5的History API来控制URL的变化。当URL发生变化时，浏览器不会向服务器发送请求，而是触发popstate事件。我们可以监听这个事件，并根据新的URL来更新页面内容。这种方式可以让URL看起来更像传统的URL，但需要服务器端的支持。<br>



## Vue双向绑定：

​        vue.js是采用数据劫持结合发布者-订阅者模式的方式，通过Object.defineProperty()来劫持各个属性的setter,getter,在数据变动时发布消息给订阅者，触发相应的监听回调，<br>

  v-model是一个指令，双向绑定实际上是Vue 的编译器完成的，通过输出包含v-model模版的组件渲染函数，实际上还是value属性的绑定及input事件监听，事件回调函数中会做相应变量的更新操作。v-bind:value = "message" v-on:input = "message=event.target.value" 作用在组件上,本质是一个父子组件通信的语法糖，通过 prop 和 .emit 实现, 等同于:value = "message" @input = `$emit('input', $event.target.value)`


## Vue diff算法

Vue的diff算法是用来比较新旧虚拟DOM树，计算出最小的更新操作来更新真实DOM的过程。它采用了深度优先遍历和双端比较的策略来优化比较过程，是Vue虚拟DOM实现的核心部分。<br>

Vue的diff算法基于两个假设：<br>

🐧1、两个相同标签的元素会产生类似的DOM结构。<br>
🐧2、同一层级的一组子节点，它们可以通过唯一的id进行区分。<br>
🐧基于这两个假设，Vue的diff算法采用了深度优先遍历和双端比较的策略来比较新旧虚拟DOM树。<br>
在比较过程中，Vue会从新旧虚拟DOM树的根节点开始，逐层进行比较。当遇到不同类型的节点时，Vue会直接替换整个节点及其子节点；当遇到相同类型但属性不同的节点时，Vue会更🐧新节点的属性；当遇到相同类型且属性相同但子节点不同的节点时，Vue会递归地比较子节点。<br>

🐧在比较子节点时，Vue会使用双端比较的策略来优化比较过程。它会同时从新旧虚拟DOM树的两端开始比较，如果发现两端的节点相同，则直接移动节点；如果发现两端的节点不同，则继续比较中间部分。这种策略可以有效地减少需要比较的节点数量，从而提高diff算法的性能。<br>
🐧
那么我们常常在for循环中要绑定一个key属性值，有什么作用呢？<br>
其实在Vue中，key是一个特殊的属性，用于标识列表渲染中每个节点的唯一性。这是因为在列表渲染中，列表数据可能会发生变化，导致列表项的顺序、数量或内容发生变化。如果没有key属性，Vue将无法准确地确定新旧虚拟DOM树中的节点是否相同，从而无法快速地更新虚拟DOM树。所以它可以帮助Vue更快地更新虚拟DOM树，从而提高应用的性能。<br>

🐧当Vue进行列表渲染时，它需要一种方式来确定新旧虚拟DOM树中的节点是否相同。如果没有key属性，Vue会默认使用“就地更新”的策略，即直接复用旧虚拟DOM树中的节点来更新新虚拟DOM树中的节点。这种方式简单快速，但在某些情况下可能会导致问题。<br>

🐧为了避免这些问题，我们可以使用key属性来为每个节点指定一个唯一的标识。当Vue进行列表渲染时，它会根据key属性来确定新旧虚拟DOM树中的节点是否相同。这样，Vue就可以更快地更新虚拟DOM树，从而提高应用的性能。<br>

## keep-alive使用及原理。

keep-alive是Vue的一个内置组件，用于保留组件状态或避免重新渲染。它可以将其包裹的组件缓存起来，当组件切换时不会销毁，而是保留在内存中，以便下次切换回来时可以直接使用。
:::tip
实现原理：是通过一个缓存对象来存储被缓存的组件实例。当一个组件被切换出去时，它不会被销毁，而是被保存在缓存对象中；当一个组件被切换回来时，keep-alive会先检查缓存对象中是否有这个组件的实例，如果有，则直接使用缓存的实例；如果没有，则创建一个新的实例。
:::
```js
<template>
  <div>
    <button @click="toggle">Toggle</button>
    <keep-alive>
      <component :is="currentView"></component>
    </keep-alive>
  </div>
</template>

<script>
import Foo from './Foo.vue'
import Bar from './Bar.vue'

export default {
  components: {
    Foo,
    Bar
  },
  data() {
    return {
      currentView: 'Foo'
    }
  },
  methods: {
    toggle() {
      this.currentView = this.currentView === 'Foo' ? 'Bar' : 'Foo'
    }
  }
}
</script>


```



## 插槽

插槽（Slot）是Vue的一个功能，用于实现组件的内容分发。它允许你在父组件中定义一些内容，然后将这些内容分发到子组件的指定位置。<br>

默认插槽，具名插槽和匿名插槽：<br>

默认插槽用于分发没有指定名称的内容<br>
具名插槽用于分发指定名称的内容。<br>
匿名插槽是指没有被元素包裹的内容。<br>

```js
// 子组件
Vue.component('my-component', {
  template: `
    <div>
      <header>
        <slot name="header"></slot>
      </header>
      <main>
        <slot></slot>
      </main>
      <footer>
        <slot name="footer"></slot>
      </footer>
    </div>
  `
})

// 父组件
new Vue({
  el: '#app',
  template: `
    <my-component>
      <template v-slot:header>
        <h1>Header</h1>
      </template>
      <p>Content</p>
      <template v-slot:footer>
        <h1>Footer</h1>
      </template>
    </my-component>
  `
})


```



## 封装自定义指令

#### 1. 在utils文件夹下新建directive文件夹

用来存放需要自定义的指令文件，该文件用于创建指令以及编写操作逻辑代码，目录结构

```md
​```

directive

├── index.js  //导入需要的指令，并汇总导出，

└── highlight //文本高亮指令

|    └── index.js

└── Focus //聚焦指令

|    └── index.js

└── SlideIn   //元素平滑上升指令

|     └── index.js

└── ···

     └── ···

​```


```

#### 2. 编写自定义指令文件

下面会列举三个自定义指令的例子（文本高亮、聚焦、元素平滑上升）

#### 3. 在directive文件夹下新建index.js文件，

在该文件中导入需要的指令，然后调用directive（）方法，将自定义的指令挂载到app.directive()方法中，

```js
import SildeIn from './SlideIn'
import Focus from './Focus'
import Highlight from './highlight'  //导入自定义指令
 
const directives = {  //汇总自定义指令
  SildeIn//元素平滑上升指令 这里就是指令名 在文本中使用方法就是 v-指令名
  Focus,//聚焦指令
  Highlight//文本高亮指令
}
 
export default {  //导出自定义指令
  install(app) {// 以安装的方式插到app中
    Object.keys(directives).forEach((key) => {    // 遍历directives对象的key
      app.directive(key, directives[key])  // 将每个directive注册到app中
    })
  }
}
```



#### 4. 在main.js中导入自定义指令，并全局注册，

```js
import Directives from '@/utils/directive/index.js'
function initApp() {
  const app = createApp(App)
  // app.use(pinia)
  // app.use(elementIcon)
  // app.use(router)
  app.use(Directives) //全局注册
  app.mount('#app')
}
initApp()
```

#### 5. 指令的使用方式

：v-指令名="指令方法"，指令方法可以是函数也可以是对象，例如

```js
<div v-SildeIn class="w-3/4 h-96 bg-slate-700 mt-14">{{ item }}</div>
<p v-highlight:color="color">这段文本会高亮显示,用来演示动态传参</p>
<input v-Focus type="text" placeholder="这个input会自动聚焦" />
```



## Mock.js的使用

1. 在src目录下创建mock目录，定义mock主文件index.js，并在该文件中存放我们的mock数据<br>
2. 在main.js引入mock文件，方便在其他文件中使用<br>

🐀Mock.mock( url, type, template)<br>

🐀第一个参数 url 为请求路径，<br>

🐀第二个参数 type 为请求类型 如：get、popst、delete、put 等<br>

🐀第三个参数是生成的数据，作为响应数据返回。可以为对象，也可以为函数，函数需要return<br>
🐀
！！！下方是Mock.js的index文件 ！！！<br>

```js
// 引用 Mock
const Mock = require('mockjs')
 
export const userData = Mock.mock("/data/list", "get", {
  // 属性 list 的值是一个数组，随机生成 1 到 10 个元素
  "list|1-10": [
    {
      // 随机生成1-10个★
      "string|1-10": "★",
      // 随机生成1-100之间的任意整数
      "number|1-100": 1,
      // 生成一个浮点数，整数部分大于等于 1、小于等于 100，小数部分保留 1 到 10 位。
      "floatNumber|1-100.1-10": 1,
      // 随机生成一个布尔值，值为 true 的概率是 1/2，值为 false 的概率同样是 1/2。
      "boolean|1": true,
      // 随机生成一个布尔值，值为 false 的概率是 2 / (2 + 5)，值为 true 的概率是 5 / (2 + 5)。
      'bool|2-5': false,
      // 从属性值 object 中随机选取 2-4 个属性
      "object|2-4": {
        "310000": "上海市",
        "320000": "江苏省",
        "330000": "浙江省",
        "340000": "安徽省"
      },
      // 通过重复属性值 array 生成一个新数组，重复次数为 2
      "array|2": [
        "AMD",
        "CMD",
        "UMD"
      ],
      // 执行函数 function，取其返回值作为最终的属性值，函数的上下文为属性 'name' 所在的对象。
      'foo': '哇哈哈哈哈',
      'name': function () {
        return this.foo
      },
      // 根据正则表达式 regexp 反向生成可以匹配它的字符串。用于生成自定义格式的字符串。
      'regexp': /\d{5,10}/,
    },
  ],
  code: 200,
  message: 'ok',
});
```

！！！下方是需要使用mockjs数据的文件

```js
// 首先需要引入axios 如果没安装的话 在终端输入npm i axios 安装一下
import axios from 'axios';
 
export default {
	methods: {
		getData() {
          axios.get("/data/list").then(res => {
            console.log(res);
          }).catch(error => {
            console.log(error);
          })
		},
	},
};
```





## 懒加载原理是什么

页面中的img元素，如果没有src属性，浏览器就不会发出请求去下载图片，只有通过javascript设置了图片路径，浏览器才会发送请求。
:::info
懒加载的原理就是先在页面中把所有的图片统一使用一张占位图进行占位，把真正的路径存在元素的“data-url”（这个名字起个自己认识好记的就行）属性里，当js监听到该图片元素进入可视窗口时，即将自定义属性中的地址存储到src属性中，达到懒加载的效果。
:::

# 工程化

**前端工程化是一种将软件工程的方法和思想应用于前端开发的过程。它主要指从前端项目开始开发到部署线上再到后期迭代维护的整个过程，从工程的角度管理前端开发，形成前端开发流程的一整套开发规范或解决方案，提高前端开发效率。**



# webpack

### 构建流程：

🐦 初始化参数：根据命令行和配置文件收集参数，形成最终的配置结果。
开始编译：传入参数，创建compiler实例，注册所有配置的插件，插件监听Webpack构建生命周期的事件节点，做出相应的反应，执行对象的run方法开始执行编译。
确定入口：从配置文件中指定的entry入口，开始解析文件构建AST语法树，找出依赖，递归下去。
编译模块：递归中根据文件类型和loader配置，调用所有配置的loader对文件进行转换，再找出该模块依赖的模块，再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理。
完成模块编译并输出：递归完后，得到每个文件结果，包含每个模块以及它们之间的依赖关系，根据entry配置生成代码块chunk。输出所有的chunk到文件系统。

### 优化Webpack的构建速度

🐦 使用新版本：升级到最新版本的Webpack可以带来性能提升，因为每个版本的Webpack都会进行一些性能优化。
使用缓存：可以使用缓存来加快构建速度，例如使用babel-loader、ts-loader等loader的缓存选项。
多线程编译：可以使用多线程来加快编译速度，例如使用thread-loader或happypack。
速度分析：可以使用speed-measure-webpack-plugin来分析Webpack构建期间各个阶段花费的时间，从而快速定位到可以优化的地方。
优化Webpack的构建速度可以带来许多好处。随着项目涉及到的页面越来越多，功能和业务代码也会越来越多，相应的Webpack的构建时间也会越来越久。这个时候我们就不得不考虑性能优化的事情了。
因为这个构建时间与我们的日常开发是密切相关，当我们本地开发启动devServer或者build的时候，如果时间过长，会大大降低我们的工作效率。试想一下，我们突然碰到一个紧急bug，项目启动需要花费几分钟，改完后项目build上线也要几分钟，换谁估计都得有暴脾气了…

### 优化 Webpack 的打包体积

🐦 优化Webpack的打包体积可以带来许多好处。打包体积越小，应用程序的加载速度就越快，用户体验就越好。下面是一些优化Webpack打包体积的方法：

提取公共代码：在多入口情况下，可以使用CommonsChunkPlugin来提取公共代码。
提取常用库：可以通过externals配置来提取常用库。
预编译资源模块：可以利用DllPlugin和DllReferencePlugin预编译资源模块。
剔除多余代码：可以使用Tree-shaking和Scope Hoisting来剔除多余代码。例如：如果你在开发项目时将整个组件库都引入了，那么在使用Webpack打包时，可以使用Tree-shaking来自动删除没有引用的组件，从而减小打包体积。

## 扩展：Tree-shaking

🐦 Tree-shaking是一种通过静态分析代码，删除未引用代码的技术。它可以帮助开发人员减小打包体积，提高应用程序的加载速度。

Tree-shaking的原理是基于ES6模块的静态结构特性。由于ES6模块的导入和导出是在编译时确定的，而不是在运行时确定的，因此Webpack可以在构建过程中静态分析代码，找出未被引用的模块，并将它们从最终的打包文件中删除。

不过需要注意的是，Tree-shaking只能删除未被引用的模块，而不能删除未被执行的代码。因此，如果你想要使用Tree-shaking来优化打包体积，需要注意代码组织方式，尽量避免在一个模块中混合使用被引用和未被引用的代码。

## 性能优化

📁减少模块解析：可以通过配置resolve.alias来减少模块解析的时间。<br>
📁优化loader性能：可以通过限制loader的应用范围来提高构建速度。<br>
📁使用热替换（HMR）：虽然热替换并不能降低构建时间，但它可以降低代码改动到效果呈现的时间。<br>
📁手动分包：可以通过手动分包来减少打包时间。<br>
📁使用新版本：使用新版本的Webpack可以带来性能提升，因为每个版本的Webpack都会进行一些性能优化。<br>

📁扩展：Tree-shaking<br>
📁Tree-shaking是一种通过静态分析代码，删除未引用代码的技术。它可以帮助开发人员减小打包体积，提高应用程序的加载速度。<br>

📁Tree-shaking的原理是基于ES6模块的静态结构特性。由于ES6模块的导入和导出是在编译时确定的，而不是在运行时确定的，因此Webpack可以在构建过程中静态分析代码，找出未被引用的模块，并将它们从最终的打包文件中删除。<br>

📁不过需要注意的是，Tree-shaking只能删除未被引用的模块，而不能删除未被执行的代码。因此，如果你想要使用Tree-shaking来优化打包体积，需要注意代码组织方式，尽量避免在一个模块中混合使用被引用和未被引用的代码。<br>





## 虚拟滚动原理

⚽1、数据分页
许多网页和应用程序都会用到这样的方，对需要展示的大量数据进行分割分页，后端已经做好了分页，前端只需要调用后端的接口传入相应的第几页的参数就能获取到，减少了一次性需要渲染的行数，但是如果查询的表列数非常多，还是可能会渲染很多元素，不是一个很稳定的方法。<br>

⚽2、无限滚动
该方法是在页面渲染一次性所能成手最大范围的数据量，当滚动条快接近底部时，再去追加渲染下一批需要渲染的元素，但是该方法的明显缺血在于，如果数据量过大，无限滚动下去那么最终所造成渲染的元素越来越多，性能也不会很好。<br>

⚽3、虚拟滚动
虚拟滚动其实就是综合数据分页和无限滚动的方法，在有限的视口中只渲染我们所能看到的数据，超出视口之外的数据就不进行渲染，可以通过计算可视范围内的但单元格，保证每一次滚动渲染的DOM元素都是可以控制的，不会担心像数据分页一样一次性渲染过多，也不会发生像无限滚动方案那样会存在数据堆积，是一种很好的解决办法。<br>

⚽假设实际开发中服务端一次响应20万条列表数据，此时设备屏幕只允许容纳20条，那么用户理论上只可以看见20条数据，其他的数据不会进行渲染加载。如果前端将20万条数据全部渲染成DOM元素，可能造成程序卡顿，占用较大资源，非常影响用户体验，那么虚拟滚动技术就完美的解决了这一问题。<br>

### 自定义封装一个虚拟滚动组件：**

子组件：

```js
<template>
  <!-- 可视区盒子 -->
  <div :style="`height:${viewH}px;overflow-y:scroll`"
       @scroll="handleScroll"
       class="container">
    <div :style="`height:${scrollH}px`"
         class="list">
      <div class="item_box"
           :style="`transform:translateY(${offsetY}px)`">
        <div class="item"
             :style="`height:${itemH}px`"
             v-for="(item,index) in list"
             :key="index">
          {{ item }}
        </div>
      </div>
    </div>
  </div>
</template>
 
<script>
export default {
  name: 'ScrollComponent',
  props: {
    data: Array,   // 列表总数据
    viewH: Number, // 外部高度
    itemH: Number, // 单项高度
  },
  data () {
    return {
      scrollH: '', // 整个滚动列表高度(总高度)
      list: [],    // 每次显示的数据
      showNum: '', // 页面需要显示的数量
      offsetY: '',// 动态偏移量- 外层的盒子进行滚动设置
      lastTime: '', //最新的时间
    }
  },
  mounted () {
    // 初始化计算
    this.scrollH = this.data.length * this.itemH
    // 计算可视化高度中能存几个列表，可以略多余可视化高度能存放的列表数量避免滚动时被替换
    this.showNum = Math.floor(this.viewH / this.itemH) + 1
    // 默认展示的几个数据
    this.list = this.data.slice(0, this.showNum)
    this.lastTime = new Date().getTime()
  },
  methods: {
    // handleScroll 滚动时候触发回调
    handleScroll (e) {
      // 控制滚动时间间隔
      if (new Date().getTime() - this.lastTime > 10) {
        let scrollTop = e.target.scrollTop //滚动条高度
        // 每一次滚动后 根据scrollTop值获取一个可以整除itemH结果进行偏移
        // 例如：scrollTop = 1220，1220 % this.itemH = 20 offsetY = 1220-20 = 1200
        this.offsetY = scrollTop - (scrollTop % this.itemH)
        console.log('卷入scrollTop值:', scrollTop, '卷入的行数：', scrollTop % this.itemH);
        this.list = this.data.slice(
          Math.floor(scrollTop / this.itemH), // 计算卷入了多少行
          Math.floor(scrollTop / this.itemH) + this.showNum
        )
        this.lastTime = new Date().getTime() //更新最新时间
      }
    }
  }
}
</script>
 
<style scoped>
.container {
  position: relative;
  top: 200px;
  left: 500px;
  border: 1px solid red;
  width: 500px;
}
.item {
  border: 1px solid pink;
}
</style>
```

父组件：

```js
<template>
  <div id="app">
    <ScrollComponent :data="dataList"
                     :viewH="viewH"
                     :itemH="itemH" />
  </div>
</template>
 
<script>
import ScrollComponent from './components/ScrollComponent.vue'
 
export default {
  name: 'App',
  components: {
    ScrollComponent
  },
  data () {
    return {
      dataList: [1, 1, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1, 11, 1, 1, 1, 1, 1],
      viewH: 200,
      itemH: 40
    }
  },
  mounted () {
 
  }
}
</script>
 
<style>
* {
  margin: 0;
  padding: 0;
}
</style>
```



## 单页面应用是什么？优缺点？如何弥补缺点

单页面对一个入口DOM通过路由去更改内容，整个应用只有一个html页面<br>
SPA优点：用户体验好，没有页面切换就没有白屏情况；<br>
SPA缺点：首屏加载慢，不利于SEO<br>
SPA弥补：通过压缩、路由懒加载缓解首屏慢；通过SSR 服务器端渲染解决SEO问题；<br>

## Vue首屏优化怎么做？

- 使用较轻量的组件，比如echart对应有vue-chart
- vue-cli开启打包压缩 和后台配合 gzip访问；
- 路由懒加载，分包；
- 打包时配置删掉log日志
- 资源过大可以使用cdn模式引入，不再打包到本地

## loader && plugin

🍼Webpack的loader和plugin是两种不同的扩展机制，它们都可以帮助开发人员定制Webpack的构建过程。<br>

🍼Loader：用于对模块的源代码进行转换。它们可以将非JavaScript文件（如CSS、图片等）转换为Webpack能够处理的模块。常用的loader有：babel-loader（用于将ES6+代码转换为ES5代码）、css-loader（用于加载CSS文件）、file-loader（用于加载文件）等。<br>
🍼Plugin：用于扩展Webpack的功能。它们可以在构建过程中执行各种任务，如优化输出文件、管理资源等。常用的plugin有：HtmlWebpackPlugin（用于生成HTML文件）、MiniCssExtractPlugin（用于提取CSS文件）、UglifyJsPlugin（用于压缩JavaScript代码）等。<br>



# GIT

Git是一种分布式版本控制系统，它可以帮助开发人员管理和协作代码。Git可以跟踪代码的变化历史，帮助开发人员查看每次修改的内容，并在出现问题时快速恢复到之前的状态。<br>

Git支持分支和合并，可以帮助开发人员在不同的分支上并行开发功能，然后将它们合并到主分支上。这样，开发人员可以更好地协作，并更快地完成项目。

常用的git命令：

```md 
git init：初始化本地git仓库（创建新仓库）
git add：添加文件到暂存区
git commit：提交暂存区到本地仓库
git status：查看当前版本状态（是否修改）
git push：将当前分支push到远程分支
git pull：获取远程分支并merge到当前分支
git clone：clone远程仓库
git branch：显示本地分支
git branch -d：删除分支
git checkout：检出已存在的分支或文件
git checkout -b：创建+切换分支
git merge：合并分支
```

不同类型的分支：<br>
📍master分支：通常用于线上发布使用。它应该始终保持稳定，并且只接受来自其他分支经过充分测试和验证的更改。<br>
📍dev分支：用于平常的开发和测试。它通常包含最新的开发进度，并且可以接受来自功能分支或修复分支的更改。<br>
📍Feature branches（功能分支）：用于开发新功能。每个功能分支都应该专注于一个特定的功能，并且在功能完成后合并到dev分支。<br>
📍Hotfix branches（修复分支）：用于修复bug。每个修复分支都应该专注于修复一个特定的bug，并且在修复完成后合并到dev分支。<br>
📍Release branches（发布分支）：用于准备新版本的发布。它通常从dev分支中创建，并且只接受用于修复bug和准备发布的更改。当新版本准备好发布时，发布分支会被合并到master分支和dev分支。<br>



# ESLint

ESLint是一个用于识别和报告ECMAScript/JavaScript代码中模式的工具，旨在使代码更加一致并避免错误。它是完全可插拔的，每个规则都是一个插件，你可以在运行时添加更多。你还可以添加社区插件、配置和解析器来扩展ESLint的功能。<br>

ESLint可以帮助你快速找到代码中的问题。它内置于大多数文本编辑器中，你可以将ESLint作为持续集成管道的一部分运行。许多ESLint发现的问题都可以自动修复。ESLint修复是语法感知的，因此你不会遇到传统查找和替换算法引入的错误。

## 作用：

快速找到代码中的问题：ESLint静态分析你的代码以快速找到问题。<br>
自动修复问题：许多ESLint发现的问题都可以自动修复。ESLint修复是语法感知的，因此你不会遇到传统查找和替换算法引入的错误。<br>
遵循编码规范：你可以配置ESLint来强制执行特定的编码规范，以确保你的代码风格一致；如果是团队协作开发，它可以帮助团队成员遵循统一的编码规范，确保代码风格一致，便于阅读和理解彼此的代码。<br>
提高代码质量：通过识别和修复潜在的问题，ESLint可以帮助你提高代码质量并减少错误。<br>



# 项目优化

性能优化<br>
✅前端页面性能优化是一个复杂的过程，可以从多个方面进行优化。一些常见的优化方法包括：<br>

✅减少请求数量：通过合并文件、使用雪碧图、使用字体图标等方法来减少HTTP请求数量。<br>
✅减小资源大小：通过压缩代码、压缩图片、使用Gzip等方法来减小资源大小。<br>
✅优化网络连接：通过使用CDN、DNS预解析、持久连接等方法来优化网络连接。<br>
✅优化资源加载：通过优化资源加载位置、使用异步加载、使用懒加载等方法来优化资源加载。<br>
✅减少重绘回流：通过避免使用CSS表达式、避免使用table布局、避免频繁操作样式等方法来减少重绘回流。<br>
✅使用性能更好的API：通过使用requestAnimationFrame、使用Web Workers、使用Service Workers等方法来使用性能更好的API。<br>

## 重绘回流

回流（reflow）和重绘（repaint）是浏览器渲染过程中的两个步骤。它们都会影响页面的渲染性能，因此应尽量避免。

回流：当页面中的元素的布局或几何属性发生变化时，浏览器需要重新计算元素的位置和大小，这个过程称为回流。回流会影响到页面中所有元素的位置和大小，因此它是一个非常耗时的过程。
重绘：当页面中的元素的外观（如颜色、背景等）发生变化，但不影响布局时，浏览器会重新绘制这些元素，这个过程称为重绘。重绘不会影响到页面中其他元素的布局，因此它比回流更快。
避免回流和重绘的一些方法包括：

避免使用CSS表达式：CSS表达式会在每次页面渲染时重新计算，这会导致大量的回流和重绘。
避免使用table布局：table布局会导致大量的回流和重绘，应尽量避免使用。
避免频繁操作样式：频繁地修改元素的样式会导致大量的回流和重绘。可以考虑使用类名来修改样式，或者将多次修改样式的操作合并为一次。
避免频繁操作DOM：频繁地操作DOM会导致大量的回流和重绘。可以考虑使用文档片段（DocumentFragment）来减少对DOM的操作。



## 主要方法

代码优化： 可以通过压缩、合并和混淆代码来减小文件大小，提高页面加载速度。例如，可以使用UglifyJS等工具来压缩JavaScript代码，使用CSSNano等工具来压缩CSS代码。此外，还可以使用Webpack等构建工具来合并多个文件为一个文件，减少HTTP请求数量。
资源优化： 可以通过使用CDN、启用Gzip压缩、使用浏览器缓存等方法来优化资源加载，提高页面加载速度。例如，可以将静态资源部署到CDN上，以加快资源加载速度；可以在服务器端启用Gzip压缩，以减小传输文件的大小；可以合理设置HTTP缓存头，以利用浏览器缓存加快页面加载速度。
页面结构优化： 可以通过合理安排页面结构，避免使用嵌套过深的HTML标签，减少DOM操作等方法来优化页面结构，提高页面渲染速度。例如，可以避免在HTML中使用过多的嵌套标签；可以尽量减少对DOM的操作，避免触发浏览器的回流和重绘。
交互优化： 可以通过使用懒加载、预加载、按需加载等技术来优化用户交互，提升用户体验。例如，可以使用懒加载技术来延迟加载页面中不可见的图片；可以使用预加载技术来预先加载页面中即将需要的资源；可以使用按需加载技术来动态加载页面中需要的JavaScript模块。
可维护性优化： 可以通过使用模块化、组件化、设计模式等技术来提高代码的可维护性，降低维护成本。例如，可以使用CommonJS或ES6模块化语法来组织代码；可以使用React或Vue等框架来构建可复用的组件；可以使用设计模式来编写可扩展、可维护的代码。

## 其他一些措施：

移除生产环境的控制台打印：在生产环境中，应该移除所有不必要的控制台打印，以减少对性能的影响。
第三方库的按需加载：可以使用按需加载技术来动态加载第三方库中需要的部分，以减小文件大小和加快页面加载速度。
降低请求成本：可以通过使用HTTP/2、使用Service Workers等技术来降低请求成本，提高页面加载速度。
减少请求数：可以通过合并文件、使用雪碧图、使用字体图标等方法来减少HTTP请求数量。
减小传输体积：可以通过压缩代码、压缩图片、启用Gzip压缩等方法来减小传输文件的大小。

## 浏览器
:::danger
从输入url到页面展示出来的整个过程
浏览器会检查缓存，如果请求的资源在缓存中并且新鲜，就会直接使用缓存中的资源。如果资源未缓存或缓存不够新鲜，浏览器会发起新请求。
浏览器会解析URL，获取协议、主机、端口和路径。
浏览器会通过DNS查询获取主机的IP地址。
浏览器会与目标IP地址和端口建立TCP连接。
TCP连接建立后，浏览器会发送HTTP请求。
服务器接收到请求并进行处理，然后返回HTTP响应。
浏览器接收到HTTP响应，并根据情况选择关闭TCP连接或保留重用。
浏览器检查响应状态码，并根据资源类型决定如何处理。如果资源是HTML文档，浏览器会解析HTML文档，构建DOM树，下载资源，构建CSSOM树，执行js脚本等操作。
:::
## 浏览器缓存机制

💯HTTP缓存：HTTP缓存是一种通过重复使用之前获取的资源来提高网站性能的机制。它通过设置HTTP响应头中的缓存控制字段来实现。<br>
💯Cookie：Cookie是一种用于在客户端存储少量数据的机制。它通常用于保存用户的登录状态、偏好设置等信息。Cookie的大小有限制，通常不能超过4KB。<br>
💯Web Storage：Web Storage包括localStorage和sessionStorage两种类型。它们都提供了一种在客户端存储键值对数据的机制。localStorage和sessionStorage的区别在于，localStorage中存储的数据会持久保存在客户端，即使浏览器关闭也不会丢失；而sessionStorage中存储的数据只在当前会话期间有效，当浏览器关闭时会被清除。<br>
💯IndexedDB：IndexedDB是一种在客户端存储大量结构化数据的机制。它提供了丰富的查询功能，并支持事务。<br>
此外，还有一种名为session的机制，它用于在服务器端存储用户会话信息。session与上述几种缓存机制不同，它不是在浏览器中实现的，而是在服务器端实现的。<br>

## Cookie、sessionStorage、localStorage 的区别

生命周期：Cookie的生命周期可以通过设置过期时间来控制，过期后会被自动删除。sessionStorage中存储的数据只在当前会话期间有效，当浏览器关闭时会被清除。localStorage中存储的数据会持久保存在客户端，即使浏览器关闭也不会丢失。
存储容量：Cookie的大小有限制，通常不能超过4KB。sessionStorage和localStorage的存储容量要大得多，一般可以达到5MB或更多。
作用域：Cookie在同一个域名下是共享的，可以在不同页面之间共享数据。sessionStorage和localStorage的作用域是以窗口或标签页为单位的，它们只能在同一个窗口或标签页中共享数据。
数据传输：Cookie会随着每次HTTP请求一起发送到服务器端，这会增加额外的网络流量。而sessionStorage和localStorage中存储的数据只存在于客户端，不会被发送到服务器端。



## 浏览器缓存

🔘浏览器缓存（Browser Caching）是为了节约网络的资源加速浏览，浏览器在用户磁盘上对最近请求过的文档进行存储，当访问者再次请求这个页面时，浏览器就可以从本地磁盘显示文档，这样就可以加速页面的阅览。<br>

🔘通常浏览器缓存策略分为两种：强缓存（Expires，cache-control）和协商缓存（Last-modified ，Etag），并且缓存策略都是通过设置 HTTP Header 来实现的。<br>

🔘强缓存是指在缓存期间不需要请求，state code为200。它可以通过Expires和Cache-Control来实现。Expires是HTTP/1.0的产物，表示资源的过期时间，受限于本地时间。如果修改了本地时间，可能会造成缓存失效。Cache-Control是HTTP/1.1的产物，用来控制资源在本地缓存的有效期。它的max-age属性可以指定资源的最大生命周期。
协商缓存是指在强缓存失效后，浏览器携带缓存标识向服务器发起请求，由服务器根据缓存标识决定是否使用缓存的过程。其中协商缓存的标识也是在响应报文的HTTP头中和请求结果一起返回给浏览器的。它可以通过Last-Modified/If-Modified-Since和Etag/If-None-Match来实现。<br>

🔘当浏览器请求资源时，首先会检查资源的Expires和Cache-Control。如果命中强缓存，状态仍然返回200，但不会请求数据，在浏览器中能明显看到from cache字样。如果强缓存失效，则会携带缓存标识向服务器发起请求，由服务器根据缓存标识决定是否使用缓存。如果命中协商缓存，则返回304状态码，并且不会返回数据。<br>

🔘协商缓存是一种服务端的缓存策略，即通过服务端来判断某件事情是不是可以被缓存。服务端判断客户端的资源，是否和服务端资源一致，如果一致则返回304，反之返回200和最新的资源。<br>

🔘当网页不是首次加载时，如果设置了强缓存，数据则会从缓存中读取，不请求服务端。如果强缓存时间过期，则会请求服务端，服务端判断是否命中协商缓存，如果协商缓存时间或者哈希没变，则返回304。如果协商缓存时间对比不一样或资源变化，则数据重新被获取，返回200。<br>

## 进程、线程、协程

🔷进程是操作系统分配资源和调度的基本单位，它拥有独立的内存空间和系统资源。一个进程可以包含多个线程，线程共享进程的资源。<br>
🔷线程是操作系统能够进行运算调度的最小单位，它被包含在进程之中，是进程中的实际运作单位。线程共享进程的内存空间和系统资源，但拥有独立的运行栈和程序计数器。<br>
🔷协程是一种轻量级的线程，它避免了无意义的调度，由此可以提高性能。但也因此，程序员必须自己承担调度的责任。协程也失去了标准线程使用多CPU的能力。<br>



## 进程和线程的区别与联系

🌅进程有独立的地址空间，一个进程崩溃后，在保护模式下不会对其它进程产生影响。<br>
🌅而线程只是一个进程中的不同执行路径，线程有自己的堆栈和局部变量，但线程之间没有单独的地址空间。<br>
🌅同一进程的所有线程共享该进程的所有资源，一个线程死掉就等于整个进程死掉。<br>
🌅一个线程只能属于一个进程，而一个进程可以有多个线程，且至少有一个线程。<br>

## http常见状态码

- 信息响应 (100–199)
- 成功响应 (200–299)
- 重定向消息 (300–399)
- 客户端错误响应 (400–499)
- 服务端错误响应 (500–599)

一些常见的HTTP状态码包括：

200 OK：请求成功。<br>
301 Moved Permanently：请求的资源的URL已永久更改。<br>
302 Found：请求的资源的URI已暂时更改。<br>
304 Not Modified：所请求的资源未修改，客户端可以继续使用相同的缓存版本的响应。<br>
400 Bad Request：客户端请求的语法错误，服务器无法理解。<br>
401 Unauthorized：请求要求用户的身份认证。<br>
403 Forbidden：客户端没有访问内容的权限。<br>
404 Not Found：服务器找不到请求的资源。<br>
500 Internal Server Error：服务器内部错误，无法完成请求。<br>



## CDN

CDN是Content Delivery Network的缩写，即内容分发网络。它的基本思路是尽可能避开互联网上有可能影响数据传输速度和稳定性的瓶颈和环节，使内容传输的更快、更稳定。

CDN的工作原理就是将源站的资源缓存到CDN各个节点上，当请求命中了某个节点的资源缓存时，立即返回客户端，避免每个请求的资源都通过源站获取，避免网络拥塞、缓解源站压力，保证用户访问资源的速度和体验。

简单来说，CDN通过在全球范围内部署大量节点服务器，将网站内容缓存在这些节点服务器上，当用户访问网站时，CDN会根据用户的地理位置和网络状况等因素，智能调度用户访问离其最近的节点服务器，从而加快网站访问速度、提高网站可用性。



主要作用：

🎢加快网站访问速度：通过将网站内容缓存在全球范围内的节点服务器上，CDN能够让用户就近访问所需内容，从而加快网站访问速度。<br>
🎢提高网站可用性：CDN能够通过智能调度、负载均衡等技术，保证用户能够快速、稳定地访问网站，提高网站的可用性。<br>
🎢缓解源站压力：CDN能够将大量用户请求分流到各个节点服务器上，从而减轻源站的压力，保证源站能够稳定运行。<br>
🎢节省带宽成本：CDN能够通过缓存技术、数据压缩技术等手段，有效减少数据传输量，从而节省源站的带宽成本。<br>





## TCP协议和HTTP 协议
:::info
​TCP协议在建立过程中会进行三次握手四次挥手，三次握手确保双方同步并避免无效连接，四次挥手则正常终止连接或异常终止连接。

HTTP协议是超文本传输协议（Hyper Text Transfer Protocol），是用于从万维网服务器传输超文本到本地浏览器的传送协议。HTTP是一个基于TCP/IP通信协议来传递数据的。
:::
## HTTP与HTTPS有什么区别
:::tip
​HTTP协议传输的数据都是未加密的，也就是明文的，因此使用HTTP协议传输隐私信息非常不安全，为了保证这些隐私数据能加密传输，于是网景公司设计了SSL（Secure Sockets Layer）协议用于对HTTP协议传输的数据进行加密，从而就诞生了HTTPS。
:::


## 说一下什么是“同源策略”？

🌠 http:// www. aaa.com:8080/index/vue.js<br>
🌠 协议 子域名 主域名 端口号 资源<br>
🌠 同源策略是浏览器的核心，如果没有这个策略就会遭受网络攻击<br>
🌠 主要指的就是协议+域名+端口号三者一致，若其中一个不一样则不是同源，会产生
跨域<br>
🌠 三个允许跨域加载资源的标签：img link script<br>
🌠 跨域是可以发送请求，后端也会正常返回结果，只不过这个结果被浏览器拦截了！<br>

## 如何解决前端跨域问题

​JSONP跨域，CORS，nginx代理跨域，nodejs中间件代理跨域，WebSocket协议跨域

```js
var http = require('http');
http.createServer(function(request, response) {
    response.writeHead(200, {
        'Access-Control-Allow-Credentials': 'true', // 后端允许发送Cookie
        'Access-Control-Allow-Origin': '*', // 允许访问的域（协议+域名+端口）
        'Access-Control-Allow-Methods': "POST,GET,DELETE,PUT,OPTIONS" // 允许请求方式用着五种
    })
    if (request.url == "/getData") {
        const data = {
            status: "ok",
            data: [{
                    name: '张三',
                    age: 10
                },
                {
                    name: '张三',
                    age: 10
                },
                {
                    name: '张三',
                    age: 10
                }
            ]
        }
        response.end(JSON.stringify(data))
    }
}).listen(8081,function(){
    console.log("服务启动成功");
});
```

## ISO的七层模型

OSI七层网络模型 ：物理层，数据链路层，网络层，传输层，会话层，表示层，应用层

TCP/IP的四层概念模型：应用层，运输层，网络层，网络接口层



## TCP与UDP的区别

TCP是面向连接的，UDP是无连接的<br>
TCP是可靠的，UDP是不可靠的<br>
TCP是面向字节流的，UDP是面向数据报文的<br>
TCP只支持点对点通信，UDP支持一对一，一对多，多对多<br>
TCP报文首部20个字节，UDP首部8个字节<br>
TCP有拥塞控制机制，UDP没有<br>
TCP协议下双方发送接受缓冲区都有，UDP并无实际意义上的发送缓冲区，但是存在接受缓冲区<br>



# nodejs

## CSR和SSR

**什么是服务器端渲染（SSR）？**
服务器端渲染是指在服务器端生成HTML，并将其发送到客户端，然后客户端直接显示已渲染的页面。在SSR中，浏览器只需接收和展示已经渲染好的HTML，JavaScript在浏览器端仅用于处理少量的交互和动态功能。

**什么是客户端渲染（CSR）？**
客户端渲染是指在浏览器端使用JavaScript生成HTML，并通过JavaScript动态地渲染页面内容。在CSR中，服务器通常只提供数据接口，而渲染逻辑由浏览器的JavaScript执行。

**SSR与CSR的比较**

1. **首次加载性能：**
   - SSR：由于服务器端已经生成了HTML，因此首次加载速度较快。用户可以快速看到页面内容。
   - CSR：浏览器首先加载HTML和JavaScript，然后再动态渲染页面内容，导致首次加载速度相对较慢。
2. **SEO友好性：**
   - SSR：由于搜索引擎爬虫可以直接读取服务器端生成的HTML，因此SSR对SEO较为友好，有利于搜索引擎收录。
   - CSR：搜索引擎爬虫执行JavaScript较差，可能无法获得完整的页面内容，对SEO不太友好。
3. **开发复杂性：**
   - SSR：需要在服务器端进行HTML模板渲染，涉及到后端和前端的协作，对开发者的技能要求较高。
   - CSR：前端开发者可以专注于JavaScript和交互逻辑，与后端解耦，降低了开发复杂性。
4. **用户体验：**
   - SSR：在首次加载后，页面切换速度较快，用户体验较好。
   - CSR：页面切换通常需要等待JavaScript加载和执行，可能导致页面闪烁或白屏，体验稍差。
5. **服务器负载：**
   - SSR：服务器需要进行HTML渲染，每次请求都需要消耗一定的服务器计算资源。
   - CSR：服务器只提供数据接口，不进行HTML渲染，可以减轻服务器负担。

**SSR示例代码：**

```javascript
// 服务器端代码
const express = require('express');
const app = express();

app.get('/', (req, res) => {
   
  const html = `
    <html>
      <head>
        <title>SSR Example</title>
      </head>
      <body>
        <h1>Hello, SSR!</h1>
        <p>This is a server-side rendered page.</p>
      </body>
    </html>
  `;
  res.send(html);
});

app.listen(3000, () => {
   
  console.log('Server is running on port 3000.');
});
```

**CSR示例代码：**

```html
<!-- 客户端HTML代码 -->
<!DOCTYPE html>
<html>
  <head>
    <title>CSR Example</title>
  </head>
  <body>
    <div id="app"></div>
    <script src="app.js"></script>
  </body>
</html>
// 客户端JavaScript代码（app.js）
document.addEventListener('DOMContentLoaded', () => {
   
  const appElement = document.getElementById('app');
  appElement.innerHTML = '<h1>Hello, CSR!</h1><p>This is a client-side rendered page.</p>';
});
```

**SSR与CSR的应用场景选择：**

- 选择SSR：对于需要SEO友好、首次加载性能和用户体验的页面，如博客、新闻、电子商务等静态内容的展示页面。
- 选择CSR：对于复杂的单页面应用（SPA），其中包含大量交互和动态内容，且不太关心SEO的网页应用。

**结论**
服务器端渲染（SSR）和客户端渲染（CSR）各有优势，适用于不同的场景。在选择渲染方式时，应根据项目需求、性能要求和开发团队技能进行权衡。在实际项目中，SSR和CSR也可以结合使用，充分发挥各自的优点，以提供更好的用户体验和性能。