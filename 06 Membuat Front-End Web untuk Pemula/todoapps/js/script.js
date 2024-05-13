const todos = [];
const RENDER_EVENT = 'render-todo';
const SAVED_EVENT = 'saved-todo';
const STORAGE_KEY = 'TODO_APPS';


document.addEventListener('DOMContentLoaded', () => {
    const submitForm = document.getElementById('form');
    submitForm.addEventListener('submit', (event) => {
        event.preventDefault();
        addToDo();
    });

    if (isStorageExist()) {
        loadDataFromStorage();
    }
});

function addToDo() {
    const textToDo = document.getElementById('title').value;
    const timestamp = document.getElementById('date').value;
    
    const generateID = generateId(); 
    const toDoObject = generateToDoObject(generateID,textToDo, timestamp, false);
    todos.push(toDoObject);

    document.dispatchEvent(new Event(RENDER_EVENT));
    saveData();
}

function generateId() {
    return +new Date();
}

function generateToDoObject(id, task, timestamp, isCompleted) {
    return {
        id, task, timestamp, isCompleted
    }
}

document.addEventListener(RENDER_EVENT, () => {
    const uncompletedToDoList = document.getElementById('todos');
    uncompletedToDoList.innerHTML = '';
    const completedToDoList = document.getElementById('completed-todos');
    completedToDoList.innerHTML = '';
    
    for(const todoItem of todos) {
        // const todoElement = makeTodo(todoItem);
        if(!todoItem.isCompleted) {
            uncompletedToDoList.append(makeTodo(todoItem));
        } else {
            completedToDoList.append(makeTodo(todoItem));
        }
    }
});

function makeBook(bookObject) {
    const articleElement = document.createElement('article');
    articleElement.classList.add('book_item');

    const titleElement = document.createElement('h3');
    titleElement.innerText = bookObject.title;

    const authorElement = document.createElement('p');
    authorElement.innerText = `Penulis: ${bookObject.author}`;
    
    const yearElement = document.createElement('p');
    yearElement.innerText = `Tahun: ${bookObject.year}`;

    const actionDiv = document.createElement('div');
    actionDiv.classList.add('action');

    articleElement.append(titleElement, authorElement, yearElement);

    if(bookObject.isCompleted) {
        const undoButton = document.createElement('button');
        undoButton.classList.add('undo-button');
        undoButton.addEventListener('click', () => {
            undoBookFromCompleted(bookObject.id);
        });
        
        const trashButton = document.createElement('button');
        trashButton.classList.add('trash-button');
        trashButton.addEventListener('click', () => {
            removeBookFromCompleted(bookObject.id);
        });

        actionDiv.append(undoButton, trashButton);
        articleElement.append(actionDiv);
    } else {
        const checkButton = document.createElement('button');
        checkButton.classList.add('check-button');
        checkButton.addEventListener('click', () => {
            addBookToCompleted(bookObject.id);
        });
        actionDiv.append(checkButton);
        articleElement.append(actionDiv);
    }

    return articleElement;
}

function makeTodo(toDoObject) {
    const textTitle = document.createElement('h2');
    textTitle.innerText = toDoObject.task;

    const textTimestamp = document.createElement('p');
    textTimestamp.innerText = toDoObject.timestamp;

    const textContainer = document.createElement('div');
    textContainer.classList.add('inner');
    textContainer.append(textTitle, textTimestamp);

    const container = document.createElement('div');
    container.classList.add('item', 'shadow');
    container.append(textContainer);
    container.setAttribute('id', `${toDoObject.id}`);

    if(toDoObject.isCompleted) {
        const undoButton = document.createElement('button');
        undoButton.classList.add('undo-button');
        undoButton.addEventListener('click', () => {
            undoTaskFromCompleted(toDoObject.id);
        });
        
        const trashButton = document.createElement('button');
        trashButton.classList.add('trash-button');
        trashButton.addEventListener('click', () => {
            removeTaskFromCompleted(toDoObject.id);
        });

        container.append(undoButton, trashButton);
    } else {
        const checkButton = document.createElement('button');
        checkButton.classList.add('check-button');
        checkButton.addEventListener('click', () => {
            addTaskToCompleted(toDoObject.id);
        });
        container.append(checkButton);
    }

    return container;
}

function addTaskToCompleted(id) {
    const todoTarget = findToDo(id);
    if (todoTarget == null) return;
    todoTarget.isCompleted = true;
    document.dispatchEvent(new Event(RENDER_EVENT));
    saveData();

}

function removeTaskFromCompleted(id){
    const todoTarget = findToDoIndex(id);
    if (todoTarget === -1) return;
    todos.splice(todoTarget, 1);
    document.dispatchEvent(new Event(RENDER_EVENT));
    saveData();

}

function undoTaskFromCompleted(id) {
    const todoTarget = findToDo(id);
    if (todoTarget == null) return;
    todoTarget.isCompleted = false;
    document.dispatchEvent(new Event(RENDER_EVENT));
    saveData();

}


// Find TODO ID
function findToDo(id){
    for(const todoItem of todos) {
        if (todoItem.id === id) {
            return todoItem;
        }
    }
    return null;
}

// Find TODO Index
function findToDoIndex(todoId){
    for(const index in todos) {
        if (todos[index].id === todoId) {
            return index;
        }
    }
    return -1;
}


function saveData() {
    if (isStorageExist()) {
      const parsed = JSON.stringify(todos);
      localStorage.setItem(STORAGE_KEY, parsed);
      document.dispatchEvent(new Event(SAVED_EVENT));
    }
  }

function isStorageExist() /* boolean */ {
if (typeof (Storage) === undefined) {
    alert('Browser kamu tidak mendukung local storage');
    return false;
}
return true;
}

document.addEventListener(SAVED_EVENT, function () {
    console.log(localStorage.getItem(STORAGE_KEY));
});


function loadDataFromStorage() {
    const serializedData = localStorage.getItem(STORAGE_KEY);
    let data = JSON.parse(serializedData);
   
    if (data !== null) {
      for (const todo of data) {
        todos.push(todo);
      }
    }
   
    document.dispatchEvent(new Event(RENDER_EVENT));
  }