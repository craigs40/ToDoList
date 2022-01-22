const addButton = document.getElementById('add');
const itemsContainer = document.getElementById('itemsContainer');
const inputField = document.getElementById('inputField');

addButton.addEventListener('click', () => {
    var paragraph = document.createElement('p');
    paragraph.classList.add('p-style');
    paragraph.innerText = inputField.value;
    itemsContainer.appendChild(paragraph);
    inputField.value = '';
    paragraph.addEventListener('click', () => {
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', () => {
        itemsContainer.removeChild(paragraph);
    });
});