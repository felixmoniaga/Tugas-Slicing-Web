const orderButton = document.getElementById("orderButton");

orderButton.addEventListener("click", function() {
    alert("Silakan pilih menu kopi!");
});


const buyButtons = document.querySelectorAll(".buyButton");

buyButtons.forEach(function(button) {

    button.addEventListener("click", function() {
        alert("Menu berhasil dipilih!");
    });

});

