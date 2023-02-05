function showAdvice(id, advice) {
    document.querySelector('.adv-id').innerHTML = id;
    document.querySelector('.adv-content').textContent = advice;
}

async function showRandom() {

    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();

    showAdvice(data.slip.id, data.slip.advice);

}
showRandom();


function resizeAdvice() {
  var advice = document.querySelector(".advice");
  var width = advice.offsetWidth;
  var height = advice.offsetHeight;
  var maxWidth = window.innerWidth * 0.8;

  if (width > maxWidth) {
    var newWidth = maxWidth;
    var newHeight = height * (newWidth / width);
    advice.style.width = newWidth + "px";
    advice.style.height = newHeight + "px";

    //If the advice was resized then change the hover behavior
    document.querySelector(".rgenerate-bt").addEventListener("touchstart", function() {
        this.style.boxShadow = "0 0 20px var(--Neon-Green)";
    });
    document.querySelector(".rgenerate-bt").addEventListener("touchend", function() {
        this.style.boxShadow = "none";
    });
  }
    

}
resizeAdvice();


function searchAdvice() {
    const option = document.querySelector("#search-type").value;
    const input = document.querySelector("#search-input").value;
    document.querySelector('#search-input').value = '';

    if (option === 'id') {
        if (Number.isInteger(parseInt(input))) {
            searchById(input);
        }
        else{
            alert('Please enter an integer');
            return;
        }
    }
    else {

    }
}

async function searchById(id){
    const response = await fetch('https://api.adviceslip.com/advice/'+id);
    const data = await response.json();

    if(id < 1 || id > 224){alert("Advice slip not found."); return;}

    showAdvice(data.slip.id, data.slip.advice);
}


