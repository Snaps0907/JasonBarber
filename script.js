

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]


toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
  toggleButton.classList.toggle('active');
})

function hide(){
  navbarLinks.className='navbar-links';
  toggleButton.className='toggle-button';
}

function validation(){
  var form= document.getElementById("form");
  var email= document.getElementById("email").value;
  var text=document.getElementById("text");
  var pattern = /^[^ ]+@[^ ]+\.[a-z]{1,2}$/;
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
