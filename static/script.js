const { spawn } = require('child_process');

// Ścieżka do pliku Pythona
const pythonScriptPath = 'app.py';

// Uruchamianie skryptu Pythona
const pythonProcess = spawn('python', [pythonScriptPath]);

// Przechwytywanie wyjścia z procesu Pythona
pythonProcess.stdout.on('data', (data) => {
  const output = data.toString();
  console.log('Wyniki:', output);
});

// Obsługa błędów
pythonProcess.on('error', (error) => {
  console.error('Błąd uruchamiania skryptu Pythona:', error);
});

$(document).ready(function() {
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");
  var color = "black";
  var size = 5;
  var shape = "circle";

  // Funkcja do rysowania na płótnie
  function draw(x, y) {
    context.fillStyle = color;
    if (shape === "circle") {
      context.beginPath();
      context.arc(x, y, size, 0, 2 * Math.PI);
      context.fill();
    } else if (shape === "square") {
      context.fillRect(x - size, y - size, 2 * size, 2 * size);
    } else if (shape === "rectangle") {
      context.fillRect(x - size, y - size / 2, 2 * size, size);
    }
  }

  // Funkcja do czyszczenia płótna
  function clearCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  }

  // Obsługa zdarzenia kliknięcia na płótno
  canvas.addEventListener("mousedown", function(event) {
    var x = event.pageX - canvas.offsetLeft;
    var y = event.pageY - canvas.offsetTop;
    draw(x, y);
  });

  // Obsługa zdarzenia kliknięcia przycisku "Wyczyść płótno"
  $("#clear-button").click(function() {
    clearCanvas();
  });

  // Obsługa zdarzenia zmiany wartości pędzla
  $("#brush-size").change(function() {
    size = parseInt($(this).val());
  });

  // Obsługa zdarzenia zmiany kształtu pędzla
  $("input[name='brush-shape']").change(function() {
    shape = $(this).val();
  });

  // Obsługa zdarzenia zmiany koloru
  $("#color-picker").change(function() {
    color = $(this).val();
  });
});