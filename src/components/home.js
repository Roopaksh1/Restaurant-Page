import "../styles/home.css";

const home = () => {
  const home = document.createElement("div");
  home.classList.add("home");
  const p = document.createElement("p");
  p.innerHTML =
    "Easy way to order your food <br><span>Order Tasty & Fresh Food <span class='anytime'>anytime!</span></span><br>Just confirm your order and enjoy our delicious test delivery.";
  const button = document.createElement("button");
  button.textContent = "Order Now";
  home.append(p, button);
  return home;
};

export default home;
