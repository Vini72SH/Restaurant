import "./style.css"
import { loadHomePage } from './homeLoad.js';
const content = document.querySelector("#content");

function render() {
    while (content.children.length >= 1) {
        content.children[0].remove();
    }
}

loadHomePage(content);
