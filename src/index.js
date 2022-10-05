import "./styles/global.css";
import header from "./components/header";
import footer from "./components/footer";

const content = document.querySelector("#content");
content.appendChild(header());
content.appendChild(footer());
