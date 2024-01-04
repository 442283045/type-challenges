// type DeepReadonly<T extends Object> = {
//   readonly [P in keyof T]: T[P] extends Object ? DeepReadonly<T[P]> : T[P]
// }
type DeepReadonly<T> = {
  readonly [k in keyof T]: T[k] extends Record<any, any>
    ? T[k] extends Function
      ? T[k]
      : DeepReadonly<T[k]>
    : T[k]
}
// type DeepReadonly<T> = keyof T extends never
//   ? T
//   : { readonly [k in keyof T]: DeepReadonly<T[k]> }
const arr = [{ hello: 'world' }, { apple: 'yes' }]

type ReadonlyArr = Readonly<typeof arr>
