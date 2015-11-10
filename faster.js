var transparency = 0.5;
var heightpx = 50;
var map = {}; //!= territory
var currentWord = "";
var mode = "WORDS";
function faster(element){
   element.addEventListener('keydown', hook);
   element.addEventListener('keyup', switchView);
   createView(element);
}

function createView(element){
   var container = document.createElement('div');
   container.style.border = "1px solid #3434FF";
   container.style.backgroundColor = "#FFFFFF";
   container.style.position = 'absolute';
   container.style.left = element.offsetLeft;
   container.style.width = element.offsetWidth;
   container.style.height = heightpx + 'px';
   container.style.top = (element.offsetTop - element.offsetHeight) - heightpx + 'px';
   console.log(element.offsetHeight);
   element.parentNode.appendChild(container);
   console.log('done');
}

function switchView(e){
   if(e.keyCode == 17){
      //Switch to different view
   }
}

function hook(e){
   if(e.keyCode == 13){//Enter
      //Line done
   }
   if(e.keyCode == 32) {//Space
      //Add word to dictionary

   }
   if(e.keyCode == 8){//Backspace
      //Remove symbol from word
      if(currentWord.length > 0){
         currentWord = currentWord.substring(0,currentWord.length -1);
         console.log("current word: " + currentWord);
      }
   }
   if (e.keyCode <= 57 && e.keyCode >= 48 && mode == "WORDS") {//Number
      //Number key pressed, add word to value
   }
   if(e.keyCode > 32 && e.key.length == 1){
      //Add symbol to word
      currentWord = currentWord + e.key;
      console.log("current word: "+ currentWord);
   }
}
