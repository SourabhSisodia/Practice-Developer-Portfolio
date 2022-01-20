const toggleButton = document.getElementsByClassName("toggle-button")[0];
const nav = document.getElementsByClassName("nav-links")[0];
const contactButton = document.getElementsByClassName("contact-us")[0]; 
console.log(contactButton);
toggleButton.addEventListener('click', () => {
    nav.classList.toggle('active');
    contactButton.classList.toggle('button-active');
  })