## Prácticas ProContacto:


## Ejercicio 1 


**Instalación del ambiente:** En este primer ejercicio se pide instalar el ambiente para poder realizar los siguientes ejercicios.
1.	Instalar el IDE Visual Studio Code.
2.	Instalar GIT y GIT Bash.
3.	Instalar Node.js


## Ejercicio 2 / RESPUESTAS

1.	**¿Qué es un servidor HTTP?**

    Un servidor HTTP es un programa que procesa una aplicación del lado del servidor para realizar conexiones con el cliente. Este servidor se encarga de enviar         peticiones desde la conexión del cliente hasta el sistema que gestiona las peticiones para transmitir una respuesta al cliente a través de una conexión TCP. El     código recibido por el cliente se procesa a través de un navegador web (URLs) y se trasmite mediante un protocolo, generalmente HTTP.

2.	**¿Qué son los verbos HTTP? Mencionar los más conocidos**

    Son métodos de solicitudes especificas que utilizan el servicio de integración de datos en el mensaje de solicitud. Estos verbos/métodos permiten comunicar al       servidor lo que se requiere realizar con un recurso mediante una URL. Los más importantes (sobre todo para hacer aplicaciones REST) son los siguientes:

    **GET:** Se emplea para leer y recuperar representaciones de recursos específicos del servidor, en el caso de una respuesta exitosa devuelve la representación  en un     formato concreto con el cuerpo de la respuesta: HTML, XML, JSON, imágenes, JavaScript, etc. Las peticiones que usan este método sólo deben recuperar datos.         También se puede llegar a utilizar para enviar datos, pero tiene limitaciones. La información es mostrada en la URL. Además, es un método idempotente. 

    **POST:** Este método se utiliza para enviar datos a un servidor, es utilizado para la creación de recursos. Este método no muestra ninguna información en la URL,       ya que esta oculta. Llamar este método varias veces puede causar efectos secundarios en el servidor, como enviar la misma orden varias veces. 

    **PUT:** Se utiliza para actualizar y crear contenidos, reemplazando la anterior representación del elemento de destino con los datos de la nueva petición, siendo       un método idempotente. Almacena la entidad suministrada en el URI indicado. Si la entidad no existe, se crea. Si la entidad existe, se actualiza.

    **DELETE:** Este método se utiliza para eliminar un recurso específico de una ubicación dada por la URL.

    **HEAD:** Este método se utiliza para obtener una respuesta idéntica a la de una petición GET, pero sin el cuerpo de la respuesta. El servidor responde con líneas y     headers. 

3.	**¿Qué es un request y un response en una comunicación HTTP? ¿Qué son los headers?**

    Un **request**es un mensaje/petición enviado por un cliente para iniciar una acción en el servidor.
    
    Un **response** es la respuesta del servidor hacia el cliente habiendo recibido un request previo. 
    
    Los **headers** son la parte central de los HTTP request y response, ya que transmiten información acerca del navegador del cliente, la página solicitada, del           servidor, etc. La primera línea del header (request) es el request y el resto son headers HTTP, mientras que en un header (response) la primera línea es el  Status     Code y el resto es información de la respuesta del servidor. De esta forma, los headers permiten al cliente enviar información adicional junto con una petición     o respuesta. 

4.	**¿Qué es un queryString? (En el contexto de una url)**

    Es una cadena de consulta,  son los datos que se envían a través de la URL al realizar un request a una página web. Esto para que el servidor web pueda acceder     y manejar la información. 
5.	**¿Qué es el responseCode? ¿Qué significado tiene los posibles valores devueltos?**
6.	**¿Cómo se envía data en un Get y cómo en un POST?** 
7.	**¿Qué verbo http utiliza el navegador cuando accedemos a una página?**
8.	**Explicar brevemente qué son las estructuras de datos JSON y XML dando ejemplo de estructuras posibles.**
9.	**Explicar brevemente el estándar SOAP**
10.	**Explicar brevemente el estándar REST Full**
11.	**¿Qué son los headers en un request? ¿Para qué se utiliza el key Content-type en un header?**



