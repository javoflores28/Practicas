# Prácticas ProContacto: #


## Ejercicio 1 


**Instalación del ambiente:** En este primer ejercicio se pide instalar el ambiente para poder realizar los siguientes ejercicios.
1.	Instalar el IDE Visual Studio Code.
2.	Instalar GIT y GIT Bash.
3.	Instalar Node.js


## Ejercicio 2 / RESPUESTAS

**1.	¿Qué es un servidor HTTP?** 
    <details>
    <summary>RESPUESTA:</summary>
    <p>Un servidor HTTP es un programa que procesa una aplicación del lado del servidor para realizar conexiones con el cliente. Este servidor se encarga de enviar         peticiones desde la conexión del cliente hasta el sistema que gestiona las peticiones para transmitir una respuesta al cliente a través de una conexión TCP. El     código recibido por el cliente se procesa a través de un navegador web (URLs) y se trasmite mediante un protocolo, generalmente HTTP.
    </p>
    </details>
    

**2.    ¿Qué son los verbos HTTP? Mencionar los más conocidos**
    <details>
    <summary>RESPUESTA:</summary>
    <p>Son métodos de solicitudes especificas que utilizan el servicio de integración de datos en el mensaje de solicitud. Estos verbos/métodos permiten comunicar al       servidor lo que se requiere realizar con un recurso mediante una URL. Los más importantes (sobre todo para hacer aplicaciones REST) son los siguientes:

    **GET:** Se emplea para leer y recuperar representaciones de recursos específicos del servidor, en el caso de una respuesta exitosa devuelve la representación  en un     formato concreto con el cuerpo de la respuesta: HTML, XML, JSON, imágenes, JavaScript, etc. Las peticiones que usan este método sólo deben recuperar datos.         También se puede llegar a utilizar para enviar datos, pero tiene limitaciones. La información es mostrada en la URL. Además, es un método idempotente. 

    **POST:** Este método se utiliza para enviar datos a un servidor, es utilizado para la creación de recursos. Este método no muestra ninguna información en la URL,       ya que esta oculta. Llamar este método varias veces puede causar efectos secundarios en el servidor, como enviar la misma orden varias veces. 

    **PUT:** Se utiliza para actualizar y crear contenidos, reemplazando la anterior representación del elemento de destino con los datos de la nueva petición, siendo       un método idempotente. Almacena la entidad suministrada en la URL indicado. Si la entidad no existe, se crea. Si la entidad existe, se actualiza.

    **DELETE:** Este método se utiliza para eliminar un recurso específico de una ubicación dada por la URL.

    **HEAD:** Este método se utiliza para obtener una respuesta idéntica a la de una petición GET, pero sin el cuerpo de la respuesta. El servidor responde con líneas y     headers (únicamente los metadatos de la cabecera).

3.	**¿Qué es un request y un response en una comunicación HTTP? ¿Qué son los headers?**

    <details>
    <summary>RESPUESTA:</summary>
    <p>
    
    Un **request** es un mensaje/petición enviado por un cliente para iniciar una acción en el servidor.
    
    Un **response** es la respuesta del servidor hacia el cliente habiendo recibido un request previo. 
    
    Los **headers** son la parte central de los HTTP request y response, ya que transmiten información acerca del navegador del cliente, la página solicitada, del           servidor, etc. La primera línea del header (request) es el request y el resto son headers HTTP, mientras que en un header (response) la primera línea es el  Status     Code y el resto es información de la respuesta del servidor. De esta forma, los headers permiten al cliente enviar información adicional junto con una petición     o respuesta.</p>
    </details>

4.	**¿Qué es un queryString? (En el contexto de una url)**
    <details>
    <summary>RESPUESTA:</summary>
    <p>  Es una cadena de consulta,  son los datos que se envían a través de la URL al realizar un request a una página web. Esto para que el servidor web pueda acceder     y manejar la información. Después del símbolo ? aparecen parejas de datos enviados. </p>
    </details>

5.	**¿Qué es el responseCode? ¿Qué significado tiene los posibles valores devueltos?**
    <details>
    <summary>RESPUESTA:</summary>
    <p>Los responseCode o Status Code, son una serie de códigos de tres cifras estandarizados y que dependen de la respuesta HTTP, indican si se ha completado         satisfactoriamente la solicitud o no.
    Los posibles valores devueltos: 
    <ul>
    <li>Respuestas informativas (100–199)</li>
    <li>Respuestas satisfactorias (200–299)</li>
    <li>Redirecciones (300–399)</li>
    <li>Errores de los clientes (400–499)</li>
    <li>Errores de los servidores (500–599)</li>    
    </ul>
    </p>
    </details>


