
let test = [
    { date: "3 July, 22:00" },
    { date: "13 August, 23:00" },
    { date: "7 July, 20:00" },
    { date: "17 August, 13:00" }]


//let date = new Date('July 7, 2021 20:00')





//  console.log(date)

let dates = [
    (date: "3 July, 22:00", name: "Anthony Jeselnik", location: "Civic Auditorium", category: "standup", isAvaliable: false)
    (date: "13 August, 23:00", name: "Nina Simone", location: "Fasching", category: "music", isAvaliable: false)
    (date: "7 July, 20:00", name: "James Blake", location: "L'Olympia", category: "music", isAvaliable: true)
    (date: "17 August, 13:00", name: "Milan vs PSG", location: "Le Parc des Princes", category: "sport", isAvaliable: false)


console.log(dates.sort(function (a, b) {
        return new Date(a.date) - new Date(b.date);
    }))

    let event1 = new Event("July 3, 22:00", "Anthony Jeselnik", "Civic Auditorium", "standup", false)
let event2 = new Event("July 7, 20:00", "James Blake", "L'Olympia", "music", true)
let event4 = new Event("August 17, 13:00", "Milan vs PSG", "Le Parc des Princes", "sport", false)
let event3 = new Event("August 13, 23:00", "Nina Simone", "Fasching", "music", false)

