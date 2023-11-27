import "../src/style.css";

const content = document.querySelector(".content");
const contentChild = document.createElement("div");
contentChild.setAttribute("class", "content-child");
contentChild.innerHTML = "This is some content";
document.body.appendChild(contentChild);
