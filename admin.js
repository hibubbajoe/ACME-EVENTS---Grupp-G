
class LocalStorage {
    constructor(getData, setData, deleteDate) {
        this.getData = getData;
        this.setData = setData;
        this.deleteDate = deleteDate;
    }
}

let createButton = document.getElementById("create")
let addButton = document.getElementById("add")
let event_array_crud = JSON.parse(localStorage.getItem("event_array_crud_string")) //Få in event_array som en array att jobba med // namnet event_array_crud för att hålla isär den variabeln från den i eventlist


document.getElementById("popup").style.display = "none"
createButton.addEventListener("click", function () {
    document.getElementById("popup").style.display = "block"
})

addButton.addEventListener("click", function () {

    let date = document.getElementById("date").value
    let event = document.getElementById("event").value
    let place = document.getElementById("place").value
    let category = document.getElementById("category").value
    let tickets = document.getElementById("tickets").value

    let new_event = new Events(date, event, place, category, tickets);
    //console.log(new_event)
    eventlist.addEvent(new_event)
    eventlist.storeEvent()
    printEvents();
    eventlist.printEvent();
    //localStorage.clear()
})

function deleteEvents() {
    eventlist.deleteEvent(event.target.id, 1)
    eventlist.storeEvent();
    printEvents();
}

function editRow() {

    let row = event.target.parentNode.parentNode;
    row.querySelectorAll("input").forEach(item => {

        item.removeAttribute("readonly");
    })
}


function printEvents() {
    eventlist.clearTable();
    event_obj = JSON.parse(localStorage.getItem("event_array"));
    let crud_list = document.getElementById("crud-list");

    event_obj.forEach((event, index) => {

        //create elements
        let row = document.createElement("tr");
        let td_date = document.createElement("input");
        let td_name = document.createElement("input");
        let td_location = document.createElement("input");
        let td_category = document.createElement("input");
        let td_avaliable = document.createElement("input");
        let td_edit = document.createElement("td");
        let edit_btn = document.createElement("button");
        let td_delete = document.createElement("td");
        let delete_btn = document.createElement("button");

        //set class and attributes
        row.classList.add("crud-item")
        delete_btn.setAttribute(`id`, `${index}`);
        edit_btn.setAttribute(`id`, `${index}`);
        edit_btn.classList.add("edit");
        delete_btn.classList.add("delete");

        //making all input fields only readable
        document.querySelectorAll("input").forEach(item => {
            item.setAttribute("readonly", true);
        })

        //get values 
        td_date.value = event.date;
        td_name.value = event.name;
        td_category.value = event.category;
        td_location.value = event.location;
        edit_btn.innerText = "Edit"
        delete_btn.innerText = "Delete"


        //append
        crud_list.append(row);
        row.append(td_date);
        row.append(td_name);
        row.append(td_location);
        row.append(td_category);

        if (!event.isAvaliable) {
            td_avaliable.value = "Cancelled"
            row.append(td_avaliable);
        } else {
            td_avaliable.value = "More Info";
            row.append(td_avaliable);
        }

        td_edit.append(edit_btn);
        row.append(td_edit);
        td_delete.append(delete_btn);
        row.append(td_delete);

    })
    //triggers when user press any delete button
    document.querySelectorAll(".delete").forEach(item => {
        item.addEventListener("click", event => {
            deleteEvents();

        })
    })
    document.querySelectorAll(".edit").forEach(item => {
        item.addEventListener("click", event => {
            editRow();
        })
    })
}







printEvents();


