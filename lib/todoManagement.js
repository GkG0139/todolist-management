import Todo from "./todo.js";

class TodoManagement {
  static todos = [];

  static addTodo(description) {
    const newTodo = new Todo(null, description);
    this.todos.push(newTodo);
    return newTodo.id;
  }

  static getNumberOfDone() {
    return this.todos.reduce((count, todo) => (todo.done ? count + 1 : count), 0);
  }

  static getNumberOfNotDone() {
    return this.todos.length - this.getNumberOfDone();
  }

  static getTodos() {
    return this.todos;
  }

  static clearTodos() {
    this.todos = [];
  }

  static setItemToDone(todoId) {
    const foundTodo = this.todos.find((todo) => todo.id === Number(todoId));
    foundTodo.done = true;
  }

  static removeTodoItem(todoId) {
    this.todos = this.todos.filter((todo) => todo.id !== Number(todoId));
  }

  static loadTodos(userTodos) {
    this.todos = userTodos;
  }
}

export default TodoManagement;
