# AngularNode

Para probar este proyecto siga las siguientes instrucciones:

## Dependencias

Este projecto necesita nodejs v8, en caso que la versión usada dé error, instalar la versión específica 8.11.3.

## Instalación de dependencias npm

Para instalar las dependencias npm se debe ejecutar `npm install` en el directorio raíz del proyecto.

## Variables de entorno
Esta aplicación usa opcionalmente la variable de entorno PORT para asignar el puerto por el cual escuchará peticiones web. Si se quiere especificar un puerto se debe ejecutar `export PORT={numero_de_puerto}`. Si no se asigna la variable PORT, usará el puerto 3000 por defecto.

## Iniciar la aplicación

Luego de instalar las dependencias npm, ejecutar  `DEBUG=nodeApp:* npm start`. Luego, se podrán hacer peticiones a la url `http://localhost:{numero_de_puerto}` donde `numero_de_puerto` es el puerto asignado en el paso anterior, o 3000 en caso que no se haya asignado.
