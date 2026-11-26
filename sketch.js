import System from "./System.js";
import Requete from "./requete.js";

window.onload = () => {

    const canvas = document.createElement("canvas");
    canvas.width = window.innerWidth * 0.7;
    canvas.height = canvas.width/ 4 *3;
    canvas.style.display = "block";

    document.body.style.overflow = "hidden";
    document.body.style.display = "grid";
    document.body.style.height = "100vh";
    document.body.style.placeItems = "center";

    document.body.appendChild(canvas);

    const ctx = canvas.getContext("2d");

    window.addEventListener("resize", () => {
        canvas.width = window.innerWidth * 0.7;
        canvas.height = canvas.width / 4 * 3;
    });

    const system = new System(ctx, canvas);

    new Requete(system);
};
