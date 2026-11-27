import System from "./System.js";
import Requete from "./requete.js";
import Grid from "./grid.js";

window.onload = () => {

    const canvas = document.createElement("canvas");
    canvas.width = window.innerWidth * 0.7;
    canvas.height = canvas.width / 4 * 3;
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
    const grid = new Grid(ctx, canvas);
    new Requete(system);

    function boucle() {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // effacer
        system.draw();   // la méthode qui dessine SEULEMENT la photo
        grid.Grid();         // ta méthode qui trace les lignes
        requestAnimationFrame(boucle);
    }

    boucle();  // premier appel pour démarrer
};