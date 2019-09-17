let id = 1;

const readFormData = () => {
  let formData = {
      name: document.getElementById('name').value,
      stacks: document.getElementById('stacks').value,
      value: document.getElementById('value').value,
      days: document.getElementById('days').value,
      developers: document.getElementById('devs').value
    };

  return formData;
}

const insertNewRecord = (data) => {
  const { name, stacks, value, days, developers: devs } = data;

  const tbody = document.querySelector('tbody');

  const newRow = `
  <tr>
    <th scope="row">${id}</th>
    <td>${name}</td>
    <td>${stacks}</td>
    <td>${value}</td>
    <td>${days}</td>
    <td>${devs}</td>
    <td><button class="edit">Editar</button></td>
    <td><button class="delete">Deletar</button></td>
  </tr>
`

  tbody.insertAdjacentHTML('beforeend', newRow);
}

const onFormSubmit = (event) => {
  event.preventDefault();

  let formData = readFormData();

  insertNewRecord(formData);

  id++;
}