const showButton = document.getElementById('showButton');
        const hideButton = document.getElementById('hideButton');
        const changeColorButton = document.getElementById('changeColorButton');
        const paragraphe = document.getElementById('paragraphe');

        showButton.addEventListener('click', () => {
            paragraphe.style.display = 'block'; // Affiche le paragraphe
        });

        hideButton.addEventListener('click', () => {
            paragraphe.style.display = 'none'; // Cache le paragraphe
        });

        changeColorButton.addEventListener('click', () => {
            const colors = ['red', 'blue', 'green', 'orange', 'purple'];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            paragraphe.style.color = randomColor; // Modif la couleur du texte
        });