let id = 1;
let selectedRow = null;

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
    <td><button class="edit" onCLick="onEdit(this)">Editar</button></td>
    <td><button class="delete" onCLick="onDelete(this)">Deletar</button></td>
  </tr>
`

  tbody.insertAdjacentHTML('beforeend', newRow);
}

const resetForm = () => {
  document.getElementById('name').value = '';
  document.getElementById('stacks').value = '';
  document.getElementById('value').value = '';
  document.getElementById('days').value = '';
  document.getElementById('devs').value = '';
  selectedRow = null;
};

const onEdit = (elem) => {
  selectedRow = elem.parentElement.parentElement;

  document.getElementById('name').value = selectedRow.cells[1].innerHTML;
  document.getElementById('stacks').value = selectedRow.cells[2].innerHTML;
  document.getElementById('value').value = selectedRow.cells[3].innerHTML;
  document.getElementById('days').value = selectedRow.cells[4].innerHTML;
  document.getElementById('devs').value = selectedRow.cells[5].innerHTML;
}

const updateProject = (formData) => {
  const {name, stacks, value, days, developers: devs} = formData;

  selectedRow.cells[1].innerHTML = name;
  selectedRow.cells[2].innerHTML = stacks;
  selectedRow.cells[3].innerHTML = value;
  selectedRow.cells[4].innerHTML = days;
  selectedRow.cells[5].innerHTML = devs;
} 

const onDelete = (btn) => {
  let td = btn.parentElement.parentElement;
  td.remove();
};

const onFormSubmit = (event) => {
  event.preventDefault();

  let formData = readFormData();

  if(selectedRow === null) {
    insertNewRecord(formData);
  } else {
    updateProject(formData);
  }

  resetForm();

  id++;
}
