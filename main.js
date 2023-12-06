import { addTodoHandler, beforeUnloadHandler, loadHandler, updateStatus } from "./eventHandler/eventController.js";

addTodoHandler();
loadHandler();
beforeUnloadHandler();

updateStatus();
