function loadMenu(contentClass) {
  const content = document.querySelector(`.${contentClass}`);
  content.removeAttribute("class");
  content.classList.add(contentClass, "home");
  content.textContent = "";

  const hookText = document.createElement("h2");
  hookText.textContent = "Menu.";

  content.appendChild(hookText);
  return content;
}

export { loadMenu };
