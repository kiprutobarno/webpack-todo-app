import deleteTask from "./deleteTask";

/**
 * This function creates a new list item element
 * @param {String} task content to be inserted into the list element
 * @returns {Element} A list item
 */
const createNewTaskElement = task => {
  const listItem = document.createElement("li");
  const label = document.createElement("label");
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.className = "delete";
  deleteButton.addEventListener("click", deleteTask);
  label.innerText = task;
  listItem.appendChild(label);
  listItem.appendChild(deleteButton);
  return listItem;
};

/**
 * @returns {Element} A task element
 */
const addTask = () => {
  const taskList = document.getElementById("tasks");
  const task = document.getElementById("newTask");
  if (task.value !== "") {
    const newTaskItem = createNewTaskElement(task.value);
    taskList.appendChild(newTaskItem);
    task.value = "";
  }
};
export default addTask;
