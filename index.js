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


// play song rom the list
// var list = [
//     "welcome",
//     "back",
// ]
// var ul = document.getElementsByTagName("ul")
// var list = document.createElement("li").appendChild(p);

// var p = document.createTextNode(list);

// list;
// ul
// console.log(ul);


