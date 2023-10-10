const imageContainer = document.getElementById('imageContainer');
        const image = imageContainer.querySelector('.image');

        image.addEventListener('mouseenter', () => {
            image.classList.add('bordered');
        });

        image.addEventListener('mouseleave', () => {
            image.classList.remove('bordered');
        });