# AICCO LIGHTING Static Website Package

This is a complete static B2B website for an automotive LED lighting business.

## Files

- `index.html` - Home page
- `products.html` - Product listing page
- `product.html` - Dynamic product detail template using JavaScript query parameter
- `oem.html` - OEM & ODM service page
- `about.html` - About page
- `contact.html` - Contact page with mailto inquiry form
- `assets/css/styles.css` - Website styling
- `assets/js/main.js` - Product data, filters, tabs, contact form behavior
- `assets/images/` - Logo, hero image and placeholder product SVG images

## How to deploy

1. Upload the entire folder to your static hosting platform or to AccioWork/AiccoWork file workspace.
2. Set `index.html` as the entry page.
3. Replace placeholder contact info:
   - `sales@example.com`
   - `+86 000 0000 0000`
   - `Add your Alibaba store link`
4. Replace SVG placeholder product images in `assets/images/` with real product images using the same filenames, or update image paths in `assets/js/main.js`.
5. Edit product data inside `assets/js/main.js` when adding or changing products.

## Product detail page URL examples

- `product.html?id=4-inch-led-work-light`
- `product.html?id=330w-off-road-driving-light`
- `product.html?id=220w-led-work-fog-light`

## Notes

This version is static HTML/CSS/JavaScript and does not require a backend. The contact form opens the visitor's email app using `mailto:`. For a production site, you can connect the form to Formspree, Netlify Forms, Cloudflare Workers, or your own backend.
