# TypeScript 中 unknown 和 any 的区别？

- `unknown` 是类型安全的，在 `unknown` 没有被断言或细化到一个确切类型之前，是不允许在其上进行任何操作的；
- `any` 是任意类型，具有所有类型的行为，可被执行，可访问属性，超脱于类型系统之外；
