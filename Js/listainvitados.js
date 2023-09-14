import { getInvitados} from "../Js/firebase.js";

const list_invitados = document.getElementById('app');
const sum_Per = document.getElementById('totalPersonas');
let suma = 0;
let html = ''; 
window.addEventListener('DOMContentLoaded', async ()=>{
    
  html = `<tr>
      <th class="centro">Invitado</th>
      <th class="centro">Asistencia</th>
      <th class="centro">Número de Personas</th>
    </tr>
  `;

  const listaIvitados = await getInvitados();
  
  listaIvitados.forEach(doc => {
    const infoPer = doc.data();
    let asis = '';
    if(infoPer.asitencia == '1' ){
      asis = 'Asistira';
    }else{
      asis = 'Rechazo';
    }
    
    const nuemPer = parseInt(infoPer.numero_personas); 
    html += `
      <tr>
        <td>${infoPer.nombre}</td>
        <td class="centro">${asis}</td>
        <td class="centro">${nuemPer}</td>
      </tr> 
    `;
    suma = suma + nuemPer;
  });
  
  list_invitados.innerHTML = html;
  sum_Per.innerHTML = `<span> El numero de invitados es ${suma} </span>`;
});