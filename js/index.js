"use strict";
const cardsContainer = document.getElementById('cards-container');

function createElement(tag, { classNames = [], attributes={} }, ...children) {
  const element = document.createElement(tag);
  if (classNames.lenght) {
    element.classList.add(...classNames);
  }
  for (const [nameAttribute, valueAttribute] of Object.entries(attributes)) {
    element.setAttribute(nameAttribute, valueAttribute);
  }
  element.append(...children);
}

fetch("./js/data.json")
  .then((response) => response.json())
  .then((actors) => {
    const HTMLCollectionActors = actors
      // .filter((actor)=>actor.firstName||actor.profilePicture)
      .map((actor) => createActorsCard(actor));
    cardsContainer.append(...HTMLCollectionActors);
  });
  
  
function createActorsCard(actor) {
  const { id, firstName, lastName, profilePicture,contacts} = actor;

  const firstNameCard = createElement('h2', {classNames:['first-name']}, document.createTextNode(firstName));

  const lastNameCard = createElement('h2',{classNames:['last-name']},document.createTextNode(lastName));

  const fullNameCard = createElement('div',{classNames:['card-full-name']}, firstNameCard, lastNameCard);


  const cardInitials = createElement('div',{classNames:['card-initials']},document.createTextNode(firstName[0]+lastName[0]));

  const cardContainer = createElement('article',{classNames:['card-container']},fullNameCard, cardInitials)
  

}


