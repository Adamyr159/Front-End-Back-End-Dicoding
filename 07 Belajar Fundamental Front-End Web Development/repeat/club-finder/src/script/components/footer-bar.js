class FooterBar extends HTMLElement {
    _shadowRoot = null;
    _style = null;

    constructor(){
        super();

        this._shadowRoot = this.attachShadow({ mode: 'open'});
        this._style = document.createElement('style');
    }

    updateStyle(){
        this._style.textContent = `
            :host {
                display: block;
            }
        
            div {
                padding: 24px 20px;
        
                text-align: center;
            }
        `;
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this._shadowRoot.innerHTML = ``;
        this.updateStyle();

        this._shadowRoot.append(this._style);
        this._shadowRoot.innerHTML += `
            <div class="container">
                <div class="main-footer">Club Finder &copy; 2023</div>
            </div>
        `;
    }
}

customElements.define('footer-bar', FooterBar);