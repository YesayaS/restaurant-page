import { loadHome } from "./home";
import { loadContact } from "./contact";
import { loadMenu } from "./menu";
import "./style.css";

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

  const home = document.createElement("a");
  home.classList.add("nav__a");
  home.textContent = "Home";
  home.addEventListener("click", (e) => {
    loadHome(contentClass);
  });

  const menu = document.createElement("a");
  menu.classList.add("nav__a");
  menu.textContent = "Menu";
  menu.addEventListener("click", (e) => {
    loadMenu(contentClass);
  });

  const contact = document.createElement("a");
  contact.classList.add("nav__a");
  contact.textContent = "Contact";
  contact.addEventListener("click", (e) => {
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

  const restaurantTitle = document.createElement("h1");
  restaurantTitle.textContent = "Copyright © YesayaS";

  footer.appendChild(restaurantTitle);
  return footer;
}

function initializeWebpage() {
  const body = document.body;

  body.appendChild(createHeader());
  body.appendChild(createContent());
  body.appendChild(createFooter());

  loadMenu(contentClass);
}

initializeWebpage();
