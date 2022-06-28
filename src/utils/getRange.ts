export const geRange = (min: number, max: number) => {
  const range = []
  for (let i = min; i <= max; i++) {
    range.push(i)
  }
  return range
}
