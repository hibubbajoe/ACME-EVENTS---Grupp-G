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