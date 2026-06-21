const header = document.getElementById("nomPseudoHeader");

function changeText(newText) {
    header.style.opacity = "0"; // fade out

    setTimeout(() => {
        header.textContent = newText; // changer le texte
        header.style.opacity = "1";   // fade in
    }, 300);
}

document.addEventListener("mouseover", (event) => {
    if (event.target.id === "nomPseudoHeader") {
        changeText("Maxou Pixou");
    }
});

document.addEventListener("mouseout", (event) => {
    if (event.target.id === "nomPseudoHeader") {
        changeText("Maxence Véchambre");
    }
});

window.addEventListener("popstate", async () => {

    const response = await fetch(location.pathname);
    const html = await response.text();

    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");

    document.querySelector("#content").innerHTML =
        doc.querySelector("#content").innerHTML;

});