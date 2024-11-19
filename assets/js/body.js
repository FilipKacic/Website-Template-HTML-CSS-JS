// MAIN

// Download the pdf file when the download_pdf_btn is clicked
document.getElementById("download_pdf_btn").addEventListener("click", function() {
    const link = document.createElement("a");
    link.href = "assets/docs/degree.pdf";
    link.download = "degree.pdf";
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