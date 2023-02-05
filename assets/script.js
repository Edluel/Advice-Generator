async function showRandom() {

    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();

    const id = document.querySelector('.adv-id');
    const advice = document.querySelector('.adv-content');

    id.innerHTML = data.slip.id;
    advice.textContent = data.slip.advice;

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



/* /integer to user search by id and /search/string to search by word
word results are a object with arrays and to acces each array item 
use slips[index] instead of slip*/

/* minha idéia para melhoria, adicionar barra de busca por id e por
palavra, porém a busca por palávra deve invés de exibir o array
de resultados deve implementar uma função de carrossel onde
o usuario pode navegar pelos avices retornados pela busca */