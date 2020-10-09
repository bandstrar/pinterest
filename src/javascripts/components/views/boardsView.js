import boardData from '../../helpers/data/boardData';
import card from '../cards/boardCards';

const boardView = () => {
  $('#add-dinn').html('');
  $('#app').append('<h1>Boards</h1>');
  boardData.getUserBoards().then((response) => {
    if (response.length) {
      response.forEach((item) => {
        $('#app').append(card.boardMaker(item));
      });
    } else {
      $('#app').append('<h2>NO boards</h2>');
    }
  });
};

export default { boardView };
