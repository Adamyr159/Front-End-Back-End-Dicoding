class MyParagraph extends HTMLElement {
    static observedAttributes = ['color', 'size', 'italic'];
  
    constructor() {
      super();

      // Menambahkan shadow root'
      this._shadowRoot = this.attachShadow({ mode: 'open'});
  
      this._color = this.getAttribute('color');
      this._size = this.getAttribute('size');
      this._italic = this.getAttribute('italic');
      this._style = document.createElement('style');
    }

    updateStyle(){
        this._style.textContent = `
        :host {
            color: ${this._color};
            font-size: ${this._size}px;
            font-style: ${this._italic};
        }
        `;
    }
  
    connectedCallback() {
      this.render();
    }
  
    render() {
        this.updateStyle();

        this._shadowRoot.innerHTML = `
            <p>
              <slot>
                Aku adalah custom element paragraf dengan atribut 
                color \`${this._color}\` dan 
                size \`${this._size}\`.  dan italic \`${this._italic}\`.
              </slot>
            </p>
        `;
    }
  
    attributeChangedCallback(name, oldValue, newValue) {
      console.log(`Atribut ${name} diubah.`);
      console.log(`Nilai lama adalah ${oldValue}`);
      console.log(`Nilai baru adalah ${newValue}`);
  
      // Ubah nilai atribut yang telah disimpan
      this[`_${name}`] = newValue;
  
      // Render konten ulang
      this.render();
    }
  }
  
  customElements.define('my-paragraph', MyParagraph);