# Title : Generics and Promise<T> in TypeScript

## Introduction

Generics are a powerful TypeScript feature that allows to create reusable and type-safe functions, classes, and interfaces. They are especially useful when working with different data types and asynchronous operations.

## Detailed Explanation

A generic uses a type parameter, commonly represented by `T`. Instead of specifying a fixed data type, we allow the caller to provide the type.

For example:

```typescript
function identity<T>(value: T): T {
    return value;
}

const result1 = identity<string>("Hello");
const result2 = identity<number>(100);
```

The same function can work with strings, numbers, and other types without losing type safety.

Generics are also important for asynchronous operations. A `Promise<T>` represents a promise that will eventually produce a value of type `T`.

For example:

```typescript
async function getUser(): Promise<string> {
    return "Urmi";
}
```

Here, the function returns a promise that resolves to a string.

We can also create a reusable API response structure:

```typescript
interface ApiResponse<T> {
    data: T;
    success: boolean;
}

const response: ApiResponse<string> = {
    data: "User loaded",
    success: true
};
```

## Conclusion

Generics help developers avoid duplicated code while maintaining type safety. Combined with `Promise<T>`, they make asynchronous applications easier to build, understand, and maintain.

