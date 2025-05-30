<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Humbe - Página Oficial</title>
</head>
<body>
  <h1>Humbe</h1>
  <button id="fanButton">Haz clic aquí</button>
  <p id="fanMessage"></p>

  <script>
    document.getElementById("fanButton").addEventListener("click", () => {
      fetch('/mensaje')
        .then(() => {
          document.getElementById("fanMessage").textContent = "¡Gracias por ser parte de la comunidad de fans de Humbe! 💜";
        });
    });
  </script>
</body>
</html>
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Humbe - Página Oficial</title>
</head>
<body>
  <h1>Humbe</h1>
  <button id="fanButton">Haz clic aquí</button>
  <p id="fanMessage"></p>

  <script>
    document.getElementById("fanButton").addEventListener("click", () => {
      fetch('/mensaje')
        .then(() => {
          document.getElementById("fanMessage").textContent = "¡Gracias por ser parte de la comunidad de fans de Humbe! 💜";
        });
    });
  </script>
</body>
</html>
