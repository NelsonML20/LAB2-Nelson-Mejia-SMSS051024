let contador2 = 0;
let rotacion6 = 0;

// Evento 1: Cambiar color de fondo aleatoriamente
document.getElementById('cuadro1').addEventListener('click', function() {
    const colores = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#6c5ce7', '#a29bfe', '#fd79a8', '#fdcb6e'];
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    this.style.backgroundColor = colorAleatorio;
});

// Evento 2: Contar clicks
document.getElementById('cuadro2').addEventListener('click', function() {
    contador2++;
    this.textContent = `Clicks: ${contador2}`;
});

// Evento 3: Cambiar tamaño
let aumentado3 = false;
document.getElementById('cuadro3').addEventListener('click', function() {
    if (aumentado3) {
        this.style.transform = 'scale(1)';
        aumentado3 = false;
    } else {
        this.style.transform = 'scale(1.3)';
        aumentado3 = true;
    }
});

// Evento 4: Toggle de borde punteado
let tieneBorde4 = false;
document.getElementById('cuadro4').addEventListener('click', function() {
    if (tieneBorde4) {
        this.style.border = 'none';
        tieneBorde4 = false;
    } else {
        this.style.border = '3px dashed #333';
        tieneBorde4 = true;
    }
});

// Evento 5: Cambiar opacidad
document.getElementById('cuadro5').addEventListener('click', function() {
    const opacidadActual = parseFloat(this.style.opacity) || 1;
    const nuevaOpacidad = opacidadActual === 0.5 ? 1 : 0.5;
    this.style.opacity = nuevaOpacidad;
    this.textContent = nuevaOpacidad === 0.5 ? 'Desvanecido' : 'Se desvanece';
});

// Evento 6: Rotar el elemento
document.getElementById('cuadro6').addEventListener('click', function() {
    rotacion6 += 45;
    this.style.transform = `rotate(${rotacion6}deg)`;
});

// Evento 7: Cambiar texto
let estoyEnEspanol7 = true;
document.getElementById('cuadro7').addEventListener('click', function() {
    if (estoyEnEspanol7) {
        this.textContent = '¡Hola, Feliz dia ING, pongame 10!';
        estoyEnEspanol7 = false;
    } else {
        this.textContent = 'Este texto se cambia, al hacer click';
        estoyEnEspanol7 = true;
    }
});

// Evento 8: Toggle de sombra exagerada
let tieneOmbraAmplia8 = false;
document.getElementById('cuadro8').addEventListener('click', function() {
    if (tieneOmbraAmplia8) {
        this.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
        tieneOmbraAmplia8 = false;
    } else {
        this.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.5)';
        tieneOmbraAmplia8 = true;
    }
});
