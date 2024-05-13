const myCustomElement = document.createElement('my-custom-element');

const shadowRoot = myCustomElement.attachShadow({ mode: 'open' });
shadowRoot.innerHTML = `
  <div>Lorem ipsum dolor amet.</div>
`;

document.body.appendChild(myCustomElement);