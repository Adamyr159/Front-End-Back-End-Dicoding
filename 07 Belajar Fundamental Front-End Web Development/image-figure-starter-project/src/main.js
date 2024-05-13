/* Silakan impor kode di sini */
import './image-figure.js';
import './custom-element.js';
// import './blog-list.js';
// import './blog-item.js';

// const divElement = document.createElement('div');
 
// const headingElement = document.createElement('h1');
// headingElement.innerText = 'Ini adalah konten <h1> dalam shadow DOM';
 
// const divElementShadowRoot = divElement.attachShadow({ mode: 'open' });
// divElementShadowRoot.appendChild(headingElement);
 
// document.body.appendChild(divElement);

// divElement.shadowRoot.innerHTML += `
//   <style>
//     h1 {
//       color: blue;
//     }
//   </style>
// `;
// /* OPEN MODE */
// const openedDivElement = document.createElement('div');
// const openedDivElementShadowRoot = openedDivElement.attachShadow({ mode: 'open' });
// openedDivElementShadowRoot.innerHTML = '<p>I have an open shadow root</p>';
// document.body.appendChild(openedDivElement);
 
// /* CLOSED MODE */
// const closedDivElement = document.createElement('div');
// const closedDivElementShadowRoot = closedDivElement.attachShadow({ mode: 'closed' });
// closedDivElementShadowRoot.innerHTML = '<p>I have a closed shadow root</p>';
// document.body.appendChild(closedDivElement);
 
// window.addEventListener('click', (event) => {
//   console.log(event.target.shadowRoot);
//   console.log(event.composedPath());
// });


let myParagraphEl = document.querySelector('my-paragraph');

const changeSizeButton = document.querySelector('#changeSize');
const changeColorButton = document.querySelector('#changeColor');
const changeItalicButton = document.querySelector('#changeItalic');

changeSizeButton.onclick = () => {
  myParagraphEl.setAttribute('size', '24');
};

changeColorButton.onclick = () => {
  myParagraphEl.setAttribute('color', 'lightblue');
};

changeItalicButton.addEventListener('click', () => {
    myParagraphEl.setAttribute('italic', 'italic');
})

// const blogs = [
//     {
//         id: 1,
//         title: 'Cara Memulai Belajar Pemrograman',
//         shortDescription: 'Panduan untuk pemula yang ingin memulai belajar pemrograman.',
//     },
//     {
//         id: 2,
//         title: 'Tips Efektif dalam Pengembangan Web',
//         shortDescription: 'Tips dan trik untuk menjadi pengembang web yang lebih baik.',
//     },
//     {
//         id: 3,
//         title: 'Mengenal Konsep Web Component',
//         shortDescription:'Pengenalan singkat tentang Web Component dan komponen-komponennya.',
//     },
//     {
//         id: 4,
//         title: 'Mengenal Konsep React.js',
//         shortDescription: 'Pengenalan singkat tentang React.js dan komponen-komponennya.',
//     },
//     {
//         id: 5,
//         title: 'Panduan Penggunaan Vue.js',
//         shortDescription: 'Pengenalan singkat tentang Vue.js dan komponen-komponennya.',
//     },
//     {
//         id: 6,
//         title: 'Belajar Bahasa Pemrograman Python',
//         shortDescription: 'Cara mudah memulai belajar bahasa pemrograman Python.',
//     },
// ]

// const BlogListEl = document.querySelector('blog-list');
// BlogListEl.setBlogList(blogs);