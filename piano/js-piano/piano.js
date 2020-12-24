var btn = document.querySelectorAll(".keys li");

//on click
for(let i = 0; i<btn.length; i++){
    btn[i].addEventListener("click", playPiano);
    function playPiano (){
        var keyName = btn[i].innerHTML;
        var stroke = "sound/"+keyName+".mp3";
        theSound(stroke);
        changeBg(i);
    }
}

//on keydown
document.addEventListener("keydown", myFunction);
function myFunction (e) {
    var stroke = "sound/"+e.key+".mp3";
    theSound(stroke);
    for(let i = 0; i<btn.length; i++)
     {
         if (btn[i].innerHTML == e.key)
         {
            changeBg(i);
         }
     }
        
    }

// play audio
function theSound(letter){
    var audio = new Audio(letter);
    audio.play(); 
}


// change background color
function changeBg(num) {
    btn[num].classList.add("pressed");
            setTimeout(addBg, 100);
            function addBg (){
                btn[num].classList.remove("pressed");
            }

}