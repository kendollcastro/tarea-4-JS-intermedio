/**
 * Ejercicio #4:
 *
 * Validar el formulario
 *
 * ¿Como funciona?:
 * 1. La validacion se hace cuando el usuario presiona el boton "Enviar" para enviar el forom
 * 2. Solo se validan los campos con el * (tienen la clase requerido)
 * 3. Al hacer click en "enviar"
 *     3.1. Los campos invalidos deben ponerse con un borde rojo
 *     3.2. Se debe mostrar un aviso con un titulo de: "Ocurrio un error, verifica
 *     los siguientes campos" y seguido un listado con los campos invalidos. El aviso
 *     debe tener border rojo y fondo rojo claro
 *     3.3. Si todos los camppos son validos, debe mostrar un mensaje abajo del boton enviar
 *     que dice: "Su formulario fue enviado". El aviso debe tener borde verde con fondo verde claro
 *
 * ¿Donde empiezo?:          
 *
 * ¿Que voy a evaluar?
 * 1. Que funcione
 * 2. Buenas practicas (incluyendo buenas practicas pasadas)
 *
 */

// BOILERPLATE
const form = document.querySelector("form");
const celdas =  document.querySelectorAll('.requerido');
const srcript = document.querySelector('script');
const formulario = form.parentElement;
const h2 = document.createElement('h2');
const h3 = document.createElement('h3');
let error = '';
let correcto = '';


form.addEventListener("submit", function(e) {
  e.preventDefault();
  celdas.forEach(element => {
    if(element.value != ''){
      element.style.border = '1 px solid black'
      error = '';
      correcto = 'Su formulario fue enviado correctamente'
    }else{
      element.style.border = 'solid 2px red';
      error = 'Ocurrió un error';
      correcto = '';
    }
  });
  h2.innerText = correcto;
  h3.innerText = error;

  //Estilo del h2
  formulario.insertBefore(h2, srcript);
  h2.style.backgroundColor = '#6FCF97';
  

  //Estilo del h3
  formulario.insertBefore(h3, form);
  h3.style.backgroundColor = '#DA7575';
});
