console.log("%c HI", "color: firebrick");

document.addEventListener("DOMContentLoaded", function () {
  // Challenge 1
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  fetch(imgUrl)
    .then((response) => response.json())
    .then((data) => {
      const dogImageContainer = document.getElementById("dog-image-container");
      data.message.forEach((imageUrl) => {
        const img = document.createElement("img");
        img.src = imageUrl;
        dogImageContainer.appendChild(img);
      });
    });

  // Challenge 2
  const breedUrl = "https://dog.ceo/api/breeds/list/all";
  fetch(breedUrl)
    .then((response) => response.json())
    .then((data) => {
      const dogBreedsUl = document.getElementById("dog-breeds");
      for (const breed in data.message) {
        const li = document.createElement("li");
        li.textContent = breed;
        dogBreedsUl.appendChild(li);
      }

      // Challenge 3
      const dogBreeds = document.querySelectorAll("#dog-breeds li");
      dogBreeds.forEach((breed) => {
        breed.addEventListener("click", function () {
          this.style.color = "orange"; // Change font color to red on click
        });
      });
    });

  // Challenge 4
  document.getElementById("breed-dropdown");
  document.addEventListener("change", function (event) {
    const selectedLetter = event.target.value;
    const dogBreeds = document
      .getElementById("dog-breeds")
      .getElementsByTagName("li");
    for (const breed of dogBreeds) {
      breed.style.display = breed.textContent.startsWith(selectedLetter)
        ? "block"
        : "none";
    }
  });
});
