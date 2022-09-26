const weekDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

function getDay(date: Date) {
  return weekDay[date.getDay()]
}

export default getDay
