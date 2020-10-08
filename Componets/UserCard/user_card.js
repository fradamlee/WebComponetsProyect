//

var num = 0;

// Este está es la clase que define el webComponet,
// Se lee cada vez que se llama la etiqueta en el main.html
class UserCard extends HTMLElement {
    constructor() {
        super();

        // Aqui se puede escribir el js
        num++;
        console.log("WebComponet: user-card " + num);

        // Está es la manera de mostrar el HTML del usuario detro de un componet
        // Se usa interpolación: `${}` para insertar los atributos que se colocan a la etiqueta en el main.html  
        this.innerHTML =
            `
            <div class="user-card">
                <img class="imagen" src= "${this.getAttribute('avatar')}"/>
                <div>
                    <h4>${this.getAttribute('name')}</h4>
                    <div>
                    <p>EMAIL ${this.getAttribute('email')}</p>
                    <p>PHONE ${this.getAttribute('phone')}</p>
                    </div>
                    <button class="button">Hide</button>
                </div>
            </div>
        `;
    }
}

// Está función crea la etiqueta html ('nombre_etiqueta', Nombre_clase);

window.customElements.define('user-card', UserCard);
