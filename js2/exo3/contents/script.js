const images = ["contents/img/image1.webp", "contents/img/image2.jpeg", "contents/img/image3.jpeg", "contents/img/image4.jpeg", "contents/img/image5.jpeg"];
        const imageElement = document.getElementById('image');
        
        imageElement.addEventListener('mouseenter', () => {
            const randomIndex = Math.floor(Math.random() * images.length);
            const randomImage = images[randomIndex];
            imageElement.src = randomImage;
        });

        imageElement.addEventListener('mouseleave', () => {
            imageElement.src = "contents/img/image1.webp"; 
        });