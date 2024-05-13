// 01 Buatan Sendiri

// class ImageFigure extends HTMLElement {
//     static observedAttributes = ['src', 'alt', 'caption'];

//     constructor() {
//       super();
      
//       this._src = this.getAttribute('src');
//       this._alt = this.getAttribute('alt');
//       this._caption = this.getAttribute('caption');
//       this._style = document.createElement('style'); 
//     }

//     updateStyle(){
//       this._style.textContent = `
//       ${this.localName} {
//         display: block;
//       }

//       figure {
//         max-width: 220px;
//         margin: 0;
//         padding: 5px;
//         border: 1px #c0c0c0 solid;
      
//         display: flex;
//         flex-flow: column;
//       }
      
//       figure > img {
//         max-width: 100%;
//       }
      
//       figure > figcaption {
//         padding: 3px;
//         background-color: #222;
      
//         text-align: center;
      
//         color: #fff;
//         font-family: sans-serif;
//         font-size: smaller;
//         font-style: italic;
//       }      
//       `;
//     }
    
//     connectedCallback() {
//       this.render();
//     }

//     render() {
//       this.innerHTML = '';
//       this.updateStyle();

//       this.innerHTML = `
//         <figure>
//           <img src="${this._src}" alt="${this._alt}">
//           <figcaption>${this._caption}</figcaption>
//         </figure>
//       `;
//       this.append(this._style);

//     }

//     attributeChangedCallback(name, oldValue, newValue){
//       console.log(`Atribut ${name} diubah.`);
//       console.log(`Nilai lama adalah ${oldValue}`);
//       console.log(`Nilai baru adalah ${newValue}`);
  
//       // Ubah nilai atribut yang telah disimpan
//       this[`_${name}`] = newValue;
  
//       // Render konten ulang
//       this.render();
//     }
//   }
   
//   customElements.define('image-figure', ImageFigure);



// 02 Buatan Dicoding

class ImageFigure extends HTMLElement {
  static get observedAttributes() {
    return ['src', 'alt', 'caption'];
  }

  constructor() {
    super();
    // Menambahkan shadow root'
    this._shadowRoot = this.attachShadow({ mode: 'open'});

    this._style = document.createElement('style');
  }

  connectedCallback() {
    this.render();
  }

  set src(value) {
    const hasChange = this.src != value;
    if (hasChange) {
      this.removeAttribute('src');
    }

    this.setAttribute('src', value);
  }

  get src() {
    const value = this.getAttribute('src');
    return value;
  }

  set alt(value) {
    const hasChange = this.alt != value;
    if (hasChange) {
      this.removeAttribute('alt');
    }

    this.setAttribute('alt', value);
  }

  get alt() {
    const value = this.getAttribute('alt');
    return value;
  }

  set caption(value) {
    const hasChange = this.caption != value;
    if (hasChange) {
      this.removeAttribute('caption');
    }

    this.setAttribute('caption', value);
  }

  get caption() {
    const value = this.getAttribute('caption');
    return value;
  }

  updateStyle() {
    this._style.textContent = `
      :host {
        display: block;
      }

      figure {
        max-width: 220px;
        margin: 0;
        padding: 5px;
        border: 1px #c0c0c0 solid;
     
        display: flex;
        flex-flow: column;
      }
     
      figure > img {
        max-width: 100%;
      }
     
      figure > figcaption {
        padding: 3px;
        background-color: #222;
     
        text-align: center;
     
        color: #fff;
        font-family: sans-serif;
        font-size: smaller;
        font-style: italic;
      }
    `;
  }

  render() {
    // this.emptyContent();
    this._shadowRoot.innerHTML = '';

    this.updateStyle();

    this._shadowRoot.appendChild(this._style);
    this._shadowRoot.innerHTML = `
      <figure>
        <img src="${this.src}" alt="${this.alt}" />
        <figcaption>${this.caption}</figcaption>
      </figure>
    `;
  }

  attributeChangedCallback(name, oldValue, newValue) {
  
    // Render konten ulang
    this.render();
  }
}

customElements.define('image-figure', ImageFigure);