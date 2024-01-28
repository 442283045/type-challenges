type LookUp<U, T> = U extends { type: T } ? U : never

// type LookUp<U extends { type: any }, T> = U extends { type: infer R }
//   ? R extends T
//     ? U
//     : never
//   : never
