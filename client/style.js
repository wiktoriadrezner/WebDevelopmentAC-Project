document.addEventListener("DOMContentLoaded", function () {
    let slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    function showSlide(n) {
        slides[currentSlide].style.opacity = 0;
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].style.opacity = 1;
    }

    function startSlideshow() {
        showSlide(currentSlide);
        setInterval(function () {
            showSlide(currentSlide + 1);
        }, 8000); // Adjust the interval as needed (milliseconds)
    }

    startSlideshow(); // Start the slideshow as soon as the DOM is ready
});
