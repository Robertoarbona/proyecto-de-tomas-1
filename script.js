document.addEventListener("DOMContentLoaded", function () {
    const generateBtn = document.getElementById("generateBtn");
    const catImageContainer = document.getElementById("catImageContainer");

    generateBtn.addEventListener("click", function () {
        fetch("https://api.thecatapi.com/v1/images/search")
                            .then(response => response.json())
            .then(data => {
const catImageURL = data[0].url;
                const catImage = new Image();
                catImage.src = catImageURL;
                catImage.alt = "Gato aleatorio";
                catImage.classList.add("cat-image");
                catImageContainer.innerHTML = "";
                catImageContainer.appendChild(catImage);
            })
            .catch(error => {
                console.error("Error fetching cat image:", error);
                catImageContainer.innerHTML = "Error al cargar la imagen del gato. Intente de nuevo más tarde.";
            });
    });
});