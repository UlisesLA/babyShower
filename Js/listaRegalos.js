import {guardarRegalo , onObtenerRegalos} from "../Js/firebase.js";

const nombre_regalo = document.getElementById('entradaRegalos');
let imprimirTabala = document.getElementById('listaRegalitos');
let html = '';

$('#AgregoRegalo').click(function(){
  agregarRegalo();
});

window.addEventListener('DOMContentLoaded',async()=>{ 

  onObtenerRegalos((LosRegalos)=>{
    LosRegalos.forEach(doc => {
      const listaderegalos = doc.data();
      html = `<li>${listaderegalos.Regalo}</li>` + html;
    });
  
    imprimirTabala.innerHTML = html; 
    html = '';
  });  

});

async function agregarRegalo(){
    let valorEntrada =  nombre_regalo.value;
    let fechaActual = new Date();

    let primeraLetra = valorEntrada.charAt(0).toUpperCase();
    let restoDelString = valorEntrada.slice(1);
  
    valorEntrada = primeraLetra + restoDelString;

    if(valorEntrada != ''){
      let gifs = {
        "Regalo" : valorEntrada,
        "Hora" : fechaActual
      };
      guardarRegalo(gifs); 
      nombre_regalo.value = '';          
    }
  }

