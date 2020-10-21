

class EventList {
    constructor(){
        this.eventArray = []; // array som ska innehålla alla eventobjekt.
    }

    addEvent(event){
        let list = document.getElementById("event-list");
        let row = document.createElement("tr");
        row.classList.add("event-item")
        let td_date = document.createElement("td")
        td_date.innerText = event.date;
        list.append(row);
        row.append(td_date);
       
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
let event = new Event(2, "sara", "stockholm", "sport", false)
let eventlist = new EventList;
eventlist.addEvent(event);


