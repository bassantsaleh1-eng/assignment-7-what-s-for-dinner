
// ---------- Data ----------
// Each meal is an object. All meals live in one array.
// image: photo path inside the "images" folder.
const meals = [
  {
    name: "Vegetable Curry",
    description: "Hearty vegetarian curry with coconut milk",
    image: "images/vegetable-curry.jpg",
    rating: 4.6,
    reviews: 289,
    difficulty: "Easy",
    cuisine: "Asian",
    prepTime: 20,
    cookTime: 30,
    servings: 4,
    ingredients: [
      "2 potatoes, cubed",
      "1 cauliflower, florets",
      "2 carrots, sliced",
      "1 can chickpeas",
      "400ml coconut milk",
      "3 tablespoons curry powder",
      "1 onion, diced",
      "3 cloves garlic, minced",
      "Fresh spinach"
    ],
    instructions: [
      "Sauté the onion and garlic in a little oil until golden.",
      "Add the curry powder and stir for one minute.",
      "Add potatoes, carrots and cauliflower, then pour in the coconut milk.",
      "Simmer for 20 minutes, add chickpeas, then stir in the spinach.",
      "Serve hot with rice or flatbread."
    ],
    nutrition: { calories: 380, protein: "12g", carbs: "48g", fat: "16g" },
    tips: [
      "Toast the curry powder briefly to release more flavor.",
      "Add a squeeze of lemon at the end to brighten the dish.",
      "It tastes even better the next day."
    ]
  },
  {
    name: "Koshari",
    description: "Egypt's favorite street food, layered and full of flavor",
    image: "images/koshari.jpg",
    rating: 4.9,
    reviews: 512,
    difficulty: "Medium",
    cuisine: "Egyptian",
    prepTime: 25,
    cookTime: 40,
    servings: 6,
    ingredients: [
      "1 cup rice",
      "1 cup brown lentils",
      "1 cup macaroni",
      "1/2 cup vermicelli",
      "1 can chickpeas",
      "3 onions, thinly sliced and fried",
      "Tomato sauce",
      "Garlic vinegar (daqqa)"
    ],
    instructions: [
      "Boil the lentils, macaroni and chickpeas separately.",
      "Fry the vermicelli, then cook it with the rice.",
      "Fry the onions until crispy and dark golden.",
      "Prepare the tomato sauce and the daqqa.",
      "Layer everything on a plate and finish with the sauce and crispy onions."
    ],
    nutrition: { calories: 520, protein: "18g", carbs: "88g", fat: "11g" },
    tips: [
      "Keep some of the onion frying oil to flavor the rice.",
      "Use a pinch of cumin in the tomato sauce.",
      "Add hot sauce on the side."
    ]
  },
  {
    name: "Molokhia with Chicken",
    description: "Silky garlicky molokhia served with rice and chicken",
    image: "images/molokhia.jpg",
    rating: 4.8,
    reviews: 341,
    difficulty: "Easy",
    cuisine: "Egyptian",
    prepTime: 15,
    cookTime: 60,
    servings: 5,
    ingredients: [
      "1 whole chicken",
      "500g chopped molokhia",
      "6 cloves garlic, crushed",
      "1 tablespoon dried coriander",
      "2 tablespoons ghee",
      "Rice, to serve"
    ],
    instructions: [
      "Boil the chicken with onion and spices, and keep the broth.",
      "Fry the garlic and coriander in ghee until fragrant.",
      "Add the molokhia to the hot broth and stir gently.",
      "Pour the garlic mixture on top and take it off the heat.",
      "Serve with rice and the chicken."
    ],
    nutrition: { calories: 450, protein: "35g", carbs: "40g", fat: "15g" },
    tips: [
      "Never let molokhia boil hard, it loses its texture.",
      "Add the garlic at the end for the best aroma."
    ]
  },
  {
    name: "Bechamel Pasta",
    description: "Baked macaroni with meat sauce and creamy bechamel",
    image: "images/bechamel.jpg",
    rating: 4.7,
    reviews: 403,
    difficulty: "Medium",
    cuisine: "Egyptian",
    prepTime: 30,
    cookTime: 60,
    servings: 8,
    ingredients: [
      "500g penne pasta",
      "400g minced beef",
      "1 onion, diced",
      "1 can tomato sauce",
      "4 tablespoons butter",
      "4 tablespoons flour",
      "1 liter milk",
      "Grated cheese"
    ],
    instructions: [
      "Boil the pasta until almost done.",
      "Cook the beef with the onion, then add the tomato sauce.",
      "Make the bechamel: melt the butter, whisk in the flour, then add the milk slowly.",
      "Layer pasta, meat sauce and bechamel in a baking dish.",
      "Top with cheese and bake until golden."
    ],
    nutrition: { calories: 640, protein: "28g", carbs: "62g", fat: "30g" },
    tips: [
      "Warm the milk before adding it to avoid lumps.",
      "A pinch of nutmeg makes the bechamel better."
    ]
  },
  {
    name: "Roasted Chicken & Potatoes",
    description: "Juicy lemon-garlic chicken with crispy potatoes",
    image: "images/Roasted Chicken & Potatoes.jpg.jpeg",
    rating: 4.5,
    reviews: 198,
    difficulty: "Easy",
    cuisine: "Mediterranean",
    prepTime: 15,
    cookTime: 50,
    servings: 4,
    ingredients: [
      "1 whole chicken",
      "5 potatoes, cut in wedges",
      "2 lemons",
      "4 cloves garlic",
      "3 tablespoons olive oil",
      "Salt, pepper and paprika"
    ],
    instructions: [
      "Marinate the chicken with lemon, garlic, oil and spices.",
      "Arrange the potatoes around it in a baking tray.",
      "Roast at 200°C until the chicken is cooked and golden."
    ],
    nutrition: { calories: 560, protein: "42g", carbs: "36g", fat: "26g" },
    tips: [
      "Marinate for at least an hour for more flavor.",
      "Turn the potatoes halfway through for even crispness."
    ]
  }
];

