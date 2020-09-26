import boardView from '../components/views/boardsView';

const viewHelper = (id) => {
  $('#dinnterest').html('');
  switch (id) {
    case 'board-link':
      return boardView.boardView();
    default:
      return console.warn('nothing clickded');
  }
};

const viewListener = (view) => {
  viewHelper(view);

  $('body').on('click', 'li.nav-item', (e) => {
    viewHelper(e.currentTarget.id);
  });
};

export default { viewListener };
