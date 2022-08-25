export function HaveVisited() {
  return localStorage.getItem('have-visited') != null
}
export function SetVisited() {
  localStorage.setItem('have-visited', 'true')
}

export interface Date {
  month: string
  day: string
}
export function GetDate(): Date {
  return (
    JSON.parse(localStorage.getItem('date') as string) || {
      month: '',
      day: '',
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
