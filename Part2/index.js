const idInput = document.getElementById("idInput");
const getStyle = document.getElementById("colorInput");

console.log(idInput);
console.log(getStyle);

function setCard(){
    const card = document.getElementById(idInput.value);
    // console.log(card);
    card.style.color = colorInput.value;
}


