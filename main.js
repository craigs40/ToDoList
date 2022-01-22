let addButton = document.getElementById('add');
let itemsContainer = document.getElementById('itemsContainer');
let inputField = document.getElementById('inputField');

addButton.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('p-style');
    paragraph.innerText = inputField.value;
    itemsContainer.appendChild(paragraph);
    inputField.value = "";
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function(){
        itemsContainer.removeChild(paragraph);
    })
})