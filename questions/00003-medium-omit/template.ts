type MyOmit<T, K extends keyof T> = {
  [key in BaseOmit<keyof T, K> ]: T[key]
}

type BaseOmit<T, K> = T extends K ? never : T
