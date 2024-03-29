# Vue简介

## 概述

vue是一套用于构建用户界面的渐进式JavaScript 框架，是一款基于MVVM(model-view-view-model)模式的前端框架，它采用了组件化编程的思想，将一个庞大的页面，拆分为多个组件，每个组件都是一个独立的功能模块，简化了复杂页面的开发，同时提高了代码的复用性。

## 官网

中文官网: https://v2.cn.vuejs.org/

## Vue 的特点

- 遵循 MVVM 模式
- 编码简洁, 体积小, 运行效率高, 适合移动/PC 端开发
- 它本身只关注 UI, 也可以引入其它第三方库开发项目

## 与其它 JS 框架的关联 

- 借鉴 Angular 的**模板**和**数据绑定**技术 

- 借鉴 React 的**组件化**和**虚拟 DOM** 技术

## Vue的生态

Vue有非常成熟的生态系统，包括但不限于脚手架vue-cli、路由vue-router、请求库axios、状态管理vuex、UI组件库：element-ui、vant等，使得vue已经成为目前主流的前端开发框架。

Vue发展历程：https://zhuanlan.zhihu.com/p/262180900

## Vue Devtools

在使用 Vue 时，我们推荐在你的浏览器上安装 Vue Devtools 插件。它允许你在一个更友好的界面中审查和调试 Vue 应用。

# Vue实例

## 安装Vue

直接下载并用 `<script>` 标签引入，`Vue` 会被注册为一个全局变量。

```html
<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
```

## 创建Vue实例

每个 Vue 应用都是通过用 `Vue` 函数创建一个新的 **Vue 实例**开始的：

