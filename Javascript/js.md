[toc]

# 值的类型

## 原始值

原始值存在栈：先进后出
number string undefined null boolean bigint symbol

# 函数

arguments 实参列表

```
function sum(a) {

}
sum(1,2,3)
实参传递123，形参虽然只有一个但是其他值传入了arguments中

function sum(a, b) {
    a= 2; a改变，arguments里面的a也改变
    arguments[0] = 3; 改变arguments里面的值，形参a也跟着变化了
    console.log(a);
    这是由于映射关系，不是引用地址，这两者不是一个变量
}
sum(1)

// 当形参有2个，实参只传递一个的时候，在函数内部给第二个形参赋值，打印arguments时，第二个参数为undefined
```

# 递归

```

function mul(n){
    if(n == 1){
        return;
    }
    return n*mul(n-1);
}
mul(5);

mul(5) ==> 5 * mul(4)
mul(4) ==> 4 * mul(3)
...

```

递归需要注意两点：

1. 找规律 (递归就是 return 规律)
2. 找出口 (已知条件当出口)

# 预编译

![](./imgs/Snipaste_2022-09-25_21-39-06.png)

1. imply global

例如 a = 10;未声明直接赋值不报错，系统将其提升到暗示全局变量里
也就是放到了 window.a 里面了

申明了 var b = 10; b 也在 window 属性里面
![](./imgs/Snipaste_2022-09-25_21-51-31.png)

- window 就是全局

## 预编译发生在函数执行的前一刻

**预编译过程：**

1. 创建 AO Activation Object(执行期上下文)
   ![](./imgs/Snipaste_2022-09-26_14-00-05.png)

2. 找形参和变量声明，将变量和形参名作为 AO 属性名，值为 undefined
   ![](./imgs/Snipaste_2022-09-26_14-01-56.png)
3. 将实参值与形参统一
   ![](./imgs/Snipaste_2022-09-26_14-02-46.png)
4. 在函数体里面找函数声明，值赋予函数体
   ![](./imgs/Snipaste_2022-09-26_14-04-47.png)

例子：

```

function test(a,b){
    console.log(a);
    c = 0;
    var c;
    a = 3;
    b = 2;
    console.log(b);
    function b () {}
    function d () {}
    console.log(b);
}

test(1);

输出结果：
1
2
2

```

**tips: 预编译还发生在全局**
全局第一步 生成 GO 对象
![](./imgs/Snipaste_2022-09-26_14-22-51.png)

GO 生成时间先于 AO

```
1.生成GO
GO{
    global: undefined
    fn: fn () {}
}

var global = 100;

function fn() {
    console.log(global);
}
AO{

}
fn();

```

```
GO{
    global: 100,
    fn: undefined
}
-------------------------------
global = 100;
function fn() {
    console.log(global); //undefined
    global = 200;
    console.log(global); // 200
    var global = 300;
}
------------------------
AO{
    global: 200,
}
------------------------
fn();
var global;

```

go{
a: undefined
}

go {
bar: undefined
}

ao{
foo: function foo () {},
}

例题：

```

生成GO{
    bar: fnc
}

1.
    function bar() {
        return foo;
        foo = 10;
        function foo() {

    }
    var foo = 11;
}
    console.log(bar());

生成AO{
    foo: function foo() {},
}

2.
    console.log(bar());
    function bar() {
        foo = 10;
        function foo() {

        }
        var foo = 11;
        return foo;
    }


```

# 作用域

一个函数执行的时候会产生一个执行期上下文，即 AO，**函数每次执行时对应的执行期上下文都是独一无二的**。多次调用则产生多个 AO，当函数执行完毕时，产生的执行期上下文被销毁。

![](./imgs/Snipaste_2022-09-28_15-21-36.png)

![](./imgs/Snipaste_2022-09-28_15-24-17.png)

![](./imgs/Snipaste_2022-09-28_15-22-10.png)
**scope chain 里存的是函数 a 作用域里的第零位，指向 global object**

**在哪个函数里面查找变量 就去哪个函数里的作用域链的顶端向下查找**

# 闭包

通俗来讲：内部的函数被保存到了外部，一定生成闭包！！

![](./imgs/Snipaste_2022-09-28_21-08-38.png)

# 立即执行函数

即为初始化功能的函数

这样写的好处可以节省内存，适用于只需要调用一次的函数，调用完即销毁！
![](./imgs/Snipaste_2022-09-28_22-35-09.png)
立即执行函数推荐写法
(function(){}()) w3c 标准

函数表达式能被执行符号即()执行（理论上只要是表达式都可以用()执行，并视为立即执行函数）：

