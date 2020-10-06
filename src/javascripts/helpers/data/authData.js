import firebase from 'firebase/app';
import 'firebase/auth';
import userData from './userData';
import myNavbar from '../../components/navbar/myNavbar';
import viewHelper from '../viewHelper';
import auth from '../../components/auth/auth';

const checkLoginStatus = () => {
  myNavbar.myNavbar();
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      userData.getUser(user);
      $('#auth').addClass('hide');
      $('#app').removeClass('hide');
      $('#nav').removeClass('hide');
      viewHelper.viewListener('board-link');
    } else {
      $('#nav').addClass('hide');
      $('#auth').removeClass('hide');
      auth.loginButton();
      $('#app').addClass('hide');
    }
  });
};

export default { checkLoginStatus };
