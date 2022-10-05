import "../styles/menu.css";
import menuImg from "../images/menu.png"

const menu = () => {
  document.body.style.background = `url(${menuImg}) no-repeat center center fixed`;
  document.body.style.backgroundSize = "cover";
  const menu = document.createElement("div");
  return menu
}

export default menu;