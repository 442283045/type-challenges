// declare function Currying<R, G extends any[], T extends (...args: G) => R>(
//   fn: T
// ): G['length'] extends 0 ? () => R : G extends [infer F, ...infer S] ? (arg0: F) =>  Currying(S) : never

// type MyCurrying<R = any, G extends any[] = any[], T extends (...args: G) => R = any> = (
//     fn: T
//   ) => G['length'] extends 0 ? () => R : G extends [infer F, ...infer S] ? (arg0: F) =>  MyCurrying((S )=> (R)) : never
type MyUnshift<T> = T extends [any, ...infer U] ? U : unknown
type Head<T> = T extends [infer K, ...any] ? K : unknown

type Curried<T, R> = T extends Array<any>
  ? T['length'] extends 1
    ? (args: Head<T>) => R
    : (args: Head<T>) => Curried<MyUnshift<T>, R>
  : never

declare function Currying<R>(fn: () => R): () => R
declare function Currying<T extends unknown[], R>(
  fn: (...args: T) => R
): Curried<T, R>
