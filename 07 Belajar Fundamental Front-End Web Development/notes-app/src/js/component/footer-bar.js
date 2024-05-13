class FooterBar extends HTMLElement {
    _shadowRoot = null;
    _style = null;

    constructor(){
        super();

        this._shadowRoot = this.attachShadow({ mode: 'open'});
        this._style = document.createElement('style');
    }

    _updateStyle(){
        this._style.textContent = `
        :host {
            display:block;
            margin-top: 50px;
        }

        div {
            padding: 24px 20px;
            text-align:center;
        }
        .footer-name {
            font-style: italic;
        }
        `;
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this._shadowRoot.innerHTML = ``;
        this._updateStyle();

        this._shadowRoot.appendChild(this._style);
        this.shadowRoot.innerHTML += `
            <div>
                Notes App by <span class="footer-name">Adam Yusron</span> &copy; 2024
            </div>
        `
    }
}

customElements.define('footer-bar', FooterBar);