var taskList = document.getElementById('taskList');
var taskInput = document.getElementById('taskInput');

function addTask() {
  var taskText = taskInput.value;
  if (taskText.trim() !== '') {
    var li = document.createElement('li');
    li.innerHTML = taskText + ' <button onclick="editTask(this)">Edit</button> <button onclick="deleteTask(this)">Delete</button> <button onclick="toggleComplete(this)">Complete</button>';
    taskList.appendChild(li);
    taskInput.value = '';
  }
}

function editTask(button) {
  var li = button.parentNode;
  var taskText = li.firstChild.textContent;
  var editedTaskText = prompt('Edit the task:', taskText);
  if (editedTaskText !== null) {
    li.firstChild.textContent = editedTaskText;
  }
}

function deleteTask(button) {
  var li = button.parentNode;
  taskList.removeChild(li);
}

function toggleComplete(button) {
  var li = button.parentNode;
  li.classList.toggle('completed');
}
