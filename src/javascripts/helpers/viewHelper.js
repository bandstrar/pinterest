import boardView from '../components/views/boardsView';
import dinnsView from '../components/views/dinnsView';

const viewHelper = (id) => {
  $('#app').html('');
  switch (id) {
    case 'board-link':
      return boardView.boardView();
    case 'dinns-link':
      return dinnsView.dinnsView();
    default:
      return console.warn('nothing clicked');
  }
};

const viewListener = (view) => {
  viewHelper(view);
  $('body').on('click', 'li.nav-item', (e) => {
    viewHelper(e.currentTarget.id);
  });
  $('body').on('click', '#dinns-link', (e) => {
    viewHelper(e.currentTarget.id);
  });
};

export default { viewListener };
