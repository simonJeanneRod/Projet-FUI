import System from "./System.js"

window.onload = () => {


    const canvas = document.createElement("canvas")
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight;
    document.body.appendChild(canvas)

    const ctx = canvas.getContext("2d")

    new System(ctx, canvas)

};

var imagejavascript = document.createElement("img");
imagejavascript.src = "./_DSC0187-2.jpg";
document.body.appendChild(imagejavascript)
