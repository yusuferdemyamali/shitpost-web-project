// script.js
document.getElementById("no-button").addEventListener("click", function() {
    window.location.href = "monkey.html";
});
const button = document.getElementById("yes-button");

// Butonun fareyle üzerine gelindiğinde hareket etmesi
button.addEventListener("mouseover", function() {
    const container = document.querySelector(".container");
    const containerRect = container.getBoundingClientRect();

    // Yeni konumu belirlemek için rastgele koordinatlar
    const maxX = containerRect.width - button.offsetWidth;
    const maxY = containerRect.height - button.offsetHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    // Butonun stilini güncelle
    button.style.position = "absolute";
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
});