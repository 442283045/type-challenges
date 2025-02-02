// const instance = SimpleVue({
//   data() {
//     return {
//       firstname: 'Type',
//       lastname: 'Challenges',
//       amount: 10,
//     }
//   },
//   computed: {
//     fullname() {
//       return this.firstname + ' ' + this.lastname
//     }
//   },
//   methods: {
//     hi() {
//       alert(this.fullname.toLowerCase())
//     }
//   }
// })
// type GetComputed<T> = {
//   [P in keyof T]: T[P] extends () => infer R ? R : never
// }
// declare function SimpleVue<D, C, M>(options: {
//   data: (this: void) => D
//   computed: C & ThisType<D>
//   methods: M & ThisType<D & GetComputed<C> & M>
// }): any
declare function SimpleVue<D, C, M>(options: Options<D, C, M>): any

type ComputedValueType<C> = {
  [P in keyof C]: C[P] extends () => infer R ? R : never
}

type Options<D, C, M> = {
  data: (this: void) => D

  methods: M & ThisType<D & ComputedValueType<C> & M>
  computed: C & ThisType<D>
}
