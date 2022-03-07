
/*
Viene fornito un layout di base. Come prima cosa nel file js definitevi un array di oggetti che rappresentano i membro del team (prendete i dati dallo screen fornito). Ogni membro deve avere le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
Prendendo come riferimento la card di esempio presente nell'html, stampiamo dinamicamente una card per ogni membro del team.

- Definire un array con tutti i membri del team
    - Defisci un membro del team con un oggetto
        -Definisci ogni caratteristica dell'oggetto con una variabile

- Stampiamo le card
    let card;
    let cardContainer = document.querySelector('.team-container');
    let MembersAdd = 0;
    - while (MembersAdd < array){
       card = document.createElement(.div);
       card.classList.add('team-card');
       
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