import TodoManagement from "../lib/todoManagement.js";
import { showNumberOfDone, showNumberOfNotDone, showTodoItem } from "../ui/todoListUI.js";

function addTodoHandler() {
  const submitButton = document.getElementById("addBtn");
  const addTodoElement = document.getElementById("addTodo");
  const todoInput = addTodoElement.querySelector("input");

  submitButton.addEventListener("click", function (event) {
    event.preventDefault();
    const newDescription = todoInput.value;
    if (!newDescription) return;

    const newTodoId = TodoManagement.addTodo(newDescription);
    showTodoItem(newTodoId, newDescription);
    updateTodoStats();
    addButtonHandlers(newTodoId);
  });
}

function notDoneButtonHandler(event) {
  const button = event.target;
  const id = button.parentElement.getAttribute("id");
  TodoManagement.setItemToDone(id);

  styleDoneButton(button);

  updateTodoStats();
}

function removeButtonHandler(event) {
  const button = event.target;
  const id = button.parentElement.getAttribute("id");
  TodoManagement.removeTodoItem(id);

  button.parentElement.remove();
  updateTodoStats();
}

function addButtonHandlers(todoId) {
  const todoElement = document.getElementById(todoId);
  const buttons = todoElement.getElementsByTagName("button");
  buttons[0].addEventListener("click", notDoneButtonHandler);
  buttons[1].addEventListener("click", removeButtonHandler);
}

function updateTodoStats() {
  showNumberOfDone(TodoManagement.getNumberOfDone());
  showNumberOfNotDone(TodoManagement.getNumberOfNotDone());
}

function styleDoneButton(button) {
  button.textContent = "Done";
  button.style.backgroundColor = "green";
  button.style.color = "white";
}

function loadHandler() {
  window.addEventListener("load", () => {
    const stringTodos = localStorage.getItem("todos");
    if (!stringTodos) return;

    const todos = JSON.parse(stringTodos);
    TodoManagement.loadTodos(todos);

    TodoManagement.getTodos().forEach((todo) => {
      showTodoItem(todo.id, todo.description);
      updateTodoStats();
      addButtonHandlers(todo.id);

      if (!todo.done) return;

      const todoElement = document.getElementById(todo.id);
      const doneButtoon = todoElement.querySelector("button");
      styleDoneButton(doneButtoon);
    });
  });
}

function unloadHandler() {
  window.addEventListener("unload", () => {
    const stringTodos = JSON.stringify(TodoManagement.getTodos());
    localStorage.setItem("todos", stringTodos);
  });
}

export { addTodoHandler, notDoneButtonHandler, loadHandler, unloadHandler };