- 导入vue.js之后，在全局域会有一个Vue构造函数， 在页面中使用vue，需要先通过Vue创建根组件对象。
- 创建一个Vue实例时，你可以传入一个**选项对象**，对象可以包含数据、模板、挂载元素、方法、生命周期钩子等选项。可以在 [API 文档](https://v2.cn.vuejs.org/v2/api/#选项-数据)中浏览完整的选项列表。

```js
Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。

var vm = new Vue({
  // 选项
})
```

## el选项

- el 提供一个在页面上已存在的 DOM 元素作为 Vue 实例的挂载目标(可以理解为Vue实例的模板)。
- 可以是 CSS 选择器（选择器一般推荐使用id，id名习惯命名为app），也可以是一个 HTMLElement 实例。
- 注意点：不推荐挂载 app 实例（指的是new Vue创建的实例）到 `<html>` 或者 `<body>` 上。

```js
// <div id="app"></div>

new Vue({
  el: '#app',
})
```

## data选项与响应式属性

Vue 最标志性的功能就是其低侵入性的响应式系统。组件状态data都是由响应式的 JavaScript 对象组成的。当更改它们时，视图会随即自动更新。

- 当一个 Vue 实例被创建时，它将 `data` 对象中的所有的 property 加入到 Vue 的**响应式系统**中。当这些 property 的值发生改变时，视图将会产生“响应”，即匹配更新为新的值。
- 值得注意的是只有当实例被创建时就已经存在于 `data` 中的 property 才是**响应式**的。

```js
const vm = new Vue({
  el: '#app',
  //  data中添加的数据可以是 字符串、数字、布尔、对象、函数等 
  data: {
    message: 'Hello Vue!',
    num: 10,
    zhangsan: {
      name: '张三',
      age: 18
    },
  },
})
```

## vm.$mount

如果 Vue 实例在实例化时没有收到 el 选项，则它处于“未挂载”状态，没有关联的 DOM 元素。可以使用 `vm.$mount()` 手动地挂载一个未挂载的实例。

这个方法返回实例自身，因而可以链式调用其它实例方法。

```js
const vm = new Vue({
  data: {
    message: 'Hello Vue!',
  },
});

vm.$mount('#app');


// 创建实例的时候直接挂载
new Vue({
  data: {
    message: 'Hello Vue!',
  },
}).$mount('#app');
```

# 模板语法

通常使用id值为app的div标签作为根vue实例的模板，在模板中可以使用插值语法

```html
<div id="app">
   <!--{{}} 是把vue中的数据可以和元素(页面)的内容进行绑定，在{{}}中添加变量名或表达式即可-->
  <p>{{message}}</p>
</div>	
```

Vue 使用一种基于 HTML 的模板语法，使我们能够声明式地将其组件实例的数据绑定到呈现的 DOM 上。所有的 Vue 模板都是语法层面合法的 HTML，可以被符合规范的浏览器和 HTML 解析器解析。

在底层机制中，Vue 会将模板编译成高度优化的 JavaScript 代码。结合响应式系统，当应用状态变更时，Vue 能够智能地推导出需要重新渲染的组件的最少数量，并应用最少的 DOM 操作。

Vue模板语法包含了一些 JS 语法代码，语法分为两种，分别为： 

- Mustache插值语法（双大括号表达式） 
- 指令语法（以 v-开头）

## Mustache插值语法 

数据绑定最常见的形式就是使用“Mustache”语法 (双大括号) 的文本插值：

功能：用于解析标签体内容

语法：{{xxx}} ，xxx 是 js 表达式或者属性，只要是在data中定义的属性可以直接在花括号中直接使用

```html
<p>{{message}}</p>
<p>{{message.split('').reverse().join('')}}</p>
<p>{{num+6}}</p>
<p>{{num>6 ? 'num的值大于6' : 'num的值不大于6'}} </p>
<p>name: {{zhangsan.name}} </p>
```

**插值语法**：Vue在模板中使用双花括号的插值语法，{{xxx}}中的xxx要写==JS表达式==，只要是在data中定义的属性可以直接在花括号中直接使用

**响应式属性**：一旦data中的数据发生改变，视图会进行重渲染，那么页面中用到该数据的地方也会自动更新

## 指令语法 

指令 (Directives) 是带有 `v-` 前缀的特殊属性。指令的值预期是**单个 JavaScript 表达式** (`v-for` 是例外情况)。指令的职责是，当表达式的值改变时，将其产生的连带影响，响应式地作用于 DOM。

功能：解析标签属性、解析标签体内容、绑定事件 

语法：以v-bind为例：v-bind:title = 'xxxx' ，xxxx 是 js 表达式，只要是在data中定义的属性可以直接作为指令的值

```html
<p v-bind:title="message">你好，我正在学习vue</p>
```

###  v-bind

作用：动态绑定属性或者一个组件 prop 到表达式

- 属性前使用v-bind：标签的属性前添加 : 表示是 v-bind指令的缩写，属性的值一定是一个在vue中定义的数据：可以data中的属性、计算属性、函数等

- 属性前不使用v-bind：标签的属性前不添加 : 表示该属性只是一个普通的属性，赋值的时候直接给字符串，和vue没有关系 

- 没有参数时，可以绑定到一个包含键值对的对象。

```html
<div id="app">
  <p title="呵呵">你好，我正在学习vue</p>

  <!-- title="message" 没有使用{{}}也没有使用指令，此时title就是一个普通的标签属性，title的值是 'message' 字符串 -->
  <p title="message">你好，我正在学习vue +1</p>

  <!-- v-bind:title="message" 在title属性前使用了v-bind指令，意思是title需要赋值一个data中的变量message，最终title的值是这个变量message的值 -->
  <p v-bind:title="message">你好，我正在学习vue +1</p>

  <!-- 在vue中为一些常用的指令提供了缩写，v-bind:title="message" 简写为 :title="message" -->
  <p :title="message">你好，我正在学习vue +1</p>

  <p :title="message + '你好 vue'">你好，我正在学习vue +1</p>

  <img :src="baseURL + '/static/translation/img/header/logo_e835568.png'" alt="">
  <img :src="`${baseURL}/static/translation/img/header/logo_e835568.png`" alt="">
    
  <div v-bind="objectOfAttrs"></div>

</div>

<script>
  new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!',
      baseURL: 'https://fanyi-cdn.cdn.bcebos.com',
      num: 10,
      objectOfAttrs: {
        id: 'container',
        class: 'wrapper'
      }
    },
  });
</script>
```

### v-text

作用：更新元素的 `textContent`。如果要更新部分的 `textContent`，需要使用 `{{ Mustache }}` 插值。

区别：与{{}}插值语法的区别：v-text会替换掉元素节点中的内容，{{xx}}则不会。

### v-html

作用：更新元素的 `innerHTML`。

区别：与插值语法的区别：

- v-html会替换掉节点中所有的内容，{{xx}}则不会。
- v-html可以识别html结构。

严重注意：v-html有安全性问题！

- 在网站上动态渲染任意HTML是非常危险的，容易导致XSS攻击。
- 一定要在可信的内容上使用v-html，永不要用在用户提交的内容上！

### v-cloak

作用：这个指令保持在元素上直到关联实例结束编译：Vue实例创建完毕并渲染模板之后，会删掉v-cloak属性

和CSS 规则 `[v-cloak] { display: none }` 一起用时，隐藏未编译的{{}}，网速慢的时候避免在页面渲染之前显示{{}}。

### v-once

只渲染元素和组件**一次**。

- v-once所在节点在初次动态渲染后，随后的重新渲染，元素/组件及其所有的子节点将被视为静态内容。
- 以后数据的改变跳过v-once，不会引起v-once所在结构的更新，可以用于优化更新性能。

### v-pre

作用：跳过这个元素和它的子元素的编译过程。

- 可以用来显示原始 Mustache 标签。
- 跳过大量没有指令、插值语法的节点，会加快编译。

## 绑定JS表达式

### JS表达式

Vue 在所有的数据绑定（比如：模板语法和指令语法）中都支持完整的 JavaScript 表达式：

```html
{{ number + 1 }}

{{ ok ? 'YES' : 'NO' }}

{{ message.split('').reverse().join('') }}

<div :id="`list-${id}`"></div>
```

这些表达式都会被作为 JavaScript ，以组件为作用域解析执行。

在 Vue 模板内，JavaScript 表达式可以被使用在如下场景上：

- 在文本插值中 (双大括号)
- 在任何 Vue 指令 (以 `v-` 开头的特殊 attribute) attribute 的值中

每个绑定仅支持**单一表达式**，也就是一段能够被求值的 JavaScript 代码。一个简单的判断方法是是否可以合法地写在 `return` 后面，这些都是JS表达式，但是绑定不能使用JS语句。

模板表达式都被放在沙盒中，只能访问[全局变量的一个白名单](https://github.com/vuejs/vue/blob/v2.6.10/src/core/instance/proxy.js#L9)，如 `Math` 和 `Date` 。你不应该在模板表达式中试图访问用户定义的全局变量。

### 调用函数

可以在绑定的表达式中使用一个组件暴露的方法：

```html
<span :title="toTitleDate(date)">
  {{ formatDate(date) }}
</span>
```

绑定在表达式中的方法在组件每次更新时都会被重新调用，因此**不**应该产生任何副作用，比如改变数据或触发异步操作。

### JS表达式和JS语句的区分

JS表达式是一个表达式会产生一个值，可以放在任何一个需要值的地方

- `a`：变量a是表达式
- `a+b`：a+b会得到一个结果
- `fn(1)`：调用fn函数会得到一个结果
- `x === y ? 'a' : 'b'` 使用三目运算符也会得到一个结果
- `str.slice(2)` 返回一个字符串
- `arr.reduce()` 调用数组的遍历函数也会得到一个结果

JS语句（JS代码）是向浏览器发出的命令。语句的作用是告诉浏览器该做什么。

- `a = 5`
- `c = a + b`

- `if(){}`
- `for(){}`

# 数据绑定 v-bind/v-model

Vue中有2种数据绑定的方式：

## 单向绑定

单向绑定(v-bind)：

- 语法：v-bind:href ="xxx" 或简写为 :href 
- 特点：数据只能从 data 流向页面

## 双向绑定

你可以用 `v-model` 指令在表单 `<input>`、`<textarea>` 及 `<select>` 元素上创建双向数据绑定。它会根据控件类型自动选取正确的方法来更新元素。尽管有些神奇，但 `v-model` 本质上不过是语法糖。它负责监听用户的输入事件以更新数据，并对一些极端场景进行一些特殊处理。

双向绑定(v-model)：

- 语法：v-mode:value="xxx" 或简写为 v-model="xxx"
- 特点：数据不仅能从 data 流向页面，还能从页面流向 data

说明：

- 双向绑定一般都应用在表单类元素上（如：input、select等）
- v-model:value 可以简写为 v-model，因为v-model默认收集的就是value值。

# 条件渲染 v-if/v-show

## v-if

v-if条件渲染的使用：条件为真时，显示节点；条件为假时移除节点。

- v-if="表达式" 
- v-else-if="表达式"
- v-else

注意：

- `v-else` 元素必须紧跟在带 `v-if` 或者 `v-else-if` 的元素的后面，否则它将不会被识别。
- `v-else-if` 也必须紧跟在带 `v-if` 或者 `v-else-if` 的元素之后，否则它将不会被识别。

```html
<span v-if="score > 80">优秀</span>
<span v-else-if="score > 0">良好</span>
<span v-else>不及格</span>
```

## v-show

v-show控制元素的显示隐藏：条件为真，显示节点；条件为假则使用display:none 隐藏节点。

- v-show="表达式"

```html
<p v-show="show">show为true时显示</p>
```

## v-if和v-show区别

v-if和v-show指令都可以用于控制元素是否显示

区别：

- 条件为假，v-if是把元素从DOM中删除，v-show是使用使用display:none 隐藏元素

- v-show 则适用于需要频繁切换的场景

- v-if 适用于在运行时很少改变条件，不需要频繁切换的场景

初次渲染页面，当条件不成立时，v-if不会渲染DOM元素；v-show依然会渲染DOM元素，只是使用display:none 隐藏了元素。

当条件为假时，使用v-if的时，元素可能无法获取到，而使用v-show一定可以获取到。

## 在 `<template>` 元素上使用 v-if

因为 `v-if` 是一个指令，所以必须将它添加到一个元素上。但是如果想切换多个元素呢？此时可以把一个 `<template>` 元素当做不可见的包裹元素，并在上面使用 `v-if`。最终的渲染结果将不包含 `<template>` 元素。

注意：不能在template上使用v-show

```html
<template v-if="ok">
  <h1>Title</h1>
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
</template>
```

# 列表渲染  v-for

## v-for与数组

我们可以使用 `v-for` 指令基于一个数组来渲染一个列表。`v-for` 指令的值需要使用 `item in items` 形式的特殊语法，其中 `items` 是源数据的数组，而 `item` 是迭代项的**别名**

- 语法：`v-for="(item, index) in arr"`

- `item` 是数组元素，也可以用其他变量名代替，比如：`val`

- `index` 是数组元素的索引值，也可以用其他变量名代替，比如：`i`

- 可遍历的数据有：数组、对象、字符串、整数

```HTML
<div id="app">
  <!--遍历数组-->
  <ul>
    <li v-for="(book,index) in books" :key="book.name">
      {{index+1}}.《{{book.name}}》 ￥{{book.price.toFixed(2)}}
    </li>
  </ul>
   <!--你也可以在定义 v-for 的变量别名时使用解构，和解构函数参数类似：-->
  <ul>
    <li v-for="({name, price},index) in books" :key="name">
      {{index+1}}.《{{name}}》 ￥{{price.toFixed(2)}}
    </li>
  </ul>
</div>

<script>
  new Vue({
    el: '#app',
    data: {
      books: [
        { name: '西游记', price: 20 },
        { name: '三国演义', price: 25 },
        { name: '水浒传', price: 26 }
      ],
    },
  });
</script>
```

## v-for与对象

你也可以使用 `v-for` 来遍历一个对象的所有属性。遍历的顺序会基于对该对象调用 `Object.keys()` 的返回值来决定。

- 语法：`v-for="(value, key, index) in obj"`

- `value`：对象属性值
- `key`：对象属性名
- `index`：索引

```html
<div id="app">
  <!--遍历对象-->
  <ul>
    <li v-for="(value, key, index) in tom">
      {{index}}. {{key}}: {{value}}
    </li>
  </ul>
</div>

<script>
  new Vue({
    el: '#app',
    data: {
      tom: {
        name: 'Tom',
        age: 22,
      },
    },
  });
</script>
```

你也可以用 `of` 替代 `in` 作为分隔符，因为它更接近 JavaScript 迭代器的语法：

```html
<div v-for="item of items"></div>
```

## v-for与数字

`v-for` 可以直接接受一个整数值。在这种用例中，会将该模板基于 `1...n` 的取值范围重复多次。

template

```
<span v-for="n in 10">{{ n }}</span>
```

注意此处 `n` 的初值是从 `1` 开始而非 `0`

## v-for与`<template>`

与模板上的 `v-if` 类似，你也可以在 `<template>` 标签上使用 `v-for` 来渲染一个包含多个元素的块。例如：

template

```html
<ul>
  <template v-for="item in items">
    <li>{{ item.msg }}</li>
    <li class="divider" role="presentation"></li>
  </template>
</ul>
```

## v-for 与 v-if 一同使用

### vue2.x版本

> 注意我们**不**推荐在同一元素上使用 `v-if` 和 `v-for`。更多细节可查阅[风格指南](https://v2.cn.vuejs.org/v2/style-guide/#避免-v-if-和-v-for-用在一起-必要)。

当它们处于同一节点，`v-for` 的优先级比 `v-if` 更高，这意味着 `v-if` 将分别重复运行于每个 `v-for` 循环中。当你只想为*部分*项渲染节点时，这种优先级的机制会十分有用，如下：

```html
<li v-for="todo in todos" v-if="!todo.isComplete">
  {{ todo }}
</li>
```

上面的代码将只渲染未完成的 todo。

而如果你的目的是有条件地跳过循环的执行，那么可以将 `v-if` 置于外层元素 (或 [`) 上。如：

```html
<ul v-if="todos.length">
  <li v-for="todo in todos">
    {{ todo }}
  </li>
</ul>
<p v-else>No todos left!</p>
```

### vue3.x版本

> 注意
>
> 同时使用 `v-if` 和 `v-for` 是**不推荐的**，因为这样二者的优先级不明显。请转阅[风格指南](https://cn.vuejs.org/style-guide/rules-essential.html#avoid-v-if-with-v-for)查看更多细节。

当它们同时存在于一个节点上时，`v-if` 比 `v-for` 的优先级更高。这意味着 `v-if` 的条件将无法访问到 `v-for` 作用域内定义的变量别名：

template

```html
<!--
 这会抛出一个错误，因为属性 todo 此时
 没有在该实例上定义
-->
<li v-for="todo in todos" v-if="!todo.isComplete">
  {{ todo.name }}
</li>
```

在外新包装一层 `<template>` 再在其上使用 `v-for` 可以解决这个问题 (这也更加明显易读)：

```html
<template v-for="todo in todos">
  <li v-if="!todo.isComplete">
    {{ todo.name }}
  </li>
</template>
```

## key的原理

Vue中的key有什么作用？（key的内部原理）

**一、虚拟DOM中key的作用**

key是虚拟DOM对象的标识，当数据发生变化时，Vue会根据【新数据】生成【新的虚拟DOM】, 随后Vue进行【新虚拟DOM】与【旧虚拟DOM】的差异比较，比较规则如下：

- 旧虚拟DOM中找到了与新虚拟DOM相同的key：
  - 若虚拟DOM中内容没变, 直接使用之前的真实DOM！
  - 若虚拟DOM中内容变了, 则生成新的真实DOM，随后替换掉页面中之前的真实DOM。

- 旧虚拟DOM中未找到与新虚拟DOM相同的key：创建新的真实DOM，随后渲染到到页面。

**二、用index作为key可能会引发的问题**

- 若对数据进行：逆序添加、逆序删除等破坏顺序操作：会产生没有必要的真实DOM更新 ==> 界面效果没问题, 但效率低。

- 如果结构中还包含输入类的DOM：会产生错误DOM更新 ==> 界面有问题。

**三、开发中如何选择key?**

- 最好使用每条数据的唯一标识作为key, 比如id、手机号、身份证号、学号等唯一值。
- 如果不存在对数据的逆序添加、逆序删除等破坏顺序操作，仅用于渲染列表用于展示，
  使用index作为key是没有问题的。

通过下面的例子改变key的值为index和id，来看一看不同key值下的页面效果：

```css
table{
  border:  1px solid #000;
  border-spacing: 0;
  border-collapse: collapse;
}
td,th{
  border:  1px solid #000;
  padding: 10px;
}
```

```html
<div id="app">
  <h2>购物车列表</h2>
  <button @click.once="addList">增加</button>
  <table>
    <tr>
      <th>商品</th>
      <th>单价</th>
      <th>备注</th>
      <th>操作</th>
    </tr>
    <tr v-for="(item, index) in list" :key="index">
      <td>{{item.title}}</td>
      <td>￥{{item.price}}</td>
      <td><input type="text"></td>
      <td><button @click="deleteBtn(item.id)">删除</button></td>
    </tr>
  </table>
</div>
```

```html
<script>
  new Vue({
    el: '#app',
    data: {
      list:[
        {id:1, title: 'vivo iQOO Neo5', count: 1, price: 1699},
        {id:2, title: 'HUAWEI Mate X2', count: 1, price: 17899},
        {id:3, title: 'Redmi K40 ', count: 1, price: 2399},
      ]
    },
    methods:{
      addList(){
        this.list.unshift({id:4, title: 'OPPO Find N', count: 2, price: 8999})
      },
      deleteBtn(id){
        let flag = confirm("是否删除？");
        if (flag) {
          let index = this.list.findIndex(item=>item.id==id);
          this.list.splice(index, 1);
        }
      }
    }
  });
</script>
```

## 数组变化侦测

### 变更方法

Vue 能够侦听响应式数组的变更方法，并在它们被调用时触发相关的更新。这些变更方法包括：

- `push()`
- `pop()`
- `shift()`
- `unshift()`
- `splice()`
- `sort()`
- `reverse()`

### 替换一个数组

变更方法，顾名思义，就是会对调用它们的原数组进行变更。相对地，也有一些不可变 (immutable) 方法，例如 `filter()`，`concat()` 和 `slice()`，这些都不会更改原数组，而总是**返回一个新数组**。当遇到的是非变更方法时，我们需要将旧的数组替换为新的：

```js
this.items = this.items.filter((item) => item.message.match(/Foo/))
```

你可能认为这将导致 Vue 丢弃现有的 DOM 并重新渲染整个列表——幸运的是，情况并非如此。Vue 实现了一些巧妙的方法来最大化对 DOM 元素的重用，因此用另一个包含部分重叠对象的数组来做替换，仍会是一种非常高效的操作。

### 注意事项

由于 JavaScript 的限制，Vue **不能检测**数组和对象的变化。[深入响应式原理](https://v2.cn.vuejs.org/v2/guide/reactivity.html#检测变化的注意事项)中有相关的讨论。

# 事件监听 v-on

我们可以使用 `v-on` 指令 (简写为 `@`) 来监听 DOM 事件，并在事件触发时执行对应的 JavaScript。用法：`v-on:click="methodName"` 或 `@click="handler"`。

事件处理器的值可以是：

1. **内联事件处理器**：事件被触发时执行的内联 JavaScript 语句 (与 `onclick` 类似)。
2. **方法事件处理器**：一个指向组件上定义的方法的属性名或是路径。

## 内联事件处理器

内联事件处理器通常用于简单场景，并在触发时运行一些 JavaScript 代码。

语法：`v-on:eventType="JS代码"`。

- eventType 是DOM事件的名称，比如鼠标点击事件：click

```html
<button v-on:click="num += 1"> num = {{num}} </button>
```

## 方法事件处理器

随着事件处理器的逻辑变得愈发复杂，内联代码方式变得不够灵活。因此 `v-on` 也可以接受一个方法名或对某个方法的调用。

### 事件函数

语法：`v-on:eventType="方法"`。

- 方法定义在vue实例的methods选项中
- methods 是用来定义vue实例的方法，在定义的方法中 this 指向该vue实例
- methods中定义的函数不能使用箭头函数，因为箭头函数中的this指向上层作用域的this，如果在这里使用箭头函数，this不再指向vue实例，而是指向window
- v-on:click="search" 简写为 @click="search"

```html
<button v-on:click="search">搜索</button>

<script>
new Vue({
  el: '#app',
  methods: {
    search(){
      console.log('搜索');
    },
  },
});
</script>
```

### 事件对象

- 方法事件处理器会自动接收原生 DOM 事件并触发执行。能够通过被触发事件的 `event.target.tagName` 访问到该 DOM 元素。
- 事件函数传递默认参数 $event 表示DOM事件对象
- @click="search" 和 @click="search($event)" 效果一致，但后者可以传参；

```html
<button v-on:click="search">搜索</button>
<script>
new Vue({
  el: '#app',
  data: {
    num: 10,
  },
  methods: {
    search(ev){
      console.log('搜索', ev.target.tagName);
    },
  },
});
</script>
```

### 事件传参

- 调用方法时，可以添加圆括号，也可以不加，添加圆括号可以传递参数。

- 事件对象通过传入一个特殊的 `$event` 变量，或者使用内联箭头函数。

```html
<button @click="search(6)">搜索</button>

<!-- 使用特殊的 $event 变量 -->
<button @click="search(6, $event)">搜索</button>

<!-- 使用内联箭头函数 -->
<button @click="(event) => search(6, event)">搜索</button>

<script>
new Vue({
  el: '#app',
  methods: {
    search(val,ev){
      console.log('搜索', val, ev);
    },
  },
});
</script>
```

## 事件修饰符

- prevent：阻止默认事件（常用）， event.preventDefault()；
- stop：阻止事件冒泡（常用），event.stopPropagation()；
- once：事件只触发一次（常用）；
- capture：使用事件的捕获模式；
- self：只有event.target是当前操作的元素时才触发事件；
- passive：事件的默认行为立即执行，无需等待事件回调执行完毕（尤其能够提升移动端的性能）；比如：wheel事件

事件修饰符可以连续使用：

```html
<a href="http://www.baidu.com" @click.prevent.self="sum">百度 <i>一下</i> </a>
```

## 按键修饰符

1. Vue中常用的按键别名

- 回车 => enter
- 删除 => delete (捕获“删除”和“退格”键)
- 退出 => esc
- 空格 => space
- 换行 => tab (特殊，必须配合keydown去使用，keyup不起作用)
- 上 => up
- 下 => down
- 左 => left
- 右 => right

```html
<input @keydown.enter="keyClick">
```

2. Vue未提供别名的按键，可以使用按键原始的key值去绑定，但注意要转为kebab-case（短横线命名）

```html
<input @keydown.caps-lock="keyClick">
```

3. 特殊的系统修饰键：ctrl、alt、shift、meta

- 配合keyup使用：按下修饰键的同时，再按下其他键，随后释放其他键，事件才被触发。
- 配合keydown使用：正常触发事件。

```html
<input @keydown.ctrl.y="keyClick">
```

4. 也可以使用keyCode去指定具体的按键（不推荐）

5. Vue.config.keyCodes.自定义键名 = 键码，可以去定制按键别名

```html
<input @keydown.huiche="keyClick">

<script>
Vue.config.keyCodes.huiche = 13 //定义了一个别名按键
</script>
```

## `.exact` 修饰符

`.exact` 修饰符允许控制触发一个事件所需的确定组合的系统按键修饰符。

```html
<!-- 当按下 Ctrl 时，即使同时按下 Alt 或 Shift 也会触发 -->
<button @click.ctrl="onClick">A</button>

<!-- 仅当按下 Ctrl 且未按任何其他键时才会触发 -->
<button @click.ctrl.exact="onCtrlClick">A</button>

<!-- 仅当没有按下任何系统按键时触发 -->
<button @click.exact="onClick">A</button>
```

## 鼠标按键修饰符

- `.left`
- `.right`
- `.middle`

这些修饰符将处理程序限定为由特定鼠标按键触发的事件。

# 计算属性 computed

模板中的表达式虽然方便，但也只能用来做简单的操作。如果在模板中写太多逻辑，会让模板变得臃肿，难以维护。比如现计算成绩的案例。

## 插值语法实现

```html
<div id="app">
  <p>语文：<input type="number" v-model.number="chinese"></p>
  <p>数学：<input type="number" v-model.number="math"></p>
  <p>英语：<input type="number" v-model.number="english"></p>
  <p>总分：{{ chinese + math + english }}</p>
  <div> 等级：
    <span v-if="chinese + math + english > 240">优秀</span>
    <span v-else-if="chinese + math + english > 180">良好</span>
    <span v-else>不及格</span>
  </div>
</div>

<script>
  new Vue({
    el: '#app',
    data: {
      chinese: 0,
      math: 0,
      english: 0
    },
  });
</script>
```

模板中绑定的数据如果是一个属性，则可以直接绑定属性名。

模板中绑定的数据如果是一个需要通过data中的数据计算得来的值，对于简单的计算，可以直接绑定一个表达式，而对于复杂的计算，无法通过一个简单的表达式算出结果的计算，则需要将计算的过程写成一个函数放入methods，然后绑定这个函数调用的表达式。

## methods实现

methods的函数，每使用一次就会调用一次

```html
<div id="app">
  <p>语文：<input type="number" v-model.number="chinese"></p>
  <p>数学：<input type="number" v-model.number="math"></p>
  <p>英语：<input type="number" v-model.number="english"></p>
  
  <!-- methods的应用：使用method中的方法时时需要在方法后加圆括号， -->
  <p>总分：{{total()}}</p>
  <p>等级：{{result()}}</p>

</div>

<script>
  new Vue({
    el: '#app',
    data: {
      chinese: 0,
      math: 0,
      english: 0
    },
    methods: {
      total () {
        return this.chinese + this.math + this.english;
      },
      result () {
        var total = this.total();
        if (total > 240) {
          return '优秀';
        } else if (total > 180) {
          return '良好'
        } else {
          return '不及格'
        }
      }
    },
  });
</script>
```

## 计算属性computed实现

组件的计算属性，当模板中绑定的数据是通过data中的数据计算得出的数据时，可以将计算函数写入计算属性，在模板中就可以直接绑定这个属性。

computed和methods相比：

- methods的函数，在模板中使用一次就会调用一次
- computed的计算属性：当计算属性中所依赖的属性值发生变化时，才会重新调用函数计算，否则使用上一次计算==缓存==的结果。所以，如果一个运算比较耗费性能且需要使用多次，建议用computed

```html
<div id="app">
  <p>语文：<input type="number" v-model.number="chinese"></p>
  <p>数学：<input type="number" v-model.number="math"></p>
  <p>英语：<input type="number" v-model.number="english"></p>

  <!-- computed的应用：使用computed中的计算属性时不需要添加圆括号 -->
  <p>总分：{{total}}</p>
  <p>结果：{{result}}</p>

</div>

<script>
  new Vue({
    el: '#app',
    data: {
      chinese: 0,
      math: 0,
      english: 0
    },
    computed: {
      total() {
        return this.chinese + this.math + this.english;
      },
      result() {
        let total = this.total;
        console.log('computed result:' + total);
        if (total > 240) {
          return '优秀';
        } else if (total > 180) {
          return '良好'
        } else {
          return '不及格'
        }
      },
    }
  });
</script>
```

## 计算属性的setter和getter

普通的计算属性只有getter函数，只能获取计算属性的值。想要修改计算属的值，就要给计算属性添加setter函数。

```html
<div id="app">

  <p> bigNum1 = {{bigNum1}} </p>
  <p> bigNum2 = {{bigNum2}} </p>
  <p> count = {{count}} </p>
  <button @click="count++">按钮</button>

</div>

<script>
 	new Vue({
    el: '#app',
    data: {
      num: 0,
    },
    computed: {
      // bigNum1 和 bigNum2 的写法是等价的
      bigNum1(){
        return this.num * 10;
      },
      bigNum2:{
        get(){
          return this.num * 10;
        }
      },
			//  带有setter和getter函数的计算属性 count
      count: {
        set (val) {
          this.num = val;
        },
        get () {
          return this.num;
        }
      }
    }
  });
</script>
```

## 总结

计算属性：要用的属性依赖data中已有属性计算得来。

原理：底层借助了Objcet.defineproperty方法提供的getter和setter。

get函数什么时候执行？

- 初次读取时会执行一次。
- 当依赖的数据发生改变时会被再次调用。

优势：与methods实现相比，内部有缓存机制（复用）多次使用，使用上一次缓存的结果，效率更高，调试方便。

说明：

- 计算属性最终会出现在vue实例上，直接读取使用即可。
- 如果计算属性要被修改，那必须写setter函数去响应修改，且setter中要引起计算时依赖的数据发生改变。

## 最佳实践

### Getter 不应有副作用

计算属性的 getter 应只做计算而没有任何其他的副作用，这一点非常重要，请务必牢记。举例来说，**不要在 getter 中做异步请求或者更改 DOM**！一个计算属性的声明中描述的是如何根据其他值派生一个值。因此 getter 的职责应该仅为计算和返回该值。在之后的指引中我们会讨论如何使用监听器根据其他响应式状态的变更来创建副作用。

### 避免直接修改计算属性值

从计算属性返回的值是派生状态。可以把它看作是一个“临时快照”，每当源状态发生变化时，就会创建一个新的快照。更改快照是没有意义的，因此计算属性的返回值应该被视为只读的，并且永远不应该被更改——应该更新它所依赖的源状态以触发新的计算。

# 监听属性 watch

watch可以监听data中的属性，也能监听computed的计算属性。data中的数据如下：

```js
data: {
    num:10,
    count: 100,
    zhangsan:{
        name:'张三',
        age: 12,
    }
}
```

## 添加监听

监听data中的num属性，回调函数有两个参数，newVal是变量改变之后的值，oldVal是变量改变之前的值。

```js
watch: {
  num(newVal, oldVal){
    console.log('num的值发生了变化：'+this.num);
  },
}
```

一些场景可以根据newVal和oldVal的差值得到计算的结果，比如计算温度差。

## 立即监听

添加 handler方法和immediate属性实现立即监听。

watch 的一个特点是，最初绑定的时候是不会执行的，要等到所监听的值发生改变时才执行监听计算。那我们想要一开始就让他最初绑定的时候就执行该怎么办呢？watch 代码如下：

```kotlin
watch: {
  count: {
    handler(newVal, oldVal) {
      console.log('count的值发生了变化：'+this.count);
    },
    // 代表在wacth里声明了count 之后立即先去执行handler方法
    immediate: true
  }
}
```

当我们给 count 绑定了一个handler方法，Vue.js会去处理这个逻辑，最终编译出来其实就是这个handler。
而immediate:true代表如果在 wacth 里声明了 count之后，就会立即先去执行里面的handler方法，如果为 false就不会在绑定的时候就执行。

## 深度监听

watch 里面还有一个属性 deep，默认值是 false，代表是否深度监听，比如我们 data 里有一个zhangsan属性：
默认情况下 handler 只监听zhangsan这个属性它的引用的变化。zhangsan属性的引用地址发生变化，也就是直接给zhangsan对象赋值的时候它才会监听到。

如果我们需要监听zhangsan里的属性age的值呢？这时候deep属性就派上用场了！

```css
watch: {
  zhangsan: {
    handler(newVal, oldVal) {
      console.log('zhangsan changed :',this.zhangsan);
    },
    immediate: true,
    deep: true
  },
}
```

### 深度监听的问题

deep的意思就是深入观察，监听器会一层层的往下遍历，给对象的所有属性都加上这个监听器，但是这样性能开销就会非常大了，任何修改zhangsan里面任何一个属性都会触发这个监听器里的 handler。

### 深度监听的优化

```jsx
watch: {
  'zhangsan.age': {
    handler(newVal, oldVal) {
      console.log('zhangsan.age changed :',this.zhangsan.age);
    },
    immediate: true,
    deep: true
  }
}
```

这样Vue.js才会一层一层解析下去，直到遇到属性age，然后才给age设置监听函数。

## this.$watch()

我们也可以使用组件实例的 `$watch()` 方法来命令式地创建一个侦听器：

```js
created() {
  this.$watch('question', (newQuestion) => {
    // ...
  })
}
```

如果要在特定条件下设置一个侦听器，或者只侦听响应用户交互的内容，这方法很有用。它还允许你提前停止该侦听器。

## 注销watch

为什么要注销 watch？

因为我们的组件是经常要被销毁的，比如我们跳一个路由，从一个页面跳到另外一个页面，那么原来的页面的 watch 其实就没用了，这时候我们应该注销掉原来页面的 watch 的，不然的话可能会导致内置溢出。

### 自动注销

好在我们平时 watch 都是写在组件的选项中的，他会随着组件的销毁而销毁。

### 手动注销

如果我们使用下面这样的方式写 watch，那么就要手动注销了

```js
const unWatch = app.$watch('num', (newVal, oldVal) => {
  console.log(`${newVal} : ${oldVal}`);
})
 
unWatch(); // 手动注销watch
```

app.$watch调用后会返回一个值，就是unWatch方法，你要注销 watch 只要调用unWatch方法就可以了。

## watch监听路由

```js
watch: {
  $route(to,from){
    console.log(to);   //to表示去往的界面
    console.log(from); //from表示来自于哪个界面
    if (to.path=="/home") {
      console.log("主页");
    }
  }
},
```

## 注意不要滥用watch

下面代码是命令式且重复的。将它与计算属性的版本进行比较：

```html
<div id="app">
  <p>语文：<input type="number" v-model.number="chinese"></p>
  <p>数学：<input type="number" v-model.number="math"></p>
  <p>英语：<input type="number" v-model.number="english"></p>

  <p>总分：{{total}}</p>
  <p>结果：{{result}}</p>

</div>

<script>
  var app = new Vue({
    el: '#app',
    data: {
      chinese: 0,
      math: 0,
      english: 0,
      total: 0,
      result: '',
    },
    watch: {
      chinese () {
        this.total = this.chinese + this.math + this.english;
      },
      math () {
        this.total = this.chinese + this.math + this.english;
      },
      english () {
        this.total = this.chinese + this.math + this.english;
      },
      total () {
        if (this.total > 240) {
          this.result = '优秀';
        } else if (this.total > 180) {
          this.result = '良好';
        } else {
          this.result = '不及格';
        }
      }
    }
  });
</script>
```

## computed 和 watch 的区别和运用的场景？

computed：是计算属性，依赖其它属性值，并且 computed 的值有缓存，只有它依赖的属性值发生改变，下一次获取 computed 的值时才会重新计算 computed 的值；

watch：没有缓存性，更多的是「观察」的作用，类似于某些数据的监听回调 ，每当监听的数据变化时都会执行回调进行后续操作；当我们需要深度监听对象中的属性时，可以打开deep：true选项，这样便会对对象中的每一项进行监听。

运用场景：

- 当我们需要进行数值计算，并且依赖于其它数据时，应该使用 computed，因为可以利用 computed 的缓存特性，避免每次获取值时，都要重新计算；
- 当我们需要在数据变化时执行异步或开销较大的操作时，应该使用 watch，使用watch选项允许我们执行异步操作 ( 访问一个 API )，限制我们执行该操作的频率，并在我们得到最终结果前，设置中间状态。这些都是计算属性无法做到的。

computed和watch之间的区别：

- computed：当一个属性受多个属性影响的时候就需要用到computed。例子： 购物车商品结算的时候

- computed能完成的功能，watch都可以完成。
- watch：当一条数据影响多条数据的时候就需要用watch。例子：搜索数据

- watch能完成的功能，computed不一定能完成，例如：watch可以进行异步操作。

# class 与 style 绑定

数据绑定的一个常见需求场景是操纵元素的 CSS class 列表和内联样式。因为 `class` 和 `style` 都是 attribute，我们可以和其他 attribute 一样使用 `v-bind` 将它们和动态的字符串绑定。但是，在处理比较复杂的绑定时，通过拼接生成字符串是麻烦且易出错的。因此，Vue 专门为 `class` 和 `style` 的 `v-bind` 用法提供了特殊的功能增强。除了字符串外，表达式的值也可以是对象或数组。

## class绑定

class取值可以是字符串、对象、数组。

**情况一**：字符串写法适用于：绑定单个类名，类名取值不确定，要动态获取。

 class取值为字符串，使用一个data中的属性，记录class名，变化name属性的值，类名变化，实现动态的类名 

```html
<p :class="name" class="box"></p>
```

 **情况二**：数组写法适用于：要绑定多个类名，个数不确定，名字也不确定。

class的取值为数组时，把数组中每个元素的值作为样式类添加，控制数组元素的变化，实现动态的类名

```html
<p :class="['a', 'b', 'c']" class="box">这是一段话</p>
```

**情况三**： 对象写法适用于：要绑定多个类名，个数确定，名字也确定，但不确定用不用。

当class取值为对象时:{key:value,...}，则这个对象的key是class名字，值是一个布尔值，true表示添加这个class名字，false则不添加这个class名字，控制对象属性值的变化，实现动态类名。

```html
<p :class="{ red: false, blue: true}" class="box">这是一段话</p>
```

对象和数组也可以混合使用

```html
<p :class="['a', 'b', 'c', { red: false, blue: true}]" class="box">这是一段话</p>
```

## style样式

style的取值：object 或者 array

- :style="{key:value,...}"，对象的键key表示样式名，键的值value表示样式值。
- :style="[styleObj1, styleObj2]"其中styleObj1、styleObj2是样式对象。

  :style 内联样式绑定到对象类型的值{key:value,...}，对象的键key表示样式名，键的值value表示样式值。

```html
<p :style="{height: '300px',width: '300px', fontSize: '30px'}">hello vue</p>
```

实例：

```html
<div id="app">
  <!-- class的取值：字符串、object 或者 array-->
  <p :class="name" class="box"></p>
  <p :class="classObj" class="box">这是一段话</p>
  <p :class="classArr" class="box">这是一段话</p>
  <!--对象和数组的混合-->
  <p :class="[classObj,'borderRadius10']" class="box">这是一段话</p>

  <!--style的取值：object 或者 array-->
  <p :style="styleObj1">hello vue</p>
  <p :style="[styleObj1,styleObj2]">hello vue</p>
</div>

<script>
  new Vue({
    el: '#app',
    data: {
     	name: 'red',
      open: true,
      classArr: ['color-red', 'font20', 'borderRadius10'],
    },
    computed: {
      classObj () {
        return {
          red: this.open,
          blue: true
        }
      },
      styleObj1 () {
        return {
          color: 'blue',
          fontSize: '30px',
          border: '1px solid black',
        }
      },
      styleObj2 () {
        return {
          height: '300px',
          width: '300px'
        }
      }
    }
  });
</script>
```

# 表单输入绑定

在前端处理表单时，我们常常需要将表单输入框的内容同步给 JavaScript 中相应的变量。手动连接值绑定和更改事件监听器可能会很麻烦：

```HTML
<input :value="text" @input="event => text = event.target.value">
```

`v-model` 指令帮我们简化了这一步骤：

```HTML
<input v-model="text">
```

另外，`v-model` 还可以用于各种不同类型的输入，`<textarea>`、`<select>` 元素。它会根据所使用的元素自动使用对应的 DOM 属性和事件组合：

- 文本类型的 `<input>` 和 `<textarea>` 元素会绑定 `value` property 并侦听 `input` 事件；
- `<input type="checkbox">` 和 `<input type="radio">` 会绑定 `checked` property 并侦听 `change` 事件；
- `<select>` 会绑定 `value` property 并侦听 `change` 事件。

> 注意
>
> `v-model` 会忽略任何表单元素上初始的 `value`、`checked` 或 `selected` attribute。它将始终将当前绑定的 JavaScript 状态视为数据的正确来源。你应该在 JavaScript 中使用`data` 选项来声明该初始值。

## v-model基础用法

- 输入框 `input[type=text/password/number] 、textarea` 使用v-model绑定的是value属性的值

- 单个复选框`input[type=checkbox]`使用v-model绑定的是布尔值，不需要给标签配置value属性

- 多个复选框`input[type=checkbox]`使用v-model绑定到数组，需要给标签配置value属性，数组中存放的是value属性的值

- 单选框`input[type=radio]`使用v-model绑定的是value属性的值，需要给标签配置value属性 

- 下拉菜单`select`使用v-model绑定的是option的标签的值，如果option标签有value属性，绑定就是vlaue属性的值

  - > 注意
    >
    > 如果 `v-model` 表达式的初始值不匹配任何一个选择项，`<select>` 元素会渲染成一个“未选择”的状态。在 iOS 上，这将导致用户无法选择第一项，因为 iOS 在这种情况下不会触发一个 change 事件。因此，我们建议提供一个空值的禁用选项，如下面的例子所示。
    >
    > ```html
    > <select v-model="selected">
    >   <option disabled value="">Please select one</option>
    >   <option>A</option>
    >   <option>B</option>
    >   <option>C</option>
    > </select>
    > ```


`input[type=checkbox]`的注意点：

- 没有配置input的value属性，那么收集的就是checked属性的值（勾选 or 未勾选，是布尔值）
- 配置input的value属性:
  - v-model的绑定的初始值是非数组，那么收集的就是checked属性的值（勾选 or 未勾选，是布尔值）
  - v-model绑定的初始值是数组，那么收集的的就是value属性的值组成的数组

```html
<form @submit="onSubmit">
  <input type="text" v-model="formdata.username" placeholder="用户名"> <br>
  <input type="password" v-model="formdata.password" placeholder="密码"> <br>
  <textarea v-model="formdata.desc" placeholder="描述信息"></textarea> <br>

  <label><input type="checkbox" v-model="formdata.remember"> 记住密码</label> <br>
  
  <label><input type="checkbox" v-model="formdata.hobby" value="游戏"> 游戏</label>
  <label><input type="checkbox" v-model="formdata.hobby" value="运动"> 运动</label>
  <label><input type="checkbox" v-model="formdata.hobby" value="音乐"> 音乐</label> <br>

  <label><input type="radio" v-model="formdata.sex" value="男"> 男</label>
  <label><input type="radio" v-model="formdata.sex" value="女"> 女</label> <br>
  
  <select v-model="formdata.major">
    <option disabled value="">请选择</option>
    <option value="HTML">html</option>
    <option>java</option>
    <option>ui</option>
  </select> <br>
</form>
```

## 值绑定

使用v-bind绑定value，实现动态绑定数据

- 复选框选中时使用属性a的值，未选中时使用属性b的值

```html
 <input type="checkbox" v-model="toggle" v-bind:true-value="a" v-bind:false-value="b">
```

- 单选框选中时使用属性a或者b的值

```html
A<input type="radio" v-model="result" v-bind:value="a">
B<input type="radio" v-model="result" v-bind:value="b">
```

- 下拉菜单选中时值为 `{ number: 123 }`对象

```html
<select v-model="selected">
  <option v-bind:value="{ number: 123 }">123</option>
</select>
```

## v-model的三个修饰符

### .lazy

默认情况下，`v-model` 会在每次 `input` 事件后更新数据 。你可以添加 `lazy` 修饰符来改为在每次 `change` 事件后更新数据：

- lazy：失去焦点再收集数据：v-model默认绑定的是input事件，使用 .lazy 后触发的是 change 事件

```HTML
<!-- 在 "change" 事件后同步更新而不是 "input" -->
<input v-model.lazy="msg" />
```

### .number

如果你想让用户输入自动转换为数字，你可以在 `v-model` 后添加 `.number` 修饰符来管理输入：

- number：将输入的值转为数字类型

```HTML
<input v-model.number="age" />
```

- 如果该值无法被 `parseFloat()` 处理，那么将返回原始值。

- `number` 修饰符会在输入框有 `type="number"` 时自动启用。

### .trim

如果你想要默认自动去除用户输入内容中两端的空格，你可以在 `v-model` 后添加 `.trim` 修饰符：

- trim：去除输入内容首尾空格

```HTML
<input v-model.trim="msg" />
```

# Vue实例的生命周期

每个 Vue 组件实例在创建时都需要经历一系列的初始化步骤，比如设置好数据侦听，编译模板，挂载实例到 DOM，以及在数据改变时更新 DOM。在此过程中，它也会运行被称为生命周期钩子的函数，让开发者有机会在特定阶段运行自己的代码。

每个 Vue 实例在被创建之前都要经过的一系列的初始化过程，就是Vue实例的生命周期。

在经历这个过程的时候，不同的阶段会执行对应的函数，这些函数就是生命周期钩子函数，在这些函数中可以添加各种功能代码。

- 生命周期也叫生命周期回调函数、生命周期函数、生命周期钩子。是Vue在关键时刻帮我们调用的一些特殊名称的函数。
- 生命周期函数的名字是预定义好的，不可更改，但函数的具体内容是程序员根据需求编写的。
- 生命周期函数中的this指向是vm 或 组件实例对象。

## 注册周期钩子

举例来说，`mounted` 钩子可以用来在组件完成初始渲染并创建 DOM 节点后运行代码：

```js
new Vue({
  el: '#app',
  mounted() {
    console.log(`the component is now mounted.`)
  }
})
```

还有其他一些钩子，会在实例生命周期的不同阶段被调用，最常用的是 `mounted`、`updated`和 `unmounted`。

所有生命周期钩子函数的 `this` 上下文都会自动指向当前调用它的组件实例。注意：避免用箭头函数来定义生命周期钩子，因为如果这样的话你将无法在函数中通过 `this` 获取组件实例。

## 生命周期图示

下图展示了实例的生命周期。你不需要立马弄明白所有的东西，不过随着你的不断学习和使用，它的参考价值会越来越高。

![](./images/lifecycle.png)

## 生命周期的过程

**初始化数据阶段（触发1次）**

- beforeCreate：在实例初始化之后，初始化生命周期和事件之前同步调用，还不能访问data和methods中的数据。
- created：在实例创建完成后被立即同步调用。在这一步中，实例已完成对选项的处理，意味着以下内容已被配置完毕：数据侦听、计算属性、方法、事件/侦听器的回调函数。然而，挂载阶段还没开始，且 `$el` 目前尚不可用。

**编译模板渲染阶段（触发1次）**

- beforeMount：在挂载开始之前被调用。相关的 `render` 函数首次被调用。
- mounted：实例被挂载后调用。这时 `el` 被新创建的 `vm.$el` 替换了。如果根实例挂载到了一个文档内的元素上，当 `mounted` 被调用时 `vm.$el` 也在文档内。

**运行阶段（触发0次或者多次）**

- beforeUpdate：在数据发生改变后，DOM 被更新之前被调用。这里适合在现有 DOM 将要被更新之前访问它，比如移除手动添加的事件监听器。
- updated：在数据更改导致的虚拟 DOM 重新渲染和更新完毕之后被调用。当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。然而在大多数情况下，你应该避免在此期间更改状态。如果要相应状态改变，通常最好使用 计算属性 或  watcher 取而代之。

**销毁阶段（触发1次）**

- beforeDestroy：实例销毁之前调用。在这一步，实例仍然完全可用。
- destroyed：实例销毁后调用。该钩子被调用后，对应 Vue 实例的所有指令都被解绑，所有的事件监听器被移除，所有的子实例也都被销毁。

## 其他生命周期函数

**激活和实失效**

- activated：被 keep-alive 缓存的组件激活时调用。
- deactivated：被 keep-alive 缓存的组件失活时调用。

**捕获错误**

- errorCaptured：在捕获一个来自后代组件的错误时被调用。此钩子会收到三个参数：错误对象、发生错误的组件实例以及一个包含错误来源信息的字符串。此钩子可以返回 `false` 以阻止该错误继续向上传播。

##  常用的生命周期函数

- mounted：发送ajax请求、启动定时器、绑定自定义事件、订阅消息等【初始化操作】。
- beforeDestroy：清除定时器、解绑自定义事件、取消订阅消息等【收尾工作】。

## 关于销毁Vue实例

- 销毁后借助Vue开发者工具看不到任何信息。
- 销毁后自定义事件会失效，但原生DOM事件依然有效。
- 一般不会在beforeDestroy操作数据，因为即便操作数据，也不会再触发更新流程了。

## 数据和DOM的操作

- 如果要调用methods 中的方法，或者操作data中的数据，最早，只能在created 中操作。
- 如果要通过某些插件操作页面上的DOM节点了，最早要在mounted中进行。

# 模板引用ref

[处理边界情况 — Vue.js (vuejs.org)](https://v2.cn.vuejs.org/v2/guide/components-edge-cases.html)

按照vue框架的设计思想，开发者在代码中无需关心原生的dom元素，不需要进行DOM操作，所有对于DOM的处理都可以通过数据绑定进行。

但是少数极端情况下，还是需要使用原生的dom元素，为此，可以使用 ref 属性为子组件或 HTML 元素指定引用 ID ，添加引用ID之后，会把这些引用组件或元素添加到到$refs对象中。

## ref属性

```js
<input ref="input">
```

`ref` 是一个特殊的 属性，它允许我们在一个特定的 DOM 元素或子组件实例被挂载后，获得对它的直接引用。这可能很有用，比如说在组件挂载时将焦点设置到一个 input 元素上，或在一个元素上初始化一个第三方库。

## 访问模板引用

挂载结束后引用都会被暴露在 `this.$refs` 之上：

```html
<script>
 	new Vue({
    el: '#app',
    created () {
      // created中组件还没有渲染，组件中的标签元素就还没有创建，所以这时不能使用$refs属性中的内容。
      console.log(this.$refs.input);
    },
    mounted() {
      // 组件的$refs属性，是一个对象，其中存放了本组件模板中设置了ref属性的标签，其中键是标签的ref值，值就是这个标签对象。
      this.$refs.input.focus();
    }
  })
</script>
```

注意，你只可以**在组件挂载后**才能访问模板引用。如果你想在模板中的表达式上访问 `$refs.input`，在初次渲染时会是 `null`。这是因为在初次渲染前这个元素还不存在呢！

## v-for 中的模板引用

当 `ref` 和 `v-for` 一起使用的时候，你得到的 ref 将会是一个包含了对应数据源的这些子组件的数组。

```html
<ul>
  <li v-for="n in 3" ref="items">第{{n}}行</li>
</ul>

<script>
 	new Vue({
    el: '#app',
    mounted() {
      // 如果ref属性用在了v-for渲染的标签上，那么会得到数组。
      console.log(this.$refs.items);
    }
  })
</script>
```

## 函数模板引用

除了使用字符串值作名字，`ref` attribute 还可以绑定为一个函数，会在每次组件更新时都被调用。该函数会收到元素引用作为其第一个参数：

```HTML
<input :ref="(el) => { /* 将 el 赋值给一个数据属性或 ref 变量 */ }">
```

注意我们这里需要使用动态的 `:ref` 绑定才能够传入一个函数。当绑定的元素被卸载时，函数也会被调用一次，此时的 `el` 参数会是 `null`。你当然也可以绑定一个组件方法而不是内联函数。

## 组件上的 ref

模板引用也可以被用在一个子组件上。这种情况下引用中获得的值是组件实例。

# DOM 更新时机

当你更改响应式状态后，DOM 会自动更新。然而，你得注意 DOM 的更新并不是同步的。相反，Vue 将缓冲它们直到更新周期的 “下个时机” 以确保无论你进行了多少次状态更改，每个组件都只更新一次。

若要等待一个状态改变后的 DOM 更新完成，你可以使用 `$nextTick()` 函数，它将回调延迟到下次 DOM 更新循环之后执行。在修改数据之后立即使用它，然后等待 DOM 更新。它跟全局方法 `Vue.nextTick` 一样，不同的是回调的 `this` 自动绑定到调用它的实例上。

## 为什么会有nextTick?

因为Vue 在更新 DOM 时采用的**异步更新策略**，当监听到数据发生变化的时候不会立即去更新DOM，而是开启一个任务队列，并缓存在同一事件循环中发生的所有数据变更；

这种做法带来的好处就是可以将多次数据更新合并成一次，减少操作DOM的次数，如果不采用这种方法，假设数据改变100次就要去更新100次DOM，而频繁的DOM更新是很耗性能的；

## nexTick 的作用？

nextTick 接收一个回调函数作为参数，并将这个回调函数延迟到DOM更新后才执行；

**使用场景**：想要操作 **基于最新数据生成的DOM** 时，就将这个操作放在 nextTick 的回调中；

```html
<p ref="p">num:{{num}} </p>
<button @click="btnClick">按钮</button>

<script>
  new Vue({
    data:{
      num: 6,
    },
    methods: {
      btnClick () {
        this.num = 666;
        // Vue 在更新 DOM 时是异步执行的：当data中数据变化是通过异步操作渲染更新DOM
        console.log(this.$refs.p.innerHTML);// num:6

        // 为了在数据变化之后等待 Vue 完成更新 DOM，可以在数据变化之后立即使用 Vue.nextTick(callback)。这样回调函数将在 DOM 更新完成后被调用
        this.$nextTick(function(){
        	console.log(this.$refs.p.innerHTML);// num:666
        });
      }
    },
	})
</script>
```

# 过滤器

Vue.js 允许你自定义过滤器，可被用于一些常见的文本格式化。

vue3[移除了过滤器](https://v3-migration.vuejs.org/zh/breaking-changes/filters.html)，推荐使用函数或者计算属性来代替过滤器。

## 注册过滤器

注册过滤器分为全局过滤器和局部过滤器：

1. 注册全局过滤器：`Vue.filter(过滤器名, 回调函数) `

   ```js
   Vue.filter('priceFormat', function (value) {
     return '￥' + value;
   });
   ```

2. 注册局部过滤器:` new Vue{ filters:{过滤器名: 回调函数} }`

   ```js
   new Vue({
     filters: {
       numFormat (value, n = 2) {
         return value.toFixed(n);
       },
     },
   });
   ```

## 使用过滤器

过滤器可以用在两个地方：

- **双花括号插值**: `{{ xxx | 过滤器名}}` 
-  **`v-bind` 表达式** ：`v-bind:属性 = "xxx | 过滤器名"`

过滤器添加在 JavaScript 表达式的尾部，由“管道”符号指示：

```html
<!-- 在双花括号中 -->
{{ num | priceFormat }}

<!-- 在 `v-bind` 中 -->
<p :title="num | numFormat">过滤器</p>
```

## 过滤器传参和串联

过滤器也可以接收额外参数、多个过滤器也可以串联：
- 参数：`{{ message | filterA('arg1', arg2) }}`
- 过滤器串联：`{{ message | filterA | filterB }}`

过滤器使用过程中并没有改变原本的数据， 而是产生新的数据。

过滤器可以串联：

```js
{{ message | filterA | filterB }}
```

在这个例子中，`filterA` 被定义为接收单个参数的过滤器函数，表达式 `message` 的值将作为参数传入到函数中。然后继续调用同样被定义为接收单个参数的过滤器函数 `filterB`，将 `filterA` 的结果传递到 `filterB` 中。

过滤器是 JavaScript 函数，因此可以接收参数：

```
{{ message | filterA('arg1', arg2) }}
```

这里，`filterA` 被定义为接收三个参数的过滤器函数。其中 `message` 的值作为第一个参数，普通字符串 `'arg1'` 作为第二个参数，表达式 `arg2` 的值作为第三个参数。      
