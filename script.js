// Puedes agregar validaciones o interacciones aquí si lo necesitas
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contacto-form');
  const successPopup = document.getElementById('success-popup');
  const validationPopup = document.getElementById('validation-popup'); // Obtengo el nuevo pop-up de validación

  // Obtengo los botones de cerrar de ambos pop-ups
  const closeSuccessButton = successPopup.querySelector('.popup-close');
  const closeValidationButton = validationPopup.querySelector('.popup-close');

  // Función para mostrar un pop-up específico
  function showPopup(popupElement) {
    if (popupElement) {
      popupElement.classList.add('visible');
    }
  }

  // Función para ocultar un pop-up específico
  function hidePopup(popupElement) {
     if (popupElement) {
      popupElement.classList.remove('visible');
    }
  }

  // Manejador del envío del formulario
  if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Evita el envío normal del formulario

      const form = event.target;
      const nombre = form.elements['nombre'].value.trim(); // Uso trim() para quitar espacios en blanco
      const email = form.elements['email'].value.trim();
      const mensaje = form.elements['mensaje'].value.trim();

      // Validación básica: comprueba que los campos no estén vacíos
      if (nombre === '' || email === '' || mensaje === '') {
        showPopup(validationPopup); // Muestra el pop-up de validación
        return;
      }

      // Aquí iría el código para enviar el formulario si tuvieras backend
      // Como no tienes backend, simulamos el envío:

      // Muestra el pop-up de éxito
      showPopup(successPopup);

      // Limpia los inputs del formulario
      form.reset();
    });
  }

  // Manejador para cerrar el pop-up de éxito haciendo clic en el botón de cerrar
  if (closeSuccessButton) {
    closeSuccessButton.addEventListener('click', function() { hidePopup(successPopup); });
  }

  // Manejador para cerrar el pop-up de validación haciendo clic en el botón de cerrar
  if (closeValidationButton) {
    closeValidationButton.addEventListener('click', function() { hidePopup(validationPopup); });
  }

  // Opcional: Cerrar los pop-ups haciendo clic fuera del contenido (en el overlay)
  if (successPopup) {
    successPopup.addEventListener('click', function(event) {
      if (event.target === successPopup) { // Verifica que el clic fue directamente en el contenedor
        hidePopup(successPopup);
      }
    });
  }
  if (validationPopup) {
    validationPopup.addEventListener('click', function(event) {
      if (event.target === validationPopup) { // Verifica que el clic fue directamente en el contenedor
        hidePopup(validationPopup);
      }
    });
  }
});
