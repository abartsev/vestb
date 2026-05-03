declare module 'invariant' {
  export default function invariant(
    condition: any,
    format?: string,
    ...extra: any[]
  ): asserts condition;
}
