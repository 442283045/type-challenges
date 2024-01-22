type AwaitedTest<T> = T extends Promise<infer R> ? AwaitedTest<R> : T

declare function PromiseAll<T extends any[]>(
  values: readonly [...T]
): Promise<{
  [P in keyof T]: AwaitedTest<T[P]>
}>
