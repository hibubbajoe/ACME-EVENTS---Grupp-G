class EventList {
    constructor() {
        this.eventArray = []; // array som ska innehålla alla eventobjekt. 
        this.filter_btn = document.getElementById("category");
        this.filter_btn.addEventListener("change", () => {
            this.filterByCategory();
        });
        this.sort_btn = document.getElementById("date");
        this.sort_btn.addEventListener("change", () => {
            this.sort();
        })
        this.admin_btn = document.getElementById("admin_btn");
        this.admin_btn.addEventListener("click", () => {
            //visa formuläret
            this.displayAdmin();
        })
    }
    displayAdmin() {
        let add_form = document.getElementById("add_form");
        add_form.classList.toggle("hidden");

        let create_btn = document.getElementById("create_btn");
        create_btn.addEventListener("click", () => {
            this.create();
        })

        let edit_btn = document.getElementById("edit_form");
            edit_btn.addEventListener("click", () => {
                this.create();
            })
        //tar bort klass hidden på deleteknapparna
        
        let delete_btns = document.querySelectorAll(".delete_btn");
        delete_btns.forEach(function(item){
            item.classList.toggle("hidden");
        })

        let edit_btns = document.querySelectorAll(".edit_btn");
        edit_btns.forEach(function(item){
            item.classList.toggle("hidden");
        })

        
        
        
        

    }
    // lägg in att knapparna ska visas döljar här så det slipper stå på så många ställen i koden
    toggleButtons() {

    }
    // CRUD - create
    create() {
        //eventlisteners på alla inputs och knapp
        //skapa nyt event av detta.
        let date_input = document.getElementById("event_date");
        let name_input = document.getElementById("name");
        let location_input = document.getElementById("location");
        let category_input = document.getElementById("event_category");
        let isAvaliable_input = document.getElementById("isAvaliable");
        
            let date = date_input.value;
            let name = name_input.value;
            let location = location_input.value;
            let category = category_input.value;
            let isAvaliable = isAvaliable_input.value;
            let new_event = new Events(date, name, location, category, isAvaliable);
            eventlist.addEvent(new_event);
            eventlist.storeEvent(new_event);
            eventlist.clearTable();
            eventlist.printEvent();

            let delete_btns = document.querySelectorAll(".delete_btn");
            delete_btns.forEach(function(item){
            console.log(item);
            item.classList.toggle("hidden");

            let edit_btns = document.querySelectorAll(".edit_btn");
            edit_btns.forEach(function(item){
            console.log(item);
            item.classList.toggle("hidden");
        })
            
        })
        console.log(this.eventArray);
            
    }

    addEvent(event) {
        this.eventArray.push(event);
    };
    /*
    deleteEvent(index, amount) {
        this.eventArray.splice(index, amount);
    };
    */

   // CRUD - delete
    delete() {
        let index = event.target.id;
        console.log(index);
        //let delete_btn = event.target;
        //console.log(delete_btn)
        console.log("event deleted");
        this.eventArray.splice(index, 1);
        console.log(this.eventArray);
        // skriv över event_array i local storage:
        this.storeEvent();
        this.clearTable();
        this.printEvent();

        let delete_btns = document.querySelectorAll(".delete_btn");
        delete_btns.forEach(function(item){
            console.log(item);
            item.classList.toggle("hidden");
        })
        let edit_btns = document.querySelectorAll(".edit_btn");
        edit_btns.forEach(function(item){
            item.classList.toggle("hidden");
        })
        
    }
    //CRUD - edit
    edit() {
        let edit_form = document.getElementById("edit_form");
        edit_form.classList.toggle("hidden");
        console.log("edited event");
        let index = event.target.id;
        console.log(index);

    };

    //sparar array av eventobjekten i local storage 
    storeEvent() {
        let event_string = JSON.stringify(this.eventArray);
        localStorage.setItem("event_array", event_string);
    }
   
    //hämtar data från local storage och skriv ut som lista.
    printEvent(key) {

        let event_obj;

        if (key === "sorted") {
            this.clearTable();
            event_obj = JSON.parse(localStorage.getItem("sorted_array"));
            //annars hämtas "event_array" och hela listan skrivs.
        } else {
            event_obj = JSON.parse(localStorage.getItem("event_array"));
            console.log("Array med alla objekt:")
            //console.log(event_obj);
        }

        console.log(event_obj)

        let list = document.getElementById("event-list");

        //for (let event of event_obj) {
            event_obj.forEach(function(event, index){

            
            let row = document.createElement("tr");
            row.classList.add("event-item")
            let td_date = document.createElement("td");
            let td_name = document.createElement("td");
            let td_location = document.createElement("td");
            let td_avaliable = document.createElement("td");
            td_date.innerText = event.date;
            td_name.innerText = event.name;
            td_location.innerText = event.location;

            list.append(row);
            row.append(td_date);
            row.append(td_name);
            row.append(td_location);

            if (!event.isAvaliable) {
                td_avaliable.innerText = "cancelled"
                td_avaliable.classList.add("cancelled");
                row.append(td_avaliable);
                //hämta class som gör texten röd
            } else {
                let more_info_btn = document.createElement("button");
                more_info_btn.innerText = "More info";
                more_info_btn.setAttribute("onclick", "window.location.href='eventdetails.html';")
                td_avaliable.append(more_info_btn);
                row.append(td_avaliable);
            }
            //deleteknapp
            let td_delete = document.createElement("td");
            let delete_btn = document.createElement("button")
            delete_btn.innerText = "Delete";
            delete_btn.classList.add("hidden");
            delete_btn.classList.add("delete_btn");
            delete_btn.setAttribute(`id`, `${index}`);
            delete_btn.addEventListener("click", () => {
                eventlist.delete();
            })
            td_delete.append(delete_btn);
            row.append(td_delete);

            //editknapp
            let td_edit = document.createElement("td");
            let edit_btn = document.createElement("button")
            edit_btn.innerText = "Edit";
            edit_btn.classList.add("hidden");
            edit_btn.classList.add("edit_btn");
            edit_btn.setAttribute(`id`, `${index}`);
            edit_btn.addEventListener("click", () => {
                eventlist.edit();
            })
            td_edit.append(edit_btn);
            row.append(td_edit);
        })
        //}
    }

    //filter function to only show selected category
    filterByCategory() {

        //to access all events on display
        let event_row = document.getElementsByClassName("event-item")

        //making the if and foor loops look a little better
        let category = this.filter_btn.options[this.filter_btn.selectedIndex].text;

        //get event-array from local storage
        let event_array = JSON.parse(localStorage.getItem("event_array"));

        //finding what category is selected
        let filtered_array = event_array.filter((obj) => {
            return obj.category === category;
        });

        //when one of the categories is selected all others are hidden
        if (category !== "Category") {
            for (let i = 0; i < event_array.length; i++) {
                event_array[i].category == filtered_array[0].category
                    ? event_row[i].classList.remove("hidden")
                    : event_row[i].classList.add("hidden");
            }
        } else { //if category is selected the whole board is displayed 
            for (let i = 0; i < event_array.length; i++) {
                event_row[i].classList.remove("hidden")
            }
        }
        //spara till local storage
        let event_string = JSON.stringify(filtered_array);
        localStorage.setItem("filtered_array", event_string);
    }

    //sort function to give ascending or descending order
    sort() {

        let sortByDate = document.getElementById("date");
        let sorted_array = [];

        //loopa igenom objects i local storage och sortera dom utefter datum
        let event_array = JSON.parse(localStorage.getItem("event_array"));

        if (sortByDate.selectedIndex === 0) {
            sorted_array = event_array.sort(function (a, b) {
                return new Date(a.date) - new Date(b.date);
            })
        } else {
            sorted_array = event_array.sort(function (a, b) {
                return new Date(b.date) - new Date(a.date);
            })
        }

        //spara till local storage
        let event_string = JSON.stringify(sorted_array);
        localStorage.setItem("sorted_array", event_string)

        let key = "sorted";
        this.printEvent(key);
    }

    clearTable() {
        let events = document.querySelectorAll("tr");
        events.forEach(function (event) {
            event.remove();
        })
    }
}

