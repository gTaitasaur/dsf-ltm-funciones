let colorGlobal = "";

function cambiarColor(color) {
    document.getElementById("key").style.backgroundColor = color;
}

document.addEventListener('keydown', function(event) {
    switch (event.key) {
        case 'a':
            colorGlobal = "pink";
            cambiarColor(colorGlobal);
            break;
        case 's':
            colorGlobal = "orange";
            cambiarColor(colorGlobal);
            break;
        case 'd':
            colorGlobal = "lightblue";
            cambiarColor(colorGlobal);
            break;
        case 'q':
            crearDiv("purple");
            break;
        case 'w':
            crearDiv("gray");
            break;
        case 'e':
            crearDiv("brown");
            break;
    }
});

function crearDiv(color) {
    const nuevoDiv = document.createElement("div");
    nuevoDiv.style.width = "200px";
    nuevoDiv.style.height = "200px";
    nuevoDiv.style.border = "1px solid black";
    nuevoDiv.style.backgroundColor = color;
    document.body.appendChild(nuevoDiv);
}