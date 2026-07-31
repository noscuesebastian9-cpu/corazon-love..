const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resize();
window.addEventListener("resize", resize);

ctx.font = "14px Arial";
ctx.fillStyle = "#ff69b4";

let t = 0;

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < 900; i++) {
        let a = i * 0.1 + t;

        let x = 16 * Math.pow(Math.sin(a), 3);
        let y = 13 * Math.cos(a)
              - 5 * Math.cos(2 * a)
              - 2 * Math.cos(3 * a)
              - Math.cos(4 * a);

        ctx.fillText(
            "I love you",
            canvas.width / 2 + x * 20,
            canvas.height / 2 - y * 20
        );
    }

    t += 0.02;
    requestAnimationFrame(draw);
}

draw();
