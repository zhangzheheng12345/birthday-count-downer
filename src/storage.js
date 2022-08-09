export function HaveVisited() {
    return localStorage.getItem("have-visited") != null
}
export function SetVisited() {
    localStorage.setItem("have-visited", "true")
}

export function GetSettings() {
    return JSON.parse(localStorage.getItem("settings")) || {
        month: "", day: ""
    }
}
export function SetSettings(key, value) {
    let storage = GetSettings()
    storage[key] = value
    localStorage.setItem("settings", JSON.stringify(storage))
    console.log(GetSettings())
}

export function ClearStorage() {
    localStorage.removeItem("have-visited")
    localStorage.removeItem("settings")
}