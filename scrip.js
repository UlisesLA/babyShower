//Variables
let nombrePersona;
const persona = document.getElementById('personaInvitada');

function nombreAPersona(){
  // Obtenemos parametros de la url
  const parmURL = window.location.search;
  const params = new URLSearchParams(parmURL);

  //Se lo pasamosa una variable de imprsion
  params.forEach((valor, parametro) => {

    if(parametro === 'name'){
        nombrePersona = valor
        nombrePersona = nombrePersona.replace(/_/g, ' ');
    }    
  });

  if(nombrePersona != undefined && nombrePersona != null){
    persona.innerHTML = nombrePersona;
  }else{
    persona.innerHTML = 'amigo';
  }
  
}

nombreAPersona();