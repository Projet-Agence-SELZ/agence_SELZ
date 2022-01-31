
window.onscroll = function () {
let mybutton = document.getElementById("to_Top");
  
  if (document.body.scrollTop > 280 || 
    document.documentElement.scrollTop > 280) {
     console.log("tag1");
      mybutton.className = "active";
    console.log(mybutton.className);
  } else {
    mybutton.className = "inactive";
  }
};
