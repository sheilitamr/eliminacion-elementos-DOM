/* Ejercicio 1 */
const buttons = document.getElementById('buttons');

const deleteButton = e => {
  if (e.target.tagName !== 'BUTTON') return;
  e.target.remove();
};

buttons.addEventListener('click', deleteButton);

/* Ejercicio 2 */
const buttonsContainer = document.getElementById('buttons-container');

const deleteNextPreviusButton = e => {
  if (e.target.tagName !== 'BUTTON') return;
  const next = e.target.nextElementSibling;
  const previus = e.target.previousElementSibling;
  const self = e.target;

  if (!next && !previus) {
    self.remove();
  } else if (!next) {
    previus.remove();
  } else {
    next.remove();
  }
};

buttonsContainer.addEventListener('click', deleteNextPreviusButton);

/* Ejercicio 3 */
const addButton = document.getElementById('add-button');
const list = document.getElementById('list');

const addElements = () => {
  let cont = list.children.length + 1;
  const listItem = document.createElement('li');
  listItem.textContent = `Elemento ${cont} `;
  const buttonItem = document.createElement('button');
  buttonItem.textContent = 'X';
  buttonItem.addEventListener('click', deleteButtonElement);
  listItem.append(buttonItem);
  list.append(listItem);
  cont++;
};

const deleteButtonElement = e => {
  e.target.parentElement.remove();
};

addButton.addEventListener('click', addElements);
