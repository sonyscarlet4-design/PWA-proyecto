document.addEventListener("DOMContentLoaded", function() {

    // 1. Control del Menú Hamburguesa (Desplegable)
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const navMenu = document.getElementById('navMenu');

    hamburgerBtn.addEventListener('click', function() {
        if (navMenu.style.display === 'block') {
            navMenu.style.display = 'none';
        } else {
            navMenu.style.display = 'block';
        }
    });

    // 2. Filtro Interactivo de 3 Capas en Cascada
    const capa1 = document.getElementById('capal');
    const capa2 = document.getElementById('capa2');
    const resultadoFiltro = document.getElementById('resultadoFiltro');

    capa1.addEventListener('change', function() {
        let valor = this.value;
        
        capa2.innerHTML = '<option value="">-- Seleccione opción --</option>';
        capa2.disabled = false;
        
        if (valor === 'academico') {
            let opt = document.createElement('option');
            opt.value = 'web2';
            opt.textContent = 'Diseño Web II (SIS-0141)';
            capa2.appendChild(opt);
        } else if (valor === 'desarrollo') {
            let opt = document.createElement('option');
            opt.value = 'pwa';
            opt.textContent = 'Arquitectura PWA';
            capa2.appendChild(opt);
        } else {
            capa2.disabled = true;
            resultadoFiltro.textContent = 'Seleccione las capas anteriores...';
        }
    });

    capa2.addEventListener('change', function() {
        let selectedOption = this.options[this.selectedIndex];
        let valorOpt = this.value;
        
        if (valorOpt !== "") {
            resultadoFiltro.innerHTML = 'Capa 3 seleccionada: <strong>' + selectedOption.textContent + '</strong>';
        } else {
            resultadoFiltro.textContent = 'Seleccione las capas...';
        }
    });

    // 3. Formulario de Contacto con Validación en Tiempo Real
    const pwaForm = document.getElementById('pwaForm');
    const nombreInput = document.getElementById('nombre');
    const correoInput = document.getElementById('correo');
    const errNombre = document.getElementById('errNombre');
    const errCorreo = document.getElementById('errCorreo');
    const successAlert = document.getElementById('successAlert');

    pwaForm.addEventListener('submit', function(e) {
        e.preventDefault();
        let valido = true;
        let nombre = nombreInput.value.trim();
        let correo = correoInput.value.trim();
        
        // Validación de campo Nombre
        if (nombre === '') {
            errNombre.style.display = 'block';
            valido = false;
        } else {
            errNombre.style.display = 'none';
        } 
        
        // Validación de formato de Correo (RegEx)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(correo)) {
            errCorreo.style.display = 'block';
            valido = false;
        } else {
            errCorreo.style.display = 'none';
        } 
        
        // Si todo es válido, muestra mensaje de éxito y reinicia
        if (valido) {
            successAlert.style.display = 'block';
            setTimeout(function() {
                successAlert.style.display = 'none';
            }, 3000);
            pwaForm.reset();
            capa2.disabled = true;
            capa2.innerHTML = '<option value="">-- Primero elija área --</option>';
            resultadoFiltro.textContent = 'Seleccione las capas anteriores...';
        }
    });

});