```
函数表达式写法：
var test = function() {

}() 这里跟表达式可以被执行

函数声明写法：
function test(){}() 这里执行就会报错
```

# 避免闭包共用一个值的方案

![](./imgs/Snipaste_2022-09-29_18-27-10.jpg)

# 对象 Object

![](./imgs/Snipaste_2022-09-29_21-59-55.jpg)

对象里面放 this,this 就是指代的这个 Obj 对象

- 对象属性的删除方法：
  借助 delete 操作符
  ![](./imgs/Snipaste_2022-09-29_22-06-42.jpg)

## 对象的创建方法

1. var obj = {} //plainObject 对象字面量/对象直接量

2. 构造函数创建方法

- 系统自带的构造函数 new Object() 、Array()、Number()

var obj = new Object();
这个 Object()是系统自带的构造函数，通过 new 加上系统自带的构造函数执行的方式，能产生一个对象

- 自定义

![](./imgs/Snipaste_2022-09-29_22-27-31.jpg)

**写自定义构造函数时要遵循大驼峰式规则**
![](./imgs/Snipaste_2022-09-29_22-29-19.jpg)
![](./imgs/Snipaste_2022-09-29_22-34-41.jpg)

## 构造函数内部原理

![](./imgs/Snipaste_2022-09-30_19-40-05.jpg)

有三个步骤:

```
function Student(name, age, sex) {
    //第一步 var this = {};

    //第二步执行this.xxx = xxx;
    //即AO = { this : {name: 'zhangsan'} }

    this.name = name;
    this.age = age;
    this.sex = sex;
    this.grade = 2017;
    // 第三步，隐式返回this对象 return this;
}

var student = new Student('zhangsan', 18, 'male')
```

## 包装类

**原始值不能有方法和属性**

```
//但是有个神奇的现象

    var str = "abc";
    str.length //可以输出结果，问题是原始值不能有方法和属性
    为什么能输出结果呢，因为会隐式的new String()，new完之后delete

    console.log(num.len) //再次new一个对象然后把属性放进去，此时没有值，所以打印undefined

```

### \_\_proto\_\_(起到连接原型和自己的作用)

![](./imgs/Snipaste_2022-10-01_12-48-04.jpg)

关于用 person.prototype.name = xxx 和 person.prototype = {}的区别

![](./imgs/Snipaste_2022-10-01_18-05-40.jpg)

### call

![](./imgs/Snipaste_2022-10-01_23-52-53.jpg)

用了.call 会让对象里面所有的 this 都变成 obj

this 不 new 的时候，默认指向的是 window

### apply

apply 只能传一个形参，而且为数组

与 call 的区别：

call 需要把实参按照形参的个数传进去
apply 需要传一个 arguments

`apply(list,[])`

# 继承发展史

1. 传统形式 ——> 原型链

   - 过多的继承了没用的属性

2. 借用构造函数

   - 不能继承借用构造函数的原型
   - 每次构造函数都要多走一个函数

3. 共享原型

   - 不能随便改动自己的原型
     ![](./imgs/Snipaste_2022-10-02_17-20-23.jpg)

```
    抽象出一个方法，以便以后构造的函数，都能继承
    function inherit(Target, Origin) {
        Target.prototype = Origin.prototype;
    }

```

4. 圣杯模式

```

function Father() {

}

function Son() {

}

function F() {

}
var father = new Father();
var son = new Son();
// 添加个中间人，让他的原型充当Son的原型
F.prototype = Father.prototype;
Son.prototype = new F()


封装继承：

function inherit(Target, Origin) {
    function F(){};
    F.prototype = Origin.prototype;
    Target.prototype = new F();
    Target.prototype.constructor = Target;
    Target.prototype.uber = Origin.prototyp; //这一步是标识自己真正继承的原型是谁
}
Father.prototype.lastName = "Deng";
function Father(){

}
function Son(){

}

inherit(Son,Father);
var son = new Son();
var father = new Father();

```

## 命名空间

管理变量，防止污染全局，适用于模块化开发
![](./imgs/Snipaste_2022-10-03_16-50-12.jpg)

### obj 写法

obj.name ---> 其实就是 obj['name']

```

var deng = {
    w1:{ name : "xiaoliu" },
    w2:{ name : "xiaozhou" },
    w3:{ name : "xiaowang" },
    sayW: function(num){
        return this['w' + num] //可以通过传递不同num，访问不同的属性
    }
}

```

## 对象的枚举

