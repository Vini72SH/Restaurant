import "./style.css"
import { loadHomePage } from './homeLoad.js';
import { loadMenuPage } from "./menuLoad.js";
import { loadAboutPage } from "./aboutPage.js";
const content = document.querySelector("#content");
const homeButton = document.querySelector("#home-button");
const menuButton = document.querySelector("#menu-button");
const aboutButton = document.querySelector("#about-button");

function selectButton(button) {
    button.style.backgroundColor = "black";
    button.style.color = "#FFD700";
}

function unselectButton(button) {
    button.style.backgroundColor = "#FFD700";
    button.style.color = "black";
}

function render() {
    while (content.children.length >= 1) {
        content.children[0].remove();
    }
}

let current = homeButton;
selectButton(homeButton);
loadHomePage(content);

homeButton.addEventListener("click", () => {
    if (current != homeButton) {
        render();
        unselectButton(current);
        current = homeButton;
        selectButton(current);
        loadHomePage(content);
    }
});

menuButton.addEventListener("click", () => {
    if (current != menuButton) {
        render();
        unselectButton(current);
        current = menuButton;
        selectButton(current);
        loadMenuPage(content);
    }
});

aboutButton.addEventListener("click", () => {
    if (current != aboutButton) {
        render();
        unselectButton(current);
        current = aboutButton;
        selectButton(current);
        loadAboutPage(content);
    }
});