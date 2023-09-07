import { loadHome } from "./home";
import { loadContact } from "./contact";
import { loadMenu } from "./menu";
import "./style.css";
import githubImg from "./github-mark-white.png";

const contentClass = "content";

function createHeader() {
  const header = document.createElement("div");
  header.classList.add("header");

  const restaurantTitle = document.createElement("div");
  restaurantTitle.textContent = "Warung Nusantara";

  header.appendChild(nav());
  header.appendChild(restaurantTitle);
  return header;
}

function nav() {
  const nav = document.createElement("div");
  nav.classList.add("nav");

  const removeUnderline = () => {
    home.classList.remove("nav__a--active");
    menu.classList.remove("nav__a--active");
    contact.classList.remove("nav__a--active");
  };

  const home = document.createElement("a");
  home.classList.add("nav__a", "nav__a--active");
  home.textContent = "Home";
  home.addEventListener("click", (e) => {
    removeUnderline();
    home.classList.add("nav__a--active");
    loadHome(contentClass);
  });

  const menu = document.createElement("a");
  menu.classList.add("nav__a");
  menu.textContent = "Menu";
  menu.addEventListener("click", (e) => {
    removeUnderline();
    menu.classList.add("nav__a--active");
    loadMenu(contentClass);
  });

  const contact = document.createElement("a");
  contact.classList.add("nav__a");
  contact.textContent = "Contact";
  contact.addEventListener("click", (e) => {
    removeUnderline();
    contact.classList.add("nav__a--active");
    loadContact(contentClass);
  });

  nav.appendChild(home);
  nav.appendChild(menu);
  nav.appendChild(contact);

  return nav;
}

function createContent() {
  const content = document.createElement("div");
  content.classList.add(contentClass);
  return content;
}

function createFooter() {
  const footer = document.createElement("div");
  footer.classList.add("footer");

  const restaurantTitle = document.createElement("a");
  restaurantTitle.classList.add("github-link");
  restaurantTitle.textContent = "YesayaS ";
  restaurantTitle.href = "https://github.com/YesayaS/restaurant-page/tree/main";

  const img = document.createElement("img");
  img.src = githubImg;
  restaurantTitle.appendChild(img);

  footer.appendChild(restaurantTitle);
  return footer;
}

function initializeWebpage() {
  const body = document.body;

  body.appendChild(createHeader());
  body.appendChild(createContent());
  body.appendChild(createFooter());

  loadHome(contentClass);
}

initializeWebpage();
