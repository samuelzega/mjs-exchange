const baseUrl = 'http://localhost:3000'
$(document).ready(function() {
  $('#newsPage').show()
  $('#newsDetail').hide()
  $('#landingPage').show()
  $('#registerCard').hide()
  $('#navbar').show()

  $('#newsLanding').click(function(e) {
    let isLogin = checkLogin()
    e.preventDefault()
    if (!isLogin) {
      showRegisterCard()
    } else {
    }
  })

  $('#btnRegister').click(function(e) {
    e.preventDefault()
    let name = $('#regisName').val()
    let email = $('#regisEmail').val()
    let password = $('#regisPassword').val()
    register(name, email, password)
  })

  $('#btnLogin').click(function(e) {
    e.preventDefault()
    let email = $('#loginEmail').val()
    let password = $('#loginPassword').val()
    login(email, password)
  })
})

function showRegisterCard() {
  $('#registerCard').show()
  $('#registerForm').hide()
}

function hideRegisterCard() {
  $('#registerCard').hide()
}

function checkLogin() {
  if (localStorage.token) {
    return true
  }
  return false
}

function showLoginForm() {
  $('#loginForm').show()
  $('#registerForm').hide()
}

function showRegisterForm() {
  $('#loginForm').hide()
  $('#registerForm').show()
}

function login(email, password) {
  $.ajax(`${baseUrl}/users/login`, {
    type: 'post',
    data: {
      email,
      password
    },
    success: function(data) {
      console.log('ini sukses')
      console.log(data)
      localStorage.setItem('token', data.token)
      localStorage.setItem('userLogin', data.email)
    },
    error: function(err) {
      console.log('ini error')
      console.log(err)
    }
  })
}

function register(name, email, password) {
  $.ajax(`${baseUrl}/users/register`, {
    type: 'post',
    data: {
      name,
      email,
      password
    },
    success: function(data) {
      console.log('ini sukses')
      console.log(data)
    },
    error: function(err) {
      console.log('ini error')
      console.log(err)
    }
  })
}
