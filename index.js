const button = document.querySelector('button');
const body = document.querySelector('body');

button.addEventListener('click', ()=>{
    body.classList.toggle('active');
    if(body.classList.contains('active')){
        button.textContent = 'Passer au mode clair';
    }else{
        button.textContent = 'Passer au mode nuit';
    }
});

const input1 = document.querySelector('.nom');
const titre = document.querySelector('h1');

input1.addEventListener('keydown', (e) =>{
    if(e.target.value.length > 0){
     titre.textContent =  e.target.value;
    }else{
        alert('Veillez saisir un text');
    }
});

const paragraphe = document.createElement('p');
paragraphe.textContent = 'Voici un paragraphe creer en DOM';
paragraphe.style.color = '#333';
paragraphe.style.background = '#fff';
paragraphe.style.padding = '20px';
paragraphe.style.margin = '10px';

document.querySelector('.carte').appendChild(paragraphe);

const mousemove = document.querySelector('.mousemove');

window.addEventListener('mousemove', (e) =>{
    mousemove.style.left = e.pageX + 'px';
    mousemove.style.top = e.pageY + 'px';
});