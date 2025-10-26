# Law Firm Website Template

A minimal, responsive static website template for a Bulgarian law office. Built with vanilla HTML, CSS and JavaScript.

## Features

- 📱 Fully responsive design with mobile-first approach
- 🎨 Clean, professional aesthetic with a green and sand color scheme
- 🔄 Reusable header and footer components
- 🍔 Responsive hamburger menu for mobile devices
- 📑 Ready-to-use page templates for:
  - Home page with services overview
  - About page
  - Legal services page
  - Blog/Articles section
  - Client testimonials
  - FAQ section
  - Contact page
  - Legal terms

## Technical Details

- **Pure HTML/CSS/JS**: No frameworks or dependencies required
- **Component Reuse**: Header/footer shared across pages via [`includeHTML`](js/include.js)
- **Modern CSS**: Uses CSS Grid, Flexbox, and media queries for responsive design
- **CSS Reset**: Custom reset styles in [styles/reset.css](styles/reset.css)
- **Color Scheme**: Professional green (#123524) and sand (#e2bc6f) palette

## Project Structure

```
lawerWebPage/
├── img/              # Images and color palette
├── js/              
│   └── include.js    # Header/footer injection script
├── src/             
│   ├── header.html   # Shared header template
│   ├── footer.html   # Shared footer template
│   └── *.html        # Page templates
└── styles/
    ├── reset.css     # CSS reset
    └── style.css     # Main stylesheet
```

## Setup & Development

1. Clone the repository
2. Serve the files using any static HTTP server
   - Required for the header/footer injection to work
   - Direct file:// access won't work due to CORS

## Customization

1. Replace placeholder texts in HTML files
2. Update contact information in footer.html
3. Replace profile image and logo
4. Modify colors in style.css if needed
   - Main colors: #123524 (green), #e2bc6f (sand)
   - Background: #FFFAF0 (floral white)

## Browser Support

- Tested on modern browsers (Chrome, Firefox, Safari, Edge)
- Uses modern CSS features like Grid and Flexbox
- Includes basic CSS reset for cross-browser consistency

## TODOs

- [ ] Replace placeholder texts with real content
- [ ] Implement contact form handling
- [ ] Add LICENSE file
- [ ] Add proper image attribution

## License

[License pending]