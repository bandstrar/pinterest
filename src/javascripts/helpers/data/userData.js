import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseURL = apiKeys.firebaseKeys.databaseURL;

const getUser = (userObj) => {
  axios
    .get(`${baseURL}/users.json?orderBy="uid"&equalTo="${userObj.uid}"`)
    .then((resp) => {
      if (Object.values(resp.data).length === 0) {
        axios.post(`${baseURL}/users.json`, {
          uid: userObj.uid,
          displayName: userObj.displayName,
          email: userObj.email,
          image: userObj.image,
          lastSignInTime: userObj.lastSignInTime
        });
      } else {
        console.warn('User Exists');
      }
    });
};

export default { getUser };
