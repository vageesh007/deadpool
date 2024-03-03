
let signupbtn = document.querySelector('.signupbtn');
let signinbtn = document.querySelector('.signinbtn');
let namefield = document.querySelector('.namefield');
let title = document.querySelector('.title');
let underline = document.querySelector('.underline');
let text = document.querySelector('.text');


signinbtn.addEventListener('click',()=>{
    namefield.style.maxHeight = "0";
    title.innerHTML = 'sign in';
    text.innerHTML = 'lost password';
    signupbtn.classList.add('disable');
    signinbtn.classList.remove('disable');
    underline.style.transform = 'translateX(35px)';
});


signupbtn.addEventListener('click',()=>{
    namefield.style.maxHeight = "60px";
    title.innerHTML = 'sign up';
    text.innerHTML= 'use your brain again ';
    signupbtn.classList.remove('disable');
    signinbtn.classList.add('disable');
    underline.style.transform = 'translateX(0px)';
});

