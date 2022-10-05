import "../styles/contact.css";
import contactImg from "../images/contactus.png"

const contact = () => {
  document.body.style.background = `url(${contactImg}) no-repeat center center fixed`;
  document.body.style.backgroundSize = "cover";
  const contact = document.createElement("div");
  return contact

}

export default contact;