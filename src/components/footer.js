import "../styles/footer.css";

const footer = () => {
  const footer = document.createElement("div");
  footer.classList.add("footer");
  footer.textContent = "Created by RNS"

  return footer;
};

export default footer;
