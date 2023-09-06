function loadMenu(contentClass) {
  console.log("test");
  const content = document.querySelector(`.${contentClass}`);
  content.textContent = "";
  const hookText = document.createElement("div");
  hookText.textContent = "menu";
  content.appendChild(hookText);
  return content;
}

export { loadMenu };
