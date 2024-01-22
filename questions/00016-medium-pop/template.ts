type Pop<T extends any[]> = T['length'] extends 0
  ? []
  : T extends [...infer R, any]
  ? R
  : never
