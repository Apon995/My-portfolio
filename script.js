let typed = new Typed("#element", {
  strings: ["Web Designer !", "Frontend developer !", "Web Developer !"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

document.querySelector("#Education").style.display = "none";
document.querySelector("#Expricence").style.display = "none";

document.querySelector(".Expricence").addEventListener("click", function () {
  document.querySelector(".skill").classList.remove("active-link");
  document.querySelector(".Education").classList.remove("active-link");
  document.querySelector("#Expriencebtn").classList.add("active-link");

  document.querySelector("#skill ").style.display = "none";
  document.querySelector("#Education ").style.display = "none";
  document.querySelector("#Expricence").style.display = "inline";
});
document.querySelector(".Education").addEventListener("click", function () {
  document.querySelector(".Expricence").classList.remove("active-link");
  document.querySelector(".skill").classList.remove("active-link");
  document.querySelector("#Educationbtn").classList.add("active-link");

  document.querySelector("#skill ").style.display = "none";
  document.querySelector("#Education ").style.display = "inline";
  document.querySelector("#Expricence").style.display = "none";
});
document.querySelector(".skill").addEventListener("click", function () {
  document.querySelector(".Education").classList.remove("active-link");
  document.querySelector(".Expricence").classList.remove("active-link");
  document.querySelector("#Skillbtn").classList.add("active-link");

  document.querySelector("#skill ").style.display = "block";
  document.querySelector("#Education ").style.display = "none";
  document.querySelector("#Expricence").style.display = "none";
});

document.querySelector(".error").style.display = "none";
const notfoundpage = () => {
  console.log("click here");
  document.querySelector(".main-section").style.display = "none";
  document.querySelector(".header-section").style.display = "none";
  document.querySelector(".footer-section").style.display = "none";
  document.querySelector(".error").style.display = "block";
};

document.querySelector(".back").addEventListener("click", function () {
  document.querySelector(".error-page").style.display = "none";
  document.querySelector(".main-section").style.display = "block";
  document.querySelector(".header-section").style.display = "flex";
  document.querySelector(".footer-section").style.display = "block";
});

const opensidebar = () => {
  console.log("click menu bar");
  document.querySelector(".nav-ul").style.right = "0px";
};
const shutdownsidebar = () => {
  console.log("click cross bar");
  document.querySelector(".nav-ul").style.right = "-180px";
};

// -------message-function------------

const scriptURL =
  "https://script.google.com/macros/s/AKfycbz9Flv63ajnHvb1gZ49lgsX0p9UasnzaebO3dZjFvY3IhGND-MJiNnGX62S38lCFTvl/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.querySelector(".visitor-msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message Sent Succefully ";

      setTimeout(() => {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
