// cargar datos desde el archivo JSON
fetch('dataEquipos.json')
  .then(response => response.json())
  .then(data => {
    // obtener el elemento del tbody
    const tbody = document.getElementById('tabla-equipos').getElementsByTagName('tbody')[0];
    
    // recorrer los equipos
    data.equipos.forEach(equipo => {
      // crear fila para el nombre del equipo
      const filaEquipo = document.createElement('tr');
      const celdaEquipo = document.createElement('td');
      celdaEquipo.textContent = equipo.nombre;
      filaEquipo.appendChild(celdaEquipo);
      tbody.appendChild(filaEquipo);
      celdaEquipo.classList.add('equipo');
      
      // recorrer los integrantes
      equipo.integrantes.forEach(integrante => {
        // crear fila para el integrante
        const filaIntegrante = document.createElement('tr');
        tbody.appendChild(filaIntegrante);
        
        // crear celdas para el nombre, goles, asistencias y defensas
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
      });
    });
  })
  .catch(error => {
    console.error('Error al cargar los datos:', error);
  });
