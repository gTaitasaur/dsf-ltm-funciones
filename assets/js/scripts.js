/* function pintar(){
    ele.style.backgroundColor = 'yellow'
    }
    const ele = document.getElementById("ele1")
    ele.addEventListener("click", pintar); */

const elemento = document.getElementById("ele1");
elemento.addEventListener("click", function(pintar) {
    pintar.target.style.backgroundColor = 'yellow';
});

elemento.style.backgroundColor = 'green';