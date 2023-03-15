var x = 0;

function show(ido) {
  if (x == 0) {
    document.getElementById("prev").style.display = "none";
    document.getElementById(ido).style.display = "block";
    x = 1;
  } else {
    document.getElementById("prev").style.display = "block";
    document.getElementById(ido).style.display = "none";
    x = 0;
  }
} 
