class LoadingIndicator extends HTMLElement {
  _shadowRoot = null;
  _style = null;
  loadingDiv = null;

  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._style = document.createElement("style");
    this._updateStyle();
  }

  _updateStyle() {
    this._style.textContent = `
            .loading-indicator {
                display: none;
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: cornflowerblue;
                z-index: 9999;
            }
            
            .loading-indicator.active {
                display: flex;
                justify-content: center;
                align-items: center;
            }
            
            .loading-spinner {
                border: 8px solid #f3f3f3;
                border-top: 8px solid #3498db;
                border-radius: 50%;
                width: 50px;
                height: 50px;
                animation: spin 5s linear infinite;
            }
            
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        `;
  }

  connectedCallback() {
    this._shadowRoot.appendChild(this._style);

    this.loadingDiv = document.createElement("div");
    this.loadingDiv.className = "loading-indicator";
    this.loadingDiv.innerHTML = `
            <div class="loading-spinner"></div>
        `;
    this._shadowRoot.appendChild(this.loadingDiv);
  }

  // render(){
  //     this._shadowRoot.innerHTML = ``;
  //     this._updateStyle();

  //     this._shadowRoot.appendChild(this._style);
  //     this.loadingDiv = document.createElement('div');
  //     this.shadowRoot.appendChild(this.loadingDiv);
  //     this.shadowRoot.innerHTML += `
  //         <div class="loading-indicator">
  //             <div class="loading-spinner"></div>
  //         </div>
  //     `;
  // }

  show() {
    this.loadingDiv.classList.add("active");
  }

  hide() {
    this.loadingDiv.classList.remove("active");
  }
}

customElements.define("loading-indicator", LoadingIndicator);
