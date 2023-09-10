//Constante que nos permite escribir que no puede invitar personas
const validacion_Personas = document.getElementById('validacionPersonas');
let acompanantes;


//Nos da el nombre de la persona
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


//Funcion que cambia la de pagina a la de confirmacion
function cambiarPaginaConfirmar(){
  window.location.href = 'confirmacion.html';
}
//Funcion que nos lleva a la opcion de negacion
function cambiarPaginaNegacion(){
  window.location.href = 'rechazar.html';
}

//funcion manda informacion al servidor
function escritura(asistir){
  let invitado = nombreAPersona();
  
  if (asistir == 0) {
    acompanantes = 0;
  }

  let parametros = {
    "nombre" : invitado,
    "asitencia" : asistir,
    "numero_personas": acompanantes 
  };
  $.ajax({
    data : parametros,
    url: 'resgistrar.php',
    type: 'POST',
    
    beforesend: function(){
      $('#validacionPersonas').html("Mensaje antes de enviar");
    },

    success: function(mensaje_mostrar)
    {
      $('#validacionPersonas').html(mensaje_mostrar);
    }
  })
}

//funcion que ve si es valido el numero de personas
function numeroMaximoPersonas(){
  let nuero_de_personas = document.getElementById('numeroP');
  let valor = nuero_de_personas.value;
  let invitado = nombreAPersona();
  acompanantes = valor;

  if(invitado == 'Amigo'){
    validacion_Personas.innerHTML = 'Para el registro solicita una invitacion personalizada.';
  }else{
    if(valor > 4){
    validacion_Personas.innerHTML = 'Sólo puedes llevar un máximo de 4 personas.';
    }else{
      escritura(1);
      cambiarPaginaConfirmar();
    }
  }  
}

/***************************************************************************************************************************/
//Botones en la pantalla//
/***************************************************************************************************************************/
//Al hacer click en el boton confirmar
$('#botonConfirmacion').click(function(){
  numeroMaximoPersonas();
});
//Al hacer click en el boton denegar
$('#botonRechazar').click(function(){
  escritura(0);
  cambiarPaginaNegacion();
});