6.	**¿Cómo se envía data en un Get y cómo en un POST?** 
    <details>
    <summary>RESPUESTA:</summary>
    <p>
        
     **GET**: Lleva los datos de forma "visible" al cliente (navegador web). El medio de envío es la URL. Los datos los puede ver cualquiera. El método GET envía la información codificada del usuario en el header del HTTP request, directamente en la URL. La página web y la información codificada se separan por un interrogante ?
     
    <ul>
    <li>El método GET envía la información en la propia URL, estando limitada a 2000 caracteres.</li>
    <li>La información es visible por lo que con este método nunca se envía información sensible.</li>
    <li>No se pueden enviar datos binarios (archivos, imágenes...).</li>
    </ul>	
    <br/>
    
    **POST:** Consiste en datos "ocultos" (porque el cliente no los ve) enviados por un formulario cuyo método de envío es post. Es adecuado para formularios. Los  datos no son visibles. Con el método HTTP POST también se codifica la información, pero ésta se envía a través del body del HTTP Request, por lo que no aparece en  la URL.
    
    <ul>
    <li>El método POST no tiene límite de cantidad de información a enviar.</li>
    <li>La información proporcionada no es visible, por lo que se puede enviar información sensible.</li>
    <li>Se puede usar para enviar texto normal así como datos binarios (archivos, imágenes...).</li> 
    </ul>	
    </p>
    </details>

7.	**¿Qué verbo http utiliza el navegador cuando accedemos a una página?**
    <details>
    <summary>RESPUESTA:</summary>
    <p>El método/verbo GET para regresar la página que solicite el cliente o en definitiva un error.</p>
    </details>

