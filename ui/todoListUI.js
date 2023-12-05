function createElement({ tagName, attributes = [], classes = [], textContent = "" }) {
  const newElement = document.createElement(tagName);

  if (attributes && attributes.length > 0) {
    attributes.forEach((attr) => newElement.setAttribute(attr.name, attr.value));
  }

  if (classes && classes.length > 0) {
    newElement.classList.add(...classes);
  }

  if (textContent) {
    newElement.textContent = textContent;
  }

  return newElement;
}

function showTodoItem(newId, newDescription) {
  const listTodo = document.getElementById("listTodo");

  const todoElement = createElement({
    tagName: "div",
    attributes: [{ name: "id", value: newId }],
    classes: ["todoItem"],
  });

  const descriptionElement = createElement({
    tagName: "p",
    textContent: newDescription,
  });

  const notDoneButtonElement = createElement({
    tagName: "button",
    textContent: "Not done",
  });

  const doneButtonElement = createElement({
    tagName: "button",
    textContent: "remove",
  });

  todoElement.appendChild(descriptionElement);
  todoElement.appendChild(notDoneButtonElement);
  todoElement.appendChild(doneButtonElement);

  listTodo.appendChild(todoElement);
}

function showNumberOfDone(numberOfDone) {
  const doneStatusText = document.getElementById("done");
  doneStatusText.textContent = `Number of Done: ${numberOfDone}`;
}

function showNumberOfNotDone(numberOfNotDone) {
  const notDoneStatusText = document.getElementById("notDone");
  notDoneStatusText.textContent = `Number of Not Done: ${numberOfNotDone}`;
}

export { showTodoItem, showNumberOfDone, showNumberOfNotDone };
