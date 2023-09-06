function loadHome(contentClass) {
  const content = document.querySelector(`.${contentClass}`);
  content.textContent = "";
  const hookText = document.createElement("div");
  hookText.textContent =
    "Embark on a culinary journey to the heart of Indonesia, where flavors come alive with every bite.";
  content.appendChild(hookText);
  return content;
}

export { loadHome };
