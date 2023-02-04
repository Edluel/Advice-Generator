async function showRandom() {
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();

    const id = document.querySelector('.adv-id');
    const advice = document.querySelector('.adv-content');

    id.innerHTML = data.slip.id;
    advice.textContent = data.slip.advice;
}

showRandom();