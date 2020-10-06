const dinnMaker = (dinnObject) => {
  const domString = `<div class="card" style="width: 18rem;">
    <a href="${dinnObject.link}"><img src="${dinnObject.image}" class="card-img-top" alt="${dinnObject.name}"></a>
    <div class="card-body">
      <h5 class="card-title">${dinnObject.name}</h5>
      <p class="card-description">${dinnObject.description}</p>
      <a href="#" class="btn btn-primary">Delete</a>
    </div>
  </div>`;

  return domString;
};

export default { dinnMaker };
