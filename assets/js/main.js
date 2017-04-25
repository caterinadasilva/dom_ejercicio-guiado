// 1. Crear una función que traducirá el form

function translate() {
	// 2. Crear variables que identificarán a los nodos que queremos modificar
	var title = document.getElementById('form-signin-heading');
	var email = document.getElementById('inputEmail');
	var password = document.getElementById('inputPassword');
	var remember = document.getElementsByTagName('span')[0];
	var button = document.getElementsByClassName('btn')[0];
	var printed = document.getElementById('printed');

	// 3. Usar propiedades correspondientes para modificar el texto de los nodos
	title.innerHTML = "Por favor inicia sesión";
	email.placeholder = "Correo electrónico";
	password.placeholder = "Contraseña";
	remember.innerHTML = "Recordar datos";
	button.innerHTML = "Iniciar sesión";

}

// 4. Para traducir el formulario, llamar a la función inmediatamente después de crearla o llamarla en la consola del navegador
translate();

// 5. Una vez traducido el formulario, muestra bajo él los datos ingresados por el usuario.
var html = document.getElementById('print');
html.onclick = function(){
	var userEmail = document.getElementById('inputEmail').value;
	var userPassword = document.getElementById('inputPassword').value;
	printed.innerHTML = "<h3>Datos de formulario</h3>";
	printed.innerHTML += "<p>El correo electrónico ingresado es:</p>";
	printed.innerHTML += "<p>" + userEmail + "</p>";
	printed.innerHTML += "<p>La clave ingresada es:</p>";
	printed.innerHTML += "<p>" + userPassword + "</p>";
	return false;
}