- for in
  循环对象的属性
  ![](./imgs/Snipaste_2022-10-03_17-37-59.jpg)

  ```
    obj遍历属性的时候要注意，如果用obj.prop，系统会把prop当作字符串，也就是 obj['prop'], 需要改成obj[prop]

    var obj = {
        name: 'zpc',
        age: 18,
        sex: 'male'
    }

    for(var prop in obj) {
        console.log(obj.prop) //此时打印的结果为3个undefined,因为系统内部将obj.prop的prop看做了字符串
    }
  ```

- hasOwnProperty
  用于判断某个对象中是否有某个属性，返回值为布尔值

- in
  虽然可以判断一个属性是否存在于对象中，但是 in 也会查取对象原型中是否含有该属性

- instanceof
  用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上

```
//A对象 是不是 B构造函数构造出来的
//
// 看A对象的原型链上 有没有B的原型
A instanceof B

```

对象的构造函数是 Obj
数组的构造函数是 Array

# this 指向问题

1. 函数预编译过程中 this ——> window
   ![](./imgs/Snipaste_2022-10-03_23-43-06.jpg)
2. 全局作用域里 this ——>window

3. call/apply 可以改变函数运行时 this 指向

4. obj.func(); func()里面的 this 指向 obj

## 深拷贝

```
var obj = {
    name: "abc",
    age: 123,
    card: ['visa', 'master'],
    wife: {
        name: "bcd",
        son: {
            name: "aaa"
        }
    }
}

var obj1 = {}


function deepClone(origin, target) {
    var target = target || {};
    var toStr = Object.prototype.toString;
        arrStr = "[object Array]";
    for(var prop in origin){
        if(typeof(origin[prop] == 'object')){
            if(toStr.call(origin[prop]) == arrStr){
                target[prop] = [];
            }else{
                target[prop] = {};
            }
        deepClone(origin[prop],target[prop]);
        }
    }else{
        target[prop] = origin[prop];
    }

}

```

完整版：
![](./imgs/Snipaste_2022-10-04_19-47-44.jpg)

## 数组常用的方法

- 改变原数组
  - push, pop, shift, unshift, reverse
  - splice
- 不改变原数组
  - concat, join ————> split, toString, slice

### push

在数组最后一位添加数据

实现 Push 方法：

```

    var arr = [];
    Array.prototype.push = function() {
        for(var i = 0; i < arguments.length; i++){
            this[this.length] = arguments[i];
        }
    }

```

### pop

调用 pop，则把数组最后一位剪切出来，并返回所删除的值

### unshift

在数组最前面增加值
![](./imgs/Snipaste_2022-10-04_21-19-36.jpg)
unshift 还可以传递参数，并在数组中增加所传参数

### shift

在数组最前面减去值

### reverse

### splice

**arr.splice(从第几位开始, 截取多少的长度, 在切口处添加新的数据)**

---

var arr = [1,1,2,2,3,3]
arr.splice(1,2) //返回结果为截取的数据[1,2] ,原数组变为[1,2,3,3]

---

arr.splice(1,1,0,0,0) 返回结果 [1],原数组变为[1,0,0,0,2,2,3,3]

---

在 arr 中间添加数据:
var arr = [1,2,3,5]
arr.splice(3,0,4) // 打印结果为[1,2,3,4,5]

---

splice 从负数位截取
![](./imgs/Snipaste_2022-10-04_21-37-05.jpg)

### sort

- 排序数组，且改变原数组

- sort 排序是按 ASCII 码来排序

```
var arr = [1,3,5,4,10] //排序结果为 1 10 3 4 5
```

- sort()里可以写一个匿名函数
  ![](./imgs/Snipaste_2022-10-05_00-20-29.jpg)

**返回值为正数，后面的数放在前面**
**返回值为负数，前面的数放在前面**

### concat

连接两个数组，**不改变原数组**

### slice

**不改变原数组**

slice(从该位开始截取, 截取到该位)

```
slice填两个参数的情况
var arr = [1,2,3,4,5,6];
arr.slice(1,2) //返回结果 [2]

slice填一个参数的情况
var arr = [1,2,3,4,5,6];
arr.slice(1) // [2,3,4,5,6]
```

### join

```
var arr = [1,2,3,4,5,6];
arr.join("-") ——————> 返回一个拼接好的字符串"1-2-3-4-5-6"
arr.join("!") ——————> 返回一个拼接好的字符串"1!2!3!4!5!6"

join可以连接成字符串，如若要改变原样可以调用字符串的一个方法split()

```

![](./imgs/Snipaste_2022-10-05_02-15-35.jpg)

# 类数组

1. 可以利用属性名模拟数组的特性
2. 可以动态的增长 length 属性
3. 如果强行让类数组调用 push 方法，则会根据 length 属性值的位置进行属性的扩充。

