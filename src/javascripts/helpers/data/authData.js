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
      $('#app').addClass('hide');
      $('#dinnterest').removeClass('hide');
      $('#nav').removeClass('hide');
      viewHelper.viewListener('board-link');
    } else {
      $('#nav').addClass('hide');
      $('#app').removeClass('hide');
      auth.loginButton();
      $('#dinnterest').addClass('hide');
    }
  });
};

export default { checkLoginStatus };
