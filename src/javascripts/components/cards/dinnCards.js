import dinnsData from '../../helpers/data/dinnsData';

const dinnMaker = (dinnObject) => {
  const domString = `<div class="card dinn" style="width: 18rem;" id="${dinnObject.firebaseKey}">
    <a href="${dinnObject.link}"><img src="${dinnObject.image}" class="card-img-top" alt="${dinnObject.name}"></a>
    <div class="card-body">
      <h5 class="card-title">${dinnObject.name}</h5>
      <p class="card-description">${dinnObject.description}</p>
      <a href="#" id="${dinnObject.firebaseKey}" class="btn btn-primary delete-dinn">Delete</a>
    </div>
  </div>`;

  $('body').on('click', '.delete-dinn', (e) => {
    e.stopImmediatePropagation();
    const firebaseKey = e.currentTarget.id;
    $(`.card#${firebaseKey}`).remove();
    dinnsData.deleteDinn(firebaseKey);
  });

  return domString;
};

export default { dinnMaker };
