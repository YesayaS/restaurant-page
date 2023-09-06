import { loadHome } from "./home";
import { loadContact } from "./contact";
import { loadMenu } from "./menu";

const contentClass = "content";

function createHeader() {
  const header = document.createElement("header");

  const restaurantTitle = document.createElement("h1");
  restaurantTitle.textContent = "Warung Nusantara";

  header.appendChild(restaurantTitle);
  header.appendChild(nav());
  return header;
}

function nav() {
  const nav = document.createElement("nav");

  const home = document.createElement("button");
  home.textContent = "Home";
  home.addEventListener("click", (e) => {
    loadHome(contentClass);
  });

  const menu = document.createElement("button");
  menu.textContent = "Menu";
  menu.addEventListener("click", (e) => {
    loadMenu(contentClass);
  });

  const contact = document.createElement("button");
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
  const footer = document.createElement("footer");

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

  loadHome(contentClass);
}

initializeWebpage();
