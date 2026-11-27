export default class Grid{
    constructor(ctx, canvas) {
        this.ctx = ctx;
        this.canvas = canvas;

        this.color = "#12b8ff";
        this.col = 10
        this.raw = 7
        this.largeur = 3


    }

    Grid(){

        this.ctx.strokeStyle = this.color;
        this.ctx.lineWidth = this.largeur;
        
        let cellWidth = (this.canvas.width - this.canvas.width / this.col * 0.75) / this.col;
        let cellHeight = (this.canvas.height - this.canvas.height / this.col * 0.75) / this.raw;

        for (let x = 0 - cellWidth/4 * 3; x <= this.canvas.width; x += cellWidth + 2) {

            this.ctx.beginPath();
            this.ctx.moveTo(x, 0);
            this.ctx.lineTo(x, this.canvas.height);
            this.ctx.stroke();
     
        }

        for (let y = 0 - cellHeight / 4 * 3; y <= this.canvas.height; y += cellHeight) {
            this.ctx.beginPath();
            this.ctx.moveTo(0, y);
            this.ctx.lineTo(this.canvas.width, y);
            this.ctx.stroke();
        }


    }
}

// let myCanvas = document.querySelector("#myCanvas");
// const ctx = myCanvas.getContext("2d");

// function drawGrid(lineWidth, cellWidth, cellHeight, color) {
//     // Set line properties
//     ctx.strokeStyle = color;
//     ctx.lineWidth = lineWidth;

//     // Get size
//     let width = myCanvas.width;
//     let height = myCanvas.height;

//     // Draw vertical lines
//     for (let x = 0; x <= width; x += cellWidth) {
//         ctx.beginPath();
//         ctx.moveTo(x, 0);
//         ctx.lineTo(x, height);
//         ctx.stroke();
//     }

//     // Draw horizontal lines
//     for (let y = 0; y <= height; y += cellHeight) {
//         ctx.beginPath();
//         ctx.moveTo(0, y);
//         ctx.lineTo(width, y);
//         ctx.stroke();
//     }
// }

// drawGrid(2, 20, 10, "#5fbcff");

