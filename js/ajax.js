$(document).ready(function () {
    $("#contactForm").submit(function (e) {
      e.preventDefault();
      // Deshabilitar el botón de enviar mientras se procesa el formulario
      $("#submitBtn").prop("disabled", true);
      // Mostrar spinner con la propiedad display: inline-block;
      $("#spinner").css("display", "inline-block");
      $.ajax({
        method: "POST",
        url: "https://formsubmit.co/ajax/chaileenzo195@gmail.com",
        dataType: "json",
        accepts: "application/json",
        data: $(this).serialize(),
        success: function (data) {
          // Ocultar spinner
          $("#spinner").hide();
          // Mostrar modal
          $("#exampleModal").modal("show");
          // Habilitar el botón de enviar nuevamente
          $("#submitBtn").prop("disabled", false);
          // Vaciar el formulario
          document.getElementById("contactForm").reset();
        },
        error: function (err) {
          console.log(err);
          // Ocultar spinner
          $("#spinner").hide();
          // Habilitar el botón de enviar nuevamente en caso de error
          $("#submitBtn").prop("disabled", false);
        },
      });
    });
  });
  