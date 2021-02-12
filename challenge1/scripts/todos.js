import {
    ToDo
} from './todo.js';

let todoItems = [];

// check localStorage for existing todo items
if (localStorage.getItem('todoItems')) {
    todoItems = JSON.parse(localStorage.getItem('todoItems'));
}
setTodoList();

// output existing ToDos
function setTodoList() {
    if (todoItems.length > 0) {
        let todoList = document.querySelector('ul');
        todoList.innerHTML = '';

        console.log(todoList);

        todoItems.forEach((todoItem) => {
            todoList.innerHTML +=
                `<li id="${todoItem.Id}">
            <input type="checkbox" value="${todoItem.Id}">
            <label class="checkbox">
            ${todoItem.Content}
            </label> 
            <button type="button" id="delete" value="x">x</button>
            </li>`;

        });
    }

};

// Code for the checkboxes
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
checkboxes.forEach(
    checkbox => {
        checkbox.addEventListener('change', (event) => {
            const id = Number(event.target.value);

            console.log(id);
            const todo = todoItems.find(todo => todo.Id === id);
            todo.Completed = !todo.Completed;

            console.log(todoItems);

            localStorage.setItem("todoItems", JSON.stringify(todoItems));

            setTodoList();

        });
    }
)
const button = document.getElementById('save');
button.addEventListener('click', (event) => {
    event.preventDefault();

    const contentElement = document.querySelector("#content");

    const newTodo = new ToDo(contentElement.value);
    todoItems.push(newTodo);

    localStorage.setItem('todoItems', JSON.stringify(todoItems));

    setTodoList();

    console.log(todoItems);

    contentElement.value = '';
})

// function filter(event, filterType) {
    // Grab the id's of the buttons
// const tabs = document.getElementsByClassName('tablinks');
// tabs.addEventListener('click', (event, filterType) => {

    

//     // Declare all variables
//     let i, tabcontent, tablinks;

//     // Get all elements with class="tabcontent" and hide them
//     tabcontent = document.getElementsByClassName("tabcontent");
//     for (i = 0; i < tabcontent.length; i++) {
//         tabcontent[i].style.display = "none";
//     }

//     // Get all elements with class="tablinks" and remove the class "active"
//     tablinks = document.getElementsByClassName("tablinks");
//     for (i = 0; i < tablinks.length; i++) {
//         tablinks[i].className = tablinks[i].className.replace(" active", "");
//     }

//     // Show the current tab, and add an "active" class to the button that opened the tab
//     document.getElementById(filterType).style.display = "block";
//     evt.currentTarget.className += " active";
// })

document.getElementById("openDefault").click();