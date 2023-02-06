// index html onlick events


// contact.html h2
let formHeading = document.querySelector('.form-heading');

function updateFormHeading() {
  formHeading.innerHTML = "Fill out the form below!";
}

formHeading.onclick = updateFormHeading;



// contact.html submit buttom
let formSubmitButton = document.querySelector('.js-submit');

function updateSubmitText() {
  formSubmitButton.innerHTML = "Form Sent!";
}

formSubmitButton.onclick = updateSubmitText;

