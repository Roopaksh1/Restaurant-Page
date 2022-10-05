import "./styles/global.css";
import header from "./components/header";
import footer from "./components/footer";
import home from "./components/home";

const content = document.querySelector("#content");
content.appendChild(header());
content.appendChild(home());
content.appendChild(footer());

const tabsHandler = (e) => {};


[...document.querySelector(".header").children].forEach((c) =>
  c.addEventListener("click", tabsHandler)
);

