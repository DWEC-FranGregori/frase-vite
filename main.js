import "./style.css";

import { startApp } from "./index";

// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'

document.querySelector("#app").innerHTML = `
  <div>
  <header>
  <h1>Ejercicio 1.2: Frase</h1>
  </header>
  <p>Abre la consola para ver el resultado.</p>
  <footer><small>Diseño Web en Entorno Cliente - Juan Segura</small></footer>
  </div>
`;

startApp();