8.	**Explicar qué son las estructuras de datos JSON y XML dando ejemplo de estructuras posibles.**
    <details>
    <summary>RESPUESTA JSON:</summary>
    <p>
    
    **JSON** (JavaScript Object Notation): Es un formato texto ligero del tipo clave: valor para el almacenamiento estructurado e intercambio de datos principalmente       entre un servidor y un cliente. Es muy similar a un XML, pero con una sintaxis mas clara y acortada y por lo tanto es más liviano. JSON está constituido por       dos estructuras:
    
    
    - **Una colección de pares de nombre/valor:** En varios lenguajes esto es conocido como un objeto, registro, estructura, diccionario, tabla hash, lista de       claves     o un array asociativo.</li>
    - **Una lista ordenada de valores:** En la mayoría de los lenguajes, esto se implementa como arrays, vectores, listas o secuencias. </li>
    <br/>
    
   
    **Ejemplos:**
    
    <ins>Un objeto:</ins>  conjunto desordenado de pares nombre/valor. Un objeto comienza con `{`  y termine con `}` . Cada nombre es seguido por `:` y los pares       nombre/valor están separados por una `,` 
    
        
        { "persona": {"nombre":"Javier", "profesión":"Estudiante", "ciudad":"México"}}
        
        

    <ins>Un array:</ins> Una colección de valores que comienza con `[` y termina con `]` y los valores se separan por una `,`
    
        
        { "persona": [
                    {"nombre":"Javier", "profesión":"Estudiante", "ciudad":"México"},
                    { "nombre": "Arturo", “profesión":"Estudiante"}
        ]}
        
    
    <ins>Un valor:</ins> Puede ser una cadena de caracteres con comillas dobles, o un número, o true o false o null, o un objeto o un array. Estas estructuras          pueden             anidarse. 
    
       ```
       ventana" : {
           "titulo": "Gestión Articulos",
           "alto": 300,
           "ancho": 500,
           "menu": null,
           "modal": true,
           "botones": ["ok", "cancel"]}}
       ```
    </p>
    </details>
    
    <details>
    <summary>RESPUESTA XML:</summary>
    <p>
    
    **XML (Extensible Markup Language):** Es un metalenguaje, un estándar que estructura el intercambio de información entre las diferentes plataformas, que define     un conjunto de reglas para la codificación de documentos. XML está constituido por dos estructuras:

    - **Prólogo (opcional):** contiene una secuencia de instrucciones de procesamiento y/o declaración del tipo de documento. Se puede dividir en dos partes:
        - Declaración XML: Establece la versión de xml, el tipo de codificación y si es un documento autónomo.                                                             
        - Declaración de tipo de documento: Establece el tipo de documento que es.
    - **Cuerpo:** es el contenido de información del documento, organizado como un árbol único de elementos marcados.
    <br/>
    
    <ins>**Ejemplo con prólogo:**</ins>
    ```
    <?xml version="1.0" encoding="ISO-8859-1"?>
    <nota>
  	     <para>Pedro</para>
         <de>Laura</de>
         <titulo>Recordatorio</titulo>
         <contenido>A las 7:00 pm en la puerta del teatro</contenido>
    </nota>
    
    ```
    <br/>
    
     <ins>**Ejemplo sin prólogo:**</ins>
     
    ```
    <libreria>
    	 <libro categoría="WEB">
    		<título lang="en">Learning XML</título>
    		<autor>Erik T. Ray</autor>
    		<año>2003</año>
    		<precio>39.95</precio>
    	 </libro>
    </libreria>
    
    ```
    
    </p>
    </details>


9.	**Explicar brevemente el estándar SOAP**
    <details>
    <summary>RESPUESTA:</summary>
    <p>
      
    **SOAP** es un estándar basado en XML para la transmisión de mensajes en HTTP y otros protocolos de Internet. Es un protocolo ligero para el intercambio de         información en un entorno descentralizado y distribuido. Se basa en XML y consta de tres partes:
    
    <ul>
    <li>Un sobre que define una infraestructura para describir el contenido del mensaje y cómo procesarlo.</li>
    <li>Un conjunto de normas de codificación para expresar instancias de tipos de datos definidos por la aplicación.</li>
    <li>Una convención para representar llamadas y respuestas a procedimiento remoto.</li>  
    </ul>	
    <br/>

    **SOAP** permite el enlace y la utilización de servicios Web encontrados definiendo una ruta de mensaje para el direccionamiento de mensajes. Se puede utilizar     SOAP para consultar UDDI para servicios Web.</p>
         </details>



10.	**Explicar brevemente el estándar REST Full**
    <details>
    <summary>RESPUESTA:</summary>
    <p>
    Es una arquitectura para aplicaciones basadas en redes (como Internet), sus siglas significan Representational State Transfer. Los servicios Web RESTful se         basan en recursos. Un recurso es una entidad, la cual se almacena principalmente en un servidor y el cliente solicita el recurso utilizando servicios Web           RESTful. Sus principales características:
    <ul>
    <li>Tiene cinco operaciones típicas: listar, crear, leer, actualizar y borrar</li>
    <li>Cada operación requiere de dos cosas: El método URI y HTTP</li>
    <li>El URI es un sustantivo que contiene el nombre del recurso</li>
    <li>El método HTTP es un verbo</li>
    </ul>	
    </p>
    </details>


11.	**¿Qué son los headers en un request? ¿Para qué se utiliza el key Content-type en un header?**

    <details>
    <summary>RESPUESTA:</summary>
    <p>
    
    Los **headers** en un request, son los parámetros que se envían en una petición o respuesta HTTP al cliente o al servidor para proporcionar información         esencial       sobre la transacción en curso. Estas cabeceras proporcionan información mediante la sintaxis 'Cabecera: Valor' y son enviadas automáticamente por el navegador     o el servidor Web.

    **Content-Type** es la propiedad del header que se usa para indicar el media type del recurso, dice al cliente que tipo de contenido será retornado.</p>
     </details>




## Ejercicio 3

**En este ejercicio se requirió instalar POSTMAN para realizar los soguientes incisos:**

**1.** Realizar un request GET a la URL: `https://reclutamiento-14cf7.firebaseio.com/personas.json`

**RESOLUCIÓN:** Realicé un request GET a la URL solicitada, lo que regresó fue la BD de Firebase en formato JSON.
Screenshot:
<div align="center">
    <img src="https://github.com/javoflores28/Practicas/blob/master/Ejercicios/ScreenShots/GET-1.png" width="800px"</img> 
</div>

**2.** Realizar un request POST a la URL anterior, y con body:
{
"nombre":"Tu nombre",
"apellido":"Tu apellido",
"dni":11223322
}


**RESOLUCIÓN:** Realicé un POST a la URL ingresando mi nombre, apellido y un dni, esto me regresó el Id de mi nombre y se realizó el envío de los datos que ingrese a la BD.
Screenshot:
<div align="center">
    <img src="https://github.com/javoflores28/Practicas/blob/master/Ejercicios/ScreenShots/POST1.png" width="800px"</img> 
</div>


**3.** Realizar nuevamente un request GET a la URL: `https://reclutamiento-14cf7.firebaseio.com/personas.json` ¿Qué diferencias se observan?

**RESOLUCIÓN:** Realicé nuevamente un request GET a la URL solicitada y me regresó la BD de Firebase actualizada en formato JSON y pude visualizar los valores que ingresé en el inciso anterior. 
Screenshot:
<div align="center">
    <img src="https://github.com/javoflores28/Practicas/blob/master/Ejercicios/ScreenShots/GET-2.png" width="800"</img> 
</div>

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
