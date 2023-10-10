 // Fonction pour changer l'image au survol
 function changeImage() {
    const image = document.querySelector('.image');
    image.src = 'contents/img/image2.jpeg';
  }

  // Fonction pour restaurer l'image d'origine
  function restoreImage() {
    const image = document.querySelector('.image');
    image.src = 'contents/img/image1.webp';
  }