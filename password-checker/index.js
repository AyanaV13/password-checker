/* 
1. Check if atleast 8 characters
2. Check if atleast one lowercase
3. Check if atleast one uppercase
4. Check if atleast one number
5. Check if atleast one special character
6. Check if strong password
*/ 

function passwordChecker(pwd) {
  pwd = document.getElementById('inputPassword3').value
  // Check if password exists
  if (!pwd) {
    document.getElementById('alert-message').style.display = 'block'
    return
  }
  
  let score = 0

  // Atleast 8 char
  if (pwd.length >= 8) {
    document.getElementById('length-checker').innerText = '✅'
    document.getElementById('length-checker-container').classList.add('list-group-item-success')
    score++
  } else {
    document.getElementById('length-checker').innerText = '❌'
    document.getElementById('length-checker-container').classList.add('list-group-item-danger')
  }

  
    
  let hasLowercase = false
  let hasUppercase = false
  let hasNumber = false
  let hasSpecialChar = false

  for (let i = 0; i < pwd.length; i++) {
    let char = pwd[i]

    if (char >= 'a' && char <= 'z') {
      hasLowercase = true
    }

    if (char >= 'A' && char <= 'Z') {
      hasUppercase = true
    }

    if (char >= '0' && char <= '9') {
      hasNumber = true
    }

    if (char >= '!' && char <= '.') {
      hasSpecialChar = true
    }


  }

  if(hasLowercase) {
    document.getElementById('lowercase-checker').innerText = '✅'
    document.getElementById('lowercase-checker-container').classList.add('list-group-item-success')
    score++
  } else {
    document.getElementById('lowercase-checker').innerText = '❌'
    document.getElementById('lowercase-checker-container').classList.add('list-group-item-danger')
  }

  if(hasUppercase) {
    document.getElementById('uppercase-checker').innerText = '✅'
    document.getElementById('uppercase-checker-container').classList.add('list-group-item-success')
    score++
  } else {
    document.getElementById('uppercase-checker').innerText = '❌'
    document.getElementById('uppercase-checker-container').classList.add('list-group-item-danger')
  }

  if(hasNumber) {
    document.getElementById('number-checker').innerText = '✅'
    document.getElementById('number-checker-container').classList.add('list-group-item-success')
    score++
  } else {
    document.getElementById('number-checker').innerText = '❌'
    document.getElementById('number-checker-container').classList.add('list-group-item-danger')
  }

  if(hasSpecialChar) {
    document.getElementById('special-checker').innerText = '✅'
    document.getElementById('special-checker-container').classList.add('list-group-item-success')
    score++
  } else {
    document.getElementById('special-checker').innerText = '❌'
    document.getElementById('special-checker-container').classList.add('list-group-item-danger')
  }

  if (score >= 5) {
    document.getElementById('alert-strong').style.display = 'block'
  } else if (score >= 3) {
    document.getElementById('alert-moderate').style.display = 'block'
  } else {
    document.getElementById('alert-weak').style.display = 'block'
  }
  
}


function userChecker(user) {
  user = document.getElementById('user3').value

  if (!user) {
    document.getElementById('user-message').style.display = 'block'
    return
  }


  if (user.length >= 8) {
    document.getElementById('user-length-checker').innerText = '✅'
    document.getElementById('user-length-checker-container').classList.add('list-group-item-success')
  } else {
    document.getElementById('user-length-checker').innerText = '❌'
    document.getElementById('user-length-checker-container').classList.add('list-group-item-danger')
  }

  let userHasLowercase = false
  let userHasUppercase = false

  for (let i = 0; i < user.length; i++) {
    let char = user[i]

    if (char >= 'a' && char <= 'z') {
      userHasLowercase = true
    }

    if (char >= 'A' && char <= 'Z') {
      userHasUppercase = true
    }
  }

  if(userHasLowercase) {
    document.getElementById('user-lowercase-checker').innerText = '✅'
    document.getElementById('user-lowercase-checker-container').classList.add('list-group-item-success')
  } else {
    document.getElementById('user-lowercase-checker').innerText = '❌'
    document.getElementById('user-lowercase-checker-container').classList.add('list-group-item-danger')
  }

  if(userHasUppercase) {
    document.getElementById('user-uppercase-checker').innerText = '✅'
    document.getElementById('user-uppercase-checker-container').classList.add('list-group-item-success')
  } else {
    document.getElementById('user-uppercase-checker').innerText = '❌'
    document.getElementById('user-uppercase-checker-container').classList.add('list-group-item-danger')
  }
}

function showUserChecks() {
  const input = document.getElementById('user3');
  const userChecker = document.getElementById('user-checker');

  // When the user types something, show the checker
  if (input.value.trim().length > 0) {
    userChecker.style.display = 'block';
  } else {
    // Hide again if they delete everything
    userChecker.style.display = 'none';
  }
}

function showPasswordChecks() {
  const input = document.getElementById('inputPassword3');
  const userChecker = document.getElementById('password-checker');

  // When the user types something, show the checker
  if (input.value.trim().length > 0) {
    userChecker.style.display = 'block';
  } else {
    // Hide again if they delete everything
    userChecker.style.display = 'none';
  }
}

// let inputPassword = prompt('enter email')
// emailChecker(inputPassword)