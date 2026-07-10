export function isEqual<T>(value: T[], other: T[]) {
  if (value.length !== other.length) return false
  return value.every((v, i) => v === other[i]!)
}
