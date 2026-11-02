import Particule from "./particule.js";

export default class System {
    constructor(ctx, canvas) {
        this.ctx = ctx
        this.canvas = canvas
        this.particules = []

        for (let i = 0; i < 1; i++) {
            const p = new Particule(this.ctx)
            // p.x = Math.random() * this.canvas.width
            // p.y = Math.random() * this.canvas.height

            p.x = Math.random() * this.canvas.width
            p.y = Math.random() * this.canvas.height
            this.particules.push(p)
        }

        document.addEventListener("mousemove", (e) => {
            const p = new Particule(this.ctx)
            p.x = e.clientX
            p.y = e.clientY
            this.particules.push(p)
        })

        this.draw()
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

        for (let i = 0; i < this.particules.length; i++) {
            const p = this.particules[i]
            p.update()
        }

        requestAnimationFrame(() => {
            this.draw()
        })
    }
}
