let createButton = document.getElementById("create")
let addButton = document.getElementById("add")
let event_array_crud = JSON.parse(localStorage.getItem("event_array_crud_string")) //Få in event_array som en array att jobba med // namnet event_array_crud för att hålla isär den variabeln från den i eventlist




document.getElementById("popup").style.display = "none"
createButton.addEventListener("click", function(){
document.getElementById("popup").style.display = "block"
})


addButton.addEventListener("click", function(){


let date = document.getElementById("date").value
let event = document.getElementById("event").value
let place = document.getElementById("place").value
let category = document.getElementById("category").value
let  tickets = document.getElementById("tickets").value

let new_event = new Events(date, event, place, category, tickets);
console.log(new_event)
eventlist.addEvent(new_event)
eventlist.storeEvent(new_event)
printEvents();
//localStorage.clear()
})

/*
deleteButton.addEventListener("click",function(){


})
*/







 /*-----sara lagt till: -------------*/
function printEvents(){ 
event_obj = JSON.parse(localStorage.getItem("event_array"));
let crud_list = document.getElementById("crud-list");

        for (let event of event_obj) {
            let row = document.createElement("tr");
            row.classList.add("crud-item")
            let td_date = document.createElement("td");
            let td_name = document.createElement("td");
            let td_location = document.createElement("td");
            let td_avaliable = document.createElement("td");
            let td_edit = document.createElement("td");
            let edit_btn = document.createElement("button");
            let td_delete = document.createElement("td");
            let delete_btn = document.createElement("button");
            delete_btn.setAttribute("id", "delete_btn");
            td_date.innerText = event.date;
            td_name.innerText = event.name;
            td_location.innerText = event.location;
            edit_btn.innerText = "Edit"
            delete_btn.innerText = "Delete"
            
            crud_list.append(row);
            row.append(td_date);
            row.append(td_name);
            row.append(td_location);
            
            if (!event.isAvaliable) {
                td_avaliable.innerText = "Cancelled"
                row.append(td_avaliable);
            } else {
              td_avaliable.innerText = "More Info";
                row.append(td_avaliable);
            }
            td_edit.append(edit_btn);
            row.append(td_edit);
            edit_btn.classList.add("edit");
            td_delete.append(delete_btn);
            row.append(td_delete);
            delete_btn.classList.add("delete");
        }
    }


    printEvents();

    document.querySelectorAll(".delete").forEach(item =>{
        item.addEventListener("click", event =>{

      let eventArray = JSON.parse(localStorage.getItem("event_array"))

  //    console.log(eventArray)

eventArray.forEach(
(event,index) => {
console.log(event)
let remove_item = document.getElementsByClassName("crud-item")
if (remove_item)
remove_item[index].style.display = "none";
//console.log(remove_item);
}    
)

        })
    })
    
    