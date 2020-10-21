

class EventList {
    constructor(){
        this.eventArray = []; // array som ska innehålla alla eventobjekt.
    }

    //lägger till eventet i den synliga listan
    printEvent(event){
        let list = document.getElementById("event-list");
        let row = document.createElement("tr");
        row.classList.add("event-item")
        let td_date = document.createElement("td");
        let td_name = document.createElement("td");
        let td_location = document.createElement("td");
        let td_avaliable = document.createElement("td");
        td_date.innerText = event.date;
        td_name.innerText = event.name;
        td_location.innerText = event.location;
        td_avaliable.innerText = event.isAvaliable;
        list.append(row);
        row.append(td_date);
        row.append(td_name);
        row.append(td_location);
        row.append(td_avaliable);
        
    }  
    // lägger till eventetobjektet i eventarrayen och sparar det i local storage 
    addEvent() {

    }
}

class Event {
    constructor(date, name, location, category, isAvaliable){
        this.date = date;
        this.name = name;
        this.location = location;
        this.category = category;
        this.isAvaliable = isAvaliable;
    }

}

// Några Eventobjekt som ska finnas från början när sidan har laddats.
let event1 = new Event(2, "sara", "stockholm", "sport", false)
let event2 = new Event(8, "Shiho", "Nackademin", "music", true)
let event3 = new Event(4, "Kweku", "Hemma", "Art", true)
let event4 = new Event(5, "Robin", "Borta", "music", false)
let eventlist = new EventList;
eventlist.printEvent(event1);
eventlist.printEvent(event2);
eventlist.printEvent(event3);
eventlist.printEvent(event4);


