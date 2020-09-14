function createWaterDroplets() {
    const droplets = document.createElement("div");
    droplets.classList.add("droplets");

    droplets.style.left = Math.random() * 100 + "vw";
    droplets.style.animationDuration = Math.random() * 2 + 3 + "s";

    droplets.innerText = "💧";

    document.body.appendChild(droplets);

    setTimeout(() => {
        droplets.remove();
    }, 5000);
}

setInterval(createWaterDroplets, 300);
