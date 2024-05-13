class NoteForm extends HTMLElement {
    _shadowRoot = null;
    _style = null;

    constructor(){
        super();

        this._shadowRoot = this.attachShadow({ mode: 'open'});
        this._style = document.createElement('style');
    }

    connectedCallback() {
        this.render();
    }

    updateStyle(){
        this._style.textContent = `
            .container {
                max-width: 600px;
                margin: 50px auto;
                padding: 20px;
                background-color: #fff;
                border-radius: 8px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
            
            h1 {
                text-align: center;
            }
            
            .form-group {
                margin-bottom: 20px;
            }
            
            label {
                display: block;
                font-weight: bold;
            }
            
            input[type="text"],
            textarea {
                width: 95%;
                padding: 10px;
                font-size: 16px;
                border: 1px solid #ccc;
                border-radius: 5px;
            }
            
            button {
                display: block;
                width: 100%;
                padding: 10px;
                font-size: 16px;
                background-color: cornflowerblue;
                color: #fff;
                border: none;
                border-radius: 5px;
                cursor: pointer;
            }
            
            button:hover {
                background-color: #007bff;
            }
            
            #notesList {
                margin-top: 30px;
            }
            
            .note {
                background-color: #f9f9f9;
                padding: 10px;
                margin-bottom: 10px;
                border-radius: 5px;
            }
        `;
    }

    render(){
        this._shadowRoot.innerHTML = '';
        this.updateStyle();
        this._shadowRoot.appendChild(this._style);
        this._shadowRoot.innerHTML += `
            <div class="container">
            <h2>Notes Form</h2>
                <form id="noteForm">
                    <div class="form-group">
                        <label for="noteTitle">Title:</label>
                        <input type="text" id="noteTitle" name="noteTitle" required>
                    </div>
                    <div class="form-group">
                        <label for="noteBody">Body:</label>
                        <textarea id="noteBody" name="noteBody" rows="4" required></textarea>
                    </div>
                    <button type="submit">Add Note</button>
                </form>
            </div>
        `;
    }
}

customElements.define('note-form', NoteForm);
