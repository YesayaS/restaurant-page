"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["main"],{

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadContact: () => (/* binding */ loadContact)
/* harmony export */ });
function loadContact(contentClass) {
  const content = document.querySelector(`.${contentClass}`);
  content.textContent = "";
  const hookText = document.createElement("div");
  hookText.textContent = "contact";
  content.appendChild(hookText);
  return content;
}




/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadHome: () => (/* binding */ loadHome)
/* harmony export */ });
function loadHome(contentClass) {
  const content = document.querySelector(`.${contentClass}`);
  content.textContent = "";
  const hookText = document.createElement("div");
  hookText.textContent =
    "Embark on a culinary journey to the heart of Indonesia, where flavors come alive with every bite.";
  content.appendChild(hookText);
  return content;
}




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");




const contentClass = "content";

function createHeader() {
  const header = document.createElement("header");
  // header.classList.add(header)

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
    (0,_home__WEBPACK_IMPORTED_MODULE_0__.loadHome)(contentClass);
  });

  const menu = document.createElement("button");
  menu.textContent = "Menu";
  menu.addEventListener("click", (e) => {
    (0,_menu__WEBPACK_IMPORTED_MODULE_2__.loadMenu)(contentClass);
  });

  const contact = document.createElement("button");
  contact.textContent = "Contact";
  contact.addEventListener("click", (e) => {
    (0,_contact__WEBPACK_IMPORTED_MODULE_1__.loadContact)(contentClass);
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

  (0,_home__WEBPACK_IMPORTED_MODULE_0__.loadHome)(contentClass);
}

initializeWebpage();


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadMenu: () => (/* binding */ loadMenu)
/* harmony export */ });
function loadMenu(contentClass) {
  console.log("test");
  const content = document.querySelector(`.${contentClass}`);
  content.textContent = "";
  const hookText = document.createElement("div");
  hookText.textContent = "menu";
  content.appendChild(hookText);
  return content;
}




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0EsNkNBQTZDLGFBQWE7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDdUI7Ozs7Ozs7Ozs7Ozs7OztBQ1R2QjtBQUNBLDZDQUE2QyxhQUFhO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDb0I7Ozs7Ozs7Ozs7Ozs7OztBQ1ZjO0FBQ007QUFDTjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLCtDQUFRO0FBQ1osR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSwrQ0FBUTtBQUNaLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUkscURBQVc7QUFDZixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLCtDQUFRO0FBQ1Y7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN4RUE7QUFDQTtBQUNBLDZDQUE2QyxhQUFhO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ29CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGxvYWRDb250YWN0KGNvbnRlbnRDbGFzcykge1xyXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtjb250ZW50Q2xhc3N9YCk7XHJcbiAgY29udGVudC50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgY29uc3QgaG9va1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGhvb2tUZXh0LnRleHRDb250ZW50ID0gXCJjb250YWN0XCI7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChob29rVGV4dCk7XHJcbiAgcmV0dXJuIGNvbnRlbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGxvYWRDb250YWN0IH07XHJcbiIsImZ1bmN0aW9uIGxvYWRIb21lKGNvbnRlbnRDbGFzcykge1xyXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtjb250ZW50Q2xhc3N9YCk7XHJcbiAgY29udGVudC50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgY29uc3QgaG9va1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGhvb2tUZXh0LnRleHRDb250ZW50ID1cclxuICAgIFwiRW1iYXJrIG9uIGEgY3VsaW5hcnkgam91cm5leSB0byB0aGUgaGVhcnQgb2YgSW5kb25lc2lhLCB3aGVyZSBmbGF2b3JzIGNvbWUgYWxpdmUgd2l0aCBldmVyeSBiaXRlLlwiO1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaG9va1RleHQpO1xyXG4gIHJldHVybiBjb250ZW50O1xyXG59XHJcblxyXG5leHBvcnQgeyBsb2FkSG9tZSB9O1xyXG4iLCJpbXBvcnQgeyBsb2FkSG9tZSB9IGZyb20gXCIuL2hvbWVcIjtcclxuaW1wb3J0IHsgbG9hZENvbnRhY3QgfSBmcm9tIFwiLi9jb250YWN0XCI7XHJcbmltcG9ydCB7IGxvYWRNZW51IH0gZnJvbSBcIi4vbWVudVwiO1xyXG5cclxuY29uc3QgY29udGVudENsYXNzID0gXCJjb250ZW50XCI7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XHJcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcclxuICAvLyBoZWFkZXIuY2xhc3NMaXN0LmFkZChoZWFkZXIpXHJcblxyXG4gIGNvbnN0IHJlc3RhdXJhbnRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICByZXN0YXVyYW50VGl0bGUudGV4dENvbnRlbnQgPSBcIldhcnVuZyBOdXNhbnRhcmFcIjtcclxuXHJcbiAgaGVhZGVyLmFwcGVuZENoaWxkKHJlc3RhdXJhbnRUaXRsZSk7XHJcbiAgaGVhZGVyLmFwcGVuZENoaWxkKG5hdigpKTtcclxuICByZXR1cm4gaGVhZGVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBuYXYoKSB7XHJcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcclxuXHJcbiAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgaG9tZS50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xyXG4gIGhvbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICBsb2FkSG9tZShjb250ZW50Q2xhc3MpO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICBtZW51LnRleHRDb250ZW50ID0gXCJNZW51XCI7XHJcbiAgbWVudS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgIGxvYWRNZW51KGNvbnRlbnRDbGFzcyk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIGNvbnRhY3QudGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIjtcclxuICBjb250YWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgbG9hZENvbnRhY3QoY29udGVudENsYXNzKTtcclxuICB9KTtcclxuXHJcbiAgbmF2LmFwcGVuZENoaWxkKGhvbWUpO1xyXG4gIG5hdi5hcHBlbmRDaGlsZChtZW51KTtcclxuICBuYXYuYXBwZW5kQ2hpbGQoY29udGFjdCk7XHJcblxyXG4gIHJldHVybiBuYXY7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNvbnRlbnQoKSB7XHJcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29udGVudC5jbGFzc0xpc3QuYWRkKGNvbnRlbnRDbGFzcyk7XHJcbiAgcmV0dXJuIGNvbnRlbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUZvb3RlcigpIHtcclxuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xyXG5cclxuICBjb25zdCByZXN0YXVyYW50VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgcmVzdGF1cmFudFRpdGxlLnRleHRDb250ZW50ID0gXCJDb3B5cmlnaHQgwqkgWWVzYXlhU1wiO1xyXG5cclxuICBmb290ZXIuYXBwZW5kQ2hpbGQocmVzdGF1cmFudFRpdGxlKTtcclxuICByZXR1cm4gZm9vdGVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0aWFsaXplV2VicGFnZSgpIHtcclxuICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcclxuXHJcbiAgYm9keS5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIoKSk7XHJcbiAgYm9keS5hcHBlbmRDaGlsZChjcmVhdGVDb250ZW50KCkpO1xyXG4gIGJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vdGVyKCkpO1xyXG5cclxuICBsb2FkSG9tZShjb250ZW50Q2xhc3MpO1xyXG59XHJcblxyXG5pbml0aWFsaXplV2VicGFnZSgpO1xyXG4iLCJmdW5jdGlvbiBsb2FkTWVudShjb250ZW50Q2xhc3MpIHtcclxuICBjb25zb2xlLmxvZyhcInRlc3RcIik7XHJcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2NvbnRlbnRDbGFzc31gKTtcclxuICBjb250ZW50LnRleHRDb250ZW50ID0gXCJcIjtcclxuICBjb25zdCBob29rVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgaG9va1RleHQudGV4dENvbnRlbnQgPSBcIm1lbnVcIjtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKGhvb2tUZXh0KTtcclxuICByZXR1cm4gY29udGVudDtcclxufVxyXG5cclxuZXhwb3J0IHsgbG9hZE1lbnUgfTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9