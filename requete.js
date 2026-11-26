
export default class Requete {
    constructor(system) {
 
        this.system = system;

        this.initializeModal();
    }

    initializeModal() {

        this.modal = document.createElement("div");
        this.modal.style.display = "none";
        this.modal.style.position = "fixed";
        this.modal.style.top = "0";
        this.modal.style.left = "0";
        this.modal.style.width = "100%";
        this.modal.style.height = "100%";
        this.modal.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        this.modal.style.justifyContent = "center"; 
        document.body.appendChild(this.modal);

        this.form = document.createElement("form");
        this.form.style.backgroundColor = "white";
        this.form.style.padding = "20px";
        this.form.style.borderRadius = "5px";
        this.form.style.fontFamily = "Arial";
        this.modal.appendChild(this.form);


        this.inputX = this.createField("Coordonnée X :");
        this.inputY = this.createField("Coordonnée Y :");
        this.inputZoom = this.createField("Zoom (%) :");
        this.inputZoom.min = "1";

        const button = document.createElement("button");
        button.textContent = "Appliquer";
        this.form.appendChild(button);


        this.system.canvas.addEventListener("click", () => this.openModal());

        this.form.addEventListener("submit", (event) => this.sendValues(event));
    }

    createField(text) {
        const label = document.createElement("label");
        label.textContent = text + " ";
        label.style.display = "block";
        label.style.marginBottom = "10px";

        const input = document.createElement("input");
        input.type = "number";

        input.step = "any"; 
        input.required = true; 

        label.appendChild(input);
        this.form.appendChild(label);
        return input;
    }

    openModal() {

        this.inputX.value = this.system.x;
        this.inputY.value = this.system.y;
        this.inputZoom.min = 100
        this.inputZoom.value = this.system.zoom * 100;

        this.modal.style.display = "flex";
    }

    sendValues(event) {

        event.preventDefault();


        const x = Number(this.inputX.value);
        const y = Number(this.inputY.value);
        const zoom = Number(this.inputZoom.value) / 100;

        this.system.updateZoomAndPosition(x, y, zoom);

        this.modal.style.display = "none";
    }
}