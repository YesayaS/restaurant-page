function loadContact(contentClass) {
  const content = document.querySelector(`.${contentClass}`);
  content.textContent = "";
  const hookText = document.createElement("div");
  hookText.textContent = "contact";
  content.appendChild(hookText);
  return content;
}

export { loadContact };
