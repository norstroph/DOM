// fichier script.js
const bearsPictures = [
    "https://placebear.com/500/279",
    "https://placebear.com/500/280",
    "https://placebear.com/500/300",
    "https://placebear.com/500/302",
    "https://placebear.com/500/305",
  ];
  // À toi de jouer ici 👇 
  const image = document.querySelectorAll('img')
  console.log(image)
  const newarray = Array.from(image);
  const newImage = newarray.forEach((el,i) => {
   return el.src = bearsPictures[i]
   
})
