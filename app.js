const adviceText = document.querySelector('#adviceText');
const btn = document.querySelector('#diceBtn');
const adviceId = document.querySelector('#adviceId');

const init = () => {
getAdvice()
}

const getAdvice = async () => {
    const response = await fetch('https://api.adviceslip.com/advice');
    const json = await response.json();

   adviceId.textContent = json.slip.id
   adviceText.textContent = json.slip.advice
}

btn.addEventListener('click', (event) => {
    getAdvice()
})


init()

