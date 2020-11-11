## Ejercicios de Javier Flores Zavala


## Respuestas ejercicio 2

1.	¿Qué es un servidor HTTP? 
2.	¿Qué son los verbos HTTP? Mencionar los más conocidos
3.	¿Qué es un request y un response en una comunicación HTTP? ¿Qué son los headers? 
4.	¿Qué es un queryString? (En el contexto de una url)
5.	¿Qué es el responseCode? ¿Qué significado tiene los posibles valores devueltos?
6.	¿Cómo se envía data en un Get y cómo en un POST? 
7.	¿Qué verbo http utiliza el navegador cuando accedemos a una página?
8.	Explicar brevemente qué son las estructuras de datos JSON y XML dando ejemplo de estructuras posibles.
9.	Explicar brevemente el estándar SOAP
10.	Explicar brevemente el estándar REST Full
11.	¿Qué son los headers en un request? ¿Para qué se utiliza el key Content-type en un header?



## Ejercicio 3

En este ejercicio se requirió instalar POSTMAN para realizar los soguientes icisos:

1. Realizar un request GET a la URL: `https://reclutamiento-14cf7.firebaseio.com/personas.json`
RESOLUCIÓN: Realicé un request GET a la URL solicitada, lo que regresó fue la BD de Firebase en formato JSON. 

2. Realizar un request POST a la URL anterior, y con body:
{
"nombre":"Tu nombre",
"apellido":"Tu apellido",
"dni":11223322
}
RESOLUCIÓN: Realicé un POST a la URL ingresando mi nombre, apellido y un dni, esto me regresó el Id de mi nombre y se realizó el envío de los datos que ingrese a la BD.

3. Realizar nuevamente un request GET a la URL: `https://reclutamiento-14cf7.firebaseio.com/personas.json` ¿Qué diferencias se observan?
RESOLUCIÓN: Realicé nuevamente un request GET a la URL solicitada y me regresó la BD de Firebase actualizada en formato JSON y pude visualizar los valores que ingresé en el inciso anterior. 


## Ejercicio 4

En esta práctica era necesario hacer un script que realizara una solicitud GET a un servidor en Firebase y mostrar en la consola el resultado. Me pedían utilizar el paquete `request-promise`, por lo que decidí hacer un paquete de Node.js con `npm init` e instalé las dependencia junto a `request`.

Se debe ejecutar el script primero instalando las dependencias con `npm init` y después corriendo el archivo con `node mostrarPersonas.js` desde la terminal, ubicándose en la carpeta del sricpt.

## Ejercicio 5

En este ejercicio era necesario crear un servidor en Node.js usando la librería `express` para hacer solicitudes POST al servidor de Firebase sólo si los datos que le fueron mandados cumplían con algunas reglas de validación. 

Como fueron necesarias algunas dependencias, creé otro paquete de Node.js con `npm init` e instalé `express` para crear el servidor, `body-parser` para convertir los archivos JSON que reciba en objetos de JavaScript, `cors` para sólo admitir solicitudes de orígenes permitidos, y `request` junto con `request-promise` para hacer la solicitud POST al servidor de Firebase.

Para ejecutarlo es necesario instalar las dependencias del paquete con `npm install` y correr el servidor con `node server.js` desde la terminal, ubicándose en la carpeta del sricpt.

## Ejercicio 6

Está práctica consitió en realizar un archivo `crearPersonas.html` que tuviera 3 inputs para nombre, apellido y dni, y un botón para enviar los datos al servidor del ejercicio anterior.

Para ejecturalo, primero se debe abrir el archivo HTML dándole doble click al archivo en desde el explorador de archivos, lo cual abrirá el HTML en el navegador predeterminado. 

Para enviar los datos es necesario que el servidor en Node.js del ejercicio anterior esté corriendo (seguir instrucciones del ejercicio 5), y puede ver el resultado de su solicitud en la consola de JavaScript desde el navegador.
