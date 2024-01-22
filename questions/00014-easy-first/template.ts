type First<T extends any[]> = T extends [infer R, ...any] ? R : never

// Other answers
// answer1
type First1<T extends any[]> = T extends [] ? never : T[0]

// answer2
type First2<T extends any[]> = T['length'] extends 0 ? never : T[0]
