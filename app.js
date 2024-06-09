if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("/serviceWorker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
    })
  }  

const container = document.querySelector(".recipes-list");

const recipes = [
    {
        id: 1,
        name: "Spaghetti Aglio e Olio",
        description: "A classic Italian dish with garlic, olive oil, and chili flakes.",
        image: "https://example.com/aglio-e-olio.jpg",
        tags: ["pasta", "vegetarian", "quick"],
        prepTime: 10, // Minutes
        cookTime: 15, // Minutes
        servings: 2,
    },
    {
        id: 2,
        name: "Chicken Tikka Masala",
        description: "A creamy Indian curry with marinated chicken and aromatic spices.",
        image: "https://example.com/tikka-masala.jpg",
        tags: ["chicken", "curry", "indian"],
        prepTime: 30, // Minutes
        cookTime: 45, // Minutes
        servings: 4,
    },
    {
        id: 3,
        name: "Chocolate Chip Cookies",
        description: "Soft and chewy cookies packed with chocolate chips.",
        image: "https://example.com/cookies.jpg",
        tags: ["dessert", "cookies", "baking"],
        prepTime: 15, // Minutes
        cookTime: 10, // Minutes
        servings: 12,
    },
    {
        id: 4,
        name: "Greek Salad",
        description: "A refreshing salad with tomatoes, cucumbers, olives, and feta cheese.",
        image: "https://example.com/greek-salad.jpg",
        tags: ["salad", "vegetarian", "healthy"],
        prepTime: 10, // Minutes
        cookTime: 0, // Minutes
        servings: 4,
    },
];

const labels = ["Préparation", "Cuisson", "Portions"];

const showRecipes = (recipes) => {
    let recipesElements = "";

    recipes.forEach(({ name, description, image, prepTime, cookTime, servings }) => {
        const times = [prepTime, cookTime, servings];
        recipesElements += `
        <article>
            <picture>
                <img src="${image}" alt="${name}">
            </picture>
            <div>
                <h3>${name}</h3>
                <p>${description}</p>
                <ul class="recipe-details">
                    ${labels.map((label, i) => `<li>${label}: ${times[i]} min</li>`).join('')}
                </ul>
            </div>
        </article>
        `;
    });

    container.innerHTML = recipesElements;
};

document.addEventListener("DOMContentLoaded", showRecipes(recipes));