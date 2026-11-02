
export default class Particule {
    constructor(ctx) {
        this.x = 0
        this.y = 0
        this.opacité = 1
        this.vitesseX = 2 - 4 * Math.random()
        this.vitesseY = 2 - 4 * Math.random()
        this.ctx = ctx
    }

    verifier_les_bords() {
        if (this.x < 0 || this.x > this.ctx.canvas.width) {
            this.vitesseX = -this.vitesseX
        }
        if (this.y < 0 || this.y > this.ctx.canvas.height) {
            this.vitesseY = -this.vitesseY
        }
    }

    changer_couleur() {
        const opacité = this.opacité
        this.ctx.fillStyle = `rgb(${255}, ${0}, ${0}, ${this.opacité})`
        this.opacité -= 0.01
    }

    update() {
        this.x += this.vitesseX
        this.y += this.vitesseY
        this.verifier_les_bords()

        this.ctx.beginPath()
        this.ctx.arc(this.x, this.y, 40, 0, 2 * Math.PI);
        this.changer_couleur()
        this.ctx.fill();
    }
}
