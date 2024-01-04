import type { Equal, Expect } from '@type-challenges/utils'

type MyExpect<T extends true> = T

type MyEqual<T, K> = T extends K ? K extends T ? true : false : false

type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}

type MyReadonly<T> = {
  readonly [P in keyof T]: T[P]
}

type MyPartial<T> = {
  [P in keyof T]?: T[P]
}

type Case = [MyExpect<MyEqual<MyPartial<Student>, Partial<Student>>>]

type MyRequired<T> = {
  [P in keyof T]-?: T[P]
}
type MyOmit<T, K extends keyof T> = MyPick<T, MyExclude<keyof T, K>>

type MyExclude<T, K> = T extends K ? never : T

type PartialStudent = MyOmit<Student, 'age'>

type MyRecord<T extends keyof any, K> = {
  [P in keyof T]: K
}
type OtherExpect<T extends string> = T

type Test = [ OtherExpect<'hello' | 'string'>]

type MyExtract<T, K> = T extends K ? T : never

type Animal = 'cat' | 'dog'

type Hello = 'hello' | null | undefined & { county: string }

type MyNoneNullable<T> = T extends null | undefined ? never : T

type NoneType = 'hello' | undefined | null

type MyNullableHello = MyNoneNullable<NoneType>
interface Student {
  name: string
  age: number
}

type MyParameters<T extends (...args: any) => any > = T extends (...args: infer R) => any ? R : never

type MyFn = (name: string, age: number) => void

type Params = MyParameters<MyFn>

let a = 'hello'

declare let b: unknown

// b = a
// a = b

declare let c: { name: string }
declare let d: { age: number; name: string }

type MyInstanceType<T extends abstract new(...args: any) => any> = T extends abstract new(...args: any) => infer R ? R : never

type TeacherInstance = MyInstanceType<typeof Teacher>

function returnTeacher(Clazz: new () => Teacher): InstanceType<typeof Clazz> {
  return new Clazz()
}

type MyTest = Expect<Equal<InstanceType<typeof Teacher>, InstanceType<new () => Teacher>>>
type MyConstructParameters<T extends abstract new (...args: any) => any> = T extends abstract new (...args: infer R) => any ? R : never

class Teacher {
  name: string
  age: string
  constructor(name: string, age: string) {
    this.name = name
    this.age = age
  }
}
type TeacherParameters = MyConstructParameters<typeof Teacher>
type type1 = typeof Teacher

type type2 = new (...args: TeacherParameters) => Teacher

export type GetReadonlyKeys<T, K = keyof T> = K extends keyof T ?
  Equal<Pick<T, K>, Readonly<Pick<T, K>>> extends true ? K : never : never
