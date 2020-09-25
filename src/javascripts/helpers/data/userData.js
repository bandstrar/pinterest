import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getUser = (userObj) => {
  axios
    .get(`${baseUrl}/users.json?orderBy="uid"&equalTo="${userObj.uid}"`)
    .then((resp) => {
      if (Object.values(resp.data).length === 0) {
        axios.post(`${baseUrl}/users.json`, {
          image: userObj.photoURL,
          uid: userObj.uid,
          displayName: userObj.displayName,
          email: userObj.email,
          lastSignInTime: userObj.metadata.lastSignInTime
        });
      } else {
        console.warn('User Exists');
      }
    }).catch((error) => console.warn(error));
};

export default { getUser };
