nombre_archivo = "invitados.txt"  # Reemplaza "archivo.txt" con el nombre de tu archivo
modo = "r"  # "r" para lectura, "w" para escritura, "a" para añadir, etc.
url = "https:/tu-liga.com/?name="
nombre_archivo_salida = "invitaciones_creadas.txt"

try:
    with open(nombre_archivo, "r") as archivo_entrada, open(nombre_archivo_salida, "w") as archivo_salida:
      for linea in archivo_entrada:
        linea = linea.strip()
        linea = linea.rstrip(",") 
        linea_modificada = linea.replace(" ", "_") 
        linea_modificada = linea_modificada.lower()
        linea_de_salida = linea + ": " + url + linea_modificada + "\n"
        archivo_salida.write(linea_de_salida)
    print('termine')

except FileNotFoundError:
    print(f"El archivo '{nombre_archivo}' no se encontró.")
except Exception as e:
    print(f"Ocurrió un error: {e}")
