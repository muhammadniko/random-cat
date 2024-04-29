let catImage = document.getElementById("cat");

 function setImage() {
    RandomName().then( name => {
        fetch('https://cataas.com/cat/says/'+name+'?fontSize=20&fontColor=white&type=square')
        .then(response => {
            return response.blob();
        })
        .then(blob => {
            catImage.src = URL.createObjectURL(blob);
        })
        .catch(error => {
            console.error('Terjadi kesalahan:', error);
        });
    })
    
 }

 function RandomName() {
    // Fetch data JSON dari file
    return fetch('data.json')
         .then(response => response.json())
         .then(data => {
            const nameIndex = Math.floor(Math.random() * data.names.length);
            const thingIndex = Math.floor(Math.random() * data.things.length);
            return (data.names[nameIndex]+" "+data.things[thingIndex]).toUpperCase();             
         })
         .catch(error => console.warn(error));          
 }

 function checkOn() {
    console.log('OK Loaded')
 }

 
 window.addEventListener("load", (event) => {
    console.log("page is fully loaded");
  });
 document.addEventListener('click', setImage);


