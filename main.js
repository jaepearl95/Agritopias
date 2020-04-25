const selectElement = function(element) {
    return document.querySelector(element);
}

let stationToggle = selectElement('#ss14');
let circle = selectElement('.st20')

let rCounter = circle.getAttribute('r');
console.log(rCounter);




stationToggle.addEventListener('mouseover', function(){

    // let rate = setInterval(frame,20)

    // function frame(){
        
    //     if(rCounter < 7.98) {
    //         rCounter++;
    //         let rVal = rCounter;
    //         circle.setAttribute('r', rVal);
       
    //     }
    // }

})

    // stationToggle.addEventListener('mouseOut', function(){

    //     if(rCounter == 7.98){
    //         rValue = 0;
    //         rCounter--
    //     }
      
    // })

function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }