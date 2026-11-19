import Requete from "./requete.js"
export default class System {
    constructor(ctx, canvas) {
        this.ctx = ctx;
        this.canvas = canvas;

        this.imagejavascript = document.createElement("img");
        this.imagejavascript.src = "./_DSC0187-2.jpg";

        this.compteur = 0;
        this.position_screen = { x: 0, y: 0 };

        this.inizializeimage();
        document.addEventListener("click", (e) => {
            this.compteur = this.compteur + 10;
        });

        this.draw();
    }


    drawimage() {
        if (this.imagejavascript.complete) {
            const imgRatio = this.imagejavascript.width / this.imagejavascript.height;
            const canvasRatio = this.canvas.width / this.canvas.height;

            let newWidth, newHeight;
            if (imgRatio > canvasRatio) {
  
                newHeight = this.canvas.height + this.compteur * 2;
                newWidth = Math.round(newHeight * imgRatio);
            } else {

                newWidth = this.canvas.width + this.compteur * 2;
                newHeight = Math.round(newWidth / imgRatio);
            }

            const x = (this.canvas.width - newWidth) / 2;
            const y = (this.canvas.height - newHeight) / 2;

            this.ctx.drawImage(this.imagejavascript, x, y, newWidth, newHeight);
        }
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.drawimage();

        requestAnimationFrame(() => {
            this.draw();
        });
    }
}