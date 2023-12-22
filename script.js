const div = document.querySelector("#output");
const p = document.createElement("p");
p.style.color = "red";
p.textContent = "Hey i'm red";
div.appendChild(p);
 const h3 = document.createElement("h3");
 h3.style.color = "blue";
 h3.innerText = "i'm a blue h3";
 div.appendChild(h3);
 const divElem = document.createElement("div");
 divElem.style.cssText = "border: 1px solid black;";
 divElem.style.backgroundColor = "pink"
 const h1 = document.createElement("h1");
 h1.textContent = "i'm in a div";
 divElem.appendChild(h1);
 const pElem = document.createElement("p");
 pElem.textContent = "and me too";
 divElem.appendChild(pElem);
 div.appendChild(divElem)

   



