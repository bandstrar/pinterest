import form from '../forms/BoardForm';

const addBoardView = () => {
  $('#auth').html('');
  $('#add-dinn').html('');
  $('#app').html('<div id="board-form">Put board form here</div>');
  form.boardForm();
};

export default { addBoardView };
