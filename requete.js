export default class Requete {
    constructor(ctx, canvas) {
        this.ctx = ctx;
        this.canvas = canvas;

        // Initialisation de la boîte modale
        this.initializeModal();
    }

    initializeModal() {
        // On crée l'élément de la boîte modale
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.style.display = 'none'; // Masquer initiallement
        modal.style.position = 'fixed';
        modal.style.top = '0';
        modal.style.left = '0';
        modal.style.width = '100%';
        modal.style.height = '100%';
        modal.style.backgroundColor = 'rgb(255, 0, 0)';
        modal.style.justifyContent = 'center';
        modal.style.alignItems = 'center';

        // On crée le contenu de la boîte modale
        const modalContent = document.createElement('div');
        modalContent.className = 'modal-content';
        modalContent.style.backgroundColor = 'white';
        modalContent.style.padding = '20px';
        modalContent.style.borderRadius = '5px';

        // On crée le formulaire pour inscrire une couleur
        const form = document.createElement('form');

        // On crée l'étiquette pour le champ de texte
        const label = document.createElement('label');
        label.textContent = 'Inscrivez une couleur :';
        form.appendChild(label);

        // On crée le champ de texte pour inscrire la couleur
        const input = document.createElement('input');
        input.type = 'text';
        form.appendChild(input);

        // On crée le bouton de soumission du formulaire
        const submitButton = document.createElement('button');
        submitButton.textContent = 'Soumettre';
        form.appendChild(submitButton);

        // Ajout du formulaire au contenu modal
        modalContent.appendChild(form);

        // Ajout du contenu de la boîte modale à l'élément modal
        modal.appendChild(modalContent);

        // Ajout de la boîte modale au document
        document.body.appendChild(modal);

        // Ajout du contrôle pour ouvrir la boîte modale
        this.addModalOpenListener(modal);

        // Ajout du contrôle pour soumettre le formulaire
        this.addFormSubmitListener(form, input);
    }

    addModalOpenListener(modal) {
        this.canvas.addEventListener('click', () => {
            modal.style.display = 'flex';
        });
    }

    addFormSubmitListener(form, input) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const color = input.value;

            // Vérification de la couleur valide
            if (this.validateColor(color)) {
                this.ctx.fillStyle = color;
                // Appeler une méthode pour redessiner ou mettre à jour le canvas
                this.draw();
            } else {
                // Gestion de l'erreur si la couleur n'est pas valide
                console.error('Couleur invalide');
            }

            modal.style.display = 'none';
        });
    }


    draw() {
        // Implémentez la méthode pour redessiner ou mettre à jour le canvas
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Exemple : Dessiner un carré avec la nouvelle couleur
        this.ctx.fillStyle = this.ctx.fillStyle;
        this.ctx.fillRect(50, 50, 100, 100);
    }
}
