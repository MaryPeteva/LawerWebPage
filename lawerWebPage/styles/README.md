
# LawerWebPage — Simple law firm static site

Minimal static website template for a Bulgarian law office. Uses plain HTML, CSS and a small client-side include script to inject shared header and footer.

## Quick overview
- Static site: open files in a browser or serve with any static HTTP server.
- Shared header/footer are injected into each page at runtime by [`includeHTML`](lawerWebPage/js/include.js).
- Styles are in [lawerWebPage/styles/style.css](lawerWebPage/styles/style.css) and a reset in [lawerWebPage/styles/reset.css](lawerWebPage/styles/reset.css).
- All pages live under [lawerWebPage/src/](lawerWebPage/src/).

## Features
- Responsive layout with a simple hamburger menu for small screens.
- Reusable header and footer included via JavaScript.
- Example service pages and blog/testimonials layout.

## Important files
- [lawerWebPage/js/include.js](lawerWebPage/js/include.js) — contains the [`includeHTML`](lawerWebPage/js/include.js) function that injects header/footer.
- Header/footer templates:
  - [lawerWebPage/src/header.html](lawerWebPage/src/header.html)
  - [lawerWebPage/src/footer.html](lawerWebPage/src/footer.html)
- Pages:
  - [lawerWebPage/src/index.html](lawerWebPage/src/index.html)
  - [lawerWebPage/src/aboutme.html](lawerWebPage/src/aboutme.html)
  - [lawerWebPage/src/blog.html](lawerWebPage/src/blog.html)
  - [lawerWebPage/src/contacts.html](lawerWebPage/src/contacts.html)
  - [lawerWebPage/src/faq.html](lawerWebPage/src/faq.html)
  - [lawerWebPage/src/mnenia.html](lawerWebPage/src/mnenia.html)
  - [lawerWebPage/src/pravniUsl.html](lawerWebPage/src/pravniUsl.html)
  - [lawerWebPage/src/uslovia.html](lawerWebPage/src/uslovia.html)
- Styles:
  - [lawerWebPage/styles/style.css](lawerWebPage/styles/style.css)
  - [lawerWebPage/styles/reset.css](lawerWebPage/styles/reset.css)
- Assets:
  - [lawerWebPage/img/palette.txt](lawerWebPage/img/palette.txt)

## Development notes
- includeHTML logic:
  - Injects `header` and `footer` by fetching the corresponding files on DOMContentLoaded. See [`includeHTML`](lawerWebPage/js/include.js).
  - When testing locally, serve over HTTP to avoid CORS/file:// restrictions.
- Links in footer/header use absolute paths like `/lawerWebPage/src/...`. Adjust if you host the site at a different base path.
- CSS variables are not used; palette hints exist in [lawerWebPage/img/palette.txt](lawerWebPage/img/palette.txt).

## TODOs
- Replace placeholder texts and profile image with real content.
- Fix a few broken links in [lawerWebPage/src/footer.html](lawerWebPage/src/footer.html) (duplicate `##` or `/2//`).
- Add metadata and favicons.
- Add form handling for contact page if needed.
- Add a LICENSE to publish.
