function loadHome(contentClass) {
  const content = document.querySelector(`.${contentClass}`);
  content.removeAttribute("class");
  content.classList.add(contentClass, "home");
  content.textContent = "";

  const hookText = document.createElement("h2");
  hookText.textContent =
    "Embark on a culinary journey to the heart of Indonesia, where flavors come alive with every bite.";

  content.appendChild(hookText);
  return content;
}

export { loadHome };
