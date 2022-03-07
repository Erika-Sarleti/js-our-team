
/*
Viene fornito un layout di base. Come prima cosa nel file js definitevi un array di oggetti che rappresentano i membro del team (prendete i dati dallo screen fornito). Ogni membro deve avere le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
Prendendo come riferimento la card di esempio presente nell'html, stampiamo dinamicamente una card per ogni membro del team.


- Stampiamo le card
    - creiamo una variabile contenitore per appendere le carte (Const containerCard = document.querySelector('.team-container'))
    - Per ogni membro (ciclo for) creiamo i contenitori per le informazioni
        - creiamo il contenitore 'team-card';
            - let card = createElement(div)
            - card.classList.add('team-card')
            - containerCard.append('card')
        - creiamo il contenitore 'card-image'
            - let img = createElement(div)
            - img.classList.add('card-img')
            - img.innerHTML = `<img src= ${arrMembers[i].foto}></img>`;
            - card.append('img')

        - creiamo il contenitore 'card-text'
            let text = createElement(div)
            text.classList.add('card-text')
            text.innerHTML =` <h3>${arrMembers[i].nome}</h3> <p>${{arrMembers[i].ruolo}</p>`;
            card.append('text')

    
       
    }

*/

const arrMembers = [
    {
        foto: 'img/wayne-barnett-founder-ceo.jpg',
        nome: 'Wayne Barnet',
        ruolo: 'Founder & CEO',
    },

    {
        foto:'img/angela-caroll-chief-editor.jpg',
        nome: 'Angela Caroll',
        ruolo:'Chief Editor',
    },

    {
        foto:'img/walter-gordon-office-manager.jpg ',
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
    },
    {
        foto:'img/angela-lopez-social-media-manager.jpg',
        nome:'Angela Lopez',
        ruolo: 'Social Media Manager',
    },
    {
        foto: 'img/scott-estrada-developer.jpg',
        nome: 'Scott Estrada',
        ruolo: 'Developer',
    },
    {
        foto: 'img/barbara-ramos-graphic-designer.jpg',
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
    }

]

 const containerCard = document.querySelector('.team-container');

 for (i= 0; i < arrMembers.length; i++){
    createCard();
    // let card = document.createElement('div');
    // card.classList.add('team-card');
    // containerCard.append(card);

    // let img = document.createElement('div');
    // img.classList.add('card-image');
    // card.append(img);
    // img.innerHTML = `<img src= ${arrMembers[i].foto}></img>`;

    // let text = document.createElement('div');
    // text.classList.add('card-text');
    // card.append(text);
    // text.innerHTML =` <h3>${arrMembers[i].nome}</h3> <p>${arrMembers[i].ruolo} </p>`;

    
 }

// ********* BONUS *********
/* 
  Utilizziamo gli input presenti nella pagina per permettere all'utente di aggiungere nuovi membri del team: cliccando sul pulsante "add" viene creato un nuovo oggetto, il quale viene inserito nell'array iniziale, e viene stampata una nuova card con tutte le informazioni inserite dall'utente.
*/


const addBtn = document.getElementById('addMemberButton');
let inputName = document.getElementById('name');
let inputImg = document.getElementById('image');
let inputRole = document.getElementById('role');

addBtn.addEventListener('click', function(){
    arrMembers.push(
        {
        foto: inputImg.value,
        nome: inputName.value,
        ruolo: inputRole.value,
        }
    );
    createCard()
    console.log(arrMembers);

    inputImg.value = "";
    inputName.value = "";
    inputRole.value = "";

})

function createCard(){
    let card = document.createElement('div');
    card.classList.add('team-card');
    containerCard.append(card);

    let img = document.createElement('div');
    img.classList.add('card-image');
    card.append(img);
    img.innerHTML = `<img src= ${arrMembers[i].foto}></img>`;

    let text = document.createElement('div');
    text.classList.add('card-text');
    card.append(text);
    text.innerHTML =` <h3>${arrMembers[i].nome}</h3> <p>${arrMembers[i].ruolo} </p>`;


}