![](./imgs/Snipaste_2022-10-05_14-07-56.jpg)

类数组需要注意的是：
属性要为索引(数字)属性，必须有 length 属性，最好加上 push 方法
![](./imgs/Snipaste_2022-10-05_14-12-12.jpg)

类数组的好处

```

var obj = {
    "2" : "a",
    "3" : "b",
    "length" : 2,
    "push" : Array.prototype.push
}


obj.push("c");  // 2的值变为c
obj.push("d"); // 3的值变为d

push会发生如下隐式调用
Array.prototype.push(
    function(target){
        this[this.length] = target;
        this.length ++;
    }
)
//当obj调用时this指向obj

```

封装 type:

```

function type(target){
    // 1.分两类 原始值 引用值
    // 2.区分引用值

    var templete = {
        "[object Array]" : "array",
        "[object Object]" : "object",
        "[object Number]" : "number - object",
        "[object boolean]" : "boolean - object",
        "[object String]" : "string - object",
    }

    if (typeof(target == null)){
        return null;
    }else if(typeof(target) == 'object'){
        var str = Object.prototype.toString.call(target);
        return template[str];
    }else {
        return typeof(target);
    }
}

```

### 数组去重

```

var arr = [1,1,3,3,4]

Array.prototype.unique = function() {
    var temp = {},
        arr = [],
        len = this.length;
    for(var i = 0; i < len; i++){
        if(!temp[this[i]]) {
            temp[this[i]] = "abc";
            arr.push(this[i]);
        }
    }
}

```

# try...catch

```

   try{
       console.log('a');
       console.log(b);
       console.log('c');
   }catch(e){

   }
   console.log('d');
   try中代码如果有错误，则不会抛出error，然后不再执行try里面的代码，但会接着按顺序执行外边的代码


catch里面代码在 try执行抛出错误时，捕捉到错误
```

# DOM 初探

![](./imgs/Snipaste_2022-10-06_00-15-34.jpg)

事件监听

```

div.onclick = function() {
    //监听点击事件
}

```

## DOM 元素选择

![](./imgs/Snipaste_2022-10-06_17-21-45.jpg)

## 遍历节点树：

![](./imgs/Snipaste_2022-10-06_20-58-34.jpg)

节点不止有 Html 元素还有属性，文本，注释等
![](./imgs/Snipaste_2022-10-06_21-01-22.jpg)

## 遍历元素节点树

![](./imgs/Snipaste_2022-10-06_21-33-03.jpg)

## 节点的四个属性

![](./imgs/Snipaste_2022-10-06_22-01-16.jpg)

## DOM 结构树

![](./imgs/Snipaste_2022-10-07_00-55-06.jpg)

# date 对象

```

var date = new date();

```

## setInterval 定时器

## clearInterval 清除定时器

让定时器消失

## setTimeout

定时器，推迟一段时间后执行（只执行一次）

## DOM 基本操作

### 滚动条

![](./imgs/Snipaste_2022-10-08_23-35-59.jpg)

### 查看视口尺寸

![](./imgs/Snipaste_2022-10-08_23-39-29.jpg)

### 查看元素的几何尺寸

结果不是实时的，没吊用
![](./imgs/Snipaste_2022-10-08_23-47-24.jpg)

### 查看元素的位置

![](./imgs/Snipaste_2022-10-08_23-53-03.jpg)

求的是视觉上的尺寸，如果盒子有 padding，也会包含 padding 在内！
如果求盒子内容尺寸，直接用 元素.style.width/height

- dom.offsetLeft 求的结果是**它的有定位的父级元素的距离**
  ![](./imgs/Snipaste_2022-10-08_23-59-05.jpg)

### 让滚动条滚动

![](./imgs/Snipaste_2022-10-09_01-02-01.jpg)

### 脚本化 CSS

![](./imgs/Snipaste_2022-10-09_02-11-09.jpg)

- 查询计算样式
  ![](./imgs/Snipaste_2022-10-09_02-46-35.jpg)

### 事件

![](./imgs/Snipaste_2022-10-09_15-50-06.jpg)

### 解除事件

![](./imgs/Snipaste_2022-10-09_17-48-23.jpg)

### 事件处理模型

![](./imgs/Snipaste_2022-10-09_17-53-31.jpg)

### 取消冒泡

![](./imgs/Snipaste_2022-10-09_18-10-38.jpg)

### 事件分类

![](./imgs/Snipaste_2022-10-09_21-33-28.jpg)

### 套锁实现开关

![](./imgs/Snipaste_2022-10-09_22-05-33.jpg)

