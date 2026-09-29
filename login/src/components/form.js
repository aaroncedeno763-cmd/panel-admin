class Form extends HTMLElement {

  constructor() {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  connectedCallback() {
    this.loadData()
    this.render()
  }

  loadData() {
    this.data = [
      {
        titulo: "Iniciar Sesión",
      }
    ];
  }

  render() {
    this.shadow.innerHTML =
      /*html*/`
    <style>
     * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
     }
     
     .login-form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
     }

     .login-form h1{
      color: hsla(0, 0%, 100%, 1.00);
      font-size: 2rem;
      font-weight: bold;
     }

     .form-group {
      display: flex;
      flex-direction: column;
      gap: 10px;
     }
     
     .submit-button {
      background-color: hsla(197, 59%, 61%, 1.00);
      color: white;
      padding: 14px 20px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
     }

     .submit-button:hover {
      background-color: hsla(197, 59%, 61%, 1.00);
      transform: translateY(-5px);
      transition: all 0.2s ease;
     }

     a {
      text-decoration: none;
      color: hsla(0, 0%, 100%, 1.00);
      text-align: center;
     }

     a:hover {
      text-decoration: underline;
     }

    </style>

   <form class="login-form">
    <h1>${this.getAttribute('titulo')}</h1>
    <div class="form-group">
      <label for="email">Email</label>
      <input type="email" id="email">
    </div>
    <div class="form-group">
      <label for="password">Contraseña</label>
      <input type="password" id="password">
    </div>
     
    <button class="submit-button"  type="submit">Enviar</button>
    <a href="#" class="forgot-password">¿Olvidaste tu contraseña?</a>
  </form>
    `

    const submitButton = this.shadow.querySelector('.submit-button')
    submitButton.addEventListener('click', () => {
      alert("enviado")
    })
  }
}

customElements.define('form-component', Form);