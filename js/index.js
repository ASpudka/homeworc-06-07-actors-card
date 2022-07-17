"use strict";

function createElement(tag, { classNames = [], attributes: {} }, ...children) {
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
  const { id, firstName } = actor;

  const cardName = createElement(
    "h2",
    { classNames: ["card-name"] },
    document.createTextNode(firstName || "Anonim")
  );
}
