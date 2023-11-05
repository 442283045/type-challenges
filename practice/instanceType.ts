// interface D {
//   new (...ars: any): void
// }
// type G = new (...args: number[]) => void
// const E = function (args: any) {}
// const fn: G = new E(1)
// class C implements D {
//   x = 0
//   y = 0
//   constructor(...args: any) {}
// }

import type { Equal } from '@type-challenges/utils'

// type T0 = InstanceType<C>
// const c: T0 = new C()
// type T1 = InstanceType<any>
class Point {
  createdAt: number
  x: number
  y: number
  constructor(x: number, y: number) {
    this.createdAt = Date.now()
    this.x = x
    this.y = y
  }
}

type Result = Equal<Point, InstanceType<typeof Point>>

type PointInstance = InstanceType<typeof Point>

function moveRight(point: Point) {
  point.x += 5
}

const point = new Point(3, 4)
moveRight(point)
point.x // => 8

declare function factory<T>(ctor: T): T

class A {}
abstract class Base {
  abstract getName(): string

  printName() {
    return `Hello, ${this.getName()}`
  }
}

const res = factory(typeof A) // typeof A: not what we expect
// type Constructor = new (...args: any[]) => any

// declare function factory<T extends Constructor>(ctor: T): InstanceType<T>

// class A {}

// const res = factory(A) // A: what we expect
type SomeConstructor = {
  new (s: string): { age: number }
}

declare let MyClass: SomeConstructor

const obj = new MyClass('hello')

obj.age
