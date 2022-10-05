import "../styles/header.css";

const header = () => {
  const header = document.createElement("div");
  header.classList.add("header");
  const home = document.createElement("div");
  home.textContent = "Home";
  home.classList.add("home-btn");
  const menu = document.createElement("div");
  menu.textContent = "Menu";
  menu.classList.add("menu-btn");
  const contact = document.createElement("div");
  contact.textContent = "Contact";
  contact.classList.add("contact-btn");
  header.append(home, menu, contact);

  return header;
};

export default header;
