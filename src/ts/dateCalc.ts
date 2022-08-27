import dayjs from 'dayjs'

export interface Date {
  month: number
  day: number
}
export function BuildDateFromString(date: {
  month: string
  day: string
}): Date {
  const dateConverted = {
    month: +date.month,
    day: +date.day
  }
  if (DateCorrect(dateConverted)) return dateConverted
  else throw 'invalid date'
}

function GetMonthToDay(year: number): Array<number> {
  return [
    31,
    year % 4 == 0 && (year % 100 != 0 || year % 400 == 0) ? 29 : 28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31
  ]
}

export function DateEq(date1: Date, date2: Date): boolean {
  return date1.month == date2.month && date1.day == date2.day
}

function DateCorrect(date: Date): boolean {
  return (
    1 <= date.month &&
    date.month <= 12 &&
    1 <= date.day &&
    date.day <= GetMonthToDay(4)[date.month]
  )
}

function Sum(array: Array<number>, begin: number, end: number): number {
  const sliced = array.slice(begin, end)
  if (sliced.length == 0) return 0
  else
    return sliced.reduce((acc, cur) => {
      return acc + cur
    })
}

// How many days from date1 to date2
export function DateSub(date1: Date, date2: Date): number {
  if (date1.month < date2.month) {
    const MonthToDay = GetMonthToDay(dayjs().year())
    return (
      MonthToDay[date1.month - 1] -
      date1.day +
      1 +
      Sum(MonthToDay, date1.month, date2.month - 1) +
      date2.day
    )
  } else if (date1.month == date2.month && date1.day <= date2.day) {
    return date2.day - date1.day + 1
  } else {
    // MonthToDayThisYear
    const MonthToDayTY = GetMonthToDay(dayjs().year())
    // MonthToDayNextYear
    const MonthToDayNY = GetMonthToDay(dayjs().year() + 1)
    return (
      MonthToDayTY[date1.month - 1] -
      date1.day +
      1 +
      Sum(MonthToDayTY, date1.month, 12) +
      Sum(MonthToDayNY, 0, date2.month - 1) +
      date2.day
    )
  }
}

// Test
export function TestDateCalc() {
  function TestDateSub() {
    const failure = 'TestDateSub failed'
    if (DateSub({ month: 1, day: 20 }, { month: 1, day: 30 }) != 11) {
      console.log(failure)
    } else if (DateSub({ month: 3, day: 20 }, { month: 5, day: 10 }) != 52) {
      console.log(failure)
    } else if (DateSub({ month: 11, day: 20 }, { month: 1, day: 10 }) != 52) {
      console.log(failure)
    }
  }
  TestDateSub()
}
