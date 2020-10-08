import addBoardView from '../components/views/addBoardView';
import addDinnView from '../components/views/addDinnView';
import boardView from '../components/views/boardsView';
import dinnsView from '../components/views/dinnsView';
import updateDinnView from '../components/views/updateDinnView';

const viewHelper = (id, arg) => {
  $('#app').html('');
  switch (id) {
    case 'board-link':
      return boardView.boardView();
    case 'add-board':
      return addBoardView.addBoardView();
    case 'add-dinn':
      return addDinnView.addDinnView();
    case 'dinns-link':
      return dinnsView.dinnsView(arg);
    case 'update-dinn-link':
      return updateDinnView.updateDinnView(arg);
    default:
      return console.warn('nothing clicked');
  }
};

const viewListener = (view) => {
  viewHelper(view);
  $('body').on('click', 'li.nav-item', (e) => {
    viewHelper(e.currentTarget.id);
  });
  $('body').on('click', '.update-dinn', (e) => {
    const dinnFirebaseKey = e.currentTarget.id;
    viewHelper('update-dinn-link', dinnFirebaseKey);
  });
  $('body').on('click', '.card.board .see-dinns', (e) => {
    const boardId = e.currentTarget.id;
    viewHelper('dinns-link', boardId);
  });
};

export default { viewListener };
