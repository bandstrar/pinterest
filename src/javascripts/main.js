import firebase from 'firebase/app';
import apiKeys from './helpers/apiKeys.json';
import navbar from './components/navbar/myNavbar';
import login from './components/auth/auth';
import authData from './helpers/data/authData';

import '../styles/main.scss';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  navbar.myNavbar();
  login.loginButton();
  authData.checkLoginStatus();
};

init();
