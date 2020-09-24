import firebase from 'firebase/app';
import 'firebase/auth';

const logoutEvent = () => {
  $('#navbar-logout-button').on('click', (e) => {
    e.preventDefault();

    firebase.auth().signOut();
  });
};

const myNavbar = () => {
  $('#nav').html(
    `<nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Dinnterest</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" 
        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
        <li class="nav-item mx-3"  id="add-board">
          <a class="nav-link" href="#">Add Board</a>
        </li>
      </ul>
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <button class="nav-link btn btn-danger p-2" id="navbar-logout-button">Logout</button>
            </li>
          </ul>
        </div>
      </nav>`
  );

  logoutEvent();
};

export default { myNavbar };
