function myFunction() {
    var x = document.getElementById("navigation");
    var y= document.getElementById("hero-text");
    if (x.style.display === "block") {
      x.style.display = "none";
      y.style.display = "block";
    } else {
      x.style.display = "block";
      y.style.display = "none";
      
    }
  }