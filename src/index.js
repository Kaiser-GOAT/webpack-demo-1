import x from "./x.js";
import jpg from "./assets/11.jpg";
console.log(jpg);
console.log(x);
const div = document.getElementById("pp1");
div.innerHTML = `
<img src = "${jpg}">
`;
const button = document.createElement("button");
button.innerText = "懒加载";
div.appendChild(button);
button.onclick = () => {
  const promise = import("./lazy.js");
  promise.then(
    (module) => {
      const fn = module.default;
      fn();
    },
    () => {}
  );
};
