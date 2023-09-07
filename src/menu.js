import nasiUduk from "./nasi-uduk.jpg";
import nasiGoreng from "./nasi-goreng.jpg";
import rendang from "./rendang.jpg";
import satay from "./satay.jpg";
import sotoAyam from "./soto-ayam.jpg";
import bakso from "./bakso.jpg";

function loadMenu(contentClass) {
  const content = document.querySelector(`.${contentClass}`);
  content.removeAttribute("class");
  content.classList.add(contentClass, "menu");
  content.textContent = "";

  menuList.forEach((food) => {
    const card = createCard(food);
    content.appendChild(card);
  });
  return content;
}

function createCard(food) {
  const card = document.createElement("div");
  card.classList.add("card");

  const foodName = document.createElement("div");
  foodName.classList.add("foodName");
  foodName.textContent = food.name;

  const foodDescription = document.createElement("div");
  foodDescription.classList.add("foodDescription");
  foodDescription.textContent = food.description;

  const foodImage = document.createElement("div");
  foodImage.classList.add("foodImage");
  foodImage.style.backgroundImage = `url(${food.imageUrl})`;

  card.appendChild(foodName);
  card.appendChild(foodDescription);
  card.appendChild(foodImage);
  return card;
}

const menuList = [
  {
    name: "Nasi Uduk",
    description:
      "Fragrant coconut rice served with a variety of savory side dishes.",
    imageUrl: nasiUduk,
  },
  {
    name: "Rendang",
    description:
      "Slow-cooked, tender beef stewed in a rich and aromatic blend of spices and coconut milk",
    imageUrl: rendang,
  },
  {
    name: "Satay",
    description:
      "Skewered and grilled meat (usually chicken or beef) served with a flavorful peanut sauce",
    imageUrl: satay,
  },
  {
    name: "Nasi Goreng",
    description:
      "Indonesia's beloved fried rice dish, packed with a medley of flavors and often topped with a fried egg.",
    imageUrl: nasiGoreng,
  },
  {
    name: "Soto Ayam",
    description:
      "A comforting and aromatic chicken soup with rice, turmeric, and a medley of herbs and spices.",
    imageUrl: sotoAyam,
  },
  {
    name: "Bakso",
    description:
      "A beloved Indonesian meatball soup with clear broth, rice noodles, and a variety of meatballs, typically made from beef or chicken.",
    imageUrl: bakso,
  },
];

export { loadMenu };
