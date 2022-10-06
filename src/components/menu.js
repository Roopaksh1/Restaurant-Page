import "../styles/menu.css";
import menuImg from "../images/menu.png";
import hamBurger from "../images/hamBurger.png"
import frenchFries from "../images/frenchFries.png"
import cheeseBurger from "../images/cheeseBurger.png"
import hotdog from "../images/hotdog.png"
import pizza from "../images/pizza.png"
import chocoCone from "../images/chocoCone.png"

const insertItem = (image, name, price, parent) => {
  const item = document.createElement("div");
  item.classList.add("item");
  const div = document.createElement("div");
  const p = document.createElement("p");
  div.innerHTML = `<img src=${image}>`;
  p.innerText = `${name} $${price}`;
  item.append(div, p);
  parent.appendChild(item);
};

const menu = () => {
  document.body.style.background = `url(${menuImg}) no-repeat center center fixed`;
  document.body.style.backgroundSize = "cover";
  const menu = document.createElement("div");
  menu.classList.add("menu");
  insertItem(hamBurger, "HamBurger", 3.99, menu);
  insertItem(frenchFries, "French Fries", 1.99, menu);
  insertItem(cheeseBurger, "Cheese Burger", 5.99, menu);
  insertItem(hotdog, "Hot Dog", 3.99, menu);
  insertItem(pizza, "Pizza", 2.99, menu);
  insertItem(chocoCone, "ChocoCone", 1.99, menu);
  return menu;
};

export default menu;
