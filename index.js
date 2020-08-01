function openside(){
    document.getElementById("mysidebar").style.height = "350px";
}

function closeside(){
    document.getElementById("mysidebar").style.height = "0px";
}


// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function playsong(){
    document.getElementById("aud").play();
}
function pausesong(){
    document.getElementById("aud").pause();
}

function playsongt(){
    document.getElementById("audt").play();
}
function pausesongt(){
    document.getElementById("audt").pause();
}


// music albumns script

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}


