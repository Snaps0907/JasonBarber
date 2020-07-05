

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
// console.log(toggleButton,navbarLinks)

toggleButton.addEventListener('click', ()=>  {
  navbarLinks.classList.toggle('active');
  toggleButton.classList.toggle('active');
})


function hide(){
  navbarLinks.className='navbar-links';
  toggleButton.className='toggle-button';
}


function validation(){
  let email= document.getElementById("email").value;
  let text=document.getElementById("text");
  var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (email.match(pattern)){

    text.innerHTML="Poprawny adres email";
    text.style.color="#0d730d"
  }else{

    text.innerHTML="Niepoprawny adres email";
    text.style.color="#e61919"
  }
  if(email==""){
    text.innerHTML=" "
  }
}


function verified(){
  let textarea=document.getElementById("textarea").value
  let email= document.getElementById("email").value
  let text= document.getElementById("text").value

  if(textarea=="" || email=="" || text==""){
    alert("wypełnij wszystkie pola formularza")
  }else{
    alert("wiadomość została wysłana")
  }


}


