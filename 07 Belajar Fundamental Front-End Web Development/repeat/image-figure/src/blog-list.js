class BlogList extends HTMLElement {
    constructor(){
        super();

        // this._blogList = [];
        this._shadowRoot = this.attachShadow({ mode: 'open'});
        this._style = document.createElement('style');
    }

    // setBlogList(value){
    //     this._blogList = value;

    //     this.render();
    // }

    connectedCallback(){
        this.render();
    }

    updateStyle(){
        this._style.textContent = `
           :host {
                display:grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 1rem;
            }
        `;
    }

    render(){
        this.updateStyle();

        const slot = document.createElement('slot');
        slot.innerHTML = `
            <blog-item></blog-item>
            <blog-item></blog-item>
            <blog-item></blog-item>
            <blog-item></blog-item>
        `;

        this._shadowRoot.append(this._style, slot);

        // const blogItemElements = this._blogList.map((item) => {
        //     const blog = document.createElement('blog-item');
        //     blog.setBlog(item);
       
        //     return blog;
        // });
       
        // this.innerHTML = '';
        // this.append(this._style, ...blogItemElements);

    }
}

customElements.define('blog-list', BlogList);