## Ejercicio 3

**En este ejercicio se requirió instalar POSTMAN para realizar los soguientes incisos:**

1. Realizar un request GET a la URL: `https://reclutamiento-14cf7.firebaseio.com/personas.json`

**RESOLUCIÓN:** Realicé un request GET a la URL solicitada, lo que regresó fue la BD de Firebase en formato JSON.
Screenshot:
![GET1](https://github.com/javoflores28/Practicas/blob/master/Ejercicios/ScreenShots/GET-1.png)  

2. Realizar un request POST a la URL anterior, y con body:
{
"nombre":"Tu nombre",
"apellido":"Tu apellido",
"dni":11223322
}


**RESOLUCIÓN:** Realicé un POST a la URL ingresando mi nombre, apellido y un dni, esto me regresó el Id de mi nombre y se realizó el envío de los datos que ingrese a la BD.
Screenshot:
![POST](https://github.com/javoflores28/Practicas/blob/master/Ejercicios/ScreenShots/POST1.png)

3. Realizar nuevamente un request GET a la URL: `https://reclutamiento-14cf7.firebaseio.com/personas.json` ¿Qué diferencias se observan?

**RESOLUCIÓN:** Realicé nuevamente un request GET a la URL solicitada y me regresó la BD de Firebase actualizada en formato JSON y pude visualizar los valores que ingresé en el inciso anterior. 
Screenshot:
![GET2](https://github.com/javoflores28/Practicas/blob/master/Ejercicios/ScreenShots/GET-2.png)  

## [Ejercicio 4](https://github.com/javoflores28/Practicas/blob/master/Ejercicios/mostrarPersonas.js)

En esta práctica era necesario hacer un script que realizara una solicitud GET a un servidor en Firebase y mostrar en la consola el resultado. Me pedían utilizar el paquete `request-promise`, por lo que decidí hacer un paquete de Node.js con `npm init` e instalé las dependencia junto a `request`.

Se debe ejecutar el script primero instalando las dependencias con `npm init` y después corriendo el archivo con `node mostrarPersonas.js` desde la terminal, ubicándose en la carpeta del sricpt.

## [Ejercicio 5](https://github.com/javoflores28/Practicas/blob/master/Ejercicios/servidor.js)

En este ejercicio era necesario crear un servidor en Node.js usando la librería `express` para hacer solicitudes POST al servidor de Firebase sólo si los datos que le fueron mandados cumplían con algunas reglas de validación. 

Como fueron necesarias algunas dependencias, creé otro paquete de Node.js con `npm init` e instalé `express` para crear el servidor, `body-parser` para convertir los archivos JSON que reciba en objetos de JavaScript, `cors` para sólo admitir solicitudes de orígenes permitidos, y `request` junto con `request-promise` para hacer la solicitud POST al servidor de Firebase.

Para ejecutarlo es necesario instalar las dependencias del paquete con `npm install` y correr el servidor con `node server.js` desde la terminal, ubicándose en la carpeta del sricpt.

## [Ejercicio 6](https://github.com/javoflores28/Practicas/blob/master/Ejercicios/crearPersonas.html)

Está práctica consitió en realizar un archivo `crearPersonas.html` que tuviera 3 inputs para nombre, apellido y dni, y un botón para enviar los datos al servidor del ejercicio anterior.

Para ejecturalo, primero se debe abrir el archivo HTML dándole doble click al archivo en desde el explorador de archivos, lo cual abrirá el HTML en el navegador predeterminado. 

Para enviar los datos es necesario que el servidor en Node.js del ejercicio anterior esté corriendo (seguir instrucciones del ejercicio 5), y puede ver el resultado de su solicitud en la consola de JavaScript desde el navegador.
