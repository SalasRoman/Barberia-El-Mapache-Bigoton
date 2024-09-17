// Redirigir al registro
function openRegistration() {
    window.location.href = 'registro.html';  // Redirige a la página de registro
  }
  
  // Registro de usuario
  document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Aquí se pueden añadir validaciones adicionales y enviar datos al servidor
  
    alert('Cuenta creada con éxito');
    window.location.href = 'login.html';  // Redirige de nuevo al inicio de sesión
  });
  
  // Inicio de sesión de usuario
  document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Verificar correo y contraseña (puedes conectarlo a una base de datos)
  
    window.location.href = 'citas.html';  // Redirige a la página de agendar cita
  });
  
  // Agendar cita
  document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Validar y enviar datos de la cita al servidor
  
    window.location.href = 'confirmation.html';  // Redirige a la página de confirmación
  });
  function openRegistration() {
    window.location.href = "registro.html"; // Redirige a la página de registro
  }
  
