// index.html onlick events

// Project One
let projectOne = document.querySelector('.p-one');

function openProjectOne() {
  window.location.assign('https://dmac614.github.io/Responsive-Club-Website/');
}

projectOne.onclick = openProjectOne;

// Project Two

let projectTwo = document.querySelector('.p-two');

function openProjectTwo() {
  window.location.assign('https://dmac614.github.io/Company-Page/');
}

projectTwo.onclick = openProjectTwo;


// contact.html h2
let formHeading = document.querySelector('.form-heading');

function updateFormHeading() {
  formHeading.innerHTML = "Fill out the form below!";
}

formHeading.onclick = updateFormHeading;
