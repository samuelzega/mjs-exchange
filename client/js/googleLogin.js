const url = 'http://localhost:3000'

function onSignIn(googleUser) {
    let id_token = googleUser.getAuthResponse().id_token;
    $.ajax({
        method: 'POST',
        url: `${url}/users/google/login`,
        data: {
            token: id_token
        }
    })
    .done(response=>{
        localStorage.setItem('token',response)
        console.log(localStorage.token)
    })
    .fail(err=>{
        console.log(err);
    })
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  }
