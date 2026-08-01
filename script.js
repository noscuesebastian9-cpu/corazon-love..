function crearCorazon(){

    const corazon = document.createElement("div");

    corazon.className = "corazon";
    corazon.innerHTML = "❤️";

    corazon.style.left = Math.random() * 100 + "vw";

    corazon.style.animationDuration =
    Math.random() * 3 + 2 + "s";

    document.body.appendChild(corazon);

    setTimeout(()=>{
        corazon.remove();
    },5000);
}

setInterval(crearCorazon,300);
