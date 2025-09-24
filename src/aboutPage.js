export function loadAboutPage(content) {
    const aboutDiv = document.createElement("div");
    aboutDiv.className = "about-div";

    const aboutH1 = document.createElement("h1");
    aboutH1.textContent = "About Us";

    const aboutParagraph = document.createElement("p");
    aboutParagraph.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porta porttitor nisl nec blandit. Aenean id mi dapibus, volutpat magna sed, hendrerit ante. Donec sed tincidunt dui. Vivamus vitae ante nec libero condimentum fringilla. Curabitur feugiat vehicula consequat. Sed finibus metus ac mauris blandit lacinia. Proin eu ante non est pretium bibendum. In accumsan vitae eros et malesuada. Suspendisse potenti. Nam imperdiet, nunc ut ullamcorper pulvinar, justo mi consectetur turpis, congue cursus felis augue sollicitudin lorem. Vestibulum suscipit varius nulla, vel semper enim vulputate vitae. In hac habitasse platea dictumst. Maecenas maximus sem nec commodo laoreet. Suspendisse ex mi, finibus lobortis augue eu, pretium porttitor enim. Nunc ut rhoncus est, eu sollicitudin metus. In vel risus feugiat, consequat lacus eget, aliquet magna. Fusce a fermentum nibh. Quisque consectetur justo ac est tempor, eget mollis ligula auctor. Vivamus venenatis pulvinar sapien quis congue. Maecenas pharetra sit amet mi eu ultrices. Fusce pretium mauris arcu, quis aliquet ante auctor ac. Vivamus aliquam eu magna sed blandit. Donec vel elit purus. Donec feugiat id nunc sed egestas. Pellentesque faucibus dictum tortor non vestibulum. Praesent fermentum ex et magna consequat, quis mollis dolor accumsan. Sed lacinia euismod ipsum eu dignissim."

    aboutDiv.appendChild(aboutH1);
    aboutDiv.appendChild(aboutParagraph);

    content.appendChild(aboutDiv);
}