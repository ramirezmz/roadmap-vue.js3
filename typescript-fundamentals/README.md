# 1st Class - Introduction to Typescript
Typescript is a super set of JavaScript that introduces static typing. Static typing with Typescript come with several benefits.

- First, you'll get a tighter integration with your IDE enabling you to spot more erros as you type.
- Second, you'll get a better refactoring experience, discovering missed pieces at compile time.
- Third, you'll end up with code that is self-documenting and can be better understood by team members.
- Lastly, you can use typescript to create code that will run anywhere JavaScript can run.

```ts
// main.ts
interface Product {
  name: string;
  price: number;
  size?: "sm" | "md" | "lg";
}

const product: Product = {
  name: "T-Shirt",
  price: 12,
  size: "lg"
};

console.log(product);
```
```js
// main.js
const product = {
  name: "T-Shirt",
  price: 12,
  size: "lg"
};
console.log(product)
```
https://www.typescriptlang.org/play

# 2nd Class - What is Static Typing in TypeScript?

 While this flexibility can be useful, many times it can cause big issues.

- With typescript we're able to ensure our variable types, remain static or unchanged, hence static typing.We can ensure that numbers remain numbers, and even ensure that functions input and output types are predictable.

# 3rd Implicit and Explicit Types in Typescript
There are two ways to define types in TypeScript, **implicitly** or **explicitly**.
## Implicit types
If I were to assign a variable "myNumber" to the value of 2, then we would be implicitly defining its type as a number. There's no extra syntax needed here.
This is just plain old Javascript but written in a .ts file.
```ts
let myNumber = 2
myNumber = "asda"
```
The if I tried to change the value to a different type, you'll see that Typescript shows us a red squiggly lne indcating an error.

When we hover over the offending code it tells us exactly what the issue is.
The message are: "Type 'string' is not assignable to type 'number'."

## Explicit types
To assign a type to a variable in TypeScript, all you have to do is add a colon after the variable name, and then provide the type. Now we've explicitly stated.
```ts
let myNumber: number = 2
myNumber = 3

let myString: string = "Robertopaolo"

let myBoolean: boolean = true
```

I'll create a variable here, called canBeAnything, and initialize to boolean true. The I'll try to change it to a string since it can be anything, right?
We can tel Typescript though that we know otherwise.
```ts
let canBeAnything: any = true
canBeAnything = 'Hello world"
```

# 4th Class - Array of types in Typescript
Typescript actually provides a very elegant solution for defining array types.
```ts
const books: string[] = ['Hábitos atómicos', 'Jurrasic Park', 'Goodnight Moon']
books.push(2) //outside is error
books.push('Jurrasic Park')
```

# 5th Class - Functions: Type Parameters and Returns In TypeScript

```ts
function sum(x: number, y: number) {
  return x + y
}
console.log(sum(2, 4))
// 6
```

# 6th Class - Functions: Parameter Destructuring. Void and Optional Params in Typescript
```ts
function greet(name? : string) {
  if(name) {
    console.log(`Hello ${name}`)
  } else{
    console.log('Hello Stranger')
  }
}
greet('Roberto')
```

# 7th Class - Union Types in Typescript
```ts
let booleanOrString: string | boolean = 'I could change'
booleanOrString = true
```
or
```ts
function printId(id: string | number) {
  if(typeof id === 'string') {
    console.log(id.toUpperCase())
  } else{
    console.log(id)
  }
}
```

# 8th Class - Literal Types in Typescript

```ts
function setProductSize( size: 'small' | 'medium' | 'large') {
  // ...
}
setProductSize('asdas') // error
setProductSize('small') // OK
```

# 9th Class - Type Aliases in Typescript

```ts
type Sizes = 'small' | 'medium' | 'large'
function setProductSize( size: Sizes) {
  // ...
}
setProductSize('small')
```
And we can do it for objects:
```ts
type Product = {
  name: string,
  price: number
}

const tshirt: Product = {
  name: 'T-shirt Desing B',
  price: 24
}
```

# 10th Class - Defining Intergaces in Typescript
We change the word type to interface and the remove the equal sign
```ts
interface Product {
  name: string,
  price: number
}

const tshirt: Product = {
  name: 'T-shirt Desing B',
  price: 24
}
```
Typescript still happy to our tshirt variable!
So, what's the difference between types aliases and interfaces?
Besides a few more advanced differences, 
- the primary difference is that we can add new fields to interfaces at any time.
```ts
interface Product {
  name: string,
  price: number
}

interface Product {
  color: string,
}

const tshirt: Product = {
  name: 'T-shirt Desing B',
  price: 24
}
```
- Let's say that color isn't required, we can use a question mark after the property name
```ts
interface Product {
  name: string,
  price: number,
  color?: string,
}

const tshirt: Product = {
  name: 'T-shirt Desing B',
  price: 24
}
```

# 11th Class - Extending Interfaces in Typescript