// ---------- State ----------
let currentMeal = null;
let activeTab = "ingredients";

// ---------- Functions ----------
function getRandomIndex(length) {
  return Math.floor(Math.random() * length);
}

// Returns a random meal, never the one that is already on screen
function getRandomMeal() {
  let meal;
  do {
    meal = meals[getRandomIndex(meals.length)];
  } while (meal === currentMeal && meals.length > 1);
  return meal;
}

function numberedList(items) {
  return `<ul class="list">${items
    .map((item, i) => `<li><span class="num">${i + 1}</span><span>${item}</span></li>`)
    .join("")}</ul>`;
}

const tabBuilders = {
  ingredients: (m) => numberedList(m.ingredients),
  instructions: (m) => numberedList(m.instructions),

  nutrition: (m) =>
    `<div class="nutrition-grid">
      <div class="nutri-card"><strong>${m.nutrition.calories}</strong><span>Calories</span></div>
      <div class="nutri-card"><strong>${m.nutrition.protein}</strong><span>Protein</span></div>
      <div class="nutri-card"><strong>${m.nutrition.carbs}</strong><span>Carbs</span></div>
      <div class="nutri-card"><strong>${m.nutrition.fat}</strong><span>Fat</span></div>
    </div>`,

  tips: (m) =>
    `<ul class="list">${m.tips
      .map((tip) => `<li><i class="fa-solid fa-lightbulb tip-icon"></i><span>${tip}</span></li>`)
      .join("")}</ul>`
};

function renderTab() {
  const content = document.getElementById("tab-content");
  content.innerHTML = tabBuilders[activeTab](currentMeal);
  content.scrollTop = 0;

  document.querySelectorAll(".tab").forEach((btn) => {
    const on = btn.dataset.tab === activeTab;
    btn.classList.toggle("active", on);
    btn.setAttribute("aria-selected", on ? "true" : "false");
  });
}

function renderHero(meal) {
  const hero = document.getElementById("hero");
  hero.innerHTML = "";

  if (!meal.image) return;

  const img = document.createElement("img");
  img.alt = meal.name;
 

  img.onload = () => {
    if (currentMeal === meal) {
      hero.innerHTML = "";
      hero.appendChild(img);
    }
  };

  img.onerror = () => {
    if (currentMeal === meal) {
      hero.innerHTML = `<div style="height:100%;display:grid;place-items:center;color:#fff;padding:24px;text-align:center;">Image not found: ${meal.image}</div>`;
    }
  };

  img.src = meal.image;
}

function renderMeal(meal) {
  currentMeal = meal;
  activeTab = "ingredients";

  renderHero(meal);

  document.getElementById("rating").innerHTML =
    `<i class="fa-solid fa-star"></i>${meal.rating} <span>(${meal.reviews} reviews)</span>`;

  document.getElementById("prep-time").textContent = `${meal.prepTime} min`;
  document.getElementById("cook-time").textContent = `${meal.cookTime} min`;
  document.getElementById("servings").textContent = `${meal.servings} people`;

  document.getElementById("tags").innerHTML =
    `<span class="tag ${meal.difficulty.toLowerCase()}">${meal.difficulty}</span>
     <span class="tag cuisine">${meal.cuisine}</span>`;

  document.getElementById("meal-name").textContent = meal.name;
  document.getElementById("meal-description").textContent = meal.description;

  // Warning shows when prep + cook time is more than 45 minutes
  document.getElementById("alert").hidden = meal.prepTime + meal.cookTime <= 45;

  document.getElementById("bookmark-btn").setAttribute("aria-pressed", "false");

  renderTab();

  // Small animation on every swap
  const card = document.getElementById("recipe-card");
  card.classList.remove("fade");
  void card.offsetWidth; // restart the animation
  card.classList.add("fade");
}

// ---------- Events ----------
document.getElementById("tabs").addEventListener("click", (e) => {
  const btn = e.target.closest(".tab");
  if (!btn) return;
  activeTab = btn.dataset.tab;
  renderTab();
});

document.getElementById("another-btn").addEventListener("click", () => {
  renderMeal(getRandomMeal());
});

document.getElementById("bookmark-btn").addEventListener("click", (e) => {
  const btn = e.currentTarget;
  btn.setAttribute("aria-pressed", btn.getAttribute("aria-pressed") === "true" ? "false" : "true");
});

document.getElementById("share-btn").addEventListener("click", () => {
  const text = `Tonight's dinner: ${currentMeal.name}`;
  if (navigator.clipboard) navigator.clipboard.writeText(text);
});

// When the page opens, show a random meal
renderMeal(getRandomMeal());