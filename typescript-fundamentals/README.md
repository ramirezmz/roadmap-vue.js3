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

## Implicit types

