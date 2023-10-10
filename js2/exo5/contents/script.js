const showButton = document.getElementById('showButton');
        const hideButton = document.getElementById('hideButton');
        const paragraphe = document.getElementById('paragraphe');

        showButton.addEventListener('click', () => {
            paragraphe.style.display = 'block'; // Affiche le paragraphe
        });

        hideButton.addEventListener('click', () => {
            paragraphe.style.display = 'none'; // Cache le paragraphe
        });