### keydown 和 keypress 的区别

keydown 可以响应任何键盘按键，keypress 只能响应字符类键盘按键
![](./imgs/Snipaste_2022-10-09_22-23-16.jpg)

### 文本类操作事件

![](./imgs/Snipaste_2022-10-09_22-31-30.jpg)

## Json 数据格式

![](./imgs/Snipaste_2022-10-10_13-17-16.jpg)

## 异步加载 js

![](./imgs/Snipaste_2022-10-10_14-19-12.jpg)

## js 加载时间线

![](./imgs/Snipaste_2022-10-10_15-47-18.jpg)

# 正则表达式

## 转义字符

- "\\"，表示转义字符
- "\\n"，表示换行
- "\\r"，表示行结束符
- "\\t"，表示缩进

## RegExp

正则表达式的作用：匹配特殊字符或有特殊搭配原则的字符 的最佳选择

- RegExp 两种写法

1. "//"双斜线里面书写规则
2. new RegExp()

- 修饰符
  i 忽略大小写
  g 匹配全局
  m 多行匹配(配合着查找开头结尾用)

/^ 表示查找以什么开头的

- reg.test(); 只能判断字符串是否有符合的片段，返回结果为 boolean
- str.match(); 能把匹配结果返回

### 表达式

1. [], 一个[]代表一位,里面可以填值或值的区间
   例如匹配三个连续的数字
   ![](./imgs/Snipaste_2022-10-10_17-31-37.jpg)

2. [^value] 表示查找任何不在方括号之间的字符

3. (red|blue|green) |表示或 ()表示优先运算
   ![](./imgs/Snipaste_2022-10-10_17-48-22.jpg)

### 元字符

1. \w, \w === [1-9A-z_]
2. \W, 大写表示只匹配小写 w 的区间外
3. \d 查找数字
4. \D 查找非数字
5. \s 查找空白字符(包含空格)
   ![](./imgs/Snipaste_2022-10-10_17-57-07.jpg)
   - 换行符： \n
   - 换页符: \f
   - 回车符: \r
   - 制表符: \t
   - 垂直制表符: \v
6. \S 查找非空白字符
7. \b 匹配单词边界
8. \B 匹配非单词边界
9. \t 匹配真实代码写了\t 的字段，不匹配视觉上的 tab 制表符
10. \xxx 查找以八进制数 XXX 规定的字符
11. \xdd 查找以十六进制数 dd 规定的字符
12. \uxxxx 查找以十六进制数 xxxx 规定的 Unicode 字符
    这个\uxxxx 可以匹配汉字

13. "." 可以查找单个字符，除了换行和行结束符

### 量词

1. n+ {1,}
   表示这个变量可以出现 1 次到无数次
   ![](./imgs/Snipaste_2022-10-10_22-24-30.jpg)

2. n\* {0,}
   匹配任何包含 0 个或多个 n 的字符串
   ![](./imgs/Snipaste_2022-10-10_22-30-31.jpg)

3. n? {0,1} 取值为 0-1 个

4. n{X}
   n 个 n 个的匹配
5. n{x,y}
   n{3,5} 3-5 个匹配，优先原则：优先 5 个其次 4 个最后 3 个
6. n{X,}

7. n$
   匹配任何结尾为 n 的字符串

8. ^n
   匹配任何开头为 n 的字符串

9. ?=n
   匹配任何其后紧接指定字符串 n 的字符串
10. ?!n
    匹配任何其后没有紧接指定字符串 n 的字符串。

![](./imgs/Snipaste_2022-10-10_22-40-46.jpg)

## 正则表达式的方法

1. test
   检索字符串中指定的值。返回 true 或 false。
2. exec
   检索字符串中指定的值。返回找到的值，并确定其位置。

![](./imgs/Snipaste_2022-10-10_23-07-14.jpg)

![](./imgs/Snipaste_2022-10-10_23-12-22.jpg)

3. 支持正则表达式的 String 对象的方法
   ![](./imgs/Snipaste_2022-10-10_23-16-57.jpg)

## 贪婪匹配

在量词后加问号，表示非贪婪匹配
![](./imgs/Snipaste_2022-10-11_15-34-09.jpg)

## reg.ever 方法

可以写多个正则来匹配判断

```

例如：验证密码必须含有一个数字，字母

var regs = [
    /^[a-z0-9]{5,10}$/i,
    /[A-Z]/,
    [0-9]
]

var state = regs.every(e => e.test(value));

// 用every方法可以使多个正则同时起作用去匹配

```

## reg.matchall 方法

![](./imgs/Snipaste_2022-10-12_14-51-08.jpg)
