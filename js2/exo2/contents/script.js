 // Sélectionnez le bouton de réinitialisation
 const razButton = document.getElementById('razBtn');

 razButton.addEventListener('click', () => {
   const formulaire = document.getElementById('monFormulaire');
   const formElements = formulaire.elements;

   // Reset les valeurs des champs à vide
   for (let i = 0; i < formElements.length; i++) {
     const element = formElements[i];
     if (element.type !== 'button' && element.type !== 'submit') {
       element.value = '';
     }
   }
 });