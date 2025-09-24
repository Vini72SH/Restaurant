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
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porta porttitor nisl nec blandit. Aenean id mi dapibus, volutpat magna sed, hendrerit ante. Donec sed tincidunt dui. Vivamus vitae ante nec libero condimentum fringilla.",
        img: sausageImage
    },
    {
        name: "Portuguese",
        desc: "Curabitur feugiat vehicula consequat. Sed finibus metus ac mauris blandit lacinia. Proin eu ante non est pretium bibendum. In accumsan vitae eros et malesuada. Suspendisse potenti.",
        img: portugueseImage
    },
    {
        name: "Pepper",
        desc: "Nam imperdiet, nunc ut ullamcorper pulvinar, justo mi consectetur turpis, congue cursus felis augue sollicitudin lorem. Vestibulum suscipit varius nulla, vel semper enim vulputate vitae.",
        img: pepperImage
    },
    {
        name: "Pineapple",
        desc: "In hac habitasse platea dictumst. Maecenas maximus sem nec commodo laoreet. Suspendisse ex mi, finibus lobortis augue eu, pretium porttitor enim. Nunc ut rhoncus est, eu sollicitudin metus.",
        img: pineappleImage
    },
    {
        name: "Champignon",
        desc: "In vel risus feugiat, consequat lacus eget, aliquet magna. Fusce a fermentum nibh. Quisque consectetur justo ac est tempor, eget mollis ligula auctor. Vivamus venenatis pulvinar sapien quis congue. Maecenas pharetra sit amet mi eu ultrices.",
        img: champignonImage
    },
    {
        name: "Redpepper",
        desc: "Fusce pretium mauris arcu, quis aliquet ante auctor ac. Vivamus aliquam eu magna sed blandit. Donec vel elit purus. Donec feugiat id nunc sed egestas.",
        img: redpepperImage
    },
    {
        name: "Broccoli",
        desc: "Pellentesque faucibus dictum tortor non vestibulum. Praesent fermentum ex et magna consequat, quis mollis dolor accumsan. Sed lacinia euismod ipsum eu dignissim. Sed at consectetur nisl.",
        img: broccoliImage
    },
    {
        name: "Shrimp",
        desc: "Nam non tortor vel justo vulputate faucibus sed non magna. Duis ipsum purus, viverra sed sagittis sed, vehicula at tortor. Morbi dapibus justo sed dui consequat, pharetra tempus diam accumsan.",
        img: shrimpImage
    },
    {
        name: "Tomato",
        desc: "Curabitur id nibh tristique, sollicitudin justo quis, congue sapien. Ut eu molestie odio. Curabitur semper vulputate sem, in faucibus ante malesuada pellentesque. Cras ullamcorper eu mauris ut condimentum. Sed venenatis, mi eu tincidunt vulputate, elit augue ullamcorper nulla, eget tincidunt lectus magna in neque.",
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

        divText.className = "grid-text";
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