class ImageFigure extends HTMLElement {
    static observedAttributes = ['src', 'altImg', 'caption', 'font'];

    constructor(){
        super();

        this._shadowRoot = this.attachShadow({ mode:'open'});
        this._style = document.createElement('style');
    }
    
    connectedCallback(){
        this.render(); 
    }

    set font(value){
        const hasChange = this.font != value;
        if(hasChange){
            this.removeAttribute('font');
        }
        this.setAttribute('font', value);
    }

    get font(){
        const value = this.getAttribute('font');
        return value;
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

    set altImg(value){
        const hasChange = this.altImg != value;
        if (hasChange) {
          this.removeAttribute('altImg');
        }
    
        this.setAttribute('altImg', value);
    }

    get altImg() {
        const value = this.getAttribute('altImg');
        return value;
    }

    set caption(value){
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

    updateStyle(){
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
                font-size: ${this.font};
            }       
        `;
    }

    render(){
        this._shadowRoot.innerHTML = '';
        this.updateStyle();

        this._shadowRoot.append(this._style);
        this._shadowRoot.innerHTML += `
            <figure>
                <img src="${this.src}" alt="${this.altImg}">
                <figcaption>
                    <slot></slot>
                </figcaption>
            </figure>
        `;
    }


    // disconnectedCallback(){
    //     console.log('Custom element disingkirkan dari halaman.');
    // }

    // adoptedCallback() {
    //     console.log('Custom element dipindahkan ke halaman baru.');
    // }

    attributeChangedCallback(name, oldValue, newValue){
        this.render();
    }
}

customElements.define('image-figure', ImageFigure);