use events
var NB_ID = 1000
var NB_EVENTS_PER_ID = 100 * 1000

function randomNumber(max) {
    return Math.trunc(_rand() * max)
} 

function randomDay() {
    return String(randomNumber(31) + 1).padStart(2,"0")
}

function randomHour() {
    return String(randomNumber(23)).padStart(2,"0")
}

function randomMinuteSecond() {
    return String(randomNumber(59)).padStart(2,"0")
}

for (var id = 1; id <= NB_ID; id++) {
    for (var i = 1; i <= NB_EVENTS_PER_ID; i++ ) {
        var dateOfEvent = new ISODate("2022-01-" + randomDay() + "T" + randomHour() + ":" + randomMinuteSecond() + ":" + randomMinuteSecond())
        db.events.insert({
            id: id,
            dateOfEvent: dateOfEvent,
            quantity: randomNumber(100)
        })
    }
 }