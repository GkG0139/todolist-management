function createElement({ tagName, attributes = [], classes = [], textContent = "" }) {
  const newElement = document.createElement(tagName);

  if (attributes) {
    attributes.forEach((attr) => newElement.setAttribute(attr.name, attr.value));
  }

  if (classes) {
    newElement.classList.add(...classes);
  }

  if (textContent) {
    newElement.textContent = textContent;
  }

  return newElement;
}

function showTodoItem(newId, newDescription) {
  const listTodo = document.getElementById("listTodo");

  const todoElement = createElement({ tagName: "div", attributes: [{ name: "id", value: newId }], classes: ["todoItem"] });
  const descriptionElement = createElement({ tagName: "p", textContent: newDescription });
  const notDoneButton = createElement({ tagName: "button", textContent: "Not Done" });
  const removeButton = createElement({ tagName: "button", textContent: "remove" });

  todoElement.appendChild(descriptionElement);
  todoElement.appendChild(notDoneButton);
  todoElement.appendChild(removeButton);

  listTodo.appendChild(todoElement);
}

function showNumberOfDone(numberOfDone) {
  document.getElementById("done").textContent = `Number of Done: ${numberOfDone}`;
}

function showNumberOfNotDone(numberOfNotDOne) {
  document.getElementById("notDone").textContent = `Number of Not Done: ${numberOfNotDOne}`;
}

function removeTodoItem(removeId) {
  document.getElementById(removeId).remove();
}

export { showTodoItem, showNumberOfDone, showNumberOfNotDone, removeTodoItem };
