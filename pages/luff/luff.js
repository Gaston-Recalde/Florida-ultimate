fetch('dataEquipos.json')
  .then(response => response.json())
  .then(data => {
    const tabla = document.querySelector('#tabla-equipos tbody');

    // Iterar sobre los equipos
    data.equipos.forEach(equipo => {
      const equipoRow = document.createElement('tr');

      // Nombre del equipo
      const equipoCell = document.createElement('td');
      equipoCell.textContent = equipo.nombre;
      equipoRow.appendChild(equipoCell);

      // Iterar sobre los integrantes
      equipo.integrantes.forEach(integrante => {
        const integranteRow = document.createElement('tr');

        // Nombre del integrante
        const integranteCell = document.createElement('td');
        integranteCell.textContent = integrante.nombre;
        integranteRow.appendChild(integranteCell);

        // Goles
        const golesCell = document.createElement('td');
        golesCell.textContent = integrante.goles;
        integranteRow.appendChild(golesCell);

        // Asistencias
        const asistenciasCell = document.createElement('td');
        asistenciasCell.textContent = integrante.asistencias;
        integranteRow.appendChild(asistenciasCell);

        // Defensas
        const defensasCell = document.createElement('td');
        defensasCell.textContent = integrante.defensas;
        integranteRow.appendChild(defensasCell);

        equipoRow.appendChild(integranteRow);
      });

      tabla.appendChild(equipoRow);
    });
  });