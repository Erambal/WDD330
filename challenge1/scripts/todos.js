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
                `<li>
            <label ${ todoItem.Completed ? 'class="completed"' : ''}> 
            <input type="checkbox" value="${todoItem.Id}" ${ todoItem.Completed ? "checked" : ""}>
            ${todoItem.Content}
            </label> 
            <button type="button" class="deleted" id="${todoItem.Id}" value="x">x</button>
            </li>`;

        });
        // Code for the checkboxes
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(
            checkbox => {
                checkbox.addEventListener('change', (event) => {
                    const id = Number(event.target.value);

                    const todo = todoItems.find(todo => todo.Id === id);
                    todo.Completed = !todo.Completed;

                    localStorage.setItem("todoItems", JSON.stringify(todoItems));

                    setTodoList();

                });
            }
        );
        // code to delete an item
        const deleteItems = document.querySelectorAll('input[type="button"]');
        deleteItems.forEach(
            deleteItem => {
                deleteItem.addEventListener('click', (event) => {
                    // get the id of the delete button that was clicked
                    const id = Number(event.target.value);

                    // Find the todo in the todo array that was clicked and delete

                    const deletedIndex = todoItems.IndexOf(x => x.Id === deletedIndex);
                    todoItems.splice(deletedIndex, 1);

                    // Save todo list
                    localStorage.setItem("todoItems", JSON.stringify(todoItems));

                    setTodoList();
                });
            }
        );
    }

}



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