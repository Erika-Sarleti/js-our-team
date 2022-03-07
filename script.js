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
    createCard(arrMembers[i]);
    
}

const addBtn = document.getElementById('addMemberButton');

addBtn.addEventListener('click', function(){
    
    let inputName = document.getElementById('name');
    let inputImg = document.getElementById('image');
    let inputRole = document.getElementById('role');
    arrMembers.push(
        {
        foto: inputImg.value,
        nome: inputName.value,
        ruolo: inputRole.value,
        }
    );
    createCard(arrMembers[arrMembers.length - 1]);
    console.log(arrMembers);

    inputImg.value = "";
    inputName.value = "";
    inputRole.value = "";

})

function createCard(member){
    let card = document.createElement('div');
    card.classList.add('team-card');
    containerCard.append(card);

    let img = document.createElement('div');
    img.classList.add('card-image');
    card.append(img);
    img.innerHTML = `<img src= ${member.foto}></img>`;

    let text = document.createElement('div');
    text.classList.add('card-text');
    card.append(text);
    text.innerHTML =` <h3>${member.nome}</h3> <p>${member.ruolo} </p>`;

}