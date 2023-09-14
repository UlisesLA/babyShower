<?php
  include("con_db.php"); 
  
  if (!$conex) {
    die("La conexión a la base de datos falló: " . mysqli_connect_error());
  }

  //Datos de los invitados almacenamiento en variables
  $nom = $_POST['nombre'];
  $asi = $_POST['asitencia'];
  $numP = $_POST['numero_personas']; 

  if(strlen($nom) >= 1){ 
    // Consulta SQL datos
    $sql = "SELECT * FROM invitados2 WHERE NombrePersona = '$nom'";
    $result = mysqli_query($conex, $sql);
    
    if (mysqli_num_rows($result) > 0){
      //Actulizar datos
      $actulizacion = "UPDATE invitados2 SET 
      NombrePersona = '$nom', 
      Asistencia = $asi, 
      NumeroDePersonas = $numP 
      WHERE NombrePersona = '$nom'";

      if (mysqli_query($conex,$actulizacion)) {
        echo "Actualización exitosa";
      } else {
          echo "Error en la actualización: " . mysqli_error($conn);
      }

    }else{
      //Insertar nuevos datos
      $insercion = "INSERT INTO invitados2(NombrePersona, Asistencia, NumeroDePersonas) VALUES ('$nom','$asi','$numP')";   

      if (mysqli_query($conex,$insercion)) {
        echo "Inserción exitosa";
      } else {
          echo "Error en la inserción: " . mysqli_error($conn);
      }
    }    
    
  } 
  
  // Cerrar la conexión
  mysqli_close($conex);
  
?>
