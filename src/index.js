import "./styles/global.css";
import header from "./components/header";
import footer from "./components/footer";
import home from "./components/home";
import menu from "./components/menu";
import contact from "./components/contact";

const content = document.querySelector("#content");
content.appendChild(header());
content.appendChild(home());
content.appendChild(footer());

const homeButton = document.querySelector(".home-btn");
const menuButton = document.querySelector(".menu-btn");
const contactButton = document.querySelector(".contact-btn");

const tabsHandler = (e) => {
  if (e.target.textContent === "Home") {
    homeButton.classList.add("active");
    menuButton.classList.remove("active");
    contactButton.classList.remove("active");
    content.replaceChild(home(), content.children[1]);
  } else if (e.target.textContent === "Menu") {
    homeButton.classList.remove("active");
    menuButton.classList.add("active");
    contactButton.classList.remove("active");
    content.replaceChild(menu(), content.children[1]);
  } else {
    homeButton.classList.remove("active");
    menuButton.classList.remove("active");
    contactButton.classList.add("active");
    content.replaceChild(contact(), content.children[1]);
  }
};

[...document.querySelector(".header").children].forEach((c) =>
  c.addEventListener("click", tabsHandler)
);
