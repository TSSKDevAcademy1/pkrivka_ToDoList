"use strict"
var list=document.getElementById("todo-list");
var add=document.getElementById("Add-btn-add");
add.addEventListener("click", add_onclick);
var del=document.getElementById("Done-btn-delete");
del.addEventListener("click", del_onclick);
list.addEventListener("click",mark);

function add_onclick(entry){
var entry=document.getElementById("new-entry").value;	
	if (entry==""){
		alert("Please, enter your task");
	}
	else {
		console.log(entry);
		var newList = document.createElement("li");	
		var newListValue = document.createTextNode(entry);
		newList.appendChild(newListValue);
		list.appendChild(newList);
	}
}

function mark(event){
	var el=event.target;
	if (el.nodeName=="LI"){
		if (el.style.textDecoration=='line-through'){
			el.style.textDecoration='none';
		}
		else {
			el.style.textDecoration='line-through';
		}
	}	
}

function del_onclick(){
	for(var el of document.getElementById("todo-list").childNodes){
		if (el.nodeName=="LI"){
			if (el.style.textDecoration=='line-through'){
				el.remove();	
			}
		}
		else {
			console.log('vyber polozku zo zoznamu');
		}
	}
}


