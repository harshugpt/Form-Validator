const form = document.getElementById('details');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

function wrong(input, message){
    const formcontent = input.parentElement;
    formcontent.className = 'form-content wrong';
    const small = formcontent.querySelector('small');
    small.innerText = message;
}
function correct(input){
    const formcontent = input.parentElement;
    formcontent.className = 'form-content correct';
}
function validemail(email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
//function checklength(input, min, max){
  //  if(input.value.length < min){
    //    wrong(input, '')
  //  }
//}
function checkpasswordmatch(input1, input2){
    if(input1.value != input2.value){
        wrong(input2, 'Password do not matched');
    }
}

form.addEventListener('submit', function(e){
    e.preventDefault();
    if(username.value == ''){
        wrong(username, 'Username is required');
    } else if(username.value.length < 4){
        wrong(username, 'Username must be atleast 4 characters');
    } else if(username.value.length > 15){
        wrong(username, 'Username must be less than 15 characters');
    } else{
        correct(username);
    }
    if(email.value == ''){
        wrong(email, 'Email is required');
    } else if(!validemail(email.value)){
        wrong(email, 'Email is not Valid');    
    } else{
        correct(email);
    }
    if(password.value == ''){
        wrong(password, 'Password is required');
    } else if(password.value.length < 8){
        wrong(password, 'Password must be atleast 8 characters');
    } else if(password.value.length > 15){
        wrong(password, 'Password must be max of 15 characters');
    } else{
        correct(password);
    }
    if(password2.value == ''){
        wrong(password2, 'Re-enter the password');
    } else{
        correct(password2);
    }
    checkpasswordmatch(password, password2);
})