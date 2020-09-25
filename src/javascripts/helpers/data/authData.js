import firebase from 'firebase/app';
import 'firebase/auth';
import userData from './userData';
import myNavbar from '../../components/navbar/myNavbar';

const checkLoginStatus = () => {
  myNavbar.myNavbar();
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      userData.getUser(user);
      $('#app').addClass('hide');
      $('#dinnterest').removeClass('hide');
      $('#nav').removeClass('hide');
      $('#dinnterest').html('<h1>Boards</h1>');
    } else {
      $('#nav').addClass('hide');
      $('#app').removeClass('hide');
      $('#dinnterest').addClass('hide');
    }
  });
};

export default { checkLoginStatus };
