// Add a click event listener to all links on the page
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default link behavior

        // Get the target element by its ID
        const targetElement = document.querySelector(this.getAttribute(
            'href'));

        // If the target element exists, scroll to it
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


/* ======================== */
/* ===== Nav Menu code ===== */
/* ======================== */
$(document).ready(function() {

    $(".menuButton").click(function() {
        if ($(".navMenu").attr("data-menu") == "active") {
            $(".navMenu").attr("data-menu", "inactive");
        } else {
            $(".navMenu").attr("data-menu", "active");
        }
    });

    $(".menuButtonClose").click(function() {
        if ($(".navMenu").attr("data-menu") == "active") {
            $(".navMenu").attr("data-menu", "inactive");
        } else {
            $(".navMenu").attr("data-menu", "active");
        }
    });

});