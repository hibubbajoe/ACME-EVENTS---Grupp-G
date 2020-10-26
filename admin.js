let createButton = document.getElementById("create")
let addButton = document.getElementById("add")
let deleteButton = document.getElementById("delete") 
let event_array_crud = JSON.parse(localStorage.getItem("event_array_crud_string")) //Få in event_array som en array att jobba med // namnet event_array_crud för att hålla isär den variabeln från den i eventlist


document.getElementById("popup").style.display = "none"
createButton.addEventListener("click", function(){
document.getElementById("popup").style.display = "block"
})


addButton.addEventListener("click", function(){

  let date = document.getElementById("date").value;
  let name = document.getElementById("event").value;
  let location = document.getElementById("place").value;
  let category = document.getElementById("event_type").value;
  //let tickets_available = document.getElementById.bool 
  

  let new_event = {date:date, name:name, location:location, category:category} //Går det att läsa in klassen från eventlist.js?, hur isåfall

event_array_crud_string = JSON.stringify(event_array_crud)
localStorage.setItem("event_array_crud_string", event_array_crud_string)
event_array_crud.push(new_event)

console.log(event_array_crud)

print();

function print(){
var item = document.createElement("li")
document.getElementById("list").appendChild(item)
}
})


/*
deleteButton.addEventListener("click",function(){


})
*/
 /*-----sara lagt till: -------------*/
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