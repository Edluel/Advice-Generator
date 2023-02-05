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
  }
}

resizeAdvice();

