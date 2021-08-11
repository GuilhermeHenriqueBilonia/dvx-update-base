import { api } from "../services"


export function progress(continu) {
    if (continu) {
        startInterval();
    } else {
        stopInterval()
    }
}
var interval = ''

function startInterval() {
    global.value = 0
    interval = ''

}

function stopInterval() {
    clearInterval(interval)
}