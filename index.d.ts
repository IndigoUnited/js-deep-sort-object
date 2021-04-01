declare module 'deep-sort-object' {
    export default function sort<T>(src: T, comparator?: (a: string, b: string) => number): T
}
