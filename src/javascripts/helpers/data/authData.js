import firebase from 'firebase/app';
import 'firebase/auth';
import userData from './userData';
import myNavbar from '../../components/navbar/myNavbar';
import viewHelper from '../viewHelper';
import auth from '../../components/auth/auth';

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      $('#auth').html('');
      const currentUser = userData.setCurrentUser(user);
      myNavbar.myNavbar(currentUser);
      viewHelper.viewListener('board-link');
    } else {
      auth.loginButton();
      $('#nav').html('');
    }
  });
};

export default { checkLoginStatus };
