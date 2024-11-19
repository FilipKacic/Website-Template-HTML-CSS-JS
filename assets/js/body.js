// HEADER

// Variables to track scroll behavior
let lastScrollTop = 0;
const header = document.querySelector("header");

// Hide and show header on scroll
window.addEventListener("scroll", () => {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scroll down - hide entire header
        header.style.transform = "translateY(-100%)";
    } else {
        // Scroll up - show entire header
        header.style.transform = "translateY(0)";
    }

    lastScrollTop = scrollTop;
});

// MAIN

// sections
const sections = document.querySelectorAll("section");

// Create an IntersectionObserver instance
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-from-bottom");
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 }); // Trigger animation when 10% of the section is in the viewport

// Observe each section
sections.forEach((section) => observer.observe(section));

// Download the pdf file when the download_pdf_btn is clicked
document.getElementById("download_pdf_btn").addEventListener("click", function() {
    const link = document.createElement("a");
    link.href = "assets/docs/lorem.pdf";
    link.download = "lorem.pdf";
    link.click();
});

// FOOTER

// Get the current year and set it in the footer
document.getElementById("current_year").textContent = new Date().getFullYear();

// Retrieve the author's name from the meta tag and set it in the footer
const authorMeta = document.querySelector('meta[name="author"]');
if (authorMeta) {
  document.getElementById("copyright_holder").textContent = ` ${authorMeta.content}`;
}