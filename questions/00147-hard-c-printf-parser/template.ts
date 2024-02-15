type ControlsMap = {
  c: 'char'
  s: 'string'
  d: 'dec'
  o: 'oct'
  h: 'hex'
  f: 'float'
  p: 'pointer'
}

type ParsePrintFormat<S extends string> = S extends ''
  ? []
  : S extends `${infer _B}%${infer C}${infer Rest}`
  ? C extends keyof ControlsMap
    ? [ControlsMap[C], ...ParsePrintFormat<Rest>]
    : [...ParsePrintFormat<Rest>]
  : []
