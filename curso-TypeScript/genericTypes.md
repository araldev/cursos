# TypeScript Generics Cheat-Sheet

> Quick reference of all the generic “shapes” you can write today.

---

## 1. Generic Type Alias

```ts
type ApiResponse<T> = {
  data: T;
  error?: string;
};
```

## 2. Generic Interface

```ts
interface Paginated<T> {
  items: T[];
  meta: { page: number; total: number };
}
```

## 3. Generic Class

```ts
class Container<T> {
  constructor(public value: T) {}
  get(): T {
    return this.value;
  }
}
```

## 4. Generic Function

```ts
function identity<T>(arg: T): T {
  return arg;
}
```

## 5. Generic Method

```ts
class Logger {
  log<T>(msg: T): void {
    console.log(msg);
  }
}
```

## 6. Generic Constraint (extends)

```ts
function length<T extends { length: number }>(x: T): number {
  return x.length;
}
```

## 7. Default Type Parameter

```ts
type FetchOptions<T = unknown> = {
  url: string;
  transform?: (raw: any) => T;
};
```

## 8. Multiple Type Parameters

```ts
function mapValues<T, U>(
  obj: Record<string, T>,
  fn: (v: T) => U
): Record<string, U> {
  /* impl */
}
```

## 9. Conditional Types

```ts
type IsString<T> = T extends string ? true : false;
```

## 10. Mapped Types with keyof Generics

```ts
type Partial<T> = {
  [K in keyof T]?: T[K];
};
```

## 11. Key Remapping (as)

```ts
type EventHandlers<T> = {
  [K in keyof T as `on${Capitalize<string & K>}`]?: T[K];
};
```

## 12. Generic Utility Types (built-ins)

[Docs](https://www.typescriptlang.org/docs/handbook/utility-types.html)

| Utility          | Purpose                              |
| ---------------- | ------------------------------------ |
| `Partial<T>`     | Make every prop optional             |
| `Required<T>`    | Make every prop required             |
| `Readonly<T>`    | Make every prop readonly             |
| `Record<K, V>`   | Construct a map type                 |
| `Pick<T, K>`     | Pick subset of keys                  |
| `Omit<T, K>`     | Remove subset of keys                |
| `Exclude<T, U>`  | Remove from union                    |
| `Extract<T, U>`  | Keep only in union                   |
| `NonNullable<T>` | Remove `null \| undefined`           |
| `ReturnType<F>`  | Obtain return type of a function     |
| `Parameters<F>`  | Obtain parameter tuple of a function |
| `Awaited<T>`     | Unwrap `Promise<T>`                  |

## 13. Generic Type Guards

```ts
function isArray<T>(x: any): x is T[] {
  return Array.isArray(x);
}
```

## 14. Higher-Order Generic Types

```ts
type HOC<T> = <P>(
  Component: React.ComponentType<P>
) => React.ComponentType<P & T>;
```

## 15. Variadic Tuple Types

```ts
type Tail<T extends readonly unknown[]> = T extends readonly [
  unknown,
  ...infer Rest
]
  ? Rest
  : [];
```

## Quick Syntax Recap

| Kind            | Syntax Example              |
| --------------- | --------------------------- |
| Generic type    | `type X<T> = …`             |
| Generic func    | `<T>(arg: T): T`            |
| Generic class   | `class C<T> { … }`          |
| Constraint      | `<T extends Some>`          |
| Default         | `<T = Default>`             |
| Multiple params | `<T, U, K extends keyof T>` |
| Conditional     | `T extends U ? X : Y`       |
