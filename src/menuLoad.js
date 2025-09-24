import sausageImage from "./images/sausage.jpg";
import portugueseImage from "./images/portuguese.jpg";
import pepperImage from "./images/pepper.jpg";
import pineappleImage from "./images/pineapple.jpg";
import champignonImage from "./images/champignon.jpg";
import redpepperImage from "./images/redpepper.jpg";
import broccoliImage from "./images/broccoli.jpg";
import shrimpImage from "./images/shrimp.jpg";
import tomatoImage from "./images/tomato.jpg";

const pizzas = [
    {
        name: "Sausage",
        desc: "Some text",
        img: sausageImage
    },
    {
        name: "Portuguese",
        desc: "Some text",
        img: portugueseImage
    },
    {
        name: "Pepper",
        desc: "Some text",
        img: pepperImage
    },
    {
        name: "Pineapple",
        desc: "Some text",
        img: pineappleImage
    },
    {
        name: "Champignon",
        desc: "Some text",
        img: champignonImage
    },
    {
        name: "Redpepper",
        desc: "Some text",
        img: redpepperImage
    },
    {
        name: "Broccoli",
        desc: "Some text",
        img: broccoliImage
    },
    {
        name: "Shrimp",
        desc: "Some text",
        img: shrimpImage
    },
    {
        name: "Tomato",
        desc: "Some text",
        img: tomatoImage
    }
];

export function loadMenuPage(content) {
    const gridDiv = document.createElement("div");
    gridDiv.className = "menu-grid";

    content.appendChild(gridDiv);

    for (let i = 0; i < pizzas.length; ++i) {
        const gridItem = document.createElement("div");
        const divText = document.createElement("div");
        const pizzaImage = document.createElement("img");
        const h1Text = document.createElement("h1");
        const desc = document.createElement("p");

        gridItem.className = "grid-item";

        let pizza = pizzas[i];

        h1Text.textContent = pizza.name + " Pizza";
        desc.textContent = pizza.desc;

        divText.appendChild(h1Text);
        divText.appendChild(desc);

        pizzaImage.src = pizza.img;
        pizzaImage.className = "pizza-img";

        gridItem.appendChild(pizzaImage);
        gridItem.appendChild(divText);

        gridDiv.appendChild(gridItem);
    }
}