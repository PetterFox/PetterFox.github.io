function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);




function progressBar() {
  var bar1 = document.querySelectorAll(".progress-bar-ps");
  var bar2 = document.querySelectorAll(".progress-bar-ai");
  var bar3 = document.querySelectorAll(".progress-bar-pr");
  var bar4 = document.querySelectorAll(".progress-bar-id");
  var bar5 = document.querySelectorAll(".progress-bar-pg");
  var bar6 = document.querySelectorAll(".progress-bar-wp");
  var bar7 = document.querySelectorAll(".progress-bar-mo");
  var bar8 = document.querySelectorAll(".progress-bar-wd");
  var bar9 = document.querySelectorAll(".progress-bar-ft");


  for (var i = 0; i < bar1.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = bar1[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      bar1[i].classList.add("active");
      bar2[i].classList.add("active");
      bar3[i].classList.add("active");
      bar4[i].classList.add("active");
      bar5[i].classList.add("active");
      bar6[i].classList.add("active");
      bar7[i].classList.add("active");
      bar8[i].classList.add("active");
      bar9[i].classList.add("active");
    } else {
      bar1[i].classList.remove("active");
      bar2[i].classList.remove("active");
      bar3[i].classList.remove("active");
      bar4[i].classList.remove("active");
      bar5[i].classList.remove("active");
      bar6[i].classList.remove("active");
      bar7[i].classList.remove("active");
      bar8[i].classList.remove("active");
      bar9[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", progressBar);
