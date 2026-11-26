export default class System {
    constructor(ctx, canvas) {
        this.ctx = ctx;
        this.canvas = canvas;

        this.image = document.createElement("img");
        this.image.src = "./_DSC0187-2.jpg";

        this.zoom = 1;
        this.x = 0; 
        this.y = 0;

        this.delay = 200
        this.step = 10


        this.draw();
    }

    updateZoomAndPosition(x, y, zoom) {
        const xstart = this.x;
        const xend = x;
        const ystart = this.y;
        const yend = y;
        const start = this.zoom;
        const end =  zoom;

        for (let i = 1; i < this.step+1; i++) {
            setTimeout(() => {
                this.zoom = start + (end - start) * (i / this.step),
                this.x = xstart + (xend - xstart) * (i / this.step),
                this.y = ystart + (yend - ystart) * (i / this.step)
                console.log(this.zoom)
                console.log(this.zoom*100)

            }, i * this.delay);
        }
   
    }

    drawPhoto() {



            const scale = Math.max(
                this.canvas.width / this.image.naturalWidth,
                this.canvas.height / this.image.naturalHeight
            );

            const width = this.image.naturalWidth * scale * this.zoom;
            const height = this.image.naturalHeight * scale * this.zoom;


            const left = (this.canvas.width - width) / 2 - this.x * this.zoom;
            const top = (this.canvas.height - height) / 2 - this.y * this.zoom;

            this.ctx.drawImage(this.image, left, top, width, height);
    }
    
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.drawPhoto();

        requestAnimationFrame(() => this.draw());
    }
}