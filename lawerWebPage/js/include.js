async function includeHTML(selector, file) {
  const el = document.querySelector(selector);
  if (el) {
    const res = await fetch(file);
    el.innerHTML = await res.text();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  includeHTML("header", "/lawerWebPage/src/header.html");
  includeHTML("footer", "/lawerWebPage/src/footer.html");
});
