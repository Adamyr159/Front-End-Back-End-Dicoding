import notes from '../data/notes.js';
class NoteItem extends HTMLElement {
    _shadowRoot = null;
    _style = null;

    constructor(){
        super();

        this._shadowRoot = this.attachShadow({ mode: 'open'});
        this._style = document.createElement('style');
    }

    connectedCallback(){
        this.render();
    }

    updateStyle(){
        this._style.textContent = `
            .char-list {
                margin-block: 1rem;
            
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            
                column-gap: 24px;
                row-gap: 32px;
                margin: 0 20px
            }
            
            .char-item {
                border: 1px solid black;
                border-radius: 8px;
                padding: 16px;
            
                overflow: hidden;
                transition: all 150ms ease-in;
            }
            
            .char-item:hover,
            .char-item:focus-visible {
                scale: 1.05;
                box-shadow: 0 2px 4px 2px #33333377;
            }
            
            .char-item .char {
                text-align: center;
                font-size: 1.5em;
                color: cornflowerblue;
            }
            
            .char-item .char__description {
                display: flex;
                flex-direction: column;
                justify-content: space-evenly;
                height: 100px;
            }
            .char-item .char__name {
                font-weight: 400;
            }
            .char-item .char__pronounce {
                font-weight: 500;
                font-style: italic;
            }

            .char-item .char__example {
                margin-block-start: 1.5rem;
                text-align: center;
            }
            
            .char-item .char__example-img {
                width: 75%;
                margin-block-end: 1rem;
            }
        `;
    }

    formatDate(dateString) {
        const months = [
            'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
            'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
        ];
    
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const monthIndex = date.getMonth();
        const year = date.getFullYear();
    
        const monthName = months[monthIndex];
        const formattedDate = `${day} ${monthName} ${year}`;
    
        return formattedDate;
    }

    renderNoteItem(note){
        const formattedDate = this.formatDate(note.createdAt);

        return `
            <article tabindex="0" class="char-item">
                <h3 class="char">${note.title}</h3>
                <div class="char__description">
                    <div class="char__name">${note.body}</div>
                    <div class="char__pronounce">${formattedDate}</div>
                </div>
            </article>
        `;
    }
   
    render(){
        this._shadowRoot.innerHTML = ``;
        this.updateStyle();
        this._shadowRoot.appendChild(this._style);
        
        const notesData = notes;
        const noteListContainer = document.createElement('section');
        noteListContainer.setAttribute('tabindex', '0');
        noteListContainer.classList.add('char-list');

        notesData.forEach(note => {
            const noteItem = document.createElement('div');
            noteItem.innerHTML = this.renderNoteItem(note);
            noteListContainer.appendChild(noteItem);
        });

        this._shadowRoot.appendChild(noteListContainer);
    }
}

customElements.define('note-item', NoteItem);