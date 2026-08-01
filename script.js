const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

// ---------- CORAZÓN ----------
let t = 0;

function draw() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.font = "10px Arial";
    ctx.fillStyle = "#ff8ac7";
    ctx.textAlign = "center";

    for (let i = 0; i < 850; i++) {

        const a = i * 0.25 + t;

        const x = 16 * Math.pow(Math.sin(a), 3);

        const y =
            13 * Math.cos(a)
            - 5 * Math.cos(2 * a)
            - 2 * Math.cos(3 * a)
            - Math.cos(4 * a);

        ctx.fillText(
            "Camila",
            canvas.width / 2 + x * 18,
            canvas.height / 2 - y * 18
        );
    }

    t += 0.01;

    requestAnimationFrame(draw);

}

draw();


// ---------- CORAZONES ----------
function crearCorazon() {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "🩷";

    heart.style.left = Math.random() * window.innerWidth + "px";

    heart.style.fontSize = (18 + Math.random() * 18) + "px";

    heart.style.animationDuration = (5 + Math.random() * 4) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 9000);

}

setInterval(crearCorazon, 300);


// ---------- PARTÍCULAS ----------
function crearEstrella(){

    const s=document.createElement("div");

    s.innerHTML="✨";

    s.style.position="fixed";

    s.style.left=Math.random()*window.innerWidth+"px";

    s.style.top=Math.random()*window.innerHeight+"px";

    s.style.opacity="0.25";

    s.style.pointerEvents="none";

    document.body.appendChild(s);

}

for(let i=0;i<60;i++){

    crearEstrella();

}
