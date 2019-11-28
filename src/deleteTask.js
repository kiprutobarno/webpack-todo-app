/**
 *This function deletes a list item(task)
 * @param {Element} element The list item to be deleted
 */
const deleteTask = element => {
  let listItem = element.target.parentNode;
  let ul = listItem.parentNode;
  ul.removeChild(listItem);
};

export default deleteTask;
