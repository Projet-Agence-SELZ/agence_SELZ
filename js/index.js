let mybutton = document.getElementById("backTop");

window.onscroll = function () {
  if (document.body.scrollTop > 280 || document.documentElement.scrollTop > 280) {
    
    mybutton.className = " back-to-top__active";

  } else {
    mybutton.className = " back-to-top__inactive";
    mybutton.clas
  }
};
