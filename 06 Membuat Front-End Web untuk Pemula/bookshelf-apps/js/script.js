const books = [];
const RENDER_EVENT = 'render-book';
const SAVED_EVENT = 'saved-book';
const localBooks = "LOCAL_BOOKS";


document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('inputBook');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        addBook();
    });

    if (isStorageExist()) {
        loadDataFromStorage();
    }
});

function addBook() {
    const inputBookTitle = document.getElementById('inputBookTitle').value;
    const inputBookAuthor = document.getElementById('inputBookAuthor').value;
    const inputBookYear = parseInt(document.getElementById('inputBookYear').value);
    const inputBookIsComplete = document.getElementById('inputBookIsComplete').checked;
    
    const generateID = generateId(); 
    const bookObject = generateBookObject(generateID, inputBookTitle, inputBookAuthor, inputBookYear, inputBookIsComplete);
    books.push(bookObject);

    document.dispatchEvent(new Event(RENDER_EVENT));
    saveData();
}

function generateId() {
    return +new Date();
}

function generateBookObject(id, title, author, year, isComplete) {
    return {
        id, title, author, year, isComplete
    }
}


function checkForStorage() {
    return typeof (Storage) !== 'undefined';
}

document.addEventListener(RENDER_EVENT, () => {
    const inCompleteBookshelfList = document.getElementById('incompleteBookshelfList');
    inCompleteBookshelfList.innerHTML = '';
    const completeBookshelfList = document.getElementById('completeBookshelfList');
    completeBookshelfList.innerHTML = '';
    
    for(const book of books) {
        if(!book.isComplete) {
            inCompleteBookshelfList.append(makeBook(book));
        } else {
            completeBookshelfList.append(makeBook(book));
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

    if(bookObject.isComplete) {
        const undoButton = document.createElement('button');
        undoButton.classList.add('undo-button');
        undoButton.addEventListener('click', () => {
            undoBookFromCompleted(bookObject.id);
        });
        
        const trashButton = document.createElement('button');
        trashButton.classList.add('trash-button');
        trashButton.addEventListener('click', () => {
            if(confirm(`Apakah anda yakin ingin menghapus data ${bookObject.title}?`)){
                removeBookFromCompleted(bookObject.id);
            }
        });

        actionDiv.append(undoButton, trashButton);
        articleElement.append(actionDiv);
    } else {
        const checkButton = document.createElement('button');
        checkButton.classList.add('check-button');
        checkButton.addEventListener('click', () => {
            addBookToCompleted(bookObject.id);
        });

        const trashButton = document.createElement('button');
        trashButton.classList.add('trash-button');
        trashButton.addEventListener('click', () => {
            if(confirm(`Apakah anda yakin ingin menghapus data ${bookObject.title}?`)){
                removeBookFromCompleted(bookObject.id);
            }
        });
        actionDiv.append(checkButton, trashButton);
        articleElement.append(actionDiv);
    }

    return articleElement;
}


function addBookToCompleted(id) {
    const bookTarget = findBook(id);
    if (bookTarget == null) return;
    bookTarget.isComplete = true;
    document.dispatchEvent(new Event(RENDER_EVENT));
    saveData();
}

function removeBookFromCompleted(id){
    const bookTarget = findBookIndex(id);
    if (bookTarget === -1) return;
    books.splice(bookTarget, 1);
    document.dispatchEvent(new Event(RENDER_EVENT));
    saveData();

}

function undoBookFromCompleted(id) {
    const bookTarget = findBook(id);
    if (bookTarget == null) return;
    bookTarget.isComplete = false;
    document.dispatchEvent(new Event(RENDER_EVENT));
    saveData();

}

function findBook(id){
    for(const book of books) {
        if (book.id === id) {
            return book;
        }
    }
    return null;
}

function findBookIndex(bookId){
    for(const index in books) {
        if (books[index].id === bookId) {
            return index;
        }
    }
    return -1;
}

function saveData() {
    if (checkForStorage()) {
        const parsed = JSON.stringify(books);
        localStorage.setItem(localBooks, parsed);
    }
}

function isStorageExist() {
    if (typeof (Storage) === undefined) {
        alert('Browser kamu tidak mendukung local storage');
        return false;
    }
    return true;
}

document.addEventListener(SAVED_EVENT, function () {
    console.log(localStorage.getItem(localBooks));
});

function loadDataFromStorage() {
    const serializedData = localStorage.getItem(localBooks);
    let data = JSON.parse(serializedData);
   
    if (data !== null) {
      for (const book of data) {
        books.push(book);
      }
    }
   
    document.dispatchEvent(new Event(RENDER_EVENT));
}