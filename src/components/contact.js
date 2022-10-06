import "../styles/contact.css";
import contactImg from "../images/contactus.png";
import phoneImg from "../images/phone.svg";
import locationImg from "../images/location.svg";

const contact = () => {
  document.body.style.background = `url(${contactImg}) no-repeat center center fixed`;
  document.body.style.backgroundSize = "cover";
  const contact = document.createElement("div");
  contact.classList.add("contact");
  const h1 = document.createElement("h1");
  h1.textContent = "Contact Us";
  const p1 = document.createElement("p");
  const p2 = document.createElement("p");
  p1.innerHTML = `<img src=${phoneImg} width=30> 987 654 321`;
  p2.innerHTML = `<img src=${locationImg} width= 30> Restaurant`;
  const map = document.createElement("div");
  map.innerHTML = `<div class="mapouter"><div class="gmap_canvas"><iframe class="gmap_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href="https://mcpenation.com/">MCPE Nation</a></div><style>.mapouter{position:relative;text-align:right;width:600px;height:400px;}.gmap_canvas {overflow:hidden;background:none!important;width:600px;height:400px;}.gmap_iframe {width:600px!important;height:400px!important;}</style></div>`;
  contact.append(h1, p1, p2, map);

  return contact;
};

export default contact;
