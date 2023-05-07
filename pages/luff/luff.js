const contenedorTablas = document.getElementById('tablas');
fetch('dataEquipos.json')
  .then(response => response.json())
  .then(data => {
    data.equipos.forEach(equipo => {
      // crear la tabla del equipo
      const tabla = document.createElement('table');
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
      // celdaEquipo.colSpan = 4;
      filaEncabezado.appendChild(celdaEquipo);
      filaEncabezado.appendChild(celdaGoles);
      filaEncabezado.appendChild(celdaAsistencias);
      filaEncabezado.appendChild(celdaDefensas);
      // filaEncabezado.appendChild(celdaEquipo);
      encabezado.appendChild(filaEncabezado);

      const cuerpo = document.createElement('tbody');
      equipo.integrantes.forEach(integrante => {
        // crear fila para el integrante
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
