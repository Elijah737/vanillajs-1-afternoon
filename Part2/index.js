console.log('yp gabba gabba')

const idInput = document.getElementById('idInput')
const colorInput = document.getElementById('colorInput')

function setCard(){
    const card = document.getElementById(idInput.value);
    card.style.color = colorInput.value;
    console.log(card)
}

