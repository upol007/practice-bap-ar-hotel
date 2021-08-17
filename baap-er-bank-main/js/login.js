 const loginBtn = document.getElementById('login-submit');
 loginBtn.addEventListener('click', function(){
     // console.log('clicked')
     const userEmail = document.getElementById('user-email').value;
     const userPassword = document.getElementById('user-password').value;
     //console.log(userEmail, userPassword)
     if (userEmail == 'user@bap.com' && userPassword == '123') {
         window.location.href = 'banking.html'
     }
     else {
         //alert('Your password or email is not correct')
         const errorMessage = document.getElementById('error-message')
         errorMessage.style.display = "block";
     }

 })