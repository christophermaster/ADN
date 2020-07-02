# Sobre el proyecto

Es un proyecto que se encarga de la salución de Detectar mutaciones

## Enunciado
Debe recibir como parámetro un array de Strings que representan cada fila de una tabla de (NxN) con la secuencia del ADN. Las letras de los Strings solo pueden ser: (A,T,C,G), las
cuales representa cada base nitrogenada del ADN. Debes validar que sólo puedas recibir bases nitrogenadas válidas.

#### Sin mutación:

`A T G C G A`<br/>
`C A G T G C`<br/>
`T T A T T T`<br/>
`A G A C G G`<br/>
`G C G T C A`<br/>
`T C A C T G`<br/>

#### Con mutación:

`A T G C G A`<br/>
`C A G T G C`<br/>
`T T A T G T`<br/>
`A G A A G G`<br/>
`C C C C T A`<br/>
`T C A C T G`<br/>

 

Sabrás si existe una mutación si se encuentra más de una secuencia de cuatro letras iguales, de forma oblicua (diagonal), horizontal o vertical.

#### Ejemplo (Caso mutación):

`String[] dna = {"ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"};`

En este caso el llamado a la función hasMutation(dna) devuelve “true”.Desarrolla el algoritmo de la manera más eficiente posible.

 

## Desafíos:
 
### Nivel 1:

Servicio en NodeJS que cumpla con el método pedido solicitado.

### Nivel 2:

Crear una API REST, hostear esa API en un cloud computing libre (Google App Engine, Amazon AWS, etc, en su capa gratuita), crear el servicio “/mutation/” en donde se pueda detectar si existe mutación enviando la secuencia de ADN mediante un HTTP POST con un JSON el cual tenga el

#### siguiente formato:


`POST → /mutation/`<br/>
{
<br/>
“dna”:["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"]
<br/>
}

En caso de verificar una mutación, debería devolver un HTTP 200-OK, en caso contrario un 403-Forbidden

### Nivel 3:

Anexar una base de datos, la cual guarde los ADN’s verificados con la API.Sólo 1 registro por ADN.

Exponer un servicio extra “/stats” que devuelva un JSON con las estadísticas de las verificaciones de ADN: {“count_mutations”:40, “count_no_mutation”:100: “ratio”:0.4}

Tener en cuenta que la API puede recibir fluctuaciones agresivas de tráfico (Entre 100 y 1
millón de peticiones por segundo).

Debes agregar Test Automáticos, Code coverage > 80%.

## Libreria usada

#### Mongoose

Mongoose es una herramienta de modelado de objetos MongoDB diseñada para trabajar en un entorno asíncrono. Mongoose admite promesas y devoluciones de llamadas.

Puede obtener más información en la documentación [Mongoose](https://www.npmjs.com/package/mongoose).

## Base de datos

#### MongoDB

Se hizo uso de forma online

MongoDB es una base de datos distribuida, basada en documentos y de uso general que ha sido diseñada para desarrolladores de aplicaciones modernas y para la era de la nube. Ninguna otra ofrece un nivel de productividad de uso tan alto. 

Puede obtener más información en la documentación [MongoDB](https://www.mongodb.com/es).


# Scripts disponibles
En el directorio del proyecto, puede ejecutar:

### `npm start`
Ejecuta la aplicación en modo de desarrollo.
Abra http://localhost:3000 para verlo en el navegador.

La página se volverá a cargar si realiza modificaciones.
También verá cualquier error en la consola.

# Aprende más
Puede obtener más información en la documentación [Crear aplicación de React](https://facebook.github.io/create-react-app/docs/getting-started).

Para aprender React, consulte la [documentación de React ](https://reactjs.org/).

#  Deployment

La aplicacion fue desplegada en AWS

## AWS
Amazon Web Services (AWS) es la plataforma en la nube más adoptada y completa en el mundo, que ofrece más de 175 servicios integrales de centros de datos a nivel global. Millones de clientes, incluyendo las empresas emergentes que crecen más rápido, las compañías más grandes y los organismos gubernamentales líderes, están utilizando AWS para reducir los costos, aumentar su agilidad e innovar de forma más rápida. [Más información ](https://aws.amazon.com/es/what-is-aws/)

## Ruta de despliegue

http://mutacionadn-env.eba-rcqym223.us-east-2.elasticbeanstalk.com/

# Uso

## Local

- Para ser uso del proyecto de forma local, deben de ejecutar el proyecto con el comando `npm start`.
- Luego usar cualquier herramienta que le permita hacer peticiones HTTP, un ejemplo es una aplicación que se llama  [Postman ](https://www.postman.com/).
- Si es una mutación, cuando se solicita (`POST → /mutation/`)  se envia un estatus 200 y se retorna 
`{"mensaje": "OK"}`
- Si no es una mutación, cuando se solicita (`POST → /mutation/`) se envia un estatus 403  y se retorna un 
`{"mensaje": "Forbidden"}`

#### Rutas

`POST → /mutation/`<br/>
http://localhost:3000/mutation/

`GET → /stats/`<br/>
http://localhost:3000/stats/

## AWS

- Solo deben acceder a la ruta.
- Luego usar cualquier herramienta que le permita hacer peticiones HTTP, un ejemplo es una aplicación que se llama Postman.


#### Rutas

`POST → /mutation/`<br/>
http://mutacionadn-env.eba-rcqym223.us-east-2.elasticbeanstalk.com/mutation/

`GET → /stats/`<br/>
http://mutacionadn-env.eba-rcqym223.us-east-2.elasticbeanstalk.com/stats/

#### Datos  
`POST → /mutation/`<br/>
{
    "dna": [
        "ATGCGA",
        "CAGTGC",
        "TTAGT",
        "AGAAGG",
        "CCCCTA",
        "TCACTG"
    ]
}


