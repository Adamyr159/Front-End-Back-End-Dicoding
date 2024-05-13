//inisialisasi key untuk local storage
const localBooks = "LOCAL_BOOKS";
const books = [];
const RENDER_EVENT = 'render-book';


//inisialiasi variabel untuk menampung elemen dokumen
const bookSubmit = document.getElementById('inputBook');
const buttonSubmit = document.getElementById('bookSubmit');
const searchBookTitle = document.getElementById('searchBookTitle').value;
const searchSubmit = document.getElementById('searchSubmit');
const incompleteBookshelfList = document.getElementById('incompleteBookshelfList');
const completeBookshelfList = document.getElementById('completeBookshelfList');

//inisialisasi fungsi untuk menghasilkan user id random 
function getIdRandom() {
    return +new Date()
}

function checkForStorage() {
    return typeof (Storage) !== 'undefined';
}


function putBookList(book){
    if(checkForStorage()){
        // if (localStorage.getItem(localBooks) !== null){
        //     books = JSON.parse(localStorage.getItem(localBooks));
        // }
        books.push(book);
        document.dispatchEvent(new Event(RENDER_EVENT));
        saveData();
        localStorage.setItem(localBooks, JSON.stringify(books));
    }
}

function getBookList(){
    if(checkForStorage()){
        return JSON.parse(localStorage.getItem(localBooks)) || [];
    } else {
        return [];
    }
}

function renderBookList(){
    const bookData = getBookList();

    incompleteBookshelfList.innerHTML = '';
    completeBookshelfList.innerHTML = '';
    for (const book of books){
        const articleElement = document.createElement('article');
        articleElement.classList.add('book_item');

        const titleElement = document.createElement('h3');
        titleElement.innerText = book.title;

        const authorElement = document.createElement('p');
        authorElement.innerText = `Penulis: ${book.author}`;
        
        const yearElement = document.createElement('p');
        yearElement.innerText = `Tahun: ${book.year}`;

        const actionDiv = document.createElement('div');
        actionDiv.classList.add('action');

        if(book.isComplete){
            const undoButton = document.createElement('button');
            // undoButton.classList.add('green');
            undoButton.classList.add('undo-button');
            // undoButton.innerText = 'Belum Selesai Dibaca';
            undoButton.addEventListener('click', () => {
                undoBookFromCompleted(book.id);
            });

            const trashButton = document.createElement('div');
            // trashButton.classList.add('red');
            trashButton.classList.add('trash-button');
            // trashButton.innerText = 'Hapus Buku';
            trashButton.addEventListener('click', () => {
                removeBookFromCompleted(book.id);
            });
            actionDiv.append(undoButton, trashButton);
            articleElement.append(titleElement, authorElement, yearElement, actionDiv);
            completeBookshelfList.append(articleElement);
        } else {
            const checkButton = document.createElement('button');
            // checkButton.classList.add('green');
            checkButton.classList.add('check-button');
            // checkButton.innerText = 'Selesai Dibaca';
            checkButton.addEventListener('click', () => {
                alert('haii');
                console.log('sudah di klik');
                addBookToCompleted(book.id)
            });

            const trashButton = document.createElement('div');
            // trashButton.classList.add('red');
            trashButton.classList.add('trash-button');
            // trashButton.innerText = 'Hapus Buku';
            trashButton.addEventListener('click', () => {
                removeBookFromCompleted(book.id);
            });
            actionDiv.append(checkButton, trashButton);
            articleElement.append(titleElement, authorElement, yearElement, actionDiv);
            incompleteBookshelfList.append(articleElement);
        }
    }
}

bookSubmit.addEventListener('submit', (event) => {
    const inputBookTitle = document.getElementById('inputBookTitle').value;
    const inputBookAuthor = document.getElementById('inputBookAuthor').value;
    const inputBookYear = document.getElementById('inputBookYear').value;
    const inputBookIsComplete = document.getElementById('inputBookIsComplete').checked;

    const newBookData = {
        id: getIdRandom(),
        title: inputBookTitle, 
        author: inputBookAuthor,
        year: parseInt(inputBookYear, 10),
        isComplete: inputBookIsComplete
    }

    putBookList(newBookData);
    renderBookList();

});

window.addEventListener('load', () => {
    if (checkForStorage){
        if(localStorage.getItem(localBooks) !== null){
            renderBookList();
        }
    } else {
        alert('Browser yang anda gunakan tidak mendukung Web Storage');
    }
})

function findBook(bookId){
    const books = JSON.parse(localStorage.getItem(localBooks));
    const foundBook = books.find(book => book.id === bookId);
    return foundBook;
}

function addBookToCompleted(bookId){
    const bookTarget = findBook(bookId);
    if(bookTarget == null) return;
    // console.log(bookTarget);
    bookTarget.isComplete = true;

    document.dispatchEvent(new Event(RENDER_EVENT));
    saveData();
}

// Menampilkan

function undoBookFromCompleted(bookId){

}


function removeBookFromCompleted(bookId){

}

function findBookTitle(bookTitle){

}


function saveData() {
    if (checkForStorage()) {
        const parsed = JSON.stringify(books);
        localStorage.setItem(localBooks, parsed);
        // document.dispatchEvent(new Event(SAVE_EVENT));
    }
}

document.addEventListener(RENDER_EVENT, () => {
    incompleteBookshelfList.innerHTML = '';
    completeBookshelfList.innerHTML = '';
    
    for(const book of books) {
        // const todoElement = makeTodo(book);
        if(!book.isCompleted) {
            incompleteBookshelfList.append(articleElement);
        } else {
            completeBookshelfList.append(articleElement);
        }
    }
});
