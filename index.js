// js 구간이지만 js 파일 불러오기 용이지롱 ㅋㅋ
 // 슬라이드쇼 기능
// Initialize slideshow variables
let slideIndex = 1;
let slideTimer;
    
// Function to move to next/previous slide
function plusSlides(n) {
    clearInterval(slideTimer); // Reset timer when manually changing slides
    showSlides(slideIndex += n);
    startSlideTimer(); // Restart timer after manual change
}
    
// Function to show specific slide
function currentSlide(n) {
    clearInterval(slideTimer);
    showSlides(slideIndex = n);
    startSlideTimer();
}
    
// Main function to display slides
function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

// Reset index if out of bounds
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
                
                // Hide all slides and remove active class
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[i].classList.remove("active");
    }
                
                // Reset all dots
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
                
    // Show current slide and activate corresponding dot
    slides[slideIndex - 1].style.display = "block";
    slides[slideIndex - 1].classList.add("active");
    dots[slideIndex - 1].className += " active";
}
    
// Function to start automatic sliding
function startSlideTimer() {
    slideTimer = setInterval(() => {
        slideIndex++;
        showSlides(slideIndex);
    }, 3000);
}
    
// Initialize slideshow when page loads
document.addEventListener('DOMContentLoaded', function() {
    showSlides(slideIndex); // Show first slide
    startSlideTimer(); // Start automatic sliding
});