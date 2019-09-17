# Desafio Acens

Desenvolver um sistema web usando HTML, CSS e JS.

## Getting Started

Projeto com o intuito de capacitar os novos membros da [Acens](http://acensjr.com/)

## Create

Criando um novo projeto com JS

**Lendo valores do input**
```javascript
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
```

**Inserindo valores na tabela**
```javascript
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
```

**Função para resetar formulário após submit**
```javascript
  const resetForm = () => {
    document.getElementById('name').value = '';
    document.getElementById('stacks').value = '';
    document.getElementById('value').value = '';
    document.getElementById('days').value = '';
    document.getElementById('devs').value = '';
    selectedRow = null;
  };
```

**Função de submit**
```javascript
  const onFormSubmit = (event) => {
    event.preventDefault();

    let formData = readFormData();

    insertNewRecord(formData);

    resetForm();
  }
```

## Delete
**Função delete**
```javascript
  const onDelete = (btn) => {
    let td = btn.parentElement.parentElement;
    td.remove();
  };
```

**Função para colocar valor da Row no Form**
```javascript
  const onEdit = (elem) => {
    selectedRow = elem.parentElement.parentElement;

    document.getElementById('name').value = selectedRow.cells[1].innerHTML;
    document.getElementById('stacks').value = selectedRow.cells[2].innerHTML;
    document.getElementById('value').value = selectedRow.cells[3].innerHTML;
    document.getElementById('days').value = selectedRow.cells[4].innerHTML;
    document.getElementById('devs').value = selectedRow.cells[5].innerHTML;
  }
```

## Update
**Função update**
```javascript
  const updateProject = (formData) => {
    const {name, stacks, value, days, developers: devs} = formData;

    selectedRow.cells[1].innerHTML = name;
    selectedRow.cells[2].innerHTML = stacks;
    selectedRow.cells[3].innerHTML = value;
    selectedRow.cells[4].innerHTML = days;
    selectedRow.cells[5].innerHTML = devs;
  } 
```

**Nova função submit**
```javascript
  const onFormSubmit = (event) => {
    event.preventDefault();

    let formData = readFormData();

    if(selectedRow === null) {
      insertNewRecord(formData);
    } else {
      updateProject(formData);
    }

    resetForm();
  }
```

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Authors

* [**Eduardo Bernardino**](https://github.com/dudubernardino)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details