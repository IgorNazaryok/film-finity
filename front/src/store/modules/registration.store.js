import axios from 'axios';

export default {
  actions: {
    AddUser ({ commit }, newUser) {
      return axios({
        method: 'post',
        url: 'https://localhost:5001/api/user',
        data: {
          userName: newUser.userName,
          email: newUser.email,
          userPassword: newUser.userPassword
        }
      });
    }
  },
  state: {
  },
  getters: {
  }
};