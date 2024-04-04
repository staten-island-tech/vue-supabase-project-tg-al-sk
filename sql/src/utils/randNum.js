export default function randNum(min, max) {
  const rand = Math.random()
  const num = Number((min + rand * (max - min)).toFixed(1))

  return num
}
