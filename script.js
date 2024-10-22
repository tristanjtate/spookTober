let selectedIngredients = [];

// Ingredient selection logic
document.querySelectorAll(".ingredient").forEach((button) => {
  button.addEventListener("click", function () {
    if (selectedIngredients.length < 3) {
      selectedIngredients.push(this.dataset.ingredient);
      console.log(`Added: ${this.dataset.ingredient}`);
    } else {
      alert("You have already selected 3 ingredients!");
    }
  });
});

// Brew potion and display the result
document.getElementById("brew-potion").addEventListener("click", function () {
  if (selectedIngredients.length === 3) {
    // Define possible potion results
    let potionResults = [
      {
        message: "Your potion grants you invisibility!",
        imgSrc: "assets/invisible.webp",
      },
      {
        message: "Your potion transforms you into a bat!",
        imgSrc: "assets/bat.webp",
      },
      {
        message: "Oops! Your potion explodes into sparkles.",
        imgSrc: "assets/spark.webp", // Path to explosion image
      },
      {
        message: "Your potion summons a tiny ghost!",
        imgSrc: "assets/ghost.webp", // Path to ghost image
      },
      {
        message: "Your potion turns into a bubbling green slime!",
        imgSrc: "assets/slime.webp", // Path to slime image
      },
      {
        message: "Your potion freezes everything around you!",
        imgSrc: "assets/free.webp", // Path to freeze image
      },
    ];

    // Pick a random result
    let result =
      potionResults[Math.floor(Math.random() * potionResults.length)];

    // Display the result message
    document.getElementById("potion-result").textContent = result.message;

    // Display the result image
    const potionImage = document.getElementById("potion-image");
    potionImage.src = result.imgSrc;
    potionImage.style.display = "block"; // Show the image

    // Reset ingredients for the next round
    selectedIngredients = [];
  } else {
    alert("Please select exactly 3 ingredients!");
  }
});
