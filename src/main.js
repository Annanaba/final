const toggleButton = document.getElementById("toggleButton");

const productCards = document.querySelectorAll(".product-card");

const lastTwoCards = Array.prototype.slice.call(productCards, -2);

toggleButton.addEventListener("click", function() {
    lastTwoCards.forEach(function(card) {
        if (card.classList.contains("hidden")) {
            card.classList.remove("hidden");
        } else {
            card.classList.add("hidden");
        }
    });
});


console.log('HIIII')