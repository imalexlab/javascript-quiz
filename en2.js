[
  {
    id: 1,
    question: "What's the output?",
    snippet: 'function sayHi() {\n' +
      '  console.log(name);\n' +
      '  console.log(age);\n' +
      "  var name = 'Lydia';\n" +
      '  let age = 21;\n' +
      '}\n' +
      '\n' +
      'sayHi();\n',
    choices: [
      { key: 'A', value: '`Lydia` and `undefined`' },
      { key: 'B', value: '`Lydia` and `ReferenceError`' },
      { key: 'C', value: '`ReferenceError` and `21`' },
      { key: 'D', value: '`undefined` and `ReferenceError`' }
    ],
    answer: 'D',
    explanation: "Within the function, we first declare the `name` variable with the `var` keyword. This means that the variable gets hoisted (memory space is set up during the creation phase) with the default value of `undefined`, until we actually get to the line where we define the variable. We haven't defined the variable yet on the line where we try to log the `name` variable, so it still holds the value of `undefined`. Variables with the `let` keyword (and `const`) are hoisted, but unlike `var`, don't get <i>initialized</i>. They are not accessible before the line we declare (initialize) them. This is called the 'temporal dead zone'. When we try to access the variables before they are declared, JavaScript throws a `ReferenceError`.",
    slug: 'ao0bkb9tfz0md5a6cgm420zooqbscqtt'
  },
  {
    id: 2,
    question: "What's the output?",
    snippet: 'for (var i = 0; i < 3; i++) {\n' +
      '  setTimeout(() => console.log(i), 1);\n' +
      '}\n' +
      '\n' +
      'for (let i = 0; i < 3; i++) {\n' +
      '  setTimeout(() => console.log(i), 1);\n' +
      '}\n',
    choices: [
      { key: 'A', value: '`0 1 2` and `0 1 2`' },
      { key: 'B', value: '`0 1 2` and `3 3 3`' },
      { key: 'C', value: '`3 3 3` and `0 1 2`' }
    ],
    answer: 'C',
    explanation: 'Because of the event queue in JavaScript, the `setTimeout` callback function is called _after_ the loop has been executed. Since the variable `i` in the first loop was declared using the `var` keyword, this value was global. During the loop, we incremented the value of `i` by `1` each time, using the unary operator `++`. By the time the `setTimeout` callback function was invoked, `i` was equal to `3` in the first example. In the second loop, the variable `i` was declared using the `let` keyword: variables declared with the `let` (and `const`) keyword are block-scoped (a block is anything between `{ }`). During each iteration, `i` will have a new value, and each value is scoped inside the loop.',
    slug: 'udj7xnbi7eisnjjefxn0f0z7i93ex9ho'
  },
  {
    id: 3,
    question: "What's the output?",
    snippet: 'const shape = {\n' +
      '  radius: 10,\n' +
      '  diameter() {\n' +
      '    return this.radius * 2;\n' +
      '  },\n' +
      '  perimeter: () => 2 * Math.PI * this.radius\n' +
      '};\n' +
      '\n' +
      'console.log(shape.diameter());\n' +
      'console.log(shape.perimeter());',
    choices: [
      { key: 'A', value: '`20` and `62.83185307179586`' },
      { key: 'B', value: '`20` and `NaN`' },
      { key: 'C', value: '`20` and `63`' },
      { key: 'D', value: '`NaN` and `63`' }
    ],
    answer: 'B',
    explanation: "Note that the value of `diameter` is a regular function, whereas the value of `perimeter` is an arrow function. With arrow functions, the `this` keyword refers to its current surrounding scope, unlike regular functions! This means that when we call `perimeter`, it doesn't refer to the shape object, but to its surrounding scope (window for example). There is no value `radius` on that object, which returns `undefined`.",
    slug: 'g5f2jvog9cgc0myapqkmeyb5ddl5grry'
  },
  {
    id: 4,
    question: "What's the output?",
    snippet: "+true;\n!'Lydia'",
    choices: [
      { key: 'A', value: '`1` and `false`' },
      { key: 'B', value: '`false` and `NaN`' },
      { key: 'C', value: '`false` and `false`' }
    ],
    answer: 'A',
    explanation: "The unary plus tries to convert an operand to a number. `true` is `1`, and `false` is `0`. The string `'Lydia'` is a truthy value. What we're actually asking, is 'is this truthy value falsy?'. This returns `false`.",
    slug: '1rsnlqfufvrevbpl9ft6sr379jukfec2'
  },
  {
    id: 5,
    question: 'Which one is true?',
    snippet: 'const bird = {\n' +
      "  size: 'small'\n" +
      '};\n' +
      '\n' +
      'const mouse = {\n' +
      "  name: 'Mickey',\n" +
      'small: true\n' +
      '};',
    choices: [
      { key: 'A', value: '`mouse.bird.size` is not valid' },
      { key: 'B', value: '`mouse[bird.size]` is not valid' },
      { key: 'C', value: "`mouse[bird['size']]` is not valid" },
      { key: 'D', value: 'All of them are valid' }
    ],
    answer: 'A',
    explanation: "In JavaScript, all object keys are strings (unless it's a Symbol). Even though we might not _type_ them as strings, they are always converted into strings under the hood. JavaScript interprets (or unboxes) statements. When we use bracket notation, it sees the first opening bracket `[` and keeps going until it finds the closing bracket `]`. Only then, it will evaluate the statement. `mouse[bird.size]`: First it evaluates `bird.size`, which is `'small'`. `mouse['small']` returns `true` However, with dot notation, this doesn't happen. `mouse` does not have a key called `bird`, which means that `mouse.bird` is `undefined`. Then, we ask for the `size` using dot notation: `mouse.bird.size`. Since `mouse.bird` is `undefined`, we're actually asking `undefined.size`. This isn't valid, and will throw an error similar to `Cannot read property 'size' of undefined`.",
    slug: 'olwo153kqx8fo087uqcgbg2kpkupjs6b'
  },
  {
    id: 6,
    question: "What's the output?",
    snippet: "let c = { greeting: 'Hey!' };\n" +
      'let d;\n' +
      '\n' +
      'd = c;\n' +
      "c.greeting = 'Hello';\n" +
      'console.log(d.greeting);',
    choices: [
      { key: 'A', value: '`Hello`' },
      { key: 'B', value: 'Hey!' },
      { key: 'C', value: '`undefined`' },
      { key: 'D', value: '`ReferenceError`' },
      { key: 'E', value: '`TypeError`' }
    ],
    answer: 'A',
    explanation: 'In JavaScript, all objects interact by _reference_ when setting them equal to each other. First, variable `c` holds a value to an object. Later, we assign `d` with the same reference that `c` has to the object. When you change one object, you change all of them.',
    slug: 'hmpt9c304s6yaz7foare59d4swbd0dfe'
  },
  {
    id: 7,
    question: "What's the output?",
    snippet: 'let a = 3;\n' +
      'let b = new Number(3);\n' +
      'let c = 3;\n' +
      '\n' +
      'console.log(a == b);\n' +
      'console.log(a === b);\n' +
      'console.log(b === c);',
    choices: [
      { key: 'A', value: '`true` `false` `true`' },
      { key: 'B', value: '`false` `false` `true`' },
      { key: 'C', value: '`true` `false` `false`' },
      { key: 'D', value: '`false` `true` `true`' }
    ],
    answer: 'C',
    explanation: "`new Number()` is a built-in function constructor. Although it looks like a number, it's not really a number: it has a bunch of extra features and is an object. When we use the `==` operator, it only checks whether it has the same _value_. They both have the value of `3`, so it returns `true`.However, when we use the `===` operator, both value _and_ type should be the same. It's not: `new Number()` is not a number, it's an **object**. Both return `false.`",
    slug: 'lgsws7h2n34dzv0gr9hb4v60vrwsoe8y'
  },
  {
    id: 8,
    question: "What's the output?",
    snippet: 'class Chameleon {\n' +
      '  static colorChange(newColor) {\n' +
      '    this.newColor = newColor;\n' +
      '    return this.newColor;\n' +
      '  }\n' +
      '\n' +
      "  constructor({ newColor = 'green' } = {}) {\n" +
      '    this.newColor = newColor;\n' +
      '  }\n' +
      '}',
    choices: [
      { key: 'A', value: ' `orange`' },
      { key: 'B', value: ' `purple`' },
      { key: 'C', value: ' `green`' },
      { key: 'D', value: ' `TypeError`' }
    ],
    answer: 'D',
    explanation: 'The `colorChange` function is static. Static methods are designed to live only on the constructor in which they are created, and cannot be passed down to any children. Since `freddie` is a child, the function is not passed down, and not available on the `freddie` instance: a `TypeError` is thrown.',
    slug: '5gia58p4rjwiedw3lavsu7blth9vp9yd'
  },
  {
    id: 9,
    question: "What's the output?",
    snippet: 'let greeting;\ngreetign = {}; // Typo!\nconsole.log(greetign);',
    choices: [
      { key: 'A', value: '`{}`' },
      { key: 'B', value: '`ReferenceError: greetign is not defined`' },
      { key: 'C', value: '`undefined`' }
    ],
    answer: 'A',
    explanation: "It logs the object, because we just created an empty object on the global object! When we mistyped `greeting` as `greetign`, the JS interpreter actually saw this as `global.greetign = {}` (or `window.greetign = {}` in a browser). In order to avoid this, we can use `'use strict'`. This makes sure that you have declared a variable before setting it equal to anything.",
    slug: 'ekpmem28dtiru6neg8ymn47y74xebog8'
  },
  {
    id: 10,
    question: 'What happens when we do this?',
    snippet: "function bark() {\n  console.log('Woof!');\n}\n\nbark.animal = 'dog';",
    choices: [
      { key: 'A', value: 'Nothing, this is totally fine!' },
      {
        key: 'B',
        value: '`SyntaxError`. You cannot add properties to a function this way.'
      },
      { key: 'C', value: "`'Woof'` gets logged." },
      { key: 'D', value: '`ReferenceError`' }
    ],
    answer: 'A',
    explanation: "This is possible in JavaScript, because functions are objects! (Everything besides primitive types are objects). A function is a special type of object. The code you write yourself isn't the actual function. The function is an object with properties. This property is invocable.",
    slug: '0oeh9knwbe7fnw036so3u1i86ajzgf0u'
  },
  {
    id: 11,
    question: "What's the output?",
    snippet: 'function Person(firstName, lastName) {\n' +
      '  this.firstName = firstName;\n' +
      '  this.lastName = lastName;\n' +
      '}\n' +
      '\n' +
      "const member = new Person('Lydia', 'Hallie');\n" +
      'Person.getFullName = function() {\n' +
      '  return `${this.firstName} ${this.lastName}`;\n' +
      '};\n' +
      '\n' +
      'console.log(member.getFullName());',
    choices: [
      { key: 'A', value: '`TypeError`' },
      { key: 'B', value: '`SyntaxError`' },
      { key: 'C', value: '`Lydia Hallie`' },
      { key: 'D', value: '`undefined` `undefined`' }
    ],
    answer: 'A',
    explanation: " You can't add properties to a constructor like you can with regular objects. If you want to add a feature to all objects at once, you have to use the prototype instead. So in this case,```js Person.prototype.getFullName = function() {   return `${this.firstName} ${this.lastName}`; }; ``` would have made `member.getFullName()` work. Why is this beneficial? Say that we added this method to the constructor itself. Maybe not every `Person` instance needed this method. This would waste a lot of memory space, since they would still have that property, which takes of memory space for each instance. Instead, if we only add it to the prototype, we just have it at one spot in memory, yet they all have access to it!",
    slug: 'm44gv7lvvlrm0ti9eajrlv88e7x0dq45'
  },
  {
    id: 12,
    question: "What's the output?",
    snippet: 'function Person(firstName, lastName) {\n' +
      '  this.firstName = firstName;\n' +
      '  this.lastName = lastName;\n' +
      '}\n' +
      '\n' +
      "const lydia = new Person('Lydia', 'Hallie');\n" +
      "const sarah = Person('Sarah', 'Smith');\n" +
      '\n' +
      'console.log(lydia);\n' +
      'console.log(sarah);',
    choices: [
      {
        key: 'A',
        value: " `Person {firstName: 'Lydia', lastName: 'Hallie'}` and `undefined`"
      },
      {
        key: 'B',
        value: " `Person {firstName: 'Lydia', lastName: 'Hallie'}` and `Person {firstName: 'Sarah', lastName: 'Smith'}`"
      },
      {
        key: 'C',
        value: " `Person {firstName: 'Lydia', lastName: 'Hallie'}` and `{}`"
      },
      {
        key: 'D',
        value: "`Person {firstName: 'Lydia', lastName: 'Hallie'}` and `ReferenceError`"
      }
    ],
    answer: 'A',
    explanation: "For `sarah`, we didn't use the `new` keyword. When using `new`, it refers to the new empty object we create. However, if you don't add `new` it refers to the **global object**! We said that `this.firstName` equals `'Sarah'` and `this.lastName` equals `'Smith'`. What we actually did, is defining `global.firstName = 'Sarah'` and `global.lastName = 'Smith'`. `sarah` itself is left `undefined`, since we don't return a value from the `Person` function.",
    slug: 'vq3mc7m8qlxi746p6coltjmdz6ci9rk9'
  },
  {
    id: 13,
    question: 'What are the three phases of event propagation?',
    snippet: '',
    choices: [
      { key: 'A', value: 'Target > Capturing > Bubbling' },
      { key: 'B', value: 'Bubbling > Target > Capturing' },
      { key: 'C', value: 'Target > Bubbling > Capturing' },
      { key: 'D', value: 'Capturing > Target > Bubbling' }
    ],
    answer: 'D',
    explanation: 'During the **capturing** phase, the event goes through the ancestor elements down to the target element. It then reaches the **target** element, and **bubbling** begins.',
    slug: 'c7n6hehplyzndnxo7dm8mt6burf9toyz'
  },
  {
    id: 14,
    question: 'All object have prototypes.',
    snippet: '',
    choices: [ { key: 'A', value: 'True' }, { key: 'B', value: 'False' } ],
    answer: 'B',
    explanation: "All objects have prototypes, except for the **base object**. The base object is the object created by the user, or an object that is created using the `new` keyword. The base object has access to some methods and properties, such as `.toString`. This is the reason why you can use built-in JavaScript methods! All of such methods are available on the prototype. Although JavaScript can't find it directly on your object, it goes down the prototype chain and finds it there, which makes it accessible for you.",
    slug: 'obxj274pdz2su2vd71jw0jdtu77zbj4a'
  },
  {
    id: 15,
    question: "What's the output?",
    snippet: "function sum(a, b) {\n  return a + b;\n}\n\nsum(1, '2');",
    choices: [
      { key: 'A', value: '`NaN`' },
      { key: 'B', value: '`TypeError`' },
      { key: 'C', value: "`'12'`" },
      { key: 'D', value: '`3`' }
    ],
    answer: 'C',
    explanation: "JavaScript is a **dynamically typed language**: we don't specify what types certain variables are. Values can automatically be converted into another type without you knowing, which is called _implicit type coercion_. **Coercion** is converting from one type into another. In this example, JavaScript converts the number `1` into a string, in order for the function to make sense and return a value. During the addition of a numeric type (`1`) and a string type (`'2'`), the number is treated as a string. We can concatenate strings like `'Hello' + 'World'`, so what's happening here is `'1' + '2'` which returns `'12'`.",
    slug: '85vsyvon6w96r1u4zmhswt1th301zu0h'
  },
  {
    id: 16,
    question: "What's the output?",
    snippet: 'let number = 0;\n' +
      'console.log(number++);\n' +
      'console.log(++number);\n' +
      'console.log(number);',
    choices: [
      { key: 'A', value: '`1` `1` `2`' },
      { key: 'B', value: '`1` `2` `2`' },
      { key: 'C', value: '`0` `2` `2`' },
      { key: 'D', value: '`0` `1` `2`' }
    ],
    answer: 'C',
    explanation: 'The **postfix** unary operator `++`: \n' +
      '\n' +
      '1. Returns the value (this returns `0`)\n' +
      '2. Increments the value (number is now `1`) \n' +
      '\n' +
      'The **prefix** unary operator `++`:\n' +
      ' 1. Increments the value (number is now `2`)\n' +
      ' 2. Returns the value (this returns `2`)\n' +
      ' This returns `0 2 2`.',
    slug: '639t1o9h33dijl7frpnzxib174esb60j'
  },
  {
    id: 17,
    question: "What's the output?",
    snippet: 'function getPersonInfo(one, two, three) {\n' +
      '  console.log(one);\n' +
      '  console.log(two);\n' +
      '  console.log(three);\n' +
      '}\n' +
      '\n' +
      "const person = 'Lydia';\n" +
      'const age = 21;\n' +
      '\n' +
      'getPersonInfo`${person} is ${age} years old`;',
    choices: [
      { key: 'A', value: "`'Lydia'` `21` `[', ' is ', ' years old']`" },
      { key: 'B', value: "`[', ' is ', ' years old']` `'Lydia'` `21`" },
      { key: 'C', value: "`'Lydia'` `[', ' is ', ' years old']` `21`" }
    ],
    answer: 'B',
    explanation: 'If you use tagged template literals, the value of the first argument is always an array of the string values. The remaining arguments get the values of the passed expressions!',
    slug: 'kfp0o63y96du7arqq1lh9o7tbj8gx76u'
  },
  {
    id: 18,
    question: "What's the output?",
    snippet: 'function checkAge(data) {\n' +
      '  if (data === { age: 18 }) {\n' +
      "    console.log('You are an adult!');\n" +
      '  } else if (data == { age: 18 }) {\n' +
      "    console.log('You are still an adult.');\n" +
      '  } else {\n' +
      "    console.log(`Hmm.. You don't have an age I guess`);\n" +
      '  }\n' +
      '}\n' +
      '\n' +
      'checkAge({ age: 18 });',
    choices: [
      { key: 'A', value: '`You are an adult!`' },
      { key: 'B', value: '`You are still an adult.`' },
      { key: 'C', value: "`Hmm.. You don't have an age I guess`" }
    ],
    answer: 'C',
    explanation: "When testing equality, primitives are compared by their _value_, while objects are compared by their _reference_. JavaScript checks if the objects have a reference to the same location in memory. The two objects that we are comparing don't have that: the object we passed as a parameter refers to a different location in memory than the object we used in order to check equality. This is why both `{ age: 18 } === { age: 18 }` and `{ age: 18 } == { age: 18 }` return `false`.",
    slug: 'orm98mqxc0i2jwf4b9x68spio2bn912n'
  },
  {
    id: 19,
    question: "What's the output?",
    snippet: 'function getAge(...args) {\n  console.log(typeof args);\n}\n\ngetAge(21);',
    choices: [
      { key: 'A', value: "`'number'`" },
      { key: 'B', value: "`'array'`" },
      { key: 'C', value: "`'object'`" },
      { key: 'D', value: "`'NaN'`" }
    ],
    answer: 'C',
    explanation: "The rest parameter (`...args`.) lets us 'collect' all remaining arguments into an array. An array is an object, so `typeof args` returns `'object'`",
    slug: 'huzfludpklfoqqilla3zc37725xxym2i'
  },
  {
    id: 20,
    question: "What's the output?",
    snippet: 'function getAge() {\n' +
      "  'use strict';\n" +
      '  age = 21;\n' +
      '  console.log(age);\n' +
      '}\n' +
      '\n' +
      'getAge();',
    choices: [
      { key: 'A', value: '`21`' },
      { key: 'B', value: '`undefined`' },
      { key: 'C', value: '`ReferenceError`' },
      { key: 'D', value: '`TypeError`' }
    ],
    answer: 'C',
    explanation: "With `'use strict'`, you can make sure that you don't accidentally declare global variables. We never declared the variable `age`, and since we use `'use strict'`, it will throw a reference error. If we didn't use `'use strict'`, it would have worked, since the property `age` would have gotten added to the global object.",
    slug: 'q9onvuzx0z6vyjahb0j549mo0ykp3j6s'
  },
  {
    id: 21,
    question: "What's value of `sum`?",
    snippet: "const sum = eval('10*10+5');",
    choices: [
      { key: 'A', value: '`105`' },
      { key: 'B', value: "`'105'`" },
      { key: 'C', value: '`TypeError`' },
      { key: 'D', value: "`'10*10+5'`" }
    ],
    answer: 'A',
    explanation: "`eval` evaluates codes that's passed as a string. If it's an expression, like in this case, it evaluates the expression. The expression is `10 * 10 + 5`. This returns the number `105`.",
    slug: 'w4clszc1tiuhecivzm90vq4inxhh2x8d'
  },
  {
    id: 22,
    question: 'How long is cool_secret accessible?',
    snippet: "sessionStorage.setItem('cool_secret', 123);",
    choices: [
      { key: 'A', value: "Forever, the data doesn't get lost." },
      { key: 'B', value: 'When the user closes the tab.' },
      {
        key: 'C',
        value: 'When the user closes the entire browser, not only the tab.'
      },
      { key: 'D', value: 'When the user shuts off their computer.' }
    ],
    answer: 'B',
    explanation: "The data stored in `sessionStorage` is removed after closing the _tab_. If you used `localStorage`, the data would've been there forever, unless for example `localStorage.clear()` is invoked.",
    slug: 'y7ycinbboqmmieqag4ojb9gqdqv80xa3'
  },
  {
    id: 23,
    question: "What's the output?",
    snippet: 'var num = 8;\nvar num = 10;\n\nconsole.log(num);',
    choices: [
      { key: 'A', value: '`8`' },
      { key: 'B', value: '`10`' },
      { key: 'C', value: '`SyntaxError`' },
      { key: 'D', value: '`ReferenceError`' }
    ],
    answer: 'B',
    explanation: "With the `var` keyword, you can declare multiple variables with the same name. The variable will then hold the latest value. You cannot do this with `let` or `const` since they're block-scoped.",
    slug: '4mjp9r39mh7s6l77ak3megvy2uca9s4p'
  },
  {
    id: 24,
    question: "What's the output?",
    snippet: "const obj = { 1: 'a', 2: 'b', 3: 'c' };\n" +
      'const set = new Set([1, 2, 3, 4, 5]);\n' +
      '\n' +
      "obj.hasOwnProperty('1');\n" +
      'obj.hasOwnProperty(1);\n' +
      "set.has('1');\n" +
      'set.has(1);',
    choices: [
      { key: 'A', value: '`false` `true` `false` `true`' },
      { key: 'B', value: '`false` `true` `true` `true`' },
      { key: 'C', value: '`true` `true` `false` `true`' },
      { key: 'D', value: '`true` `true` `true` `true`' }
    ],
    answer: 'C',
    explanation: "All object keys (excluding Symbols) are strings under the hood, even if you don't type it yourself as a string. This is why `obj.hasOwnProperty('1')` also returns true. It doesn't work that way for a set. There is no `'1'` in our set: `set.has('1')` returns `false`. It has the numeric type `1`, `set.has(1)` returns `true`.",
    slug: 'h85i5tjmeecbtlevnbt7kv1xckj2qa5a'
  },
  {
    id: 25,
    question: "What's the output?",
    snippet: "const obj = { a: 'one', b: 'two', a: 'three' };\nconsole.log(obj);",
    choices: [
      { key: 'A', value: "`{ a: 'one', b: 'two' }`" },
      { key: 'B', value: "`{ b: 'two', a: 'three' }`" },
      { key: 'C', value: "`{ a: 'three', b: 'two' }`" },
      { key: 'D', value: '`SyntaxError`' }
    ],
    answer: 'C',
    explanation: 'If you have two keys with the same name, the key will be replaced. It will still be in its first position, but with the last specified value.',
    slug: 'g3z2nai20f4lnz8tr1zrpke4cv3t9scs'
  },
  {
    id: 26,
    question: "The JavaScript global execution context creates two things for you: the global object, and the 'this' keyword.",
    snippet: '',
    choices: [
      { key: 'A', value: 'true' },
      { key: 'B', value: 'false' },
      { key: 'C', value: 'it depends' }
    ],
    answer: 'A',
    explanation: "The base execution context is the global execution context: it's what's accessible everywhere in your code.",
    slug: 'l5pjjnjycz1jlfulwfkltarlzrqxps90'
  },
  {
    id: 27,
    question: "What's the output?",
    snippet: 'for (let i = 1; i < 5; i++) {\n' +
      '  if (i === 3) continue;\n' +
      '  console.log(i);\n' +
      '}',
    choices: [
      { key: 'A', value: '`1` `2`' },
      { key: 'B', value: '`1` `2` `3`' },
      { key: 'C', value: '`1` `2` `4`' },
      { key: 'D', value: '`1` `3` `4`' }
    ],
    answer: 'C',
    explanation: 'The `continue` statement skips an iteration if a certain condition returns `true`.',
    slug: 'mv8ebdefe39byqkyaztvm1m7f8crtd7c'
  },
  {
    id: 28,
    question: "What's the output?",
    snippet: 'String.prototype.giveLydiaPizza = () => {\n' +
      "  return 'Just give Lydia pizza already!';\n" +
      '};\n' +
      '\n' +
      "const name = 'Lydia';\n" +
      '\n' +
      'name.giveLydiaPizza();',
    choices: [
      { key: 'A', value: "`'Just give Lydia pizza already!'`" },
      { key: 'B', value: '`TypeError: not a function`' },
      { key: 'C', value: '`SyntaxError`' },
      { key: 'D', value: '`undefined`' }
    ],
    answer: 'A',
    explanation: '`String` is a built-in constructor, which we can add properties to. I just added a method to its prototype. Primitive strings are automatically converted into a string object, generated by the string prototype function. So, all strings (string objects) have access to that method!',
    slug: '6vmfc7ql2cjqh4uh8slom2pi5g3pg5d5'
  },
  {
    id: 29,
    question: "What's the output?",
    snippet: 'const a = {};\n' +
      "const b = { key: 'b' };\n" +
      "const c = { key: 'c' };\n" +
      '\n' +
      'a[b] = 123;\n' +
      'a[c] = 456;\n' +
      '\n' +
      'console.log(a[b]);',
    choices: [
      { key: 'A', value: '`123`' },
      { key: 'B', value: '`456`' },
      { key: 'C', value: '`undefined`' },
      { key: 'D', value: '`ReferenceError`' }
    ],
    answer: 'B',
    explanation: "Object keys are automatically converted into strings. We are trying to set an object as a key to object `a`, with the value of `123`. However, when we stringify an object, it becomes `'[object Object]'`. So what we are saying here, is that `a['object Object'] = 123`. Then, we can try to do the same again. `c` is another object that we are implicitly stringifying. So then, `a['object Object'] = 456`. Then, we log `a[b]`, which is actually `a['object Object']`. We just set that to `456`, so it returns `456`.",
    slug: 'z557lfh2lctsdpq0ymyx425yuy9vdvja'
  },
  {
    id: 30,
    question: "What's the output?",
    snippet: "const foo = () => console.log('First');\n" +
      "const bar = () => setTimeout(() => console.log('Second'));\n" +
      "const baz = () => console.log('Third');\n" +
      '\n' +
      'bar();\n' +
      'foo();\n' +
      'baz();',
    choices: [
      { key: 'A', value: '`First` `Second` `Third`' },
      { key: 'B', value: '`First` `Third` `Second`' },
      { key: 'C', value: '`Second` `First` `Third`' },
      { key: 'D', value: '`Second` `Third` `First`' }
    ],
    answer: 'B',
    explanation: "We have a `setTimeout` function and invoked it first. Yet, it was logged last. This is because in browsers, we don't just have the runtime engine, we also have something called a `WebAPI`. The `WebAPI` gives us the `setTimeout` function to start with, and for example the DOM. After the _callback_ is pushed to the WebAPI, the `setTimeout` function itself (but not the callback!) is popped off the stack. <img src='https://i.imgur.com/X5wsHOg.png' width='200'> Now, `foo` gets invoked, and `'First'` is being logged. <img src='https://i.imgur.com/Pvc0dGq.png' width='200'> `foo` is popped off the stack, and `baz` gets invoked. `'Third'` gets logged. <img src='https://i.imgur.com/WhA2bCP.png' width='200'> The WebAPI can't just add stuff to the stack whenever it's ready. Instead, it pushes the callback function to something called the _queue_. <img src='https://i.imgur.com/NSnDZmU.png' width='200'> This is where an event loop starts to work. An **event loop** looks at the stack and task queue. If the stack is empty, it takes the first thing on the queue and pushes it onto the stack. `bar` gets invoked, `'Second'` gets logged, and it's popped off the stack.",
    slug: 'jzg5k28x1e2odf4f3m3ol24c4cwujxv4'
  },
  {
    id: 31,
    question: 'What is the event.target when clicking the button?',
    snippet: "<div onclick='console.log('first div')'>\n" +
      "  <div onclick='console.log('second div')'>\n" +
      "    <button onclick='console.log('button')'>\n" +
      '      Click!\n' +
      '    </button>\n' +
      '  </div>\n' +
      '</div>',
    choices: [
      { key: 'A', value: 'Outer `div`' },
      { key: 'B', value: 'Inner `div`' },
      { key: 'C', value: '`button`' },
      { key: 'D', value: 'An array of all nested elements.' }
    ],
    answer: 'C',
    explanation: 'The deepest nested element that caused the event is the target of the event. You can stop bubbling by `event.stopPropagation`',
    slug: 'gfv48v7k7ur91w09m6gwqo8dd2kx3vki'
  },
  {
    id: 32,
    question: "When you click the paragraph, what's the logged output?",
    snippet: "<div onclick='console.log('div')'>\n" +
      "  <p onclick='console.log('p')'>\n" +
      '  Click here!\n' +
      '  </p>\n' +
      '</div>',
    choices: [
      { key: 'A', value: '`p` `div`' },
      { key: 'B', value: '`div` `p`' },
      { key: 'C', value: '`p`' },
      { key: 'D', value: '`div`' }
    ],
    answer: 'A',
    explanation: 'If we click `p`, we see two logs: `p` and `div`. During event propagation, there are 3 phases: capturing, target, and bubbling. By default, event handlers are executed in the bubbling phase (unless you set `useCapture` to `true`). It goes from the deepest nested element outwards.',
    slug: 'irpoghn4rxtpusjxznbjsakl4ufzgjd3'
  },
  {
    id: 33,
    question: "What's the output?",
    snippet: "const person = { name: 'Lydia' };\n" +
      '\n' +
      'function sayHi(age) {\n' +
      '  return `${this.name} is ${age}`;\n' +
      '}\n' +
      '\n' +
      'console.log(sayHi.call(person, 21));\n' +
      'console.log(sayHi.bind(person, 21));',
    choices: [
      { key: 'A', value: '`undefined is 21` `Lydia is 21`' },
      { key: 'B', value: '`function` `function`' },
      { key: 'C', value: '`Lydia is 21` `Lydia is 21`' },
      { key: 'D', value: '`Lydia is 21` `function`' }
    ],
    answer: 'D',
    explanation: 'With both, we can pass the object to which we want the `this` keyword to refer to. However, `.call` is also _executed immediately_! `.bind.` returns a _copy_ of the function, but with a bound context! It is not executed immediately.',
    slug: 'h1oawn27v71su13fs0uklj2pbv94z5h8'
  },
  {
    id: 34,
    question: "What's the output?",
    snippet: 'function sayHi() {\n  return (() => 0)();\n}\n\nconsole.log(typeof sayHi());',
    choices: [
      { key: 'A', value: "`'object'`" },
      { key: 'B', value: "`'number'`" },
      { key: 'C', value: "`'function'`" },
      { key: 'D', value: "`'undefined'`" }
    ],
    answer: 'B',
    explanation: "The `sayHi` function returns the returned value of the immediately invoked function (IIFE). This function returned `0`, which is type `'number'`. FYI: there are only 7 built-in types: `null`, `undefined`, `boolean`, `number`, `string`, `object`, and `symbol`. `'function'` is not a type, since functions are objects, it's of type `'object'`.",
    slug: 'qxlyywhlj42980n4c34y3415g3hi77tn'
  },
  {
    id: 35,
    question: 'Which of these values are falsy?',
    snippet: "0;\nnew Number(0);\n(');\n(' ');\nnew Boolean(false);\nundefined;",
    choices: [
      { key: 'A', value: "`0`, `''`, `undefined`" },
      {
        key: 'B',
        value: "`0`, `new Number(0)`, `''`, `new Boolean(false)`, `undefined`"
      },
      {
        key: 'C',
        value: "`0`, `''`, `new Boolean(false)`, `undefined`"
      },
      { key: 'D', value: 'All of them are falsy' }
    ],
    answer: 'A',
    explanation: 'There are only six falsy values: \n' +
      '- `undefined`\n' +
      '- `null`\n' +
      '- `NaN`\n' +
      '- `0`\n' +
      "- `''` (empty string)\n" +
      '- `false` \n' +
      ' Function constructors, like `new Number` and `new Boolean` are truthy.',
    slug: 'ocd2swcf4xe49xi2bnqo79qoht3lg86b'
  },
  {
    id: 36,
    question: "What's the output?",
    snippet: 'console.log(typeof typeof 1);',
    choices: [
      { key: 'A', value: "`'number'`" },
      { key: 'B', value: "`'string'`" },
      { key: 'C', value: "`'object'`" },
      { key: 'D', value: "`'undefined'`" }
    ],
    answer: 'B',
    explanation: "`typeof 1` returns `'number'`. `typeof 'number'` returns `'string'`",
    slug: 'rc64vb8ih3u7gkmfb066sc7bzlkfy4x5'
  },
  {
    id: 37,
    question: "What's the output?",
    snippet: 'const numbers = [1, 2, 3];\nnumbers[10] = 11;\nconsole.log(numbers);',
    choices: [
      { key: 'A', value: '`[1, 2, 3, 7 x null, 11]`' },
      { key: 'B', value: '`[1, 2, 3, 11]`' },
      { key: 'C', value: '`[1, 2, 3, 7 x empty, 11]`' },
      { key: 'D', value: '`SyntaxError`' }
    ],
    answer: 'C',
    explanation: "When you set a value to an element in an array that exceeds the length of the array, JavaScript creates something called 'empty slots'. These actually have the value of `undefined`, but you will see something like: `[1, 2, 3, 7 x empty, 11]` depending on where you run it (it's different for every browser, node, etc.)",
    slug: '7wp768ma86r7ncv391h53oa3vhgs485j'
  },
  {
    id: 38,
    question: "What's the output?",
    snippet: '(() => {\n' +
      '  let x, y;\n' +
      '  try {\n' +
      '    throw new Error();\n' +
      '  } catch (x) {\n' +
      '    (x = 1), (y = 2);\n' +
      '    console.log(x);\n' +
      '  }\n' +
      '  console.log(x);\n' +
      '  console.log(y);\n' +
      '})();',
    choices: [
      { key: 'A', value: '`1` `undefined` `2`' },
      { key: 'B', value: '`undefined` `undefined` `undefined`' },
      { key: 'C', value: '`1` `1` `2`' },
      { key: 'D', value: '`1` `undefined` `undefined`' }
    ],
    answer: 'A',
    explanation: 'The `catch` block receives the argument `x`. This is not the same `x` as the variable when we pass arguments. This variable `x` is block-scoped. Later, we set this block-scoped variable equal to `1`, and set the value of the variable `y`. Now, we log the block-scoped variable `x`, which is equal to `1`. Outside of the `catch` block, `x` is still `undefined`, and `y` is `2`. When we want to `console.log(x)` outside of the `catch` block, it returns `undefined`, and `y` returns `2`.',
    slug: 'de820ont8hfbwz163oecuwrbc91gqedr'
  },
  {
    id: 39,
    question: 'Everything in JavaScript is either a...',
    snippet: '',
    choices: [
      { key: 'A', value: 'primitive or object' },
      { key: 'B', value: 'function or object' },
      { key: 'C', value: 'trick question! only objects' },
      { key: 'D', value: 'number or object' }
    ],
    answer: 'A',
    explanation: "JavaScript only has primitive types and objects. Primitive types are `boolean`, `null`, `undefined`, `bigint`, `number`, `string`, and `symbol`. What differentiates a primitive from an object is that primitives do not have any properties or methods; however, you'll note that `'foo'.toUpperCase()` evaluates to `'FOO'` and does not result in a `TypeError`. This is because when you try to access a property or method on a primitive like a string, JavaScript will implicitly wrap the object using one of the wrapper classes, i.e. `String`, and then immediately discard the wrapper after the expression evaluates. All primitives except for `null` and `undefined` exhibit this behaviour.",
    slug: 'us65rauej5gw8va113jx4r3syyuu2116'
  },
  {
    id: 40,
    question: "What's the output?",
    snippet: '[[0, 1], [2, 3]].reduce(\n' +
      '  (acc, cur) => {\n' +
      '    return acc.concat(cur);\n' +
      '  },\n' +
      '  [1, 2]\n' +
      ');',
    choices: [
      { key: 'A', value: '`[0, 1, 2, 3, 1, 2]`' },
      { key: 'B', value: '`[6, 1, 2]`' },
      { key: 'C', value: '`[1, 2, 0, 1, 2, 3]`' },
      { key: 'D', value: '`[1, 2, 6]`' }
    ],
    answer: 'C',
    explanation: '`[1, 2]` is our initial value. This is the value we start with, and the value of the very first `acc`. During the first round, `acc` is `[1,2]`, and `cur` is `[0, 1]`. We concatenate them, which results in `[1, 2, 0, 1]`. Then, `[1, 2, 0, 1]` is `acc` and `[2, 3]` is `cur`. We concatenate them, and get `[1, 2, 0, 1, 2, 3]`',
    slug: '7022e3cwi2xwk7xz1i9fa3269vyvh1cp'
  },
  {
    id: 41,
    question: "What's the output?",
    snippet: "!!null;\n!!';\n!!1;",
    choices: [
      { key: 'A', value: '`false` `true` `false`' },
      { key: 'B', value: '`false` `false` `true`' },
      { key: 'C', value: '`false` `true` `true`' },
      { key: 'D', value: '`true` `true` `false`' }
    ],
    answer: 'B',
    explanation: "`null` is falsy. `!null` returns `true`. `!true` returns `false`. `'` is falsy. `!'` returns `true`. `!true` returns `false`. `1` is truthy. `!1` returns `false`. `!false` returns `true`.",
    slug: 'su3lccnexkkpnv13qddyf4ojm4lw9fmw'
  },
  {
    id: 42,
    question: 'What does the `setInterval` method return in the browser?',
    snippet: "setInterval(() => console.log('Hi'), 1000);",
    choices: [
      { key: 'A', value: 'a unique id' },
      { key: 'B', value: 'the amount of milliseconds specified' },
      { key: 'C', value: 'the passed function' },
      { key: 'D', value: '`undefined`' }
    ],
    answer: 'A',
    explanation: 'It returns a unique id. This id can be used to clear that interval with the `clearInterval()` function.',
    slug: 'nx0i22t8hbmvyvs9g7uoua4d9hop5sm4'
  },
  {
    id: 43,
    question: 'What does this return?',
    snippet: "[...'Lydia'];",
    choices: [
      { key: 'A', value: "`['L', 'y', 'd', 'i', 'a']`" },
      { key: 'B', value: "`['Lydia']`" },
      { key: 'C', value: "`[[], 'Lydia']`" },
      { key: 'D', value: "`[['L', 'y', 'd', 'i', 'a']]`" }
    ],
    answer: 'A',
    explanation: 'A string is an iterable. The spread operator maps every character of an iterable to one element.',
    slug: '0u00ir5f1fd12dxattsc7p4zbbjdxlof'
  },
  {
    id: 44,
    question: "What's the output?",
    snippet: 'function* generator(i) {\n' +
      '  yield i;\n' +
      '  yield i * 2;\n' +
      '}\n' +
      '\n' +
      'const gen = generator(10);\n' +
      '\n' +
      'console.log(gen.next().value);\n' +
      'console.log(gen.next().value);',
    choices: [
      { key: 'A', value: '`[0, 10], [10, 20]`' },
      { key: 'B', value: '`20, 20`' },
      { key: 'C', value: '`10, 20`' },
      { key: 'D', value: '`0, 10 and 10, 20`' }
    ],
    answer: 'C',
    explanation: "Regular functions cannot be stopped mid-way after invocation. However, a generator function can be 'stopped' midway, and later continue from where it stopped. Every time a generator function encounters a `yield` keyword, the function yields the value specified after it. Note that the generator function in that case doesn’t _return_ the value, it _yields_ the value. First, we initialize the generator function with `i` equal to `10`. We invoke the generator function using the `next()` method. The first time we invoke the generator function, `i` is equal to `10`. It encounters the first `yield` keyword: it yields the value of `i`. The generator is now 'paused', and `10` gets logged. Then, we invoke the function again with the `next()` method. It starts to continue where it stopped previously, still with `i` equal to `10`. Now, it encounters the next `yield` keyword, and yields `i * 2`. `i` is equal to `10`, so it returns `10 * 2`, which is `20`. This results in `10, 20`.",
    slug: '8zmoa88bf4hj3qh8yaptymzjkbxk1k03'
  },
  {
    id: 45,
    question: 'What does this return?',
    snippet: 'const firstPromise = new Promise((res, rej) => {\n' +
      "  setTimeout(res, 500, 'one');\n" +
      '});\n' +
      '\n' +
      'const secondPromise = new Promise((res, rej) => {\n' +
      "  setTimeout(res, 100, 'two');\n" +
      '});\n' +
      '\n' +
      'Promise.race([firstPromise, secondPromise]).then(res => console.log(res));',
    choices: [
      { key: 'A', value: "`'one'`" },
      { key: 'B', value: "`'two'`" },
      { key: 'C', value: "`'two' 'one'`" },
      { key: 'D', value: "`'one' 'two'`" }
    ],
    answer: 'B',
    explanation: "When we pass multiple promises to the `Promise.race` method, it resolves/rejects the _first_ promise that resolves/rejects. To the `setTimeout` method, we pass a timer: 500ms for the first promise (`firstPromise`), and 100ms for the second promise (`secondPromise`). This means that the `secondPromise` resolves first with the value of `'two'`. `res` now holds the value of `'two'`, which gets logged.",
    slug: '5ck51d1vp6sltsy0209818vekyod3oew'
  },
  {
    id: 46,
    question: "What's the output?",
    snippet: "let person = { name: 'Lydia' };\n" +
      'const members = [person];\n' +
      'person = null;\n' +
      '\n' +
      'console.log(members);',
    choices: [
      { key: 'A', value: '`null`' },
      { key: 'B', value: '`[null]`' },
      { key: 'C', value: '`[{}]`' },
      { key: 'D', value: "`[{ name: 'Lydia' }]`" }
    ],
    answer: 'D',
    explanation: "First, we declare a variable `person` with the value of an object that has a `name` property. <img src='https://i.imgur.com/TML1MbS.png' width='200'> Then, we declare a variable called `members`. We set the first element of that array equal to the value of the `person` variable. Objects interact by _reference_ when setting them equal to each other. When you assign a reference from one variable to another, you make a _copy_ of that reference. (note that they don't have the _same_ reference!) <img src='https://i.imgur.com/FSG5K3F.png' width='300'> Then, we set the variable `person` equal to `null`. <img src='https://i.imgur.com/sYjcsMT.png' width='300'> We are only modifying the value of the `person` variable, and not the first element in the array, since that element has a different (copied) reference to the object. The first element in `members` still holds its reference to the original object. When we log the `members` array, the first element still holds the value of the object, which gets logged.",
    slug: '60xa2kwda0wuklcsa5wkdynu9h5t914l'
  },
  {
    id: 47,
    question: "What's the output?",
    snippet: 'const person = {\n' +
      "  name: 'Lydia',\n" +
      '  age: 21\n' +
      '};\n' +
      '\n' +
      'for (const item in person) {\n' +
      '  console.log(item);\n' +
      '}',
    choices: [
      { key: 'A', value: "`{ name: 'Lydia' }, { age: 21 }`" },
      { key: 'B', value: "`'name', 'age'`" },
      { key: 'C', value: "`'Lydia', 21`" },
      { key: 'D', value: "`['name', 'Lydia'], ['age', 21]`" }
    ],
    answer: 'B',
    explanation: "With a `for-in` loop, we can iterate through object keys, in this case `name` and `age`. Under the hood, object keys are strings (if they're not a Symbol). On every loop, we set the value of `item` equal to the current key it’s iterating over. First, `item` is equal to `name`, and gets logged. Then, `item` is equal to `age`, which gets logged.",
    slug: '1b8ucimoctsubo4xqqfirm1ohc7fa95y'
  },
  {
    id: 48,
    question: "What's the output?",
    snippet: "console.log(3 + 4 + '5');",
    choices: [
      { key: 'A', value: "`'345'`" },
      { key: 'B', value: "`'75'`" },
      { key: 'C', value: '`12`' },
      { key: 'D', value: "`'12'`" }
    ],
    answer: 'B',
    explanation: "Operator associativity is the order in which the compiler evaluates the expressions, either left-to-right or right-to-left. This only happens if all operators have the _same_ precedence. We only have one type of operator: `+`. For addition, the associativity is left-to-right. `3 + 4` gets evaluated first. This results in the number `7`. `7 + '5'` results in `'75'` because of coercion. JavaScript converts the number `7` into a string, see question 15. We can concatenate two strings using the `+`operator. `'7' + '5'` results in `'75'`.",
    slug: 'p2rib3qe19l33gozmto9a8e2xxdrf8yb'
  },
  {
    id: 49,
    question: "What's the value of `num`?",
    snippet: "const num = parseInt('7*6', 10);",
    choices: [
      { key: 'A', value: '`42`' },
      { key: 'B', value: "`'42'`" },
      { key: 'C', value: '`7`' },
      { key: 'D', value: '`NaN`' }
    ],
    answer: 'C',
    explanation: "Only the first numbers in the string is returned. Based on the _radix_ (the second argument in order to specify what type of number we want to parse it to: base 10, hexadecimal, octal, binary, etc.), the `parseInt` checks whether the characters in the string are valid. Once it encounters a character that isn't a valid number in the radix, it stops parsing and ignores the following characters. `*` is not a valid number. It only parses `'7'` into the decimal `7`. `num` now holds the value of `7`.",
    slug: 'sq5d24a0nzm57ah99uagyt5jmn2u0mru'
  },
  {
    id: 50,
    question: "What's the output?",
    snippet: '[1, 2, 3].map(num => {\n' +
      "  if (typeof num === 'number') return;\n" +
      '  return num * 2;\n' +
      '});',
    choices: [
      { key: 'A', value: '`[]`' },
      { key: 'B', value: '`[null, null, null]`' },
      { key: 'C', value: '`[undefined, undefined, undefined]`' },
      { key: 'D', value: '`[ 3 x empty ]`' }
    ],
    answer: 'C',
    explanation: "When mapping over the array, the value of `num` is equal to the element it’s currently looping over. In this case, the elements are numbers, so the condition of the if statement `typeof num === 'number'` returns `true`. The map function creates a new array and inserts the values returned from the function. However, we don’t return a value. When we don’t return a value from the function, the function returns `undefined`. For every element in the array, the function block gets called, so for each element we return `undefined`.",
    slug: '77lld896bjwu6u37mat7qun3wtu5dimm'
  },
  {
    id: 51,
    question: "What's the output?",
    snippet: 'function getInfo(member, year) {\n' +
      "  member.name = 'Lydia';\n" +
      "  year = '1998';\n" +
      '}\n' +
      '\n' +
      "const person = { name: 'Sarah' };\n" +
      "const birthYear = '1997';\n" +
      '\n' +
      'getInfo(person, birthYear);\n' +
      '\n' +
      'console.log(person, birthYear);',
    choices: [
      { key: 'A', value: "`{ name: 'Lydia' }, '1997'`" },
      { key: 'B', value: "`{ name: 'Sarah' }, '1998'`" },
      { key: 'C', value: "`{ name: 'Lydia' }, '1998'`" },
      { key: 'D', value: "`{ name: 'Sarah' }, '1997'`" }
    ],
    answer: 'A',
    explanation: "Arguments are passed by _value_, unless their value is an object, then they're passed by _reference_. `birthYear` is passed by value, since it's a string, not an object. When we pass arguments by value, a _copy_ of that value is created (see question 46). The variable `birthYear` has a reference to the value `'1997'`. The argument `year` also has a reference to the value `'1997'`, but it's not the same value as `birthYear` has a reference to. When we update the value of `year` by setting `year` equal to `'1998'`, we are only updating the value of `year`. `birthYear` is still equal to `'1997'`. The value of `person` is an object. The argument `member` has a (copied) reference to the _same_ object. When we modify a property of the object `member` has a reference to, the value of `person` will also be modified, since they both have a reference to the same object. `person`'s `name` property is now equal to the value `'Lydia'`",
    slug: 'z3b9wguop8g18kr151je0cbdrl8t9rro'
  },
  {
    id: 52,
    question: "What's the output?",
    snippet: 'function greeting() {\n' +
      "  throw 'Hello world!';\n" +
      '}\n' +
      '\n' +
      'function sayHi() {\n' +
      '  try {\n' +
      '    const data = greeting();\n' +
      "    console.log('It worked!', data);\n" +
      '  } catch (e) {\n' +
      "    console.log('Oh no an error:', e);\n" +
      '  }\n' +
      '}\n' +
      '\n' +
      'sayHi();',
    choices: [
      { key: 'A', value: '`It worked! Hello world!`' },
      { key: 'B', value: '`Oh no an error: undefined`' },
      {
        key: 'C',
        value: '`SyntaxError: can only throw Error objects`'
      },
      { key: 'D', value: '`Oh no an error: Hello world!`' }
    ],
    answer: 'D',
    explanation: "With the `throw` statement, we can create custom errors. With this statement, you can throw exceptions. An exception can be a <b>string</b>, a <b>number</b>, a <b>boolean</b> or an <b>object</b>. In this case, our exception is the string `'Hello world'`. With the `catch` statement, we can specify what to do if an exception is thrown in the `try` block. An exception is thrown: the string `'Hello world'`. `e` is now equal to that string, which we log. This results in `'Oh an error: Hello world'`.",
    slug: 'ew930atijicojob9gz43fb74bbf06u3u'
  },
  {
    id: 53,
    question: "What's the output?",
    snippet: 'function Car() {\n' +
      "  this.make = 'Lamborghini';\n" +
      "  return { make: 'Maserati' };\n" +
      '}\n' +
      '\n' +
      'const myCar = new Car();\n' +
      'console.log(myCar.make);',
    choices: [
      { key: 'A', value: "`'Lamborghini'`" },
      { key: 'B', value: "`'Maserati'`" },
      { key: 'C', value: '`ReferenceError`' },
      { key: 'D', value: '`TypeError`' }
    ],
    answer: 'B',
    explanation: "When you return a property, the value of the property is equal to the _returned_ value, not the value set in the constructor function. We return the string `'Maserati'`, so `myCar.make` is equal to `'Maserati'`.",
    slug: 'dgue0ivvo4gm8fxzxxw5n0vxhsfmrlyh'
  },
  {
    id: 54,
    question: "What's the output?",
    snippet: '(() => {\n' +
      '  let x = (y = 10);\n' +
      '})();\n' +
      '\n' +
      'console.log(typeof x);\n' +
      'console.log(typeof y);',
    choices: [
      { key: 'A', value: "`'undefined', 'number'`" },
      { key: 'B', value: "`'number', 'number'`" },
      { key: 'C', value: "`'object', 'number'`" },
      { key: 'D', value: "`'number', 'undefined'`" }
    ],
    answer: 'A',
    explanation: '`let x = y = 10;` is actually shorthand for: \n' +
      ' y = 10;\n' +
      ' let x = y;\n' +
      " When we set `y` equal to `10`, we actually add a property `y` to the global object (`window` in browser, `global` in Node). In a browser, `window.y` is now equal to `10`. Then, we declare a variable `x` with the value of `y`, which is `10`. Variables declared with the `let` keyword are _block scoped_, they are only defined within the block they're declared in; the immediately-invoked function (IIFE) in this case. When we use the `typeof` operator, the operand `x` is not defined: we are trying to access `x` outside of the block it's declared in. This means that `x` is not defined. Values who haven't been assigned a value or declared are of type `'undefined'`. `console.log(typeof x)` returns `'undefined'`. \n" +
      " However, we created a global variable `y` when setting `y` equal to `10`. This value is accessible anywhere in our code. `y` is defined, and holds a value of type `'number'`. `console.log(typeof y)` returns `'number'`.",
    slug: 'rjrt7scjitpnqzlw3h84l3m6tfnco7vq'
  },
  {
    id: 55,
    question: "What's the output?",
    snippet: 'class Dog {\n' +
      '  constructor(name) {\n' +
      '    this.name = name;\n' +
      '  }\n' +
      '}\n' +
      '\n' +
      'Dog.prototype.bark = function() {\n' +
      '  console.log(`Woof I am ${this.name}`);\n' +
      '};\n' +
      '\n' +
      "const pet = new Dog('Mara');\n" +
      '\n' +
      'pet.bark();\n' +
      '\n' +
      'delete Dog.prototype.bark;\n' +
      '\n' +
      'pet.bark();',
    choices: [
      { key: 'A', value: "`'Woof I am Mara'`, `TypeError`" },
      { key: 'B', value: "`'Woof I am Mara'`, `'Woof I am Mara'`" },
      { key: 'C', value: "`'Woof I am Mara'`, `undefined`" },
      { key: 'D', value: '`TypeError`, `TypeError`' }
    ],
    answer: 'A',
    explanation: 'We can delete properties from objects using the `delete` keyword, also on the prototype. By deleting a property on the prototype, it is not available anymore in the prototype chain. In this case, the `bark` function is not available anymore on the prototype after `delete Dog.prototype.bark`, yet we still try to access it. When we try to invoke something that is not a function, a `TypeError` is thrown. In this case `TypeError: pet.bark is not a function`, since `pet.bark` is `undefined`.',
    slug: 'b5qq1s4cgspp48snmmoj9kad2xsj8wfc'
  },
  {
    id: 56,
    question: "What's the output?",
    snippet: 'const set = new Set([1, 1, 2, 3, 4]);\n\nconsole.log(set);',
    choices: [
      { key: 'A', value: '`[1, 1, 2, 3, 4]`' },
      { key: 'B', value: '`[1, 2, 3, 4]`' },
      { key: 'C', value: '`{1, 1, 2, 3, 4}`' },
      { key: 'D', value: '`{1, 2, 3, 4}`' }
    ],
    answer: 'D',
    explanation: 'The `Set` object is a collection of _unique_ values: a value can only occur once in a set. We passed the iterable `[1, 1, 2, 3, 4]` with a duplicate value `1`. Since we cannot have two of the same values in a set, one of them is removed. This results in `{1, 2, 3, 4}`.',
    slug: 's3adm3e9yz57uyx9quhlbqywkzrvf3c6'
  },
  {
    id: 57,
    question: "What's the output?",
    snippet: '// counter.js\n' +
      'let counter = 10;\n' +
      'export default counter;\n' +
      '\n' +
      '// index.js\n' +
      "import myCounter from './counter';\n" +
      '\n' +
      'myCounter += 1;\n' +
      '\n' +
      'console.log(myCounter);',
    choices: [
      { key: 'A', value: '`10`' },
      { key: 'B', value: '`11`' },
      { key: 'C', value: '`Error`' },
      { key: 'D', value: '`NaN`' }
    ],
    answer: 'C',
    explanation: 'An imported module is _read-only_: you cannot modify the imported module. Only the module that exports them can change its value. When we try to increment the value of `myCounter`, it throws an error: `myCounter` is read-only and cannot be modified.',
    slug: '63f830bhbztirt1qhrvatz3ptga2kh9y'
  },
  {
    id: 58,
    question: "What's the output?",
    snippet: "const name = 'Lydia';\n" +
      'age = 21;\n' +
      '\n' +
      'console.log(delete name);\n' +
      'console.log(delete age);',
    choices: [
      { key: 'A', value: '`false`, `true`' },
      { key: 'B', value: "`'Lydia'`, `21`" },
      { key: 'C', value: '`true`, `true`' },
      { key: 'D', value: '`undefined`, `undefined`' }
    ],
    answer: 'A',
    explanation: "The `delete` operator returns a boolean value: `true` on a successful deletion, else it'll return `false`. However, variables declared with the `var`, `const` or `let` keyword cannot be deleted using the `delete` operator.The `name` variable was declared with a `const` keyword, so its deletion is not successful: `false` is returned. When we set `age` equal to `21`, we actually added a property called `age` to the global object. You can successfully delete properties from objects this way, also the global object, so `delete age` returns `true`.",
    slug: 'hjtr2sao0f6dgdcp11sdbl3il7k994m6'
  },
  {
    id: 59,
    question: "What's the output?",
    snippet: 'const numbers = [1, 2, 3, 4, 5];\nconst [y] = numbers;\n\nconsole.log(y);',
    choices: [
      { key: 'A', value: '`[[1, 2, 3, 4, 5]]`' },
      { key: 'B', value: '`[1, 2, 3, 4, 5]`' },
      { key: 'C', value: '`1`' },
      { key: 'D', value: '`[1]`' }
    ],
    answer: 'C',
    explanation: 'We can unpack values from arrays or properties from objects through destructuring. For example: \n' +
      ' \n' +
      ' [a, b] = [1, 2]; \n' +
      ' \n' +
      "<img src='https://i.imgur.com/ADFpVop.png' width='200'> \n" +
      ' The value of `a` is now `1`, and the value of `b` is now `2`. What we actually did in the question, is:\n' +
      ' \n' +
      ' [y] = [1, 2, 3, 4, 5]; \n' +
      ' \n' +
      " <img src='https://i.imgur.com/NzGkMNk.png' width='200'> \n" +
      ' This means that the value of `y` is equal to the first value in the array, which is the number `1`. When we log `y`, `1` is returned.',
    slug: 'lyd12dz377p00zur94hgaabv9dszfklc'
  },
  {
    id: 60,
    question: "What's the output?",
    snippet: "const user = { name: 'Lydia', age: 21 };\n" +
      'const admin = { admin: true, ...user };\n' +
      '\n' +
      'console.log(admin);',
    choices: [
      {
        key: 'A',
        value: "`{ admin: true, user: { name: 'Lydia', age: 21 } }`"
      },
      { key: 'B', value: "`{ admin: true, name: 'Lydia', age: 21 }`" },
      { key: 'C', value: "`{ admin: true, user: ['Lydia', 21] }`" },
      { key: 'D', value: '`{ admin: true }`' }
    ],
    answer: 'B',
    explanation: "It's possible to combine objects using the spread operator `...`. It lets you create copies of the key/value pairs of one object, and add them to another object. In this case, we create copies of the `user` object, and add them to the `admin` object. The `admin` object now contains the copied key/value pairs, which results in `{ admin: true, name: 'Lydia', age: 21 }`.",
    slug: 'vgcvh6cfkqpcw63pdlr3uegt49rsqgqq'
  },
  {
    id: 61,
    question: "What's the output?",
    snippet: "const person = { name: 'Lydia' };\n" +
      '\n' +
      "Object.defineProperty(person, 'age', { value: 21 });\n" +
      '\n' +
      'console.log(person);\n' +
      'console.log(Object.keys(person));',
    choices: [
      {
        key: 'A',
        value: "`{ name: 'Lydia', age: 21 }`, `['name', 'age']`"
      },
      { key: 'B', value: "`{ name: 'Lydia', age: 21 }`, `['name']`" },
      { key: 'C', value: "`{ name: 'Lydia'}`, `['name', 'age']`" },
      { key: 'D', value: "`{ name: 'Lydia'}`, `['age']`" }
    ],
    answer: 'B',
    explanation: "With the `defineProperty` method, we can add new properties to an object, or modify existing ones. When we add a property to an object using the `defineProperty` method, they are by default _not enumerable_. The `Object.keys` method returns all _enumerable_ property names from an object, in this case only `'name'`. Properties added using the `defineProperty` method are immutable by default. You can override this behavior using the `writable`, `configurable` and `enumerable` properties. This way, the `defineProperty` method gives you a lot more control over the properties you're adding to an object.",
    slug: 'm3qeap3g4oxryi1qhvk0df1avumlxcb7'
  },
  {
    id: 62,
    question: "What's the output?",
    snippet: 'const settings = {\n' +
      "  username: 'lydiahallie',\n" +
      '  level: 19,\n' +
      '  health: 90\n' +
      '};\n' +
      '\n' +
      "const data = JSON.stringify(settings, ['level', 'health']);\n" +
      'console.log(data);',
    choices: [
      { key: 'A', value: "`'{'level':19, 'health':90}'`" },
      { key: 'B', value: "`'{'username': 'lydiahallie'}'`" },
      { key: 'C', value: "`'['level', 'health']'`" },
      {
        key: 'D',
        value: "`'{'username': 'lydiahallie', 'level':19, 'health':90}'`"
      }
    ],
    answer: 'A',
    explanation: "The second argument of `JSON.stringify` is the _replacer_. The replacer can either be a function or an array, and lets you control what and how the values should be stringified. If the replacer is an _array_, only the property names included in the array will be added to the JSON string. In this case, only the properties with the names `'level'` and `'health'` are included, `'username'` is excluded. `data` is now equal to `'{'level':19, 'health':90}'`. If the replacer is a _function_, this function gets called on every property in the object you're stringifying. The value returned from this function will be the value of the property when it's added to the JSON string. If the value is `undefined`, this property is excluded from the JSON string.",
    slug: 'gscm3hbup5n99i0b7mpojihrs75t95qm'
  },
  {
    id: 63,
    question: "What's the output?",
    snippet: 'let num = 10;\n' +
      '\n' +
      'const increaseNumber = () => num++;\n' +
      'const increasePassedNumber = number => number++;\n' +
      '\n' +
      'const num1 = increaseNumber();\n' +
      'const num2 = increasePassedNumber(num1);\n' +
      '\n' +
      'console.log(num1);\n' +
      'console.log(num2);',
    choices: [
      { key: 'A', value: '`10`, `10`' },
      { key: 'B', value: '`10`, `11`' },
      { key: 'C', value: '`11`, `11`' },
      { key: 'D', value: '`11`, `12`' }
    ],
    answer: 'A',
    explanation: 'The unary operator `++` _first returns_ the value of the operand, _then increments_ the value of the operand. The value of `num1` is `10`, since the `increaseNumber` function first returns the value of `num`, which is `10`, and only increments the value of `num` afterwards. `num2` is `10`, since we passed `num1` to the `increasePassedNumber`. `number` is equal to `10`(the value of `num1`. Again, the unary operator `++` _first returns_ the value of the operand, _then increments_ the value of the operand. The value of `number` is `10`, so `num2` is equal to `10`.',
    slug: 'e1egtx90p2g4i77swqwiuyz9c7gstgki'
  },
  {
    id: 64,
    question: "What's the output?",
    snippet: 'const value = { number: 10 };\n' +
      '\n' +
      'const multiply = (x = { ...value }) => {\n' +
      '  console.log((x.number *= 2));\n' +
      '};\n' +
      '\n' +
      'multiply();\n' +
      'multiply();\n' +
      'multiply(value);\n' +
      'multiply(value);',
    choices: [
      { key: 'A', value: '`20`, `40`, `80`, `160`' },
      { key: 'B', value: '`20`, `40`, `20`, `40`' },
      { key: 'C', value: '`20`, `20`, `20`, `40`' },
      { key: 'D', value: '`NaN`, `NaN`, `20`, `40`' }
    ],
    answer: 'C',
    explanation: "In ES6, we can initialize parameters with a default value. The value of the parameter will be the default value, if no other value has been passed to the function, or if the value of the parameter is `'undefined'`. In this case, we spread the properties of the `value` object into a new object, so `x` has the default value of `{ number: 10 }`. The default argument is evaluated at _call time_! Every time we call the function, a _new_ object is created. We invoke the `multiply` function the first two times without passing a value: `x` has the default value of `{ number: 10 }`. We then log the multiplied value of that number, which is `20`. The third time we invoke multiply, we do pass an argument: the object called `value`. The `*=` operator is actually shorthand for `x.number = x.number * 2`: we modify the value of `x.number`, and log the multiplied value `20`. The fourth time, we pass the `value` object again. `x.number` was previously modified to `20`, so `x.number *= 2` logs `40`. ",
    slug: '785i5re1ykwg0qac09ukpsjskqyjan2v'
  },
  {
    id: 65,
    question: "What's the output?",
    snippet: '[1, 2, 3, 4].reduce((x, y) => console.log(x, y));',
    choices: [
      { key: 'A', value: '`1` `2` and `3` `3` and `6` `4`' },
      { key: 'B', value: '`1` `2` and `2` `3` and `3` `4`' },
      {
        key: 'C',
        value: '`1` `undefined` and `2` `undefined` and `3` `undefined` and `4` `undefined`'
      },
      {
        key: 'D',
        value: '`1` `2` and `undefined` `3` and `undefined` `4`'
      }
    ],
    answer: 'D',
    explanation: "The first argument that the `reduce` method receives is the _accumulator_, `x` in this case. The second argument is the _current value_, `y`. With the reduce method, we execute a callback function on every element in the array, which could ultimately result in one single value.  In this example, we are not returning any values, we are simply logging the values of the accumulator and the current value. The value of the accumulator is equal to the previously returned value of the callback function. If you don't pass the optional `initialValue` argument to the `reduce` method, the accumulator is equal to the first element on the first call. On the first call, the accumulator (`x`) is `1`, and the current value (`y`) is `2`. We don't return from the callback function, we log the accumulator and current value: `1` and `2` get logged. If you don't return a value from a function, it returns `undefined`. On the next call, the accumulator is `undefined`, and the current value is `3`. `undefined` and `3` get logged. On the fourth call, we again don't return from the callback function. The accumulator is again `undefined`, and the current value is `4`. `undefined` and `4` get logged.",
    slug: 'h5dtdmjiv3lb71it0p5wdp127xi8km6x'
  },
  {
    id: 66,
    question: 'With which constructor can we successfully extend the `Dog` class?',
    snippet: 'class Dog {\n' +
      '  constructor(name) {\n' +
      '    this.name = name;\n' +
      '  }\n' +
      '};\n' +
      '\n' +
      'class Labrador extends Dog {\n' +
      '  // 1\n' +
      '  constructor(name, size) {\n' +
      '    this.size = size;\n' +
      '  }\n' +
      '  // 2\n' +
      '  constructor(name, size) {\n' +
      '    super(name);\n' +
      '    this.size = size;\n' +
      '  }\n' +
      '  // 3\n' +
      '  constructor(size) {\n' +
      '    super(name);\n' +
      '    this.size = size;\n' +
      '  }\n' +
      '  // 4\n' +
      '  constructor(name, size) {\n' +
      '    this.name = name;\n' +
      '    this.size = size;\n' +
      '  }\n' +
      '\n' +
      '  };',
    choices: [
      { key: 'A', value: '1' },
      { key: 'B', value: '2' },
      { key: 'C', value: '3' },
      { key: 'D', value: '4' }
    ],
    answer: 'B',
    explanation: "In a derived class, you cannot access the `this` keyword before calling `super`. If you try to do that, it will throw a ReferenceError: 1 and 4 would throw a reference error. With the `super` keyword, we call that parent class's constructor with the given arguments. The parent's constructor receives the `name` argument, so we need to pass `name` to `super`. The `Labrador` class receives two arguments, `name` since it extends `Dog`, and `size` as an extra property on the `Labrador` class. They both need to be passed to the constructor function on `Labrador`, which is done correctly  using constructor 2.",
    slug: 'qpn9800dph2f66yge8qd2i9yltstpbvf'
  },
  {
    id: 67,
    question: "What's the output?",
    snippet: '// index.js\n' +
      "console.log('running index.js');\n" +
      "import { sum } from './sum.js';\n" +
      'console.log(sum(1, 2));\n' +
      '\n' +
      '// sum.js\n' +
      "console.log('running sum.js');\n" +
      'export const sum = (a, b) => a + b;',
    choices: [
      { key: 'A', value: '1' },
      { key: 'B', value: '2' },
      { key: 'C', value: '3' },
      { key: 'D', value: '4' }
    ],
    answer: 'B',
    explanation: 'With the `import` keyword, all imported modules are _pre-parsed_. This means that the imported modules get run _first_, the code in the file which imports the module gets executed _after_. This is a difference between `require()` in CommonJS and `import`! With `require()`, you can load dependencies on demand while the code is being run. If we would have used `require` instead of `import`, `running index.js`, `running sum.js`, `3` would have been logged to the console.',
    slug: '1qg2bvn0q5mnflt7v74s2cfyo9404gax'
  },
  {
    id: 68,
    question: "What's the output?",
    snippet: 'console.log(Number(2) === Number(2))\n' +
      'console.log(Boolean(false) === Boolean(false))\n' +
      "console.log(Symbol('foo') === Symbol('foo'))",
    choices: [
      { key: 'A', value: '`true`, `true`, `false`' },
      { key: 'B', value: '`false`, `true`, `false`' },
      { key: 'C', value: '`true`, `false`, `true`' },
      { key: 'D', value: '`true`, `true`, `true`' }
    ],
    answer: 'A',
    explanation: "Every Symbol is entirely unique. The purpose of the argument passed to the Symbol is to give the Symbol a description. The value of the Symbol is not dependent on the passed argument. As we test equality, we are creating two entirely new symbols: the first `Symbol('foo')`, and the second `Symbol('foo')`. These two values are unique and not equal to each other, `Symbol('foo') === Symbol('foo')` returns `false`.",
    slug: 'rw0d5scd5ro94bao2zx4xonzhptj5hhj'
  },
  {
    id: 69,
    question: "What's the output?",
    snippet: "const name = 'Lydia Hallie'\n" +
      'console.log(name.padStart(13))\n' +
      'console.log(name.padStart(2))',
    choices: [
      { key: 'A', value: "`'Lydia Hallie'`, `'Lydia Hallie'`" },
      {
        key: 'B',
        value: "`'           Lydia Hallie'`, `'  Lydia Hallie'` (`'[13x whitespace]Lydia Hallie'`, `'[2x whitespace]Lydia Hallie'`)"
      },
      {
        key: 'C',
        value: "`' Lydia Hallie'`, `'Lydia Hallie'` (`'[1x whitespace]Lydia Hallie'`, `'Lydia Hallie'`)"
      },
      { key: 'D', value: "`'Lydia Hallie'`, `'Lyd'`," }
    ],
    answer: 'C',
    explanation: "With the `padStart` method, we can add padding to the beginning of a string. The value passed to this method is the _total_ length of the string together with the padding. The string `'Lydia Hallie'` has a length of `12`. `name.padStart(13)` inserts 1 space at the start of the string, because 12 + 1 is 13. If the argument passed to the `padStart` method is smaller than the length of the array, no padding will be added.",
    slug: 'v4yn1zkr17chvshecfoejy4f2xekjkfn'
  },
  {
    id: 70,
    question: "What's the output?",
    snippet: "console.log('🥑' + '💻');",
    choices: [
      { key: 'A', value: "`'🥑💻'`" },
      { key: 'B', value: '`257548`' },
      { key: 'C', value: 'A string containing their code points' },
      { key: 'D', value: 'Error' }
    ],
    answer: 'A',
    explanation: "With the `+` operator, you can concatenate strings. In this case, we are concatenating the string `'🥑'` with the string `'💻'`, resulting in `'🥑💻'`.",
    slug: 'zejb7pxn6nu03bcfzv1emvc5cngvk5ju'
  },
  {
    id: 71,
    question: 'How can we log the values that are commented out after the console.log statement?',
    snippet: 'function* startGame() {\n' +
      "  const answer = yield 'Do you love JavaScript?';\n" +
      "  if (answer !== 'Yes') {\n" +
      "    return 'Oh wow... Guess we're gone here';\n" +
      '  }\n' +
      "  return 'JavaScript loves you back ❤️';\n" +
      '}\n' +
      '\n' +
      'const game = startGame();\n' +
      'console.log(/* 1 */); // Do you love JavaScript?\n' +
      'console.log(/* 2 */); // JavaScript loves you back ❤️',
    choices: [
      {
        key: 'A',
        value: "`game.next('Yes').value` and `game.next().value`"
      },
      {
        key: 'B',
        value: "`game.next.value('Yes')` and `game.next.value()`"
      },
      {
        key: 'C',
        value: "`game.next().value` and `game.next('Yes').value`"
      },
      {
        key: 'D',
        value: "`game.next.value()` and `game.next.value('Yes')`"
      }
    ],
    answer: 'C',
    explanation: "A generator function 'pauses' its execution when it sees the `yield` keyword. First, we have to let the function yield the string 'Do you love JavaScript?', which can be done by calling `game.next().value`. Every line is executed, until it finds the first `yield` keyword. There is a `yield` keyword on the first line within the function: the execution stops with the first yield! _This means that the variable `answer` is not defined yet!_ When we call `game.next('Yes').value`, the previous `yield` is replaced with the value of the parameters passed to the `next()` function, `'Yes'` in this case. The value of the variable `answer` is now equal to `'Yes'`. The condition of the if-statement returns `false`, and `JavaScript loves you back ❤️` gets logged.",
    slug: '0pkhwyd69xo2skddw2o721hiez8n924s'
  },
  {
    id: 72,
    question: "What's the output?",
    snippet: 'console.log(String.raw`Hello\nworld`);',
    choices: [
      { key: 'A', value: '`Hello world!`' },
      { key: 'B', value: '`Hello` <br />&nbsp; &nbsp; &nbsp;`world`' },
      { key: 'C', value: '`Hello\nworld`' },
      {
        key: 'D',
        value: '`Hello\n` <br /> &nbsp; &nbsp; &nbsp;`world`'
      }
    ],
    answer: 'C',
    explanation: "`String.raw` returns a string where the escapes ('\n" +
      "', '\\v', '\t' etc.) are ignored! Backslashes can be an issue since you could end up with something like: \n" +
      ' `` const path = `C:\\Documents\\Projects\table.html` `` \n' +
      ' Which would result in: \n' +
      " `'C:DocumentsProjects able.html'` \n" +
      ' With `String.raw`, it would simply ignore the escape and print: \n' +
      ' `C:\\Documents\\Projects\table.html` \n' +
      ' In this case, the string is `Hello\n' +
      'world`, which gets logged.',
    slug: '9dsp4u2y09e60gn95wrmy5a1eh031yqn'
  },
  {
    id: 73,
    question: "What's the output?",
    snippet: 'async function getData() {\n' +
      "  return await Promise.resolve('I made it!');\n" +
      '}\n' +
      '\n' +
      'const data = getData();\n' +
      'console.log(data);',
    choices: [
      { key: 'A', value: "`'I made it!'`" },
      { key: 'B', value: "`Promise {<resolved>: 'I made it!'}`" },
      { key: 'C', value: '`Promise {<pending>}`' },
      { key: 'D', value: '`undefined`' }
    ],
    answer: 'C',
    explanation: "An async function always returns a promise. The `await` still has to wait for the promise to resolve: a pending promise gets returned when we call `getData()` in order to set `data` equal to it. If we wanted to get access to the resolved value `'I made it'`, we could have used the `.then()` method on `data`: `data.then(res => console.log(res))` This would've logged `'I made it!'`",
    slug: 'z8ecb91kzvflubltv4nirf88325bfmbb'
  },
  {
    id: 74,
    question: "What's the output?",
    snippet: 'function addToList(item, list) {\n' +
      '  return list.push(item);\n' +
      '}\n' +
      '\n' +
      "const result = addToList('apple', ['banana']);\n" +
      'console.log(result);',
    choices: [
      { key: 'A', value: "`['apple', 'banana']`" },
      { key: 'B', value: '`2`' },
      { key: 'C', value: '`true`' },
      { key: 'D', value: '`undefined`' }
    ],
    answer: 'B',
    explanation: "The `.push()` method returns the _length_ of the new array! Previously, the array contained one element (the string `'banana'`) and had a length of `1`. After adding the string `'apple'` to the array, the array contains two elements, and has a length of `2`. This gets returned from the `addToList` function. The `push` method modifies the original array. If you wanted to return the _array_ from the function rather than the _length of the array_, you should have returned `list` after pushing `item` to it.",
    slug: 'rirrque9kqum4iv3s4dl5bpsouxc88eh'
  },
  {
    id: 75,
    question: "What's the output?",
    snippet: 'const box = { x: 10, y: 20 };\n' +
      '\n' +
      'Object.freeze(box);\n' +
      '\n' +
      'const shape = box;\n' +
      'shape.x = 100;\n' +
      '\n' +
      'console.log(shape);',
    choices: [
      { key: 'A', value: '`{ x: 100, y: 20 }`' },
      { key: 'B', value: '`{ x: 10, y: 20 }`' },
      { key: 'C', value: '`{ x: 100 }`' },
      { key: 'D', value: '`ReferenceError`' }
    ],
    answer: 'B',
    explanation: "`Object.freeze` makes it impossible to add, remove, or modify properties of an object (unless the property's value is another object). When we create the variable `shape` and set it equal to the frozen object `box`, `shape` also refers to a frozen object. You can check whether an object is frozen by using `Object.isFrozen`. In this case, `Object.isFrozen(shape)` returns true, since the variable `shape` has a reference to a frozen object. Since `shape` is frozen, and since the value of `x` is not an object, we cannot modify the property `x`. `x` is still equal to `10`, and `{ x: 10, y: 20 }` gets logged.",
    slug: '914k7j9c24qmw4l25vjxzl4b0cu7klo6'
  },
  {
    id: 76,
    question: "What's the output?",
    snippet: "const { name: myName } = { name: 'Lydia' };\n\nconsole.log(name);",
    choices: [
      { key: 'A', value: "`'Lydia'`" },
      { key: 'B', value: "`'myName'`" },
      { key: 'C', value: '`undefined`' },
      { key: 'D', value: '`ReferenceError`' }
    ],
    answer: 'D',
    explanation: "When we unpack the property `name` from the object on the right-hand side, we assign its value `'Lydia'` to a variable with the name `myName`. With `{ name: myName }`, we tell JavaScript that we want to create a new variable called `myName` with the value of the `name` property on the right-hand side. Since we try to log `name`, a variable that is not defined, a ReferenceError gets thrown.",
    slug: 'vcwihwa14s4es94i1ekvawsky1kqrxdf'
  },
  {
    id: 77,
    question: 'Is this a pure function?',
    snippet: 'function sum(a, b) {\n  return a + b;\n}',
    choices: [ { key: 'A', value: 'Yes' }, { key: 'B', value: 'No' } ],
    answer: 'A',
    explanation: 'A pure function is a function that _always_ returns the same result, if the same arguments are passed. The `sum` function always returns the same result. If we pass `1` and `2`, it will _always_ return `3` without side effects. If we pass `5` and `10`, it will _always_ return `15`, and so on. This is the definition of a pure function.',
    slug: 'hemuv6zu5mkl9x4g1n2wjyta8cqzsbh0'
  },
  {
    id: 78,
    question: 'What is the output?',
    snippet: 'const add = () => {\n' +
      '  const cache = {};\n' +
      '  return num => {\n' +
      '    if (num in cache) {\n' +
      '      return `From cache! ${cache[num]}`;\n' +
      '    } else {\n' +
      '      const result = num + 10;\n' +
      '      cache[num] = result;\n' +
      '      return `Calculated! ${result}`;\n' +
      '    }\n' +
      '  };\n' +
      '};\n' +
      '\n' +
      'const addFunction = add();\n' +
      'console.log(addFunction(10));\n' +
      'console.log(addFunction(10));\n' +
      'console.log(addFunction(5 * 2));',
    choices: [
      {
        key: 'A',
        value: '`Calculated! 20` `Calculated! 20` `Calculated! 20`'
      },
      {
        key: 'B',
        value: '`Calculated! 20` `From cache! 20` `Calculated! 20`'
      },
      {
        key: 'C',
        value: '`Calculated! 20` `From cache! 20` `From cache! 20`'
      },
      { key: 'D', value: '`Calculated! 20` `From cache! 20` `Error`' }
    ],
    answer: 'C',
    explanation: "The `add` function is a _memoized_ function. With memoization, we can cache the results of a function in order to speed up its execution. In this case, we create a `cache` object that stores the previously returned values. If we call the `addFunction` function again with the same argument, it first checks whether it has already gotten that value in its cache. If that's the case, the caches value will be returned, which saves on execution time. Else, if it's not cached, it will calculate the value and store it afterwards. We call the `addFunction` function three times with the same value: on the first invocation, the value of the function when `num` is equal to `10` isn't cached yet. The condition of the if-statement `num in cache` returns `false`, and the else block gets executed: `Calculated! 20` gets logged, and the value of the result gets added to the cache object. `cache` now looks like `{ 10: 20 }`. The second time, the `cache` object contains the value that gets returned for `10`. The condition of the if-statement `num in cache` returns `true`, and `'From cache! 20'` gets logged. The third time, we pass `5 * 2` to the function which gets evaluated to `10`. The `cache` object contains the value that gets returned for `10`. The condition of the if-statement `num in cache` returns `true`, and `'From cache! 20'` gets logged.",
    slug: 'kzje5ft4hd4o39dcs2r6mgrifz61s0x1'
  },
  {
    id: 79,
    question: 'What is the output?',
    snippet: "const myLifeSummedUp = ['☕', '💻', '🍷', '🍫']\n" +
      '\n' +
      'for (let item in myLifeSummedUp) {\n' +
      '  console.log(item)\n' +
      '}\n' +
      '\n' +
      'for (let item of myLifeSummedUp) {\n' +
      '  console.log(item)\n' +
      '}',
    choices: [
      {
        key: 'A',
        value: "`0` `1` `2` `3` and `'☕'` ` '💻'` `'🍷'` `'🍫'`"
      },
      {
        key: 'B',
        value: "`'☕'` ` '💻'` `'🍷'` `'🍫'` and `'☕'` ` '💻'` `'🍷'` `'🍫'`"
      },
      {
        key: 'C',
        value: "`'☕'` ` '💻'` `'🍷'` `'🍫'` and `0` `1` `2` `3`"
      },
      {
        key: 'D',
        value: " `0` `1` `2` `3` and `{0: '☕', 1: '💻', 2: '🍷', 3: '🍫'}`"
      }
    ],
    answer: 'A',
    explanation: "With a _for-in_ loop, we can iterate over **enumerable** properties. In an array, the enumerable properties are the 'keys' of array elements, which are actually their indexes. You could see an array as: `{0: '☕', 1: '💻', 2: '🍷', 3: '🍫'}` Where the keys are the enumerable properties. `0` `1` `2` `3` get logged. With a _for-of_ loop, we can iterate over **iterables**. An array is an iterable. When we iterate over the array, the variable 'item' is equal to the element it's currently iterating over, `'☕'` ` '💻'` `'🍷'` `'🍫'` get logged.",
    slug: 'tv42ama1uei6kj4m2w9scqoqpduqeb56'
  },
  {
    id: 80,
    question: 'What is the output?',
    snippet: 'const list = [1 + 2, 1 * 2, 1 / 2]\nconsole.log(list)',
    choices: [
      { key: 'A', value: "`['1 + 2', '1 * 2', '1 / 2']`" },
      { key: 'B', value: "`['12', 2, 0.5]`" },
      { key: 'C', value: '`[3, 2, 0.5]`' },
      { key: 'D', value: ' `[1, 1, 1]`' }
    ],
    answer: 'C',
    explanation: 'Array elements can hold any value. Numbers, strings, objects, other arrays, null, boolean values, undefined, and other expressions such as dates, functions, and calculations. The element will be equal to the returned value.  `1 + 2` returns `3`, `1 * 2` returns `2`, and `1 / 2` returns `0.5`.',
    slug: '6xhh3u2ktl402587mkd045libtz7x0d9'
  },
  {
    id: 81,
    question: 'What is the output?',
    snippet: 'function sayHi(name) {\n' +
      '  return `Hi there, ${name}`\n' +
      '}\n' +
      '\n' +
      'console.log(sayHi())',
    choices: [
      { key: 'A', value: '`Hi there, `' },
      { key: 'B', value: '`Hi there, undefined`' },
      { key: 'C', value: '`Hi there, null`' },
      { key: 'D', value: ' `ReferenceError`' }
    ],
    answer: 'B',
    explanation: "By default, arguments have the value of `undefined`, unless a value has been passed to the function. In this case, we didn't pass a value for the `name` argument. `name` is equal to `undefined` which gets logged. In ES6, we can overwrite this default `undefined` value with default parameters. For example: `function sayHi(name = 'Lydia') { ... }` In this case, if we didn't pass a value or if we passed `undefined`, `name` would always be equal to the string `Lydia`",
    slug: '83axl6yzftscokql6x8lqvi208qou1ou'
  },
  {
    id: 82,
    question: 'What is the output?',
    snippet: "var status = '😎'\n" +
      '\n' +
      'setTimeout(() => {\n' +
      "  const status = '😍'\n" +
      '\n' +
      '  const data = {\n' +
      "    status: '🥑',\n" +
      '    getStatus() {\n' +
      '      return this.status\n' +
      '    }\n' +
      '  }\n' +
      '\n' +
      '  console.log(data.getStatus())\n' +
      '  console.log(data.getStatus.call(this))\n' +
      '}, 0)',
    choices: [
      { key: 'A', value: "`'🥑'` and `'😍'`" },
      { key: 'B', value: "`'🥑'` and `'😎'`" },
      { key: 'C', value: "`'😍'` and `'😎'`" },
      { key: 'D', value: "`'😎'` and `'😎'`" }
    ],
    answer: 'B',
    explanation: "The value of the `this` keyword is dependent on where you use it. In a **method**, like the `getStatus` method, the `this` keyword refers to _the object that the method belongs to_. The method belongs to the `data` object, so `this` refers to the `data` object. When we log `this.status`, the `status` property on the `data` object gets logged, which is `'🥑'`. With the `call` method, we can change the object to which the `this` keyword refers. In **functions**, the `this` keyword refers to the _the object that the function belongs to_. We declared the `setTimeout` function on the _global object_, so within the `setTimeout` function, the `this` keyword refers to the _global object_. On the global object, there is a variable called _status_ with the value of `'😎'`. When logging `this.status`, `'😎'` gets logged.",
    slug: 'xqg7ys0chn07vjlpsfjflhnl54bkmuru'
  },
  {
    id: 83,
    question: 'What is the output?',
    snippet: 'const person = {\n' +
      "  name: 'Lydia',\n" +
      '  age: 21\n' +
      '}\n' +
      '\n' +
      'let city = person.city\n' +
      "city = 'Amsterdam'\n" +
      '\n' +
      'console.log(person)',
    choices: [
      { key: 'A', value: "`{ name: 'Lydia', age: 21 }`" },
      {
        key: 'B',
        value: "`{ name: 'Lydia', age: 21, city: 'Amsterdam' }`"
      },
      {
        key: 'C',
        value: "`{ name: 'Lydia', age: 21, city: undefined }`"
      },
      { key: 'D', value: "`'Amsterdam'`" }
    ],
    answer: 'A',
    explanation: "We set the variable `city` equal to the value of the property called `city` on the `person` object. There is no property on this object called `city`, so the variable `city` has the value of `undefined`.  Note that we are _not_ referencing the `person` object itself! We simply set the variable `city` equal to the current value of the `city` property on the `person` object. Then, we set `city` equal to the string `'Amsterdam'`. This doesn't change the person object: there is no reference to that object. When logging the `person` object, the unmodified object gets returned.",
    slug: 'toaayreqwaiyehc5ti05lt43o6uj4748'
  },
  {
    id: 84,
    question: 'What is the output?',
    snippet: 'function checkAge(age) {\n' +
      '  if (age < 18) {\n' +
      "    const message = 'Sorry, you're too young.'\n" +
      '  } else {\n' +
      "    const message = 'Yay! You're old enough!'\n" +
      '  }\n' +
      '\n' +
      '  return message\n' +
      '}\n' +
      '\n' +
      'console.log(checkAge(21))',
    choices: [
      { key: 'A', value: "`'Sorry, you're too young.'`" },
      { key: 'B', value: "`'Yay! You're old enough!'`" },
      { key: 'C', value: '`ReferenceError`' },
      { key: 'D', value: '`undefined`' }
    ],
    answer: 'C',
    explanation: "Variables with the `const` and `let` keyword are _block-scoped_. A block is anything between curly brackets (`{ }`). In this case, the curly brackets of the if/else statements. You cannot reference a variable outside of the block it's declared in, a ReferenceError gets thrown.",
    slug: 'pory5z0kmo1jw1elka5favcju1acxh5w'
  },
  {
    id: 85,
    question: 'What kind of information would get logged?',
    snippet: "fetch('https://www.website.com/api/user/1')\n" +
      '.then(res => res.json())\n' +
      '.then(res => console.log(res))',
    choices: [
      { key: 'A', value: 'The result of the `fetch` method.' },
      {
        key: 'B',
        value: 'The result of the second invocation of the `fetch` method.'
      },
      {
        key: 'C',
        value: 'The result of the callback in the previous `.then()`.'
      },
      { key: 'D', value: 'It would always be undefined.' }
    ],
    answer: 'C',
    explanation: 'The value of `res` in the second `.then` is equal to the returned value of the previous `.then`. You can keep chaining `.then`s like this, where the value is passed to the next handler.',
    slug: 'sttolxnfr0qx9uo7pffqyaa85jums9hc'
  },
  {
    id: 86,
    question: 'Which option is a way to set `hasName` equal to `true`, provided you cannot pass `true` as an argument?',
    snippet: 'function getName(name) {\n  const hasName = //\n}',
    choices: [
      { key: 'A', value: '`!!name`' },
      { key: 'B', value: '`name`' },
      { key: 'C', value: '`new Boolean(name)`' },
      { key: 'D', value: '`name.length`' }
    ],
    answer: 'A',
    explanation: "With `!!name`, we determine whether the value of `name` is truthy or falsy. If name is truthy, which we want to test for, `!name` returns `false`. `!false` (which is what `!!name` practically is) returns `true`. By setting `hasName` equal to `name`, you set `hasName` equal to whatever value you passed to the `getName` function, not the boolean value `true`. `new Boolean(true)` returns an object wrapper, not the boolean value itself. `name.length` returns the length of the passed argument, not whether it's `true`.",
    slug: 'nlzyhjqd5vn4j3bw3aywb6a7uoy6po60'
  },
  {
    id: 87,
    question: "What's the output?",
    snippet: "console.log('I want pizza'[0])",
    choices: [
      { key: 'A', value: "`'`" },
      { key: 'B', value: "`'I'`" },
      { key: 'C', value: '`SyntaxError`' },
      { key: 'D', value: '`undefined`' }
    ],
    answer: 'B',
    explanation: "In order to get an character on a specific index in a string, you can use bracket notation. The first character in the string has index 0, and so on. In this case we want to get the element which index is 0, the character `'I'`, which gets logged. Note that this method is not supported in IE7 and below. In that case, use `.charAt()`",
    slug: 'fikgfh3c91vofpzaggcywn42rjaycdta'
  },
  {
    id: 88,
    question: "What's the output?",
    snippet: 'function sum(num1, num2 = num1) {\n  console.log(num1 + num2)\n}\n\nsum(10)',
    choices: [
      { key: 'A', value: '`NaN`' },
      { key: 'B', value: '`20`' },
      { key: 'C', value: '`ReferenceError`' },
      { key: 'D', value: '`undefined`' }
    ],
    answer: 'B',
    explanation: "You can set a default parameter's value equal to another parameter of the function, as long as they've been defined _before_ the default parameter. We pass the value `10` to the `sum` function. If the `sum` function only receives 1 argument, it means that the value for `num2` is not passed, and the value of `num1` is equal to the passed value `10` in this case. The default value of `num2` is the value of `num1`, which is `10`.  `num1 + num2` returns `20`. If you're trying to set a default parameter's value equal to a parameter which is defined _after_ (to the right), the parameter's value hasn't been initialized yet, which will throw an error.",
    slug: '130sv7gg532ad0e2ibrd4luog6my1795'
  },
  {
    id: 89,
    question: "What's the output?",
    snippet: '// module.js\n' +
      "export default () => 'Hello world'\n" +
      "export const name = 'Lydia'\n" +
      '\n' +
      '// index.js\n' +
      "import * as data from './module'\n" +
      '\n' +
      'console.log(data)',
    choices: [
      {
        key: 'A',
        value: "`{ default: function default(), name: 'Lydia' }`"
      },
      { key: 'B', value: '`{ default: function default() }`' },
      {
        key: 'C',
        value: "`{ default: 'Hello world', name: 'Lydia' }`"
      },
      { key: 'D', value: 'Global object of `module.js`' }
    ],
    answer: 'A',
    explanation: "With the `import * as name` syntax, we import _all exports_ from the `module.js` file into the `index.js` file as a new object called `data` is created. In the `module.js` file, there are two exports: the default export, and a named export. The default export is a function which returns the string `'Hello World'`, and the named export is a variable called `name` which has the value of the string `'Lydia'`. The `data` object has a `default` property for the default export, other properties have the names of the named exports and their corresponding values.",
    slug: 'hmm0zut6rehhvf6dh42h5bwz8qflnwot'
  },
  {
    id: 90,
    question: "What's the output?",
    snippet: 'class Person {\n' +
      '  constructor(name) {\n' +
      '    this.name = name\n' +
      '  }\n' +
      '}\n' +
      '\n' +
      "const member = new Person('John')\n" +
      'console.log(typeof member)',
    choices: [
      { key: 'A', value: "`'class'`" },
      { key: 'B', value: "`'function'`" },
      { key: 'C', value: "`'object'`" },
      { key: 'D', value: "`'string'`" }
    ],
    answer: 'C',
    explanation: 'Classes are syntactical sugar for function constructors. The equivalent of the `Person` class as a function constructor would be: function Person() { \n' +
      ' this.name = name \n' +
      ' } \n' +
      " Calling a function constructor with `new` results in the creation of an instance of `Person`, `typeof` keyword returns `'object'` for an instance. `typeof member` returns `'object'`.",
    slug: '4573bedr1gvuvfbgts91ubbgv5o67hzl'
  },
  {
    id: 91,
    question: "What's the output?",
    snippet: 'let newList = [1, 2, 3].push(4)\n\nconsole.log(newList.push(5))',
    choices: [
      { key: 'A', value: '`[1, 2, 3, 4, 5]`' },
      { key: 'B', value: '`[1, 2, 3, 5]`' },
      { key: 'C', value: '`[1, 2, 3, 4]`' },
      { key: 'D', value: '`Error`' }
    ],
    answer: 'D',
    explanation: 'The `.push` method returns the _new length_ of the array, not the array itself! By setting `newList` equal to `[1, 2, 3].push(4)`, we set `newList` equal to the new length of the array: `4`. Then, we try to use the `.push` method on `newList`. Since `newList` is the numerical value `4`, we cannot use the `.push` method: a TypeError is thrown.',
    slug: 'u9f0cgmlyexj651wvw10cugxsjzd09xl'
  },
  {
    id: 92,
    question: "What's the output?",
    snippet: 'function giveLydiaPizza() {\n' +
      "  return 'Here is pizza!'\n" +
      '}\n' +
      '\n' +
      "const giveLydiaChocolate = () => 'Here's chocolate... now go hit the gym already.'\n" +
      '\n' +
      'console.log(giveLydiaPizza.prototype)\n' +
      'console.log(giveLydiaChocolate.prototype)',
    choices: [
      {
        key: 'A',
        value: '`{ constructor: ...}` `{ constructor: ...}`'
      },
      { key: 'B', value: '`{}` `{ constructor: ...}`' },
      { key: 'C', value: '`{ constructor: ...}` `{}`' },
      { key: 'D', value: '`{ constructor: ...}` `undefined`' }
    ],
    answer: 'D',
    explanation: 'Regular functions, such as the `giveLydiaPizza` function, have a `prototype` property, which is an object (prototype object) with a `constructor` property. Arrow functions however, such as the `giveLydiaChocolate` function, do not have this `prototype` property. `undefined` gets returned when trying to access the `prototype` property using `giveLydiaChocolate.prototype`.',
    slug: 'mc36l8sm28mu9t7iq507n8udjtimjt34'
  },
  {
    id: 93,
    question: "What's the output?",
    snippet: 'const person = {\n' +
      "  name: 'Lydia',\n" +
      '  age: 21\n' +
      '}\n' +
      '\n' +
      'for (const [x, y] of Object.entries(person)) {\n' +
      '  console.log(x, y)\n' +
      '}',
    choices: [
      { key: 'A', value: '`name` `Lydia` and `age` `21`' },
      { key: 'B', value: "`['name', 'Lydia']` and `['age', 21]`" },
      { key: 'C', value: "`['name', 'age']` and `undefined`" },
      { key: 'D', value: '`Error`' }
    ],
    answer: 'A',
    explanation: "`Object.entries(person)` returns an array of nested arrays, containing the keys and objects: `[ [ 'name', 'Lydia' ], [ 'age', 21 ] ]`  Using the `for-of` loop, we can iterate over each element in the array, the subarrays in this case. We can destructure the subarrays instantly in the for-of loop, using `const [x, y]`. `x` is equal to the first element in the subarray, `y` is equal to the second element in the subarray. The first subarray is `[ 'name', 'Lydia' ]`, with `x` equal to `'name'`, and `y` equal to `'Lydia'`, which get logged. The second subarray is `[ 'age', 21 ]`, with `x` equal to `'age'`, and `y` equal to `21`, which get logged.",
    slug: 'zuixb7apdvk760571ar1anju58tom5vy'
  },
  {
    id: 94,
    question: "What's the output?",
    snippet: 'function getItems(fruitList, ...args, favoriteFruit) {\n' +
      '  return [...fruitList, ...args, favoriteFruit]\n' +
      '}\n' +
      '\n' +
      "getItems(['banana', 'apple'], 'pear', 'orange')",
    choices: [
      { key: 'A', value: "`['banana', 'apple', 'pear', 'orange']`" },
      { key: 'B', value: "`[['banana', 'apple'], 'pear', 'orange']`" },
      { key: 'C', value: "`['banana', 'apple', ['pear'], 'orange']`" },
      { key: 'D', value: '`SyntaxError`' }
    ],
    answer: 'D',
    explanation: "`...args` is a rest parameter. The rest parameter's value is an array containing all remaining arguments, **and can only be the last parameter**! In this example, the rest parameter was the second parameter. This is not possible, and will throw a syntax error. \n" +
      ' function getItems(fruitList, favoriteFruit, ...args) { \n' +
      ' return [...fruitList, ...args, favoriteFruit] \n' +
      ' } \n' +
      ' \n' +
      " getItems(['banana', 'apple'], 'pear', 'orange')\n" +
      " The above example works. This returns the array `[ 'banana', 'apple', 'orange', 'pear' ]`",
    slug: 'nrfb0btfkeetwsaalusm4afqd6751x0n'
  },
  {
    id: 95,
    question: "What's the output?",
    snippet: 'function nums(a, b) {\n' +
      '  if\n' +
      '  (a > b)\n' +
      "  console.log('a is bigger')\n" +
      '  else\n' +
      "  console.log('b is bigger')\n" +
      '  return \n' +
      '  a + b\n' +
      '}\n' +
      '\n' +
      'console.log(nums(4, 2))\n' +
      'console.log(nums(1, 2))',
    choices: [
      { key: 'A', value: '`a is bigger`, `6` and `b is bigger`, `3`' },
      {
        key: 'B',
        value: '`a is bigger`, `undefined` and `b is bigger`, `undefined`'
      },
      { key: 'C', value: '`undefined` and `undefined`' },
      { key: 'D', value: '`SyntaxError`' }
    ],
    answer: 'B',
    explanation: "In JavaScript, we don't _have_ to write the semicolon (`;`) explicitly, however the JavaScript engine still adds them after statements. This is called **Automatic Semicolon Insertion**. A statement can for example be variables, or keywords like `throw`, `return`, `break`, etc.  Here, we wrote a `return` statement, and another value `a + b` on a _new line_. However, since it's a new line, the engine doesn't know that it's actually the value that we wanted to return. Instead, it automatically added a semicolon after `return`. You could see this as: \n" +
      ' return; \n' +
      ' a + b \n' +
      ' \n' +
      ' This means that `a + b` is never reached, since a function stops running after the `return` keyword. If no value gets returned, like here, the function returns `undefined`. Note that there is no automatic insertion after `if/else` statements!',
    slug: 'op4u7rvslxds7iz11pleblmg6y5ub3bp'
  },
  {
    id: 96,
    question: "What's the output?",
    snippet: 'class Person {\n' +
      '  constructor() {\n' +
      "    this.name = 'Lydia'\n" +
      '  }\n' +
      '}\n' +
      '\n' +
      'Person = class AnotherPerson {\n' +
      '  constructor() {\n' +
      "    this.name = 'Sarah'\n" +
      '  }\n' +
      '}\n' +
      '\n' +
      'const member = new Person()\n' +
      'console.log(member.name)',
    choices: [
      { key: 'A', value: "`'Lydia'`" },
      { key: 'B', value: "`'Sarah'`" },
      { key: 'C', value: '`Error: cannot redeclare Person`' },
      { key: 'D', value: '`SyntaxError`' }
    ],
    answer: 'B',
    explanation: "We can set classes equal to other classes/function constructors. In this case, we set `Person` equal to `AnotherPerson`. The name on this constructor is `Sarah`, so the name property on the new `Person` instance `member` is `'Sarah'`.",
    slug: 'cv9m8g96rcu260dezdmi16h5y4jz8m9x'
  },
  {
    id: 97,
    question: "What's the output?",
    snippet: 'const info = {\n' +
      "  [Symbol('a')]: 'b'\n" +
      '}\n' +
      '\n' +
      'console.log(info)\n' +
      'console.log(Object.keys(info))',
    choices: [
      {
        key: 'A',
        value: "`{Symbol('a'): 'b'}` and `['{Symbol('a')']`"
      },
      { key: 'B', value: '`{}` and `[]`' },
      { key: 'C', value: "`{ a: 'b' }` and `['a']`" },
      { key: 'D', value: "`{Symbol('a'): 'b'}` and `[]`" }
    ],
    answer: 'D',
    explanation: "A Symbol is not _enumerable_. The Object.keys method returns all _enumerable_ key properties on an object. The Symbol won't be visible, and an empty array is returned. When logging the entire object, all properties will be visible, even non-enumerable ones.This is one of the many qualities of a symbol: besides representing an entirely unique value (which prevents accidental name collision on objects, for example when working with 2 libraries that want to add properties to the same object), you can also 'hide' properties on objects this way (although not entirely. You can still access symbols using the `Object.getOwnPropertySymbols()` method).",
    slug: '6030vonmzztivi8i6goouxvmxqdoqro1'
  },
  {
    id: 98,
    question: "What's the output?",
    snippet: 'const getList = ([x, ...y]) => [x, y]\n' +
      'const getUser = user => { name: user.name, age: user.age }\n' +
      '\n' +
      'const list = [1, 2, 3, 4]\n' +
      "const user = { name: 'Lydia', age: 21 }\n" +
      '\n' +
      'console.log(getList(list))\n' +
      'console.log(getUser(user))',
    choices: [
      { key: 'A', value: '`[1, [2, 3, 4]]` and `undefined`' },
      {
        key: 'B',
        value: "`[1, [2, 3, 4]]` and `{ name: 'Lydia', age: 21 }`"
      },
      {
        key: 'C',
        value: "`[1, 2, 3, 4]` and `{ name: 'Lydia', age: 21 }`"
      },
      { key: 'D', value: "`Error` and `{ name: 'Lydia', age: 21 }`" }
    ],
    answer: 'A',
    explanation: "The `getList` function receives an array as its argument. Between the parentheses of the `getList` function, we destructure this array right away. You could see this as: `[x, ...y] = [1, 2, 3, 4]` With the rest parameter `...y`, we put all 'remaining' arguments in an array. The remaining arguments are `2`, `3` and `4` in this case. The value of `y` is an array, containing all the rest parameters. The value of `x` is equal to `1` in this case, so when we log `[x, y]`, `[1, [2, 3, 4]]` gets logged. The `getUser` function receives an object. With arrow functions, we don't _have_ to write curly brackets if we just return one value. However, if you want to return an _object_ from an arrow function, you have to write it between parentheses, otherwise no value gets returned! The following function would have returned an object: ```const getUser = user => ({ name: user.name, age: user.age })``` Since no value gets returned in this case, the function returns `undefined`.",
    slug: 'n23b9yw7939pnlo655msjbg6zntzdx4u'
  },
  {
    id: 99,
    question: "What's the output?",
    snippet: "const name = 'Lydia'\n\nconsole.log(name())",
    choices: [
      { key: 'A', value: '`SyntaxError`' },
      { key: 'B', value: '`ReferenceError`' },
      { key: 'C', value: '`TypeError`' },
      { key: 'D', value: '`undefined`' }
    ],
    answer: 'C',
    explanation: "The variable `name` holds the value of a string, which is not a function, thus cannot invoke.  TypeErrors get thrown when a value is not of the expected type. JavaScript expected `name` to be a function since we're trying to invoke it. It was a string however, so a TypeError gets thrown: name is not a function! SyntaxErrors get thrown when you've written something that isn't valid JavaScript, for example when you've written the word `return` as `retrun`. ReferenceErrors get thrown when JavaScript isn't able to find a reference to a value that you're trying to access.",
    slug: 'ivxjkdwal91awqif52zpn138yua3b0wu'
  },
  {
    id: 100,
    question: "What's the value of output?",
    snippet: '// 🎉✨ This is my 100th question! ✨🎉\n' +
      '\n' +
      "const output = `${[] && 'Im'}possible!\n" +
      "You should${'' && `n't`} see a therapist after so much JavaScript lol`",
    choices: [
      {
        key: 'A',
        value: '`possible! You should see a therapist after so much JavaScript lol`'
      },
      {
        key: 'B',
        value: '`Impossible! You should see a therapist after so much JavaScript lol`'
      },
      {
        key: 'C',
        value: "`possible! You shouldn't see a therapist after so much JavaScript lol`"
      },
      {
        key: 'D',
        value: "`Impossible! You shouldn't see a therapist after so much JavaScript lol`"
      }
    ],
    answer: 'B',
    explanation: "`[]` is a truthy value. With the `&&` operator, the right-hand value will be returned if the left-hand value is a truthy value. In this case, the left-hand value `[]` is a truthy value, so `'Im'` gets returned. `'` is a falsy value. If the left-hand value is falsy, nothing gets returned. `n't` doesn't get returned.",
    slug: '4lvxanj16qg8ar9vqqyvlwl1vitgt6pv'
  },
  {
    id: 101,
    question: "What's the value of output?",
    snippet: 'const one = (false || {} || null)\n' +
      "const two = (null || false || ')\n" +
      'const three = ([] || 0 || true)\n' +
      '\n' +
      'console.log(one, two, three)',
    choices: [
      { key: 'A', value: '`false` `null` `[]`' },
      { key: 'B', value: "`null` `'` `true`" },
      { key: 'C', value: "`{}` `'` `[]`" },
      { key: 'D', value: '`null` `null` `true`' }
    ],
    answer: 'C',
    explanation: "With the `||` operator, we can return the first truthy operand. If all values are falsy, the last operand gets returned. `(false || {} || null)`: the empty object `{}` is a truthy value. This is the first (and only) truthy value, which gets returned. `one` is equal to `{}`. `(null || false || ')`: all operands are falsy values. This means that the past operand, `'` gets returned. `two` is equal to `'`. `([] || 0 || ')`: the empty array`[]` is a truthy value. This is the first truthy value, which gets returned. `three` is equal to `[]`.",
    slug: 'q0ai5iwoukb8t24qiq1tja6hip1qk74y'
  },
  {
    id: 102,
    question: "What's the value of output?",
    snippet: "const myPromise = () => Promise.resolve('I have resolved!')\n" +
      '\n' +
      'function firstFunction() {\n' +
      '  myPromise().then(res => console.log(res))\n' +
      "  console.log('second')\n" +
      '}\n' +
      '\n' +
      'async function secondFunction() {\n' +
      '  console.log(await myPromise())\n' +
      "  console.log('second')\n" +
      '}\n' +
      '\n' +
      'firstFunction()\n' +
      'secondFunction()',
    choices: [
      {
        key: 'A',
        value: '`I have resolved!`, `second` and `I have resolved!`, `second`'
      },
      {
        key: 'B',
        value: '`second`, `I have resolved!` and `second`, `I have resolved!`'
      },
      {
        key: 'C',
        value: '`I have resolved!`, `second` and `second`, `I have resolved!`'
      },
      {
        key: 'D',
        value: '`second`, `I have resolved!` and `I have resolved!`, `second`'
      }
    ],
    answer: 'D',
    explanation: "With a promise, we basically say _I want to execute this function, but I'll put it aside for now while it's running since this might take a while. Only when a certain value is resolved (or rejected), and when the call stack is empty, I want to use this value._ We can get this value with both `.then` and the `await` keyword in an `async` function. Although we can get a promise's value with both `.then` and `await`, they work a bit differently. In the `firstFunction`, we (sort of) put the myPromise function aside while it was running, but continued running the other code, which is `console.log('second')` in this case. Then, the function resolved with the string `I have resolved`, which then got logged after it saw that the callstack was empty. With the await keyword in `secondFunction`, we literally pause the execution of an async function until the value has been resolved before moving to the next line. This means that it waited for the `myPromise` to resolve with the value `I have resolved`, and only once that happened, we moved to the next line: `second` got logged.",
    slug: 'na0ss8hamjlzm4fvocsgp25f7lod6akm'
  },
  {
    id: 103,
    question: "What's the value of output?",
    snippet: 'const set = new Set()\n' +
      '\n' +
      'set.add(1)\n' +
      "set.add('Lydia')\n" +
      "set.add({ name: 'Lydia' })\n" +
      '\n' +
      'for (let item of set) {\n' +
      '  console.log(item + 2)\n' +
      '}',
    choices: [
      { key: 'A', value: '`3`, `NaN`, `NaN`' },
      { key: 'B', value: '`3`, `7`, `NaN`' },
      { key: 'C', value: '`3`, `Lydia2`, `[object Object]2`' },
      { key: 'D', value: "`'12'`, `Lydia2`, `[object Object]2`" }
    ],
    answer: 'C',
    explanation: "The `+` operator is not only used for adding numerical values, but we can also use it to concatenate strings. Whenever the JavaScript engine sees that one or more values are not a number, it coerces the number into a string. The first one is `1`, which is a numerical value. `1 + 2` returns the number 3. However, the second one is a string `'Lydia'`. `'Lydia'` is a string and `2` is a number: `2` gets coerced into a string. `'Lydia'` and `'2'` get concatenated, which results in the string `'Lydia2'`. `{ name: 'Lydia' }` is an object. Neither a number nor an object is a string, so it stringifies both. Whenever we stringify a regular object, it becomes `'[object Object]'`. `'[object Object]'` concatenated with `'2'` becomes `'[object Object]2'`.",
    slug: '7qj9hexhzb5zyf4a2ytkqame0xovlbhm'
  },
  {
    id: 104,
    question: "What's its value?",
    snippet: 'Promise.resolve(5)',
    choices: [
      { key: 'A', value: '`5`' },
      { key: 'B', value: '`Promise {<pending>: 5}`' },
      { key: 'C', value: '`Promise {<resolved>: 5}`' },
      { key: 'D', value: '`Error`' }
    ],
    answer: 'C',
    explanation: "We can pass any type of value we want to `Promise.resolve`, either a promise or a non-promise. The method itself returns a promise with the resolved value. If you pass a regular function, it'll be a resolved promise with a regular value. If you pass a promise, it'll be a resolved promise with the resolved value of that passed promise. In this case, we just passed the numerical value `5`. It returns a resolved promise with the value `5`. ",
    slug: '7x9x2r8uea1ewi7cb5s381j9twhmwqdl'
  },
  {
    id: 105,
    question: "What's its value?",
    snippet: 'function compareMembers(person1, person2 = person) {\n' +
      '  if (person1 !== person2) {\n' +
      "    console.log('Not the same!')\n" +
      '  } else {\n' +
      "    console.log('They are the same!')\n" +
      '  }\n' +
      '}\n' +
      '\n' +
      "const person = { name: 'Lydia' }\n" +
      '\n' +
      'compareMembers(person)',
    choices: [
      { key: 'A', value: '`Not the same!`' },
      { key: 'B', value: '`They are the same!`' },
      { key: 'C', value: '`ReferenceError`' },
      { key: 'D', value: '`SyntaxError`' }
    ],
    answer: 'B',
    explanation: "Objects are passed by reference. When we check objects for strict equality (`===`), we're comparing their references. We set the default value for `person2` equal to the `person` object, and passed the `person` object as the value for `person1`. This means that both values have a reference to the same spot in memory, thus they are equal. The code block in the `else` statement gets run, and `They are the same!` gets logged.",
    slug: 'pphi32gvc4167mytp9tt8b6ahvrmih9q'
  },
  {
    id: 106,
    question: "What's its value?",
    snippet: 'const colorConfig = {\n' +
      '  red: true,\n' +
      '  blue: false,\n' +
      '  green: true,\n' +
      '  black: true,\n' +
      '  yellow: false,\n' +
      '}\n' +
      '\n' +
      "const colors = ['pink', 'red', 'blue']\n" +
      '\n' +
      'console.log(colorConfig.colors[1])',
    choices: [
      { key: 'A', value: '`true`' },
      { key: 'B', value: '`false`' },
      { key: 'C', value: '`undefined`' },
      { key: 'D', value: '`TypeError`' }
    ],
    answer: 'D',
    explanation: "In JavaScript, we have two ways to access properties on an object: bracket notation, or dot notation. In this example, we use dot notation (`colorConfig.colors`) instead of bracket notation (`colorConfig['colors']`). With dot notation, JavaScript tries to find the property on the object with that exact name. In this example, JavaScript tries to find a property called `colors` on the `colorConfig` object. There is no property called `colors`, so this returns `undefined`. Then, we try to access the value of the first element by using `[1]`. We cannot do this on a value that's `undefined`, so it throws a `TypeError`: `Cannot read property '1' of undefined`. JavaScript interprets (or unboxes) statements. When we use bracket notation, it sees the first opening bracket `[` and keeps going until it finds the closing bracket `]`. Only then, it will evaluate the statement. If we would've used `colorConfig[colors[1]]`, it would have returned the value of the `red` property on the `colorConfig` object. ",
    slug: 'tvrtjzgnmgvxqpe9zq8o8tj7sdmwvwpe'
  },
  {
    id: 107,
    question: "What's its value?",
    snippet: "console.log('❤️' === '❤️')",
    choices: [ { key: 'A', value: '`true`' }, { key: 'B', value: '`false`' } ],
    answer: 'A',
    explanation: "Under the hood, emojis are unicodes. The unicodes for the heart emoji is `'U+2764 U+FE0F'`. These are always the same for the same emojis, so we're comparing two equal strings to each other, which returns true.",
    slug: 'idyuien7hn8ukm8k319171mgmn7p0adi'
  },
  {
    id: 108,
    question: 'Which of these methods modifies the original array?',
    snippet: "const emojis = ['✨', '🥑', '😍']\n" +
      '\n' +
      "emojis.map(x => x + '✨')\n" +
      "emojis.filter(x => x !== '🥑')\n" +
      "emojis.find(x => x !== '🥑')\n" +
      "emojis.reduce((acc, cur) => acc + '✨')\n" +
      "emojis.slice(1, 2, '✨') \n" +
      "emojis.splice(1, 2, '✨')",
    choices: [
      { key: 'A', value: '`All of them`' },
      { key: 'B', value: '`map` `reduce` `slice` `splice`' },
      { key: 'C', value: '`map` `slice` `splice` ' },
      { key: 'D', value: '`splice`' }
    ],
    answer: 'D',
    explanation: "With `splice` method, we modify the original array by deleting, replacing or adding elements. In this case, we removed 2 items from index 1 (we removed `'🥑'` and `'😍'`) and added the ✨ emoji instead. `map`, `filter` and `slice` return a new array, `find` returns an element, and `reduce` returns a reduced value.",
    slug: '9tscmrm75bj6md4nz5qp2du8bonqpnq4'
  },
  {
    id: 109,
    question: "What's the output?",
    snippet: "const food = ['🍕', '🍫', '🥑', '🍔']\n" +
      'const info = { favoriteFood: food[0] }\n' +
      '\n' +
      "info.favoriteFood = '🍝'\n" +
      '\n' +
      'console.log(food)',
    choices: [
      { key: 'A', value: "`['🍕', '🍫', '🥑', '🍔']`" },
      { key: 'B', value: "`['🍝', '🍫', '🥑', '🍔']`" },
      { key: 'C', value: "`['🍝', '🍕', '🍫', '🥑', '🍔']` " },
      { key: 'D', value: '`ReferenceError`' }
    ],
    answer: 'A',
    explanation: "We set the value of the `favoriteFood` property on the `info` object equal to the string with the pizza emoji, `'🍕'`. A string is a primitive data type. In JavaScript, primitive data types act by reference. In JavaScript, primitive data types (everything that's not an object) interact by _value_. In this case, we set the value of the `favoriteFood` property on the `info` object equal to the value of the first element in the `food` array, the string with the pizza emoji in this case (`'🍕'`). A string is a primitive data type, and interact by value (see my [blogpost](https://www.theavocoder.com/complete-javascript/2018/12/21/by-value-vs-by-reference) if you're interested in learning more).Then, we change the value of the `favoriteFood` property on the `info` object. The `food` array hasn't changed, since the value of `favoriteFood` was merely a _copy_ of the value of the first element in the array, and doesn't have a reference to the same spot in memory as the element on `food[0]`. When we log food, it's still the original array, `['🍕', '🍫', '🥑', '🍔']`.",
    slug: 'ha5tbedzyg1cwg2yr80ptves3bw203vw'
  },
  {
    id: 110,
    question: 'What does this method do?',
    snippet: 'JSON.parse()',
    choices: [
      { key: 'A', value: 'Parses JSON to a JavaScript value' },
      { key: 'B', value: 'Parses a JavaScript object to JSON' },
      { key: 'C', value: 'Parses any JavaScript value to JSON' },
      { key: 'D', value: 'Parses JSON to a JavaScript object only' }
    ],
    answer: 'A',
    explanation: 'With the `JSON.parse()` method, we can parse JSON string to a JavaScript value. \n' +
      '\n' +
      ' // Stringifying a number into valid JSON, then parsing the JSON string to a JavaScript value: \n' +
      " const jsonNumber = JSON.stringify(4) // '4' \n" +
      ' JSON.parse(jsonNumber) // 4 \n' +
      ' // Stringifying an array value into valid JSON, then parsing the JSON string to a JavaScript value: \n' +
      " const jsonArray = JSON.stringify([1, 2, 3]) // '[1, 2, 3]' \n" +
      ' JSON.parse(jsonArray) // [1, 2, 3] \n' +
      ' // Stringifying an object  into valid JSON, then parsing the JSON string to a JavaScript value: \n' +
      " const jsonArray = JSON.stringify({ name: 'Lydia' }) // '  \n" +
      "{'name':'Lydia'}' \n" +
      " JSON.parse(jsonArray) // { name: 'Lydia' } \n",
    slug: 'j3uqsb2rf4u626dzpsm3kr8nrfmb8153'
  },
  {
    id: 111,
    question: "What's the output?",
    snippet: "let name = 'Lydia'\n" +
      '\n' +
      'function getName() {\n' +
      '  console.log(name)\n' +
      "  let name = 'Sarah'\n" +
      '}\n' +
      '\n' +
      'getName()',
    choices: [
      { key: 'A', value: 'Lydia' },
      { key: 'B', value: 'Sarah' },
      { key: 'C', value: '`undefined`' },
      { key: 'D', value: '`ReferenceError`' }
    ],
    answer: 'D',
    explanation: "Each function has its own _execution context_ (or _scope_). The `getName` function first looks within its own context (scope) to see if it contains the variable `name` we're trying to access. In this case, the `getName` function contains its own `name` variable: we declare the variable `name` with the `let` keyword, and with the value of `'Sarah'`. Variables with the `let` keyword (and `const`) are hoisted, but unlike `var`, don't get <i>initialized</i>. They are not accessible before the line we declare (initialize) them. This is called the 'temporal dead zone'. When we try to access the variables before they are declared, JavaScript throws a `ReferenceError`. If we wouldn't have declared the `name` variable within the `getName` function, the javascript engine would've looked down the _scope chain_. The outer scope has a variable called `name` with the value of `Lydia`. In that case, it would've logged `Lydia`. \n" +
      '\n' +
      " let name = 'Lydia' \n" +
      '\n' +
      'function getName() { \n' +
      '  console.log(name) \n' +
      ' } \n' +
      '\n' +
      ' getName() // Lydia \n',
    slug: 'f2it25npnaoo7gxagzr78kps8fw5luka'
  },
  {
    id: 112,
    question: "What's the output?",
    snippet: 'function* generatorOne() {\n' +
      "  yield ['a', 'b', 'c'];\n" +
      '}\n' +
      '\n' +
      'function* generatorTwo() {\n' +
      "  yield* ['a', 'b', 'c'];\n" +
      '}\n' +
      '\n' +
      'const one = generatorOne()\n' +
      'const two = generatorTwo()\n' +
      '\n' +
      'console.log(one.next().value)\n' +
      'console.log(two.next().value)',
    choices: [
      { key: 'A', value: '`a` and `a`' },
      { key: 'B', value: '`a` and `undefined`' },
      { key: 'C', value: "`['a', 'b', 'c']` and `a`" },
      { key: 'D', value: "`a` and `['a', 'b', 'c']`" }
    ],
    answer: 'C',
    explanation: "With the `yield` keyword, we `yield` values in a generator function. With the `yield*` keyword, we can yield values from another generator function, or iterable object (for example an array). In `generatorOne`, we yield the entire array `['a', 'b', 'c']` using the `yield` keyword. The value of `value` property on the object returned by the `next` method on `one` (`one.next().value`) is equal to the entire array `['a', 'b', 'c']`. \n" +
      " console.log(one.next().value) // ['a', 'b', 'c'] \n" +
      ' console.log(one.next().value) // undefined \n' +
      ' \n' +
      " In `generatorTwo`, we use the `yield*` keyword. This means that the first yielded value of `two`, is equal to the first yielded value in the iterator. The iterator is the array `['a', 'b', 'c']`. The first yielded value is `a`, so the first time we call `two.next().value`, `a` is returned. \n" +
      " console.log(two.next().value) // 'a' \n" +
      " console.log(two.next().value) // 'b' \n" +
      " console.log(two.next().value) // 'c' \n" +
      ' console.log(two.next().value) // undefined \n' +
      '\n',
    slug: 'aaexck9v91i6j3ykq4dnv0h8wa8qmq4e'
  },
  {
    id: 113,
    question: "What's the output?",
    snippet: "console.log(`${(x => x)('I love')} to program`)",
    choices: [
      { key: 'A', value: '`I love to program`' },
      { key: 'B', value: '`undefined to program`' },
      { key: 'C', value: "`${(x => x)('I love') to program`" },
      { key: 'D', value: '`TypeError`' }
    ],
    answer: 'A',
    explanation: "Expressions within template literals are evaluated first. This means that the string will contain the returned value of the expression, the immediately invoked function `(x => x)('I love')` in this case. We pass the value `'I love'` as an argument to the `x => x` arrow function. `x` is equal to `'I love'`, which gets returned. This results in `I love to program`.",
    slug: 'kh3bk8su0663nar09yjc33i4q92pmwjk'
  },
  {
    id: 114,
    question: "What's the output?",
    snippet: 'let config = {\n' +
      '  alert: setInterval(() => {\n' +
      "    console.log('Alert!')\n" +
      '  }, 1000)\n' +
      '}\n' +
      '\n' +
      'config = null',
    choices: [
      {
        key: 'A',
        value: "The `setInterval` callback won't be invoked"
      },
      {
        key: 'B',
        value: 'The `setInterval` callback gets invoked once'
      },
      {
        key: 'C',
        value: 'The `setInterval` callback will still be called every second'
      },
      {
        key: 'D',
        value: 'We never invoked `config.alert()`, config is `null`'
      }
    ],
    answer: 'C',
    explanation: "Normally when we set objects equal to `null`, those objects get _garbage collected_ as there is no reference anymore to that object. However, since the callback function within `setInterval` is an arrow function (thus bound to the `config` object), the callback function still holds a reference to the `config` object. As long as there is a reference, the object won't get garbage collected. Since it's not garbage collected, the `setInterval` callback function will still get invoked every 1000ms (1s).",
    slug: 'r0dhtby4u2ahxlhjobele81pjyka2yt0'
  },
  {
    id: 115,
    question: "Which method(s) will return the value `'Hello world!'`?",
    snippet: 'const myMap = new Map()\n' +
      "const myFunc = () => 'greeting'\n" +
      '\n' +
      "myMap.set(myFunc, 'Hello world!')\n" +
      '\n' +
      '//1\n' +
      "myMap.get('greeting')\n" +
      '//2\n' +
      'myMap.get(myFunc)\n' +
      '//3\n' +
      "myMap.get(() => 'greeting')",
    choices: [
      { key: 'A', value: '1' },
      { key: 'B', value: '2' },
      { key: 'C', value: '2 and 3' },
      { key: 'D', value: 'All of them' }
    ],
    answer: 'B',
    explanation: "When adding a key/value pair using the `set` method, the key will be the value of the first argument passed to the `set` function, and the value will be the second argument passed to the `set` function. The key is the _function_ `() => 'greeting'` in this case, and the value `'Hello world'`. `myMap` is now `{ () => 'greeting' => 'Hello world!' }`. 1 is wrong, since the key is not `'greeting'` but `() => 'greeting'`. 3 is wrong, since we're creating a new function by passing it as a parameter to the `get` method. Object interact by _reference_. Functions are objects, which is why two functions are never strictly equal, even if they are identical: they have a reference to a different spot in memory.",
    slug: '2rxx9fpugc8h7r41850bx37bl4zgpjkm'
  },
  {
    id: 116,
    question: "What's the output?",
    snippet: 'const person = {\n' +
      "  name: 'Lydia',\n" +
      '  age: 21\n' +
      '}\n' +
      '\n' +
      'const changeAge = (x = { ...person }) => x.age += 1\n' +
      'const changeAgeAndName = (x = { ...person }) => {\n' +
      '  x.age += 1\n' +
      "  x.name = 'Sarah'\n" +
      '}\n' +
      '\n' +
      'changeAge(person)\n' +
      'changeAgeAndName()\n' +
      '\n' +
      'console.log(person)',
    choices: [
      { key: 'A', value: "`{name: 'Sarah', age: 22}`" },
      { key: 'B', value: "`{name: 'Sarah', age: 23}`" },
      { key: 'C', value: "`{name: 'Lydia', age: 22}`" },
      { key: 'D', value: "`{name: 'Lydia', age: 23}`" }
    ],
    answer: 'C',
    explanation: "Both the `changeAge` and `changeAgeAndName` functions have a default parameter, namely a _newly_ created object `{ ...person }`. This object has copies of all the key/values in the `person` object. First, we invoke the `changeAge` function and pass the `person` object as its argument. This function increases the value of the `age` property by 1. `person` is now `{ name: 'Lydia', age: 22 }`. Then, we invoke the `changeAgeAndName` function, however we don't pass a parameter. Instead, the value of `x` is equal to a _new_ object: `{ ...person }`. Since it's a new object, it doesn't affect the values of the properties on the `person` object. `person` is still equal to `{ name: 'Lydia', age: 22 }`.",
    slug: '01wd26ldymmertagd602o0e35guzpk2r'
  },
  {
    id: 117,
    question: 'Which of the following options will return `6`?',
    snippet: 'function sumValues(x, y, z) {\n  return x + y + z;\n}',
    choices: [
      { key: 'A', value: '`sumValues([...1, 2, 3])`' },
      { key: 'B', value: '`sumValues([...[1, 2, 3]])`' },
      { key: 'C', value: '`sumValues(...[1, 2, 3])`' },
      { key: 'D', value: '`sumValues([1, 2, 3])`' }
    ],
    answer: 'C',
    explanation: 'With the spread operator `...`, we can _spread_ iterables to individual elements. The `sumValues` function receives three arguments: `x`, `y` and `z`. `...[1, 2, 3]` will result in `1, 2, 3`, which we pass to the `sumValues` function.',
    slug: '1kramzrdn86z99dh7rkzjol2k9ux9def'
  },
  {
    id: 118,
    question: "What's the output?",
    snippet: 'let num = 1;\n' +
      "const list = ['🥳', '🤠', '🥰', '🤪'];\n" +
      '\n' +
      'console.log(list[(num += 1)]);',
    choices: [
      { key: 'A', value: '`🤠`' },
      { key: 'B', value: '`🥰`' },
      { key: 'C', value: '`SyntaxError`' },
      { key: 'D', value: '`ReferenceError`' }
    ],
    answer: 'B',
    explanation: "With the `+=` operand, we're incrementing the value of `num` by `1`. `num` had the initial value `1`, so `1 + 1` is `2`. The item on the second index in the `list` array is 🥰, `console.log(list[2])` prints 🥰.",
    slug: '46t9lkoa6eu92pvikbus70ny4fezr3mg'
  },
  {
    id: 119,
    question: "What's the output?",
    snippet: 'const person = {\n' +
      "  firstName: 'Lydia',\n" +
      "  lastName: 'Hallie',\n" +
      '  pet: {\n' +
      "    name: 'Mara',\n" +
      "    breed: 'Dutch Tulip Hound'\n" +
      '  },\n' +
      '  getFullName() {\n' +
      '    return `${this.firstName} ${this.lastName}`;\n' +
      '  }\n' +
      '};\n' +
      '\n' +
      'console.log(person.pet?.name);\n' +
      'console.log(person.pet?.family?.name);\n' +
      'console.log(person.getFullName?.());\n' +
      'console.log(member.getLastName?.());',
    choices: [
      {
        key: 'A',
        value: '`undefined` `undefined` `undefined` `undefined`'
      },
      {
        key: 'B',
        value: '`Mara` `undefined` `Lydia Hallie` `undefined`'
      },
      { key: 'C', value: '`Mara` `null` `Lydia Hallie` `null`' },
      {
        key: 'D',
        value: '`null` `ReferenceError` `null` `ReferenceError`'
      }
    ],
    answer: 'B',
    explanation: "With the optional chaining operator `?.`, we no longer have to explicitly check whether the deeper nested values are valid or not. If we're trying to access a property on an `undefined` or `null` value (_nullish_), the expression short-circuits and returns `undefined`. `person.pet?.name`: `person` has a property named `pet`: `person.pet` is not nullish. It has a property called `name`, and returns `Mara`. `person.pet?.family?.name`: `person` has a property named `pet`: `person.pet` is not nullish. `pet` does _not_ have a property called `family`, `person.pet.family` is nullish. The expression returns `undefined`. `person.getFullName?.()`: `person` has a property named `getFullName`: `person getFullName()` is not nullish and can get invoked, which returns `Lydia Hallie`. `member.getLastName?.()`: `member` is not defined: `member.getLastName()` is nullish. The expression returns `undefined`.",
    slug: '7afk07wy442xse98fmtcxdreg7ros6gl'
  },
  {
    id: 120,
    question: "What's the output?",
    snippet: "const groceries = ['banana', 'apple', 'peanuts'];\n" +
      '\n' +
      "if (groceries.indexOf('banana')) {\n" +
      "  console.log('We have to buy bananas!');\n" +
      '} else {\n' +
      "  console.log(`We don't have to buy bananas!`);\n" +
      '}',
    choices: [
      { key: 'A', value: 'We have to buy bananas!' },
      { key: 'B', value: "We don't have to buy bananas" },
      { key: 'C', value: '`undefined`' },
      { key: 'D', value: '`1`' }
    ],
    answer: 'B',
    explanation: "We passed the condition `groceries.indexOf('banana')` to the if-statement. `groceries.indexOf('banana')` returns `0`, which is a falsy value. Since the condition in the if-statement is falsy, the code in the `else` block runs, and `We don't have to buy bananas!` gets logged.",
    slug: '4rotks7a5bckz3m5852bvr56d1oq8l83'
  },
  {
    id: 121,
    question: "What's the output?",
    snippet: 'const config = {\n' +
      '  languages: [],\n' +
      '  set language(lang) {\n' +
      '    return this.languages.push(lang);\n' +
      '  }\n' +
      '};\n' +
      '\n' +
      'console.log(config.language);',
    choices: [
      {
        key: 'A',
        value: '`function language(lang) { this.languages.push(lang }`'
      },
      { key: 'B', value: '`0`' },
      { key: 'C', value: '`[]`' },
      { key: 'D', value: '`undefined`' }
    ],
    answer: 'D',
    explanation: "The `language` method is a `setter`. Setters don't hold an actual value, their purpose is to _modify_ properties. When calling a `setter` method, `undefined` gets returned.",
    slug: 'yht2ibjqtjqjhyp7o8hl3qsr1b3m8xs6'
  },
  {
    id: 122,
    question: "What's the output?",
    snippet: "const name = 'Lydia Hallie';\n" +
      '\n' +
      "console.log(!typeof name === 'object');\n" +
      "console.log(!typeof name === 'string');",
    choices: [
      { key: 'A', value: '`false` `true`' },
      { key: 'B', value: '`true` `false`' },
      { key: 'C', value: '`false` `false`' },
      { key: 'D', value: '`true` `true`' }
    ],
    answer: 'C',
    explanation: "`typeof name` returns `'string'`. The string `'string'` is a truthy value, so `!typeof name` returns the boolean value `false`. `false === 'object'` and `false === 'string'` both return`false`.(If we wanted to check whether the type was (un)equal to a certain type, we should've written `!==` instead of `!typeof`)",
    slug: 'e5jlg1qy9h2avre40mjxzv1f84hj0lzz'
  },
  {
    id: 123,
    question: "What's the output?",
    snippet: 'const add = x => y => z => {\n' +
      '  console.log(x, y, z);\n' +
      '  return x + y + z;\n' +
      '};\n' +
      '\n' +
      'add(4)(5)(6);',
    choices: [
      { key: 'A', value: '`4` `5` `6`' },
      { key: 'B', value: '`6` `5` `4`' },
      { key: 'C', value: '`4` `function` `function`' },
      { key: 'D', value: '`undefined` `undefined` `6`' }
    ],
    answer: 'A',
    explanation: "The `add` function returns an arrow function, which returns an arrow function, which returns an arrow function (still with me?). The first function receives an argument `x` with the value of `4`. We invoke the second function, which receives an argument `y` with the value `5`. Then we invoke the third function, which receives an argument `z` with the value `6`. When we're trying to access the value `x`, `y` and `z` within the last arrow function, the JS engine goes up the scope chain in order to find the values for `x` and `y` accordingly. This returns `4` `5` `6`.",
    slug: 'ssr69cf0c5bvkjnv08ecpd8h9isxu9n8'
  },
  {
    id: 124,
    question: "What's the output?",
    snippet: 'async function* range(start, end) {\n' +
      '  for (let i = start; i <= end; i++) {\n' +
      '    yield Promise.resolve(i);\n' +
      '  }\n' +
      '}\n' +
      '\n' +
      '(async () => {\n' +
      '  const gen = range(1, 3);\n' +
      '  for await (const item of gen) {\n' +
      '    console.log(item);\n' +
      '  }\n' +
      '})();',
    choices: [
      { key: 'A', value: '`Promise {1}` `Promise {2}` `Promise {3}`' },
      {
        key: 'B',
        value: '`Promise {<pending>}` `Promise {<pending>}` `Promise {<pending>}`'
      },
      { key: 'C', value: '`1` `2` `3`' },
      { key: 'D', value: '`undefined` `undefined` `undefined`' }
    ],
    answer: 'C',
    explanation: "The generator function `range` returns an async object with promises for each item in the range we pass: `Promise{1}`, `Promise{2}`, `Promise{3}`. We set the variable `gen` equal to the async object, after which we loop over it using a `for await ... of` loop. We set the variable `item` equal to the returned Promise values: first `Promise{1}`, then `Promise{2}`, then `Promise{3}`. Since we're _awaiting_ the value of `item`, the resolved promsie, the resolved _values_ of the promises get returned: `1`, `2`, then `3`.",
    slug: 'yxvmbatnxrvzqxnu5b7ag4ayqrjs5cc1'
  },
  {
    id: 125,
    question: "What's the output?",
    snippet: 'const myFunc = ({ x, y, z }) => {\n' +
      '  console.log(x, y, z);\n' +
      '};\n' +
      '\n' +
      'myFunc(1, 2, 3);',
    choices: [
      { key: 'A', value: '`1` `2` `3`' },
      { key: 'B', value: '`{1: 1}` `{2: 2}` `{3: 3}`' },
      { key: 'C', value: '`{ 1: undefined }` `undefined` `undefined`' },
      { key: 'D', value: '`undefined` `undefined` `undefined`' }
    ],
    answer: 'D',
    explanation: "`myFunc` expects an object with properties `x`, `y` and `z` as its argument. Since we're only passing three separate numeric values (1, 2, 3) instead of one object with properties `x`, `y` and `z` ({x: 1, y: 2, z: 3}), `x`, `y` and `z` have their default value of `undefined`.",
    slug: 'i0ljqm438egk2weq6f8yvcmwquowfhqj'
  },
  {
    id: 126,
    question: "What's the output?",
    snippet: 'function getFine(speed, amount) {\n' +
      '  const formattedSpeed = new Intl.NumberFormat({\n' +
      "    'en-US',\n" +
      "    { style: 'unit', unit: 'mile-per-hour' }\n" +
      '  }).format(speed)\n' +
      '\n' +
      '  const formattedAmount = new Intl.NumberFormat({\n' +
      "    'en-US',\n" +
      "    { style: 'currency', currency: 'USD' }\n" +
      '  }).format(amount)\n' +
      '\n' +
      '  return `The driver drove ${formattedSpeed} and has to pay ${formattedAmount}`\n' +
      '}\n' +
      '\n' +
      'console.log(getFine(130, 300))',
    choices: [
      { key: 'A', value: 'The driver drove 130 and has to pay 300' },
      {
        key: 'B',
        value: 'The driver drove 130 mph and has to pay \\$300.00'
      },
      {
        key: 'C',
        value: 'The driver drove undefined and has to pay undefined'
      },
      {
        key: 'D',
        value: 'The driver drove 130.00 and has to pay 300.00'
      }
    ],
    answer: 'B',
    explanation: 'With the `Intl.NumberFormat` method, we can format numeric values to any locale. We format the numeric value `130` to the `en-US` locale as a `unit` in `mile-per-hour`, which results in `130 mph`. The numeric value `300` to the `en-US` locale as a `currentcy` in `USD` results in `$300.00`.',
    slug: 'htff33yhyxaeff2hbso4s02fkah7r1ba'
  },
  {
    id: 127,
    question: "What's the output?",
    snippet: "const spookyItems = ['👻', '🎃', '🕸'];\n" +
      "({ item: spookyItems[3] } = { item: '💀' });\n" +
      '\n' +
      'console.log(spookyItems);',
    choices: [
      { key: 'A', value: "`['👻', '🎃', '🕸']`" },
      { key: 'B', value: "`['👻', '🎃', '🕸', '💀']`" },
      { key: 'C', value: "`['👻', '🎃', '🕸', { item: '💀' }]`" },
      { key: 'D', value: "`['👻', '🎃', '🕸', '[object Object]']`" }
    ],
    answer: 'B',
    explanation: "By destructuring objects, we can unpack values from the right-hand object, and assign the unpacked value to the value of the same property name on the left-hand object. In this case, we're assigning the value '💀' to `spookyItems[3]`. This means that we're modifying the `spookyItems` array, we're adding the '💀' to it. When logging `spookyItems`, `['👻', '🎃', '🕸', '💀']` gets logged.",
    slug: 'kkhvks4tk9j47i11stk4htmb2fbs7sek'
  },
  {
    id: 128,
    question: "What's the output?",
    snippet: "const name = 'Lydia Hallie';\n" +
      'const age = 21;\n' +
      '\n' +
      'console.log(Number.isNaN(name));\n' +
      'console.log(Number.isNaN(age));\n' +
      '\n' +
      'console.log(isNaN(name));\n' +
      'console.log(isNaN(age));',
    choices: [
      { key: 'A', value: '`true` `false` `true` `false`' },
      { key: 'B', value: '`true` `false` `false` `false`' },
      { key: 'C', value: '`false` `false` `true` `false`' },
      { key: 'D', value: '`false` `true` `false` `true`' }
    ],
    answer: 'C',
    explanation: 'With the `Number.isNaN` method, you can check if the value you pass is a _numeric value_ and equal to `NaN`. `name` is not a numeric value, so `Number.isNaN(name)` returns `false`. `age` is a numeric value, but is not equal to `NaN`, so `Number.isNaN(age)` returns `false`. With the `isNaN` method, you can check if the value you pass is not a number. `name` is not a number, so `isNaN(name)` returns true. `age` is a number, so `isNaN(age)` returns `false`.',
    slug: 'bpnzcj73bcm4jqq4e3iyb3f1znb9k2ry'
  },
  {
    id: 129,
    question: "What's the output?",
    snippet: 'const randomValue = 21;\n' +
      '\n' +
      'function getInfo() {\n' +
      '  console.log(typeof randomValue);\n' +
      "  const randomValue = 'Lydia Hallie';\n" +
      '}\n' +
      '\n' +
      'getInfo();',
    choices: [
      { key: 'A', value: "`'number'`" },
      { key: 'B', value: "`'string'`" },
      { key: 'C', value: '`undefined`' },
      { key: 'D', value: '`ReferenceError`' }
    ],
    answer: 'D',
    explanation: "Variables declared with the `const` keyword are not referencable before their initialization: this is called the _temporal dead zone_. In the `getInfo` function, the variable `randomValue` is scoped in the functional scope of `getInfo`. On the line where we want to log the value of `typeof randomValue`, the variable `randomValue` isn't initialized yet: a `ReferenceError` gets thrown! The engine didn't go down the scope chain since we declared the variable `randomValue` in the `getInfo` function.",
    slug: '1ng18205u6br6ep7w3333fp4dagout1z'
  },
  {
    id: 130,
    question: "What's the output?",
    snippet: "const myPromise = Promise.resolve('Woah some cool data');\n" +
      '\n' +
      '(async () => {\n' +
      '  try {\n' +
      '    console.log(await myPromise);\n' +
      '  } catch {\n' +
      "    throw new Error(`Oops didn't work`);\n" +
      '  } finally {\n' +
      "    console.log('Oh finally!');\n" +
      '  }\n' +
      '})();',
    choices: [
      { key: 'A', value: '`Woah some cool data`' },
      { key: 'B', value: '`Oh finally!`' },
      { key: 'C', value: '`Woah some cool data` `Oh finally!`' },
      { key: 'D', value: "`Oops didn't work` `Oh finally!`" }
    ],
    answer: 'C',
    explanation: "In the `try` block, we're logging the awaited value of the `myPromise` variable: `'Woah some cool data'`. Since no errors were thrown in the `try` block, the code in the `catch` block doesn't run. The code in the `finally` block _always_ runs, `'Oh finally!'` gets logged.",
    slug: 'e42o766u0emqpaqjiro6kkxj4943hwmf'
  },
  {
    id: 131,
    question: "What's the output?",
    snippet: "const emojis = ['🥑', ['✨', '✨', ['🍕', '🍕']]];\n" +
      '\n' +
      'console.log(emojis.flat(1));',
    choices: [
      { key: 'A', value: "`['🥑', ['✨', '✨', ['🍕', '🍕']]]`" },
      { key: 'B', value: "`['🥑', '✨', '✨', ['🍕', '🍕']]`" },
      { key: 'C', value: "`['🥑', ['✨', '✨', '🍕', '🍕']]`" },
      { key: 'D', value: "`['🥑', '✨', '✨', '🍕', '🍕']`" }
    ],
    answer: 'B',
    explanation: "With the `flat` method, we can create a new, flattened array. The depth of the flattened array depends on the value that we pass. In this case, we passed the value `1` (which we didn't have to, that's the default value), meaning that only the arrays on the first depth will be concatenated. `['🥑']` and `['✨', '✨', ['🍕', '🍕']]` in this case. Concatenating these two arrays results in `['🥑', '✨', '✨', ['🍕', '🍕']]`.",
    slug: 'fhs5t61471aua2pny6cz0ebewofl266i'
  },
  {
    id: 132,
    question: "What's the output?",
    snippet: 'class Counter {\n' +
      '  constructor() {\n' +
      '    this.count = 0;\n' +
      '  }\n' +
      '\n' +
      '  increment() {\n' +
      '    this.count++;\n' +
      '  }\n' +
      '}\n' +
      '\n' +
      'const counterOne = new Counter();\n' +
      'counterOne.increment();\n' +
      'counterOne.increment();\n' +
      '\n' +
      'const counterTwo = counterOne;\n' +
      'counterTwo.increment();\n' +
      '\n' +
      'console.log(counterOne.count);',
    choices: [
      { key: 'A', value: '`0`' },
      { key: 'B', value: '`1`' },
      { key: 'C', value: '`2`' },
      { key: 'D', value: '`3`' }
    ],
    answer: 'D',
    explanation: "`counterOne` is an instance of the `Counter` class. The counter class contains a `count` property on its constructor, and an `increment` method. First, we invoked the `increment` method twice by calling `counterOne.increment()`. Currently, `counterOne.count` is `2`. <img src='https://i.imgur.com/KxLlTm9.png' width='400'> Then, we create a new variable `counterTwo`, and set it equal to `counterOne`. Since objects interact by reference, we're just creating a new reference to the same spot in memory that `counterOne` points to. Since it has the same spot in memory, any changes made to the object that `counterTwo` has a reference to, also apply to `counterOne`. Currently, `counterTwo.count` is `2`. We invoke the `counterTwo.increment()`, which sets the `count` to `3`. Then, we log the count on `counterOne`, which logs `3`. <img src='https://i.imgur.com/BNBHXmc.png' width='400'>",
    slug: '2d8zwvj1vk1h1vga0o6kk55f38kfimts'
  },
  {
    id: 133,
    question: "What's the output?",
    snippet: "const myPromise = Promise.resolve(Promise.resolve('Promise!'));\n" +
      '\n' +
      'function funcOne() {\n' +
      '  myPromise.then(res => res).then(res => console.log(res));\n' +
      "  setTimeout(() => console.log('Timeout!', 0));\n" +
      "  console.log('Last line!');\n" +
      '}\n' +
      '\n' +
      'async function funcTwo() {\n' +
      '  const res = await myPromise;\n' +
      '  console.log(await res);\n' +
      "  setTimeout(() => console.log('Timeout!', 0));\n" +
      "  console.log('Last line!');\n" +
      '}\n' +
      '\n' +
      'funcOne();\n' +
      'funcTwo();',
    choices: [
      {
        key: 'A',
        value: '`Promise! Last line! Promise! Last line! Last line! Promise!`'
      },
      {
        key: 'B',
        value: '`Last line! Timeout! Promise! Last line! Timeout! Promise!`'
      },
      {
        key: 'C',
        value: '`Promise! Last line! Last line! Promise! Timeout! Timeout!`'
      },
      {
        key: 'D',
        value: '`Last line! Promise! Promise! Last line! Timeout! Timeout!`'
      }
    ],
    answer: 'D',
    explanation: "First, we invoke `funcOne`. On the first line of `funcOne`, we call the `myPromise` promise, which is an _asynchronous_ operation. While the engine is busy completing the promise, it keeps on running the function `funcOne`. The next line is the _asynchronous_ `setTimeout` function, from which the callback is sent to the Web API. (see my article on the event loop here.) Both the promise and the timeout are asynchronous operations, the function keeps on running while it's busy completing the promise and handling the `setTimeout` callback. This means that `Last line!` gets logged first, since this is not an asynchonous operation. This is the last line of `funcOne`, the promise resolved, and `Promise!` gets logged. However, since we're invoking `funcTwo()`, the call stack isn't empty, and the callback of the `setTimeout` function cannot get added to the callstack yet. In `funcTwo` we're, first _awaiting_ the myPromise promise. With the `await` keyword, we pause the execution of the function until the promise has resolved (or rejected). Then, we log the awaited value of `res` (since the promise itself returns a promise). This logs `Promise!`. The next line is the _asynchronous_ `setTimeout` function, from which the callback is sent to the Web API. We get to the last line of `funcTwo`, which logs `Last line!` to the console. Now, since `funcTwo` popped off the call stack, the call stack is empty. The callbacks waiting in the queue (`() => console.log('Timeout!')` from `funcOne`, and `() => console.log('Timeout!')` from `funcTwo`) get added to the call stack one by one. The first callback logs `Timeout!`, and gets popped off the stack. Then, the second callback logs `Timeout!`, and gets popped off the stack. This logs `Last line! Promise! Promise! Last line! Timeout! Timeout!`",
    slug: 'zkujmr8pq2ujpi94mshqxi7cdg328eof'
  },
  {
    id: 134,
    question: 'How can we invoke `sum` in `index.js` from `sum.js?`',
    snippet: '// sum.js\n' +
      'export default function sum(x) {\n' +
      '  return x + x;\n' +
      '}\n' +
      '\n' +
      '// index.js\n' +
      "import * as sum from './sum';",
    choices: [
      { key: 'A', value: '`sum(4)`' },
      { key: 'B', value: '`sum.sum(4)`' },
      { key: 'C', value: '`sum.default(4)`' },
      {
        key: 'D',
        value: "Default aren't imported with `*`, only named exports"
      }
    ],
    answer: 'C',
    explanation: 'With the asterisk `*`, we import all exported values from that file, both default and named. If we had the following file: \n' +
      '\n' +
      ' // info.js \n' +
      " export const name = 'Lydia'; \n" +
      ' export const age = 21; \n' +
      " export default 'I love JavaScript'; \n" +
      ' \n' +
      ' // index.js \n' +
      "  import * as info from './info'; \n" +
      ' console.log(info); \n' +
      ' The following would get logged: \n' +
      ' \n' +
      '  { \n' +
      " default: 'I love JavaScript', \n" +
      " name: 'Lydia', \n" +
      ' age: 21 \n' +
      ' } \n' +
      ' For the `sum` example, it means that the imported value `sum` looks like this: \n' +
      ' \n' +
      ' { default: function sum(x) { return x + x } } \n' +
      ' \n' +
      '  We can invoke this function, by calling `sum.default`',
    slug: '88cqv3hf2iznq6t53j319d2emdq074hy'
  },
  {
    id: 135,
    question: "What's the output?",
    snippet: 'const handler = {\n' +
      "  set: () => console.log('Added a new property!'),\n" +
      "  get: () => console.log('Accessed a property!')\n" +
      '};\n' +
      '\n' +
      'const person = new Proxy({}, handler);\n' +
      '\n' +
      "person.name = 'Lydia';\n" +
      'person.name;',
    choices: [
      { key: 'A', value: '`Added a new property!`' },
      { key: 'B', value: '`Accessed a property!`' },
      {
        key: 'C',
        value: '`Added a new property!` `Accessed a property!`'
      },
      { key: 'D', value: 'Nothing gets logged' }
    ],
    answer: 'C',
    explanation: "With a Proxy object, we can add custom behavior to an object that we pass to it as the second argument. In tis case, we pass the `handler` object which contained to properties: `set` and `get`. `set` gets invoked whenever we _set_ property values, `get` gets invoked whenever we _get_ (access) property values. The first argument is an empty object `{}`, which is the value of `person`. To this object, the custom behavior specified in the `handler` object gets added. If we add a property to the `person` object, `set` will get invoked. If we access a property on the `person` object, `get` gets invoked. First, we added a new property `name` to the proxy object (`person.name = 'Lydia'`). `set` gets invoked, and logs `'Added a new property!'`. Then, we access a property value on the proxy object, the `get` property on the handler object got invoked. `'Accessed a property!'` gets logged.",
    slug: '7nbw6ex72s7c1w9zfkeh3hguaqt593ld'
  },
  {
    id: 136,
    question: "What's the output?",
    snippet: "const person = { name: 'Lydia Hallie' };\n\nObject.seal(person);",
    choices: [
      { key: 'A', value: "`person.name = 'Evan Bacon'`" },
      { key: 'B', value: '`person.age = 21`' },
      { key: 'C', value: '`delete person.name`' },
      { key: 'D', value: '`Object.assign(person, { age: 21 })`' }
    ],
    answer: 'A',
    explanation: 'With `Object.seal` we can prevent new properies from being _added_, or existing properties to be _removed_. However, you can still modify the value of existing properties.',
    slug: 'actnlybsdnzzh3yb5gueovtez1b6l12e'
  },
  {
    id: 137,
    question: ' Which of the following will modify the `person` object?',
    snippet: 'const person = {\n' +
      "  name: 'Lydia Hallie',\n" +
      '  address: {\n' +
      "    street: '100 Main St'\n" +
      '  }\n' +
      '};\n' +
      '\n' +
      'Object.freeze(person);',
    choices: [
      { key: 'A', value: "`person.name = 'Evan Bacon'`" },
      { key: 'B', value: '`delete person.address`' },
      { key: 'C', value: "`person.address.street = '101 Main St'`" },
      { key: 'D', value: "`person.pet = { name: 'Mara' }`" }
    ],
    answer: 'C',
    explanation: "The `Object.freeze` method _freezes_ an object. No properties can be added, modified, or removed. However, it only _shallowly_ freezes the object, meaning that only _direct_ properties on the object are frozen. If the property is another object, like `address` in this case, the properties on that object aren't frozen, and can be modified.",
    slug: 'jppe80oxaweytpmr98bfgtxeblivleo5'
  },
  {
    id: 138,
    question: "What's the output?",
    snippet: 'const add = x => x + x;\n' +
      '\n' +
      'function myFunc(num = 2, value = add(num)) {\n' +
      '  console.log(num, value);\n' +
      '}\n' +
      '\n' +
      'myFunc();\n' +
      'myFunc(3);',
    choices: [
      { key: 'A', value: '`2` `4` and `3` `6`' },
      { key: 'B', value: '`2` `NaN` and `3` `NaN`' },
      { key: 'C', value: '`2` `Error` and `3` `6`' },
      { key: 'D', value: '`2` `4` and `3` `Error`' }
    ],
    answer: 'A',
    explanation: "First, we invoked `myFunc()` without passing any arguments. Since we didn't pass arguments, `num` and `value` got their default values: num is `2`, and `value` the returned value of the function `add`. To the `add` function, we pass `num` as an argument, which had the value of `2`. `add` returns `4`, which is the value of `value`. Then, we invoked `myFunc(3)` and passed the value `3` as the value for the argument `num`. We didn't pass an argument for `value`. Since we didn't pass a value for the `value` argument, it got the default value: the returned value of the `add` function. To `add`, we pass `num`, which has the value of `3`. `add` returns `6`, which is the value of `value`.",
    slug: 'uvp4ovl9ryobampo01rrzi9o3qa8jfte'
  },
  {
    id: 139,
    question: "What's the output?",
    snippet: 'class Counter {\n' +
      '  #number = 10\n' +
      '\n' +
      '  increment() {\n' +
      '    this.#number++\n' +
      '  }\n' +
      '\n' +
      '  getNum() {\n' +
      '    return this.#number\n' +
      '  }\n' +
      '}\n' +
      '\n' +
      'const counter = new Counter()\n' +
      'counter.increment()\n' +
      '\n' +
      'console.log(counter.#number)',
    choices: [
      { key: 'A', value: '`10`' },
      { key: 'B', value: '`11`' },
      { key: 'C', value: '`undefined`' },
      { key: 'D', value: '`SyntaxError`' }
    ],
    answer: 'D',
    explanation: 'In ES2020, we can add private variables in classes by using the `#`. We cannot access these variables outside of the class. When we try to log `counter.#number`, a SyntaxError gets thrown: we cannot acccess it outside the `Counter` class!',
    slug: 'gc5g5xmsbkpak65cgvbjf9oefnz5hl43'
  },
  {
    id: 140,
    question: "What's the output?",
    snippet: 'const teams = [\n' +
      "  { name: 'Team 1', members: ['Paul', 'Lisa'] },\n" +
      "  { name: 'Team 2', members: ['Laura', 'Tim'] }\n" +
      '];\n' +
      '\n' +
      'function* getMembers(members) {\n' +
      '  for (let i = 0; i < members.length; i++) {\n' +
      '    yield members[i];\n' +
      '  }\n' +
      '}\n' +
      '\n' +
      'function* getTeams(teams) {\n' +
      '  for (let i = 0; i < teams.length; i++) {\n' +
      '    // ✨ SOMETHING IS MISSING HERE ✨\n' +
      '  }\n' +
      '}\n' +
      '\n' +
      'const obj = getTeams(teams);\n' +
      "obj.next(); // { value: 'Paul', done: false }\n" +
      "obj.next(); // { value: 'Lisa', done: false }",
    choices: [
      { key: 'A', value: '`yield getMembers(teams[i].members)`' },
      { key: 'B', value: '`yield* getMembers(teams[i].members)`' },
      { key: 'C', value: '`return getMembers(teams[i].members)`' },
      {
        key: 'D',
        value: '`return yield getMembers(teams[i].members)`'
      }
    ],
    answer: 'B',
    explanation: "In order to iterate over the `members` in each element in the `teams` array, we need to pass `teams[i].members` to the `getMembers` generator function. The generator function returns a generator object. In order to iterate over each element in this generator object, we need to use `yield*`. If we would've written `yield`, `return yield`, or `return`, the entire generator function would've gotten returned the first time we called the `next` method.",
    slug: '4z20ujdy5eb3ujs6o1r1k2eug7403x1o'
  },
  {
    id: 141,
    question: "What's the output?",
    snippet: 'const person = {\n' +
      "  name: 'Lydia Hallie',\n" +
      "  hobbies: ['coding']\n" +
      '};\n' +
      '\n' +
      'function addHobby(hobby, hobbies = person.hobbies) {\n' +
      '  hobbies.push(hobby);\n' +
      '  return hobbies;\n' +
      '}\n' +
      '\n' +
      "addHobby('running', []);\n" +
      "addHobby('dancing');\n" +
      "addHobby('baking', person.hobbies);\n" +
      '\n' +
      'console.log(person.hobbies);',
    choices: [
      { key: 'A', value: "`['coding']`" },
      { key: 'B', value: "`['coding', 'dancing']`" },
      { key: 'C', value: "`['coding', 'dancing', 'baking']`" },
      {
        key: 'D',
        value: "`['coding', 'running', 'dancing', 'baking']`"
      }
    ],
    answer: 'C',
    explanation: "The `addHobby` function receives two arguments, `hobby` and `hobbies` with the default value of the `hobbies` array on the `person` object. First, we invoke the `addHobby` function, and pass `'running'` as the value for `hobby` and an empty array as the value for `hobbies`. Since we pass an empty array as the value for `y`, `'running'` gets added to this empty array. Then, we invoke the `addHobby` function, and pass `'dancing'` as the value for `hobby`. We didn't pass a value for `hobbies`, so it gets the default value, the `hobbies` property on the `person` object. We push the hobby `dancing` to the `person.hobbies` array. Last, we invoke the `addHobby` function, and pass `'bdaking'` as the value for `hobby`, and the `person.hobbies` array as the value for `hobbies`. We push the hobby `baking` to the `person.hobbies` array. After pushing `dancing` and `baking`, the value of `person.hobbies` is `['coding', 'dancing', 'baking']`",
    slug: 'd0hqbv97xppqz2nx71t1r2f6rpo05220'
  },
  {
    id: 142,
    question: "What's the output?",
    snippet: 'class Bird {\n' +
      '  constructor() {\n' +
      "    console.log('I'm a bird. 🦢');\n" +
      '  }\n' +
      '}\n' +
      '\n' +
      'class Flamingo extends Bird {\n' +
      '  constructor() {\n' +
      "    console.log('I'm pink. 🌸');\n" +
      '    super();\n' +
      '  }\n' +
      '}\n' +
      '\n' +
      'const pet = new Flamingo();',
    choices: [
      { key: 'A', value: "`I'm pink. 🌸`" },
      { key: 'B', value: "`I'm pink. 🌸` `I'm a bird. 🦢`" },
      { key: 'C', value: "`I'm a bird. 🦢` `I'm pink. 🌸`" },
      { key: 'D', value: "Nothing, we didn't call any method" }
    ],
    answer: 'B',
    explanation: "We create the variable `pet` which is an instance of the `Flamingo` class. When we instantiate this instance, the `constructor` on `Flamingo` gets called. First, `'I'm pink. 🌸'` gets logged, after which we call `super()`. `super()` calls the constructor of the parent class, `Bird`. THe constructor in `Bird` gets called, and logs `'I'm a bird. 🦢'`.",
    slug: 'xi5dk4s264zqyvgk4vaect7u16l7c1vd'
  },
  {
    id: 143,
    question: 'Which of the options result(s) in an error?',
    snippet: "const emojis = ['🎄', '🎅🏼', '🎁', '⭐'];\n" +
      '\n' +
      "/* 1 */ emojis.push('🦌');\n" +
      '/* 2 */ emojis.splice(0, 2);\n' +
      "/* 3 */ emojis = [...emojis, '🥂'];\n" +
      '/* 4 */ emojis.length = 0;',
    choices: [
      { key: 'A', value: '1' },
      { key: 'B', value: '1 and 2' },
      { key: 'C', value: '3 and 4' },
      { key: 'D', value: '3' }
    ],
    answer: 'D',
    explanation: "The `const` keyword simply means we cannot _redeclare_ the value of that variable, it's _read-only_. However, the value itself isn't immutable. The propeties on the `emojis` array can be modified, for example by pushing new values, splicing them, or setting the length of the array to 0.",
    slug: '99jup0yf5ciy52r0mzpybgj6wox9hwaz'
  },
  {
    id: 144,
    question: "What do we need to add to the `person` object to get `['Lydia Hallie', 21]` as the output of `[...person]`?",
    snippet: 'const person = {\n' +
      "  name: 'Lydia Hallie',\n" +
      '  age: 21\n' +
      '}\n' +
      '\n' +
      "[...person] // ['Lydia Hallie', 21]",
    choices: [
      { key: 'A', value: 'Nothing, object are iterable by default' },
      {
        key: 'B',
        value: '`*[Symbol.iterator]() { for (let x in this) yield* this[x] }`'
      },
      {
        key: 'C',
        value: '`*[Symbol.iterator]() { yield* Object.values(this) }`'
      },
      {
        key: 'D',
        value: '`*[Symbol.iterator]() { for (let x in this) yield this }`'
      }
    ],
    answer: 'C',
    explanation: "Objects aren't iterable by default. An iterable is an iterable if the iterator protocol is present. We can add this manually by adding the iterator symbol `[Symbol.iterator]`, which has to return a generator object, for example by making it a generator function `*[Symbol.iterator]() {}`. This generator function has to yield the `Object.values` of the `person` object if we want it to return the array `['Lydia Hallie', 21]`: `yield* Object.values(this)`.",
    slug: 'mejre5o7vn5ytupmcybjruflwx4xgjsw'
  }
]
