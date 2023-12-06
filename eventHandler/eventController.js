import todoManagement from "../lib/todoManagement.js";
import { showNumberOfDone, showNumberOfNotDone, showTodoItem } from "../ui/todoListUI.js";

const { addTodo, getNumberOfDone, getNumberOfNotDone, setItemToDone, removeTodo, loadTodos, getTodos } = todoManagement();

function addTodoHandler() {
  const submitButton = document.getElementById("addBtn");
  const inputTodo = document.getElementById("addTodo").querySelector("input");
  submitButton.addEventListener("click", () => {
    const newDescription = inputTodo.value;
    if (!newDescription) return;

    const newTodoId = addTodo(newDescription);
    showTodoItem(newTodoId, newDescription);
    registerButtonEventHandlers(newTodoId);

    updateStatus();
  });
}

function registerButtonEventHandlers(todoId) {
  const buttons = document.getElementById(todoId).getElementsByTagName("button");
  buttons[0].addEventListener("click", (event) => notDoneButtonHandler(event, todoId));
  buttons[1].addEventListener("click", (event) => removeButtonHandler(event, todoId));
}

function notDoneButtonHandler(event, todoId) {
  const button = event.target;

  styleDoneButton(button);
  setItemToDone(todoId);

  updateStatus();
}

function styleDoneButton(button) {
  button.textContent = "Done";
  button.style.backgroundColor = "green";
  button.style.color = "white";
}

function removeButtonHandler(_, todoId) {
  const todoElement = document.getElementById(todoId);
  todoElement.remove();

  removeTodo(todoId);

  updateStatus();
}

function updateStatus() {
  showNumberOfDone(getNumberOfDone());
  showNumberOfNotDone(getNumberOfNotDone());
}

function loadHandler() {
  window.addEventListener("load", () => {
    const stringTodo = localStorage.getItem("todos");
    if (!stringTodo) return;

    loadTodos(JSON.parse(stringTodo));
    getTodos().forEach((todo) => {
      showTodoItem(todo.id, todo.description);
      registerButtonEventHandlers(todo.id);

      updateStatus();

      if (!todo.done) return;

      const todoElement = document.getElementById(todo.id);
      const doneButtoon = todoElement.querySelector("button");
      styleDoneButton(doneButtoon);
    });
  });
}

function beforeUnloadHandler() {
  window.addEventListener("unload", (event) => {
    event.preventDefault();
    const todos = JSON.stringify(getTodos());
    localStorage.setItem("todos", todos);
  });
}

export { addTodoHandler, loadHandler, beforeUnloadHandler, updateStatus };
