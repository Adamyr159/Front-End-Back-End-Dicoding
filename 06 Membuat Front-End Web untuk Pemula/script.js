const image = document.getElementById('gambar');
image.setAttribute('width', 300);
image.setAttribute('height', 215);

const buttons = document.querySelectorAll('.button');
const playButton = buttons[3];
const playButtonElemen = playButton.children[0];
playButtonElemen.setAttribute('type', 'submit');


const links = document.getElementById('links');
const dicodingLink = document.getElementById('dicodingLink');
const googleLink = document.getElementById('googleLink');