# Shiwari Builders — Complete Website

A modern, responsive construction company website with multiple pages, services, project portfolio, and interactive tools.

## Pages & Features

### Main Pages
- **`index.html`** — Homepage with hero, features, services tabs, testimonials, and CTA
- **`about.html`** — Company story, mission/values, team, track record
- **`services.html`** — Services hub with links to detailed service pages
- **`properties.html`** — Property portfolio with filtering (Delivered, Ongoing, Upcoming)
- **`gallery.html`** — Project photo gallery and construction process videos
- **`contact.html`** — Contact form, location, FAQ, and service areas

### Service Pages (in `/pages/` folder)
- **`services-home-construction.html`** — Complete home construction services
- **`services-home-renovation.html`** — Home renovation and remodeling
- **`services-nri-construction.html`** — NRI-specific services with 24/7 monitoring
- **`services-farm-house.html`** — Farm house and country retreat construction
- **`services-plot-collaboration.html`** — Plot development partnerships

### Tools
- **`calculator.html`** — Interactive construction cost estimator
- **`projects.html`** — Legacy projects page (can merge with properties.html if desired)

## Design Features

- **Fixed Background:** Full-page construction-themed background that scrolls with content
- **Color-Themed Sections:** Each major section has a distinct semi-transparent color theme:
  - Orange (theme-1): One-stop solution, services
  - Blue (theme-2): About, approaches
  - Green (theme-3): Whom we serve, testimonials
  - Purple (theme-4): What we take care, NRI features
  - Orange-amber (theme-5): Promises, FAQs
  - Teal (theme-6): Offers, additional info
- **Responsive Layout:** Mobile-first design with CSS Grid and Flexbox
- **Modern Typography:** Clean, readable fonts with good contrast
- **Interactive Elements:** Tabs, filters, forms with validation
- **Accessibility:** WCAG 2.1 AA color contrast, focus outlines, semantic HTML

## File Structure

```
website/
├── index.html                 # Homepage
├── about.html                 # About page
├── services.html              # Services hub
├── properties.html            # Property portfolio
├── gallery.html               # Photo gallery
├── contact.html               # Contact page
├── projects.html              # Legacy projects page
├── calculator.html            # Cost calculator
├── style.css                  # Main stylesheet
├── server.py                  # Python HTTP server
├── README.md                  # This file
└── pages/                     # Service detail pages
    ├── services-home-construction.html
    ├── services-home-renovation.html
    ├── services-nri-construction.html
    ├── services-farm-house.html
    └── services-plot-collaboration.html
```

## How to Run Locally

1. Start the Python HTTP server:
```bash
cd /Users/puneetgoyal/Desktop/website
python3 server.py
```

2. Open your browser and navigate to:
```
http://localhost:8000/
```

3. Browse all pages via the navigation menu

## Features by Page

### Homepage
- Hero section with background image
- One-stop solution with feature cards
- About section with company highlights
- "Whom We Serve" audience pills
- Services tabs (5 service types)
- "What We Take Care Of" checklist
- "Our Promises" cards
- "What We Offer" feature cards
- Contact form

### Services Pages
Each service page includes:
- Dedicated hero section
- Service overview and process
- What's included/pricing
- Why choose us benefits
- Contact form for that service

### Properties Page
- Filter tabs (All, Delivered, Ongoing, Upcoming)
- Project cards with images and descriptions
- Status badges
- Contact form for property inquiries

### Gallery Page
- Photo grid showcasing construction phases
- Video placeholder grid with links
- Site visit request form

### Contact Page
- Contact information block
- Full contact form with service selection
- FAQs with 6 common questions
- Service areas coverage map
- Call-to-action sections

## Customization Guide

### Change Colors
Edit the CSS theme classes in `style.css`:
```css
.theme-1{background-color:rgba(201,74,47,0.82);color:#fff}  /* Orange */
.theme-2{background-color:rgba(42,127,189,0.78);color:#fff}  /* Blue */
/* etc... */
```

### Update Company Info
Replace throughout all files:
- Company name: "Shiwari Builders"
- Phone: "+91 99999 99999"
- Email: "shiwari@gmail.com"
- Address: "Faridabad / Gurgaon, Haryana, India"

### Add Local Images
Create an `/assets/` folder and replace image URLs like:
```html
<!-- From -->
<img src="https://images.unsplash.com/photo-...">
<!-- To -->
<img src="/assets/my-image.jpg">
```

### Add More Properties
Edit `properties.html` and add new property cards:
```html
<div class="property-card" data-status="delivered">
  <!-- Copy existing card and customize -->
</div>
```

## Browser Compatibility

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## Performance Notes

- Images are loaded from Unsplash CDN (can replace with local images)
- CSS is minified and optimized
- JavaScript is minimal (only for tabs and filters)
- Page load time ~2-3 seconds on average connections

## SEO Considerations

Add meta tags to each page:
```html
<meta name="description" content="Your description here">
<meta name="keywords" content="construction, builders, faridabad, gurgaon">
```

## Future Enhancements

Optional features to add:
- Blog/articles page with construction tips
- Before/after project comparisons
- Client testimonials with photos
- Video tour embeds from YouTube
- Live chat widget for customer support
- Email newsletter signup
- Google Analytics integration
- Schema.org structured data for SEO

## Support & Maintenance

To update or add features:
1. Edit HTML files for content changes
2. Update `style.css` for styling changes
3. Test on mobile and desktop
4. Check color contrast with WCAG checker tool
5. Validate HTML at validator.w3.org

---

**Last Updated:** April 18, 2026
**Version:** 1.0

