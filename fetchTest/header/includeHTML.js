// includeHTML.js

function includeHTML() {
    const elements = document.querySelectorAll("[data-include]");
    elements.forEach((el) => {
        const srcFile = el.dataset.include;
        fetch(srcFile)
            .then(response => response.text())
            .then(text => {
                el.insertAdjacentHTML("beforeend", text);
                el.removeAttribute("data-include");
            })
            .catch(function(error) {
                const msg = `<p style="color: red">${error.message} <b>${srcFile}</b></p>`;
                el.innerHTML = msg;
            });
    });
}

document.addEventListener("DOMContentLoaded", () => includeHTML());
