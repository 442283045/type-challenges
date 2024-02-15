type CapitalizeRest<S extends string> = S extends `${infer F}${infer R}`
  ? `${F}${CapitalizeRest<
      Uppercase<F> extends Lowercase<F> ? Capitalize<R> : R
    >}`
  : S
type CapitalizeWords<S extends string> = Capitalize<CapitalizeRest<S>>
