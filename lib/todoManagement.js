import Todo from "./todo.js";

function todoManagement() {
  let todos = [];

  function addTodo(description) {
    const newTodo = new Todo(null, description);
    todos.push(newTodo);
    return newTodo.id;
  }

  function findTodo(searchId) {
    return todos.find((todo) => todo.id === Number(searchId));
  }

  function findIndexTodo(searchId) {
    return todos.findIndex((todo) => todo.id === Number(searchId));
  }

  function removeTodo(removeId) {
    todos = todos.filter((todo) => todo.id !== Number(removeId));
  }

  function getTodos() {
    return todos;
  }

  function getNumberOfDone() {
    return todos.reduce((count, todo) => (todo.done ? count + 1 : count), 0);
  }

  function getNumberOfNotDone() {
    return todos.length - getNumberOfDone();
  }

  function clearTodo() {
    todos = [];
  }

  function setItemToDone(todoId) {
    const foundTodo = todos.find((todo) => todo.id === Number(todoId));
    if (foundTodo) foundTodo.done = true;
  }

  function loadTodos(userTodos) {
    userTodos.forEach((todo) => {
      const newTodo = new Todo(null, todo.description, todo.done);
      todos.push(newTodo);
    });
  }

  return {
    addTodo,
    findTodo,
    findIndexTodo,
    removeTodo,
    getTodos,
    getNumberOfDone,
    getNumberOfNotDone,
    clearTodo,
    setItemToDone,
    loadTodos
  };
}

export default todoManagement;
