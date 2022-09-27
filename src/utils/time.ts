export function hourAndMinute(date: Date) {
  const time = new Date(date)
  const hours = time.getHours()
  const minutes = time.getMinutes()

  const hoursString = hours < 10 ? initialZero(hours.toString()) : hours.toString()
  const minutesString = minutes < 10 ? initialZero(minutes.toString()) : minutes.toString()
  return `${hoursString}:${minutesString}`
}

const initialZero = (s: string) => `0${s}`
