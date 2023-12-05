class Todo {
  static latestId = 0;

  constructor(id, description, done = false) {
    this.id = id || ++Todo.latestId;
    this.description = description;
    this.done = done;
  }
}

export default Todo;
