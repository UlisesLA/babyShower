
//Funcion que cambia la de pagina a la de confirmacion
function cambiarPaginaConfirmar(){
  window.location.href = 'confirmacion.html';
}

//Funcion que nos lleva a la opcion de negacion
function cambiarPaginaNegacion(){
  window.location.href = 'rechazar.html';
}

//Al hacer click en el boton confirmar
$('#botonConfirmacion').click(function(){
  validaciones(1);
});

//Al hacer click en el boton denegar
$('#botonRechazar').click(function(){
  validaciones(0);
});

//Generador de Ids
function gerdadorId(){
  return "xyxy-1709-xyxy".replace(/[xy]/g, function(c){
    var r = (Math.random()*16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

//Obtener nombres
function nombreAPersona(){
  // Obtenemos parametros de la url
  const parmURL = window.location.search;
  const params = new URLSearchParams(parmURL);
  let elNombreDelInvitado;
  //Se lo pasamosa una variable de imprsion
  params.forEach((valor, parametro) => {
    if(parametro === 'name'){
      elNombreDelInvitado = valor
      elNombreDelInvitado = elNombreDelInvitado.replace(/_/g, ' ');
    }    
  });
  //Sabemos si tiene una invitacion personalizada
  if(elNombreDelInvitado != undefined && elNombreDelInvitado != null){    
    elNombreDelInvitado = elNombreDelInvitado;
  }else{
    elNombreDelInvitado = 'amigo';
  }  
  //Cambiar la primera letra a mayuscula
  elNombreDelInvitado = elNombreDelInvitado.charAt(0).toUpperCase() + elNombreDelInvitado.slice(1).toLowerCase();
  return elNombreDelInvitado;
}

//validaciones de informacion
function validaciones(aistencia){
  //Constante que nos permite escribir que no puede invitar personas
  const validacion_Personas = document.getElementById('validacionPersonas');
  //Obtenemos el numero de personas
  let nuero_de_personas = document.getElementById('numeroP');
  let valor = nuero_de_personas.value;
  // Obtenemos el nombre de la persona
  let invitado = nombreAPersona();
  let id = gerdadorId(); 

  // Validacion invitacion personalizada
  if(invitado == 'Amigo'){
    validacion_Personas.innerHTML = 'Para el registro solicita una invitacion personalizada.';
  }else{
    //Validacion maximo 4 invitados
    if(valor > 4){
      validacion_Personas.innerHTML = 'Sólo puedes llevar un máximo de 4 personas.';
    }else{
      if (aistencia == 1) {
        escritura(id, invitado, aistencia, valor);
        //cambiarPaginaConfirmar();
      } else {
        escritura(id, invitado, 0, '0');
        //cambiarPaginaNegacion();
      }      
    }
  }  
}

//funcion manda informacion al servidor
async function escritura(id, invitado, asistir, acompanantes){
  try {

    let parametros = {
      "id" : id,
      "nombre" : invitado,
      "asitencia" : asistir,
      "numero_personas": acompanantes 
    };
    console.log(parametros);   

  } catch (error) {
    console.log(error);
  }  
}