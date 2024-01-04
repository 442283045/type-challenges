type MyReadonly2<
    T,
    K extends keyof T = keyof T,
> = Omit<T, K> & { readonly[P in K]: T[P] }
// export {}
// type MyReadonly2<T, K = keyof T> = {
//   readonly [P in keyof T]: P extends K ? T[P] : T[P]
// }