class Events {
    constructor(date, name, location, category, isAvaliable) { // eventuellt kommer varje objekt behöva ett id.
        this.date = date; // hur ska vi hantera datum för att det ska gå att sortera sedan?
        this.name = name;
        this.location = location;
        this.category = category;
        this.isAvaliable = isAvaliable; // tänker att om det är true betyder det att det kommer vara en knapp här som tar en till detaljsidan
        //men om  det är false så kommer det istället stå cancelled. 
    }
}



// Några Eventobjekt som ska finnas från början när sidan har laddats.

let event1 = new Events("July 3, 22:00", "Anthony Jeselnik", "Civic Auditorium", "Stand Up", false)
let event2 = new Events("July 7, 20:00", "James Blake", "L'Olympia", "Music", true)
let event3 = new Events("August 13, 23:00", "Nina Simone", "Fasching", "Music", false)
let event4 = new Events("August 17, 13:00", "PSG vs Milan", "Le Parc des Princes", "Sport", false)
let event5 = new Events("August 17, 13:00", "PSG vs Milan", "Le Parc des Princes", "Sport", false)

let eventlist = new EventList;

eventlist.addEvent(event1);
eventlist.addEvent(event2);
eventlist.addEvent(event3);
eventlist.addEvent(event4);

eventlist.storeEvent(event1);
eventlist.storeEvent(event2);
eventlist.storeEvent(event3);
eventlist.storeEvent(event4);



eventlist.printEvent();



