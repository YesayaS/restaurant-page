function loadContact(contentClass) {
  const content = document.querySelector(`.${contentClass}`);
  content.removeAttribute("class");
  content.classList.add(contentClass, "contact");
  content.textContent = "";

  const contact = createContact();
  const credit = createCredit();

  content.appendChild(contact);
  content.appendChild(credit);

  return content;
}

function createCard() {
  const card = document.createElement("div");
  card.classList.add("contact-card");
  return card;
}

function createContact() {
  const card = createCard("");

  const contactUs = document.createElement("div");
  contactUs.classList.add("contact-head");
  contactUs.textContent = "Contact Us :";

  const telephone = document.createElement("div");
  telephone.classList.add("telephone");
  telephone.textContent = "Telephone : +0123456789";

  const email = document.createElement("div");
  email.classList.add("email");
  email.textContent = "Email : rasa.nusantara@example.com";

  const location = document.createElement("div");
  location.classList.add("location");
  location.textContent = "Location : Right about there, yeah there!";

  card.appendChild(contactUs);
  card.appendChild(telephone);
  card.appendChild(email);
  card.appendChild(location);

  return card;
}

function createCredit() {
  const card = createCard();
  card.classList.add("credits");

  const header = document.createElement("div");
  header.classList.add("contact-head");
  header.textContent = "Resources / Assets Used";
  card.appendChild(header);

  credits.forEach((credit) => {
    const container = document.createElement("div");
    container.classList.add("credit");
    container.textContent = credit;
    card.appendChild(container);
  });

  return card;
}

const credits = [
  "Photo by Ida Rizkha: https://www.pexels.com/photo/salad-with-fresh-vegetables-and-eggs-3008740/",
  "Photo by Suhairy  Tri Yadhi: https://www.pexels.com/photo/nasi-lemak-served-on-banana-leaf-11912788/",
  "Photo by Nadim Shaikh: https://www.pexels.com/photo/appetizing-asian-dish-with-rice-7758253/",
  "Image by valeria_aksakova on Freepik",
  "Image by 8photo on Freepik",
  "Image by jcomp on Freepik",
];

export { loadContact };
