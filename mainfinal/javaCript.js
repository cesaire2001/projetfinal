function myFunction() {
    var x = document.getElementById("menu");
    if (x.className === "menu") {
      x.className += " responsive";
    } else {
      x.className = "menu";
    }
  }


var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("photoEglise");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) { myIndex = 1 }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 3000);
}

