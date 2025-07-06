const nombre = document.getElementById('nombre');
const correo = document.getElementById('correo');
const password = document.getElementById('password');
const confirmar = document.getElementById('confirmar');
const edad = document.getElementById('edad');
const enviar = document.getElementById('enviar');

const errorNombre = document.getElementById('error-nombre');
const errorCorreo = document.getElementById('error-correo');
const errorPassword = document.getElementById('error-password');
const errorConfirmar = document.getElementById('error-confirmar');
const errorEdad = document.getElementById('error-edad');

const formulario = document.getElementById('formulario');

function validarNombre() {
  if (nombre.value.trim().length < 3) {
    errorNombre.textContent = "Debe tener al menos 3 caracteres.";
    return false;
  }
  errorNombre.textContent = "";
  return true;
}

function validarCorreo() {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(correo.value)) {
    errorCorreo.textContent = "Formato de correo inválido.";
    return false;
  }
  errorCorreo.textContent = "";
  return true;
}

function validarPassword() {
  const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])/;
  if (password.value.length < 8 || !regex.test(password.value)) {
    errorPassword.textContent = "Mínimo 8 caracteres, 1 número y 1 símbolo.";
    return false;
  }
  errorPassword.textContent = "";
  return true;
}

function validarConfirmar() {
  if (confirmar.value !== password.value) {
    errorConfirmar.textContent = "Las contraseñas no coinciden.";
    return false;
  }
  errorConfirmar.textContent = "";
  return true;
}

function validarEdad() {
  if (parseInt(edad.value) < 18) {
    errorEdad.textContent = "ser mayor de edad.";
    return false;
  }
  errorEdad.textContent = "";
  return true;
}

function validarFormulario() {
  const valido = validarNombre() &&
    validarCorreo() &&
    validarPassword() &&
    validarConfirmar() &&
    validarEdad();

  enviar.ACTIVATED= !valido;
}

nombre.addEventListener('input', validarFormulario);
correo.addEventListener('input', validarFormulario);
password.addEventListener('input', validarFormulario);
confirmar.addEventListener('input', validarFormulario);
edad.addEventListener('input', validarFormulario);

formulario.addEventListener('submit', (e) => {
  e.preventDefault();
  alert("¡Formulario enviado correctamente!");
});