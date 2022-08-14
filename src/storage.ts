export function HaveVisited() {
    return localStorage.getItem("have-visited") != null
}
export function SetVisited() {
    localStorage.setItem("have-visited", "true")
}

export interface Date {
    month: string,
    day: string
}
export function GetSettings(): Date {
    return JSON.parse(localStorage.getItem("settings") || "") || {
        month: "", day: ""
    }
}
export function SetSettings(key: string, value: string) {
    let storage = GetSettings() as Date
    storage[key] = value
    localStorage.setItem("settings", JSON.stringify(storage))
    console.log(GetSettings())
}

export function ClearStorage() {
    localStorage.removeItem("have-visited")
    localStorage.removeItem("settings")
}