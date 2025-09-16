const container = document.getElementById('table-container');

const table = document.createElement('table');

for (let i = 1; i <= 10; i++) {

  const row = document.createElement('tr');

  for (let j = 1; j <= 10; j++) {

    const cell = document.createElement('td');

    const result = i * j;

    cell.textContent = result;

    row.appendChild(cell);
  }

  table.appendChild(row);
}

container.appendChild(table);