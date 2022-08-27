import { Date, BuildDateFromString } from './dateCalc'

export function HaveVisited() {
  return localStorage.getItem('have-visited') != null
}
export function SetVisited() {
  localStorage.setItem('have-visited', 'true')
}

export function GetDate(): Date {
  return BuildDateFromString(
    JSON.parse(localStorage.getItem('date') as string) || {
      month: '1',
      day: '1'
    }
  )
}
export function SetDate(date: Date) {
  localStorage.setItem('date', JSON.stringify(date))
}

export function ClearStorage() {
  localStorage.removeItem('have-visited')
  localStorage.removeItem('date')
}
