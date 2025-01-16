// SELECT ITEMS
const alert = document.querySelector('.alert');
const form = document.querySelector('.shopping-form');
const shopping = document.querySelector('#shopping');
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.shopping-container');
const list = document.querySelector('.shopping-list');
const clearBtn = document.querySelector('.clear-btn');

// edit options

let editElement;
let editFlag = false;
let editID = "";


// EVENT LISTENERS

// submit form
form.addEventListener('submit',addItem);

// FUNCTIONS
function addItem(e){
    e.preventDefault();
    const value = shopping.value
    const id = new Date().getTime().toString()
if(value !== "" && editFlag === false ){
    console.log('add item to the list')

}else if(value !== "" && editFlag === true){
    console.log('editing');

}else(
    console.log('empty value');
)

}



// LOCAL STORAGE

// STEUP ITEMS

