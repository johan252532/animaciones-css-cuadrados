    

document.addEventListener('DOMContentLoaded', () => {
    const contenedor = document.querySelector('.contenedor');
    const cuadrado3 = document.querySelector('.cuadrado-3');

    
    const contenedorAncho = contenedor.clientWidth;
    const contenedorAlto = contenedor.clientHeight;

    
    const cuadradoAncho = cuadrado3.offsetWidth;
    const cuadradoAlto = cuadrado3.offsetHeight;

    
    function generarVelocidadAleatoria() {
        let velocidad = (Math.random() - 0.5) * 6;
        return velocidad === 0 ? 1 : velocidad;
    }

    
    let x = Math.random() * (contenedorAncho - cuadradoAncho);
    let y = Math.random() * (contenedorAlto - cuadradoAlto);

    
    let dx = generarVelocidadAleatoria();
    let dy = generarVelocidadAleatoria();

    
    function generarColorAleatorio() {
        const letras = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letras[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // 
    function animarCuadrado() {
        
        x += dx;
        y += dy;

        
        if (x + cuadradoAncho >= contenedorAncho) {
            x = contenedorAncho - cuadradoAncho; 
            dx = generarVelocidadAleatoria() * -1; 
            cuadrado3.style.backgroundColor = generarColorAleatorio();
        } else if (x <= 0) {
            x = 0; 
            dx = generarVelocidadAleatoria(); 
            cuadrado3.style.backgroundColor = generarColorAleatorio();
        }

        if (y + cuadradoAlto >= contenedorAlto) {
            y = contenedorAlto - cuadradoAlto; 
            dy = generarVelocidadAleatoria() * -1; 
            cuadrado3.style.backgroundColor = generarColorAleatorio();
        } else if (y <= 0) {
            y = 0; 
            dy = generarVelocidadAleatoria(); 
            cuadrado3.style.backgroundColor = generarColorAleatorio();
        }

        
        cuadrado3.style.left = x + 'px';
        cuadrado3.style.top = y + 'px';

        
        requestAnimationFrame(animarCuadrado);
    }

   
    animarCuadrado();
});