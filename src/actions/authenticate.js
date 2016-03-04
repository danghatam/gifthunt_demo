const login_URL = '/proxy/user/login';

function login(token){
  let init = {
    method: 'post',
    credentials: 'same-origin'
  }
  fetch(login_URL + `/${token}`, init)
  .then( response => {
  })
  .catch( err => {
  })
}

export { login };
