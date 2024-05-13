//inisialisasi key untuk local storage
const localBooks = "LOCAL_BOOKS";
const RENDER_EVENT = 'render-books';

//inisialiasi variabel untuk menampung elemen dokumen
const bookSubmit = document.getElementById('bookSubmit');
const searchBookTitle = document.getElementById('searchBookTitle').value;
const searchSubmit = document.getElementById('searchSubmit');
const incompleteBookshelfList = document.getElementById('incompleteBookshelfList');
const completeBookshelfList = document.getElementById('completeBookshelfList');

//inisialisasi fungsi untuk menghasilkan user id random 
function getIdRandom() {
    return +new Date()
}

window.addEventListener('load', () => {
    isStorageExist();
    // if (typeof Storage !== 'undefined'){
    //     // inisialisasi semua item web storage yang kita akan gunakan jika belum ada
    //     if (localStorage.getItem(localBooks) === null){
    //         localStorage.setItem(localBooks, JSON.stringify([]));
    //     }
    // } else {
    //     window.alert("Browser yang Anda gunakan tidak mendukung Web Storage");
    // }
});

// Form Ketika di Submit
document.getElementById('inputBook').addEventListener('submit', (event) => {
    event.preventDefault();
    addToDo();
});

function addToDo(){
    const inputBookTitle = document.getElementById('inputBookTitle').value;
    const inputBookAuthor = document.getElementById('inputBookAuthor').value;
    const inputBookYear = document.getElementById('inputBookYear').value;
    const inputBookIsComplete = document.getElementById('inputBookIsComplete').checked;
    const bookObject = {
        id: getIdRandom(),
        title: inputBookTitle, 
        author: inputBookAuthor,
        year: inputBookYear,
        isComplete: inputBookIsComplete
    }

    // Mengambil buku lama dalam bentuk array & Menyimpan buku baru ke dalam local storage
    const books = JSON.parse(localStorage.getItem(localBooks));
    books.push(bookObject);
    localStorage.setItem(localBooks, JSON.stringify(books));
    
    // Tampilkan kembali buku-buku yang ada
    displayBooks(books);
    document.dispatchEvent(new Event(RENDER_EVENT));
    // saveData();
}


document.addEventListener(RENDER_EVENT, () => {
    incompleteBookshelfList.innerHTML = '';
    completeBookshelfList.innerHTML = '';
    const books = JSON.parse(localStorage.getItem(localBooks));
    for(const book of books){
        if(!book.isComplete){
            incompleteBookshelfList.append(displayBooks(book));
        } else {
            completeBookshelfList.append(displayBooks(book));
        }
    }
})

function displayBooks(book){
    console.log(book);
    const articleElement = document.createElement('article');
    articleElement.classList.add('book_item');

    const titleElement = document.createElement('h3');
    titleElement.innerText = book.title;

    const authorElement = document.createElement('p');
    authorElement.innerText = `Penulis: ${book.author}`;

    const yearElement = document.createElement('p');
    yearElement.innerText = `Tahun: ${book.year}`;

    const containerButtonElement = document.createElement('div');
    containerButtonElement.classList.add('action');
    articleElement.appendChild(titleElement);
    articleElement.appendChild(authorElement);
    articleElement.appendChild(yearElement);
    
    if(book.isComplete){
        const undoButton = document.createElement('button');
        undoButton.classList.add('green');
        undoButton.classList.add('undo-button');
        undoButton.innerText = 'Belum Selesai Dibaca';
        undoButton.addEventListener('click', () => {
            undoBookFromCompleted(book.id);
        });

        const trashButton = document.createElement('div');
        trashButton.classList.add('red');
        trashButton.classList.add('trash-button');
        trashButton.innerText = 'Hapus Buku';
        trashButton.addEventListener('click', () => {
            removeBookFromCompleted(book.id);
        });
        
        containerButtonElement.append(undoButton, trashButton);
        articleElement.appendChild(containerButtonElement);
        completeBookshelfList.appendChild(articleElement);

    } else {
        const checkButton = document.createElement('button');
        checkButton.classList.add('green');
        checkButton.classList.add('check-button');
        checkButton.innerText = 'Selesai Dibaca';
        checkButton.addEventListener('click', () => {
            addBookToCompleted(book.id)
        });

        const trashButton = document.createElement('div');
        trashButton.classList.add('red');
        trashButton.classList.add('trash-button');
        trashButton.innerText = 'Hapus Buku';
        trashButton.addEventListener('click', () => {
            removeBookFromCompleted(book.id);
        });

        containerButtonElement.append(checkButton, trashButton);
        articleElement.appendChild(containerButtonElement);
        incompleteBookshelfList.appendChild(articleElement);
    }
    return articleElement;
}
            
function findBook(bookId) {
    // Mengambil semua buku dari local storage
    const books = JSON.parse(localStorage.getItem(localBooks));
    
    // Mencari buku dengan ID yang sesuai
    const foundBook = books.find(book => book.id === bookId);
    
    return foundBook; // Mengembalikan buku yang ditemukan atau null jika tidak ditemukan
}

function addBookToCompleted(bookId){
    const bookTarget = findBook(bookId);
    if (bookTarget == null) return;
    bookTarget.isComplete = true;
    document.dispatchEvent(new Event(RENDER_EVENT));
    // saveData();
}

function undoBookFromCompleted(bookId){
    const bookTarget = findBook(bookId);
    if (bookTarget == null) return;
    bookTarget.isComplete = false;
    document.dispatchEvent(new Event(RENDER_EVENT));
    // saveData();
}

// function saveData() {
//     if (isStorageExist()) {
//         const parsed = localStorage.getItem(JSON.stringify(localBooks));
//         localStorage.setItem(localBooks, parsed);
//     }
// }
function saveData() {
    if (isStorageExist()) {
        alert('isStorage is true');
        const booksObject = JSON.parse(localStorage.getItem(localBooks));
        localStorage.setItem(localBooks, JSON.stringify(booksObject));
    }
    alert('isStorage is false');
}


function isStorageExist() {
    if (typeof Storage !== 'undefined') {
        // inisialisasi semua item web storage yang kita akan gunakan jika belum ada
        if (localStorage.getItem(localBooks) === null){
            localStorage.setItem(localBooks, JSON.stringify([]));
        }
        return true;
    }  else {
        alert("Browser yang Anda gunakan tidak mendukung Web Storage");
        // return false;
    }
}
