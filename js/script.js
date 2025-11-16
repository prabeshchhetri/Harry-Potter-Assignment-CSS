console.log("Magic Loaded!");

// glow effect on Buy Now button
document.addEventListener("DOMContentLoaded", () => {
    const buyButton = document.querySelector(".magic-button");

    if (buyButton) {
        buyButton.addEventListener("mouseover", () => {
            buyButton.style.boxShadow = "0 0 15px #d4b86f";
        });

        buyButton.addEventListener("mouseout", () => {
            buyButton.style.boxShadow = "none";
        });
    }
});
