const signup_form = document.querySelector('#signup_form');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const uname = document.querySelector('#uname');
const submit = document.querySelector('#submit');


submit.addEventListener('click', function (){

    

    if( name.value == '' || email.value == '' || uname.value == '' ){

        alert('All fields required');

    }else{
        alert('Done');
    }



});