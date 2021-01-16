# Examen 1 Tópicos Especiales
# Enlaces del video y de la apk en one drive
Video: https://drive.google.com/file/d/19UHLCJrYpH00jIioAqdJW-e0oHJTED7_/view?usp=sharing

APK: https://drive.google.com/file/d/14i88ZxDwgT23Yto39KnqY7z7Pz0TTfFq/view?usp=sharing

Desarrollar en ionic una aplicación que me permita chatear y que guarde todos los mensajes de cada usuario, 
los mensajes deben guardarse cifrados. Se debe registrar el texto escrito y el usuario que ingresa dicho texto, es decir se dbe implementar un login.

El chat permitirá subir imágenes, las cuales también deben ser protegidas.

Entregables: Repositorio de github con readme detallado que incluya un video del funcionamiento del aplicativo.
Subir el link del video y el apk en el repositorio. El readme y el video deben tener la explicación de las funciones y métodos implementados. 

1. Creación del proyecto
El proyecto esta creado con ionic angular basado en la plataforma cordova para la aplicación. "ionic start examen blank --type=angular --cordova"

Para la base de datos se utiliza firebase por lo cual se instalo las librerias de la misma y se realiza las configuraciones básicas.

2. Atenticación 
Para la autenticación se utilizo las herramientas que nos proporciona firebase para autenticación con correo y contraseña.
En la aplicación se utilizaron los métodos createUserWithEmailPassword() para crear un usuario con correo y contraseña.
singInWithEmaiAndPassword(), para el inicio de sesión
signOut() para salir de la sesión iniciada y userDetails() para obtener la infomación del usuario quien esta autenticado. 
Todos estos métodos son proporcionados por AuthenticatService.

3. Chat
Para ingreso a la pantalla de chat solo se lo puede hacer con un usuario autenticado, en la misma podra enviar mensajes y mostrara el usuario que esta autenticado para identificar quien envio el mensaje.
Aquí estamos utilizando una función CreateRecord(), la cual nos permitira crear un nuevo mensaje con el usuario autenticado, tambien en la función ngOnInit(), cuando se inicia la aplicación, nos permite leer los mesajes creados por medio de read_messages(), aquí tambien mostrara 3 datos que son el usuario, el mensaje y la imagen que cargo.

4. Imágenes
Para la carga de imágenes se utiliza las clases "Observable y finalize" las cuáles nos permiten visualizar la imagen y obtener sus datos como la URL de la misma.
Se creo un metodo onUpload(e), funciona cuando actua un evento en el cual se cargara la imagen la guardara con un nombre aleatorio y por medio de la clase AngularFireStorage podremos guardar estos archivos multimedia en la base de datos.
Para obtener la imágen y se muestre al usuario debemos capturar la URL de la imagen por lo cual se utiliza el método getDownloadURL().
Con la URL de la imagen podemos visualizar la misma en la aplicación en la sección de chat, una vez se hayo cargado o seleccionado la imagen en la aplicación.
5. APK
Por ultimo se genero la APK de la aplicación basada en cordova con el comando "ionic cordova build android".
Si se realiza la descarga de este proyecto se debe ejecutar nuevamente el comando para generar la apk y las diferentes carpetas de la misma. 
La APK de este proyecto se encuentra al inicio de este README en un enlace para su descarga. 


