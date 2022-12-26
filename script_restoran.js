function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("footer").style.marginLeft = "250px";
    document.getElementById("footer").style.width = "1230px";
    document.getElementById("map").style.width = "90%";
    document.getElementById("add").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.getElementById("footer").style.marginLeft = "0";
    document.getElementById("footer").style.width = "1480px";
    document.getElementById("map").style.width = "55%";
    document.getElementById("add").style.width = "45%";
  }

  var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 3000); 
}
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}
function thk(){
  document.getElementById('form').innerHTML="Data sent successfully! <br> A little later, the manager will contact you.<br> Thank you!";
  document.getElementById('content').style.height="1900px"
  document.getElementById('form').style.width="400px"
  document.getElementById('form').style.margin="auto"
  document.getElementById('form').style.fontSize="25px"
  document.getElementById('form').style.color="red"
  document.getElementById('form').style.textAlign="center"
  document.getElementById('me').style.width="400px"
  document.getElementById('contents').style.height="2100px"
  document.getElementById('main').style.height="2100px"
  
}
