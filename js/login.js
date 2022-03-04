document.getElementById('login-button').addEventListener('click', function(){
    const userEmail = document.getElementById('user-email');
    const userPassword = document.getElementById('user-password');
    
    if( userEmail.value == 'abc@mail.com' && userPassword.value == '1234'){
        window.location.href = 'bank.html';
    }
    else{
        alert('Login Failed');
    }

});