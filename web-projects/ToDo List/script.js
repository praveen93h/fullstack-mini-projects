
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');


addTaskButton.addEventListener('click', () => {
  const taskName = taskInput.value.trim();
  if (taskName === '') {
    alert('Task name cannot be empty!');
    return;
  }

 
  const taskItem = document.createElement('li');
  taskItem.classList.add('task-item');
 

  
  const taskText = document.createElement('input');
  taskText.type = 'text';
  taskText.value = taskName;
  taskText.readOnly = true;

  
  const buttonGroup = document.createElement('div');
  buttonGroup.classList.add('btn-group');

  
  const editButton = document.createElement('button');
  editButton.classList.add('btn', 'btn-warning', 'btn-sm');
  editButton.innerHTML = '<i class="bi bi-pencil"></i>';
  
  editButton.addEventListener('click', () => {
    if (editButton.textContent === 'Edit') {
      taskText.readOnly = false;
      taskText.focus();
      editButton.textContent = 'Save';
      editButton.classList.replace('btn-warning', 'btn-success');
    } else {
      taskText.readOnly = true;
      editButton.textContent = 'Edit';
      editButton.classList.replace('btn-success', 'btn-warning');
    }
  });

  
  const removeButton = document.createElement('button');
  removeButton.classList.add('btn', 'btn-danger', 'btn-sm');
  removeButton.innerHTML = '<i class="bi bi-trash"></i>';
  removeButton.addEventListener('click', () => {
    taskList.removeChild(taskItem);
  });

  // Append buttons to group and group to task
  buttonGroup.appendChild(editButton);
  buttonGroup.appendChild(removeButton);
  taskItem.appendChild(taskText);
  taskItem.appendChild(buttonGroup);

  // Add task to the list
  taskList.appendChild(taskItem);

  // Clear input field
  taskInput.value = '';
});
