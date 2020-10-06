const boardMaker = (boardObject) => {
  const domString = `<div class="card" style="width: 18rem;">
  <img src="${boardObject.image}" id="dinns-link" class="card-img-top" alt="${boardObject.name}">
  <div class="card-body">
    <h5 class="card-title">${boardObject.name}</h5>
    <a href="#" class="btn btn-primary">Delete</a>
  </div>
</div>`;

  return domString;
};

export default { boardMaker };
