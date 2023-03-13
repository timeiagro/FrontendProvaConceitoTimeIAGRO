const html = document.querySelector('html');
const darkModeImg = document.querySelector('button.set-mode img');
const pathImages = 'assets/images'
const IMG_DARK = '/dark_mode.svg';
const IMG_LIGHT = '/light_mode.svg';
const IMG_DONE = '/done.svg';
const IMG_EDIT = '/edit.svg';
const elemInEditing = document.querySelector('.page-editing');
const editPageImg = document.querySelector('.edit-page img');
const allElementEditable = document.querySelectorAll('[contenteditable]');
let elementEditable = false;


function setDarkMode(){
    html.classList.toggle('dark-mode');
    darkModeImg.src = checkImgPath(darkModeImg.src);
}

function checkImgPath(imageSrc){
    const splitImage = imageSrc.split('images');
    return `${pathImages}${splitImage[1] === IMG_DARK ? IMG_LIGHT : IMG_DARK}`;
}

function editPage(){
    elementEditable = !elementEditable;
    allElementEditable.forEach(element => element.contentEditable = elementEditable);
    elemInEditing.style.display = elementEditable ? 'block' : 'none';
    editPageImg.src = `${pathImages}${elementEditable ? IMG_DONE : IMG_EDIT}`;
}