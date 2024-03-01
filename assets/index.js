let card = document.querySelectorAll('.card');
for (cards of card) {
    cards.addEventListener('mouseover', function (event) {
        if (event.target.id === "p3") {
            event.target.setAttribute("src", "assets/image/p3new.jpg");
            return;
        } else if (event.target.id === "p5") {
            event.target.setAttribute("src", "assets/image/p5new.jpg");
            return;
        }
    });

    cards.addEventListener('mouseout', function (event) {
        if (event.target.id === "p3") {
            event.target.setAttribute("src", "assets/image/p3.jpg");
            return;
        }
        if (event.target.id === "p5") {
            event.target.setAttribute("src", "assets/image/p5.jpg");
            return;
        }
    });
}