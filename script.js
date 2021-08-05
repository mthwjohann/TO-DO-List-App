//Selectors
const todoInput = document.querySelector(".item");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".each-items");

//Event Listeners
todoButton.addEventListener('click', addTodo);
//trashButton
todoList.addEventListener('click', deleteCheck);

//Functions
function addTodo(event){
  //Prevent form from submitting
  event.preventDefault();
  //console.log(todoInput.value);

  //To do Div

  //Creating element
  const todoDiv = document.createElement('div');
  //adding a class/id name
  todoDiv.classList.add('todo');

  //Create LI
  const createLI = document.createElement('li');
  createLI.innerText = todoInput.value;
  createLI.classList.add('todolist');
  todoDiv.appendChild(createLI);

  //Check Trash button
  //Creating Element
  const trashButton = document.createElement('button');
  //Set HTML content
  trashButton.innerHTML = '<i class="fa fa-trash"></i>';
  //Add an identifier
  trashButton.classList.add('trash-btn');
  todoDiv.appendChild(trashButton);
  
  //Append to Listeners
  todoList.appendChild(todoDiv);
  
  //Clear Todo Input value
  todoInput.value = "";
}

function deleteCheck(e){
  //retrieve a reference to the parent node (list item)
  const item = e.target.parentNode;
  if(item.classList[0] === "trash-btn"){
    const todo = item.parentElement;
    todo.remove();
  }
}