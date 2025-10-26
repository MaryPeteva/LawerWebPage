document.addEventListener("DOMContentLoaded", () => {
    const headers = document.querySelectorAll(".faq h3");

    headers.forEach(h3 => {
        h3.addEventListener("click", () => {
            const p = h3.nextElementSibling;
            p.classList.toggle("active");
        });
    });
});
