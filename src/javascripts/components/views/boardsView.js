import boardData from '../../helpers/data/boardData';
import card from '../cards/boardCards';

const boardView = () => {
  boardData.getBoards().then((response) => {
    $('#dinnterest').append('<h1>Boards</h1>');
    if (response.length) {
      response.forEach((item) => {
        $('#dinnterest').append(card.boardMaker(item));
      });
    } else {
      $('#dinnterest').append('<h2>NO boards</h2>');
    }
  });
};

export default { boardView };
