import dinnsData from '../../helpers/data/dinnsData';
import card from '../cards/dinnCards';

const dinnsView = () => {
  $('#add-dinn').html('<a class="nav-link" href="#">Add a Dinn</a>');
  dinnsData.getDinns().then((response) => {
    if (response.length) {
      response.forEach((item) => {
        $('#app').append(card.dinnMaker(item));
      });
    } else {
      $('#app').append('<h2>NO DINNS</h2>');
    }
  });
};

export default { dinnsView };
