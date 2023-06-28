const contenedorTablas = document.getElementById('tablas');
fetch('dataEquipos.json')
  .then(response => response.json())
  .then(data => {
    data.equipos.forEach(equipo => {
      // Crear la tabla del equipo
      const tabla = document.createElement('table');
      
      // Agregar título del equipo
      const tituloEquipo = document.createElement('h2');
      tituloEquipo.textContent = equipo.nombre;
      contenedorTablas.appendChild(tituloEquipo);

      // Agregar imagen del equipo
      const imagenEquipo = document.createElement('img');
      // Suponiendo que en el JSON cada equipo tiene una propiedad "imagen" con la URL de la imagen correspondiente
      imagenEquipo.src = equipo.imagen; // Reemplazar "equipo.imagen" con la propiedad correcta del JSON
      contenedorTablas.appendChild(imagenEquipo);

      const encabezado = document.createElement('thead');
      const filaEncabezado = document.createElement('tr');
      const celdaEquipo = document.createElement('th');
      const celdaGoles = document.createElement('th');
      const celdaAsistencias = document.createElement('th');
      const celdaDefensas = document.createElement('th');
      celdaEquipo.textContent = equipo.nombre;
      celdaGoles.textContent = 'Goles';
      celdaAsistencias.textContent = 'Asistencias';
      celdaDefensas.textContent = 'Defensas';
      filaEncabezado.appendChild(celdaEquipo);
      filaEncabezado.appendChild(celdaGoles);
      filaEncabezado.appendChild(celdaAsistencias);
      filaEncabezado.appendChild(celdaDefensas);
      encabezado.appendChild(filaEncabezado);

      const cuerpo = document.createElement('tbody');
      equipo.integrantes.forEach(integrante => {
        // Crear fila para el integrante
        const filaIntegrante = document.createElement('tr');
        const celdaNombre = document.createElement('td');
        celdaNombre.textContent = integrante.nombre;
        filaIntegrante.appendChild(celdaNombre);

        const celdaGoles = document.createElement('td');
        celdaGoles.textContent = integrante.goles;
        filaIntegrante.appendChild(celdaGoles);
        celdaGoles.classList.add('gol');

        const celdaAsistencias = document.createElement('td');
        celdaAsistencias.textContent = integrante.asistencias;
        filaIntegrante.appendChild(celdaAsistencias);
        celdaAsistencias.classList.add('asistencia');

        const celdaDefensas = document.createElement('td');
        celdaDefensas.textContent = integrante.defensas;
        filaIntegrante.appendChild(celdaDefensas);
        celdaDefensas.classList.add('defensa');
        cuerpo.appendChild(filaIntegrante);
      });

      tabla.appendChild(encabezado);
      tabla.appendChild(cuerpo);
      contenedorTablas.appendChild(tabla);
    });
  });
