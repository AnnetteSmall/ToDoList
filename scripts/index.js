// view.displayTodo();

var todoList = {
 todos: [
   {
     todoText: 'item 1',
     completed: false
   },
   {
     todoText: 'item 2',
     completed: false
   },
   {
     todoText: 'item 3',
     completed: false
   }
 ],
  // displayTodos: function(){
  //   var count = 0;
  //   if (this.todos.length === 0){
  //     console.log('Nothing Todo!')
  //   } else {
  //     console.log("Todo List: ");
  //     for(var i = 0; i < this.todos.length; i++){
  //       if (this.todos[i].completed === false){
  //           count ++
  //           console.log('( )',this.todos[i].todoText);
  //           } else {
  //             console.log('(x)',this.todos[i].todoText);
  //           }
  //     }
  //   }
  //   console.log('Total Todo: ',count);
  // },
  addTodo: function(todoText){
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    // this.displayTodos();
  },
  changeTodo: function(position, todoText){
    this.todos[position].todoText = todoText;
    // this.displayTodos();
  },
  deleteTodo: function(position){
    this.todos.splice(position, 1);
    // this.displayTodos();
  },
  toggleCompleted: function(position){
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    // this.displayTodos();
  },
  totalTodos: function(){
    console.log('Total Todos: ',this.todos.length);
  },
  toggleAll: function(){
    var totalTodos = this.todos.length;
    var completedTodos = 0;
    for (var i = 0; i < totalTodos; i++){
      if (this.todos[i].completed === true){
        completedTodos ++;
          }
    };
    if (completedTodos === totalTodos){
      for (var i = 0; i < totalTodos; i ++){
        this.todos[i].completed = false;
      }
    } else {
      for (var i = 0; i < totalTodos; i ++){
        this.todos[i].completed = true;
    }

  }
    // this.displayTodos();
},
  toggleTodo(position){
    this.todos[position].completed = !this.todos[position].completed;
    // this.displayTodos();
  }
};

// This is the first way it can be done but this is long and will result in to much code
// var displayTodoListButton = document.getElementById('displayTodoListButton');
// displayTodoListButton.addEventListener('click', function(){
//   todoList.displayTodos();
// });

// var toggleAllButton = document.getElementById('toggleAllButton');
// toggleAllButton.addEventListener('click', function(){
//   todoList.toggleAll();
// });

var handlers = {
  displayTodos : function(){
    todoList.displayTodos();
    view.displayTodos();
  },
  toggleAll: function (){
    todoList.toggleAll();
    view.displayTodos();
  },
  // deleteTodo: function(){
  //   todoList.deleteTodo();
  //   view.displayTodos();
  // },
  addTodo: function(){
    var addTodoTextInput = document.getElementById('addTodoTextInput');
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = '';
    view.displayTodos();
  },
  updateTodo: function(){
    var updatePosition = document.getElementById('updatePosition');
    var newTodo = document.getElementById('newTodo');
    todoList.changeTodo(updatePosition.valueAsNumber, newTodo.value);
    updatePosition.value = "";
    newTodo.value = "";
    view.displayTodos();
},
  deleteTodo: function(position){
    // var deletePosition = document.getElementById('deletePosition');
    // todoList.deleteTodo(deletePosition.valueAsNumber);
    todoList.deleteTodo(position)
    // deletePosition.value = "";
    view.displayTodos();
  },
  toggleTodo: function(){
    var togglePosition = document.getElementById('toggleTodoPosition');
    todoList.toggleTodo(togglePosition.valueAsNumber);
    togglePosition.value = '';
    view.displayTodos();
  }
};



var view = {
  displayTodos: function(){
    var todoUL = document.querySelector('ul');
    todoUL.innerHTML = '';
    for (var i = 0; i < todoList.todos.length; i++){
        var todo = todoList.todos[i]
        // Create the list item <li></li>
        var todoLi = document.createElement('li');
        if (todo.completed === true ) {
          todoTextWithCompletion = " (x) " + todo.todoText
        } else {
          todoTextWithCompletion = " ( ) " + todo.todoText
        }
        todoLi.id = i;
        todoLi.textContent = todoTextWithCompletion;
        todoLi.appendChild(this.createDeleteButton(i));
        todoUL.appendChild(todoLi);

    }
  },
  createDeleteButton: function(id){
    var deleteButton = document.createElement('Button');
    // deleteButton.textContent = 'Delete';
    deleteButton.className = 'deleteButton';
    deleteButton.id = id;
    var deleteIcon = document.createElement('i');
    deleteIcon.className = 'fas fa-trash-alt';
    deleteIcon.id = id;
    // console.log(deleteIcon);
    // console.log(deleteButton);
    deleteButton.appendChild(deleteIcon);
    return deleteButton;
  }
};

var todosUl = document.querySelector('ul');
todosUl.addEventListener('click', function(event){
  // console.log('parentNode:', event.target.parentNode);
  // console.log('id :',event.target.parentNode.id);
});

var todosUl = document.querySelector('ul');

todosUl.addEventListener('click', function(event){
  //Get the element that was clicked on
  var elementClicked = event.target.parentNode.parentElement;
  // Check if elementClicked is a delete button.
  console.log(event.target.parentNode.parentElement)
  if (elementClicked.className === 'deleteButton'){
    //Run handlers.deleteTodo.
    // console.log('id :',event.target.parentNode.id);
    handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
  }
})
