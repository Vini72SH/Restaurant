import imageLogo from "./images/pizzeria-logo.jpg";

export function loadHomePage(content) {
    const text = document.createElement("p");
    text.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer diam sapien, pellentesque nec lectus tempor, tempor imperdiet nunc. Mauris quis dui scelerisque, maximus felis vitae, gravida dui. Pellentesque tempor elit quis mattis efficitur. Quisque sem turpis, egestas in vehicula in, condimentum eu diam.";

    const logo = document.createElement("img");
    logo.src = imageLogo;

    const homeDiv = document.createElement("div");
    homeDiv.className = "homeDiv";

    homeDiv.appendChild(logo);
    homeDiv.appendChild(text);

    content.appendChild(homeDiv);
}