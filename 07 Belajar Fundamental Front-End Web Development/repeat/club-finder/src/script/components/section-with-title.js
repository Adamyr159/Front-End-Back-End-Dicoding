class SectionWithTitle extends HTMLElement {
    _title = 'NEED SECTION TITLE';
    static observedAttributes = ['id', 'class', 'title'];
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
            :host {
                display: block;
            }
            
            .title-section {
                margin-block-end: 2rem;

                font-size: 1.2em;
            }
        `;
    }

    set title(value) {
        this._title = value;
    }
    
    get title() {
        return this._title;
    }
    
    render(){
        this._shadowRoot.innerHTML = ``;
        this.updateStyle();
        this._shadowRoot.append(this._style);
        this._shadowRoot.innerHTML += `
            <div class="title-section">
                <h2>${this._title}</h2>
            </div>

            <div>
                <slot></slot>
            </div>

            
        `;
    }
    attributeChangedCallback(name, oldValue, newValue) {
        console.log(`Atribut ${name} diubah.`);
        console.log(`Nilai lama adalah ${oldValue}`);
        console.log(`Nilai baru adalah ${newValue}`);
        this[`_${name}`] = newValue;
        // Render konten ulang
        this.render();
      }
}

customElements.define('section-with-title', SectionWithTitle);