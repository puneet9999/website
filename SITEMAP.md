# Site Map & URL Guide

## Main Navigation URLs

### Primary Pages
```
http://localhost:8000/                          Home Page
http://localhost:8000/about.html                About Us
http://localhost:8000/services.html             Services Hub
http://localhost:8000/properties.html           Property Portfolio
http://localhost:8000/gallery.html              Project Gallery
http://localhost:8000/contact.html              Contact & Inquiries
```

### Additional Pages
```
http://localhost:8000/projects.html             Legacy Projects (original page)
http://localhost:8000/calculator.html           Cost Calculator Tool
```

---

## Service Detail Pages (in `/pages/` folder)

### Full URLs
```
http://localhost:8000/pages/services-home-construction.html
http://localhost:8000/pages/services-home-renovation.html
http://localhost:8000/pages/services-nri-construction.html
http://localhost:8000/pages/services-farm-house.html
http://localhost:8000/pages/services-plot-collaboration.html
```

### Services Covered
| Service | URL | Focus |
|---------|-----|-------|
| Home Construction | `/pages/services-home-construction.html` | Turnkey construction, 6-step process, pricing models |
| Home Renovation | `/pages/services-home-renovation.html` | Kitchen, bathroom, flooring, electrical, plumbing |
| NRI Construction | `/pages/services-nri-construction.html` | 24/7 monitoring, weekly reports, bank coordination |
| Farm House | `/pages/services-farm-house.html` | Luxury retreats, customization, landscaping |
| Plot Collaboration | `/pages/services-plot-collaboration.html` | Plot development, profit sharing models |

---

## Sections & Anchors on Homepage

### Scroll-to Sections (on index.html)
```
#about              About Shiwari Builders section
#contact            Contact form section
```

### Service Tabs (on index.html)
- One-Stop Solution
- About Us
- Whom We Serve
- Our Services (5 tabs):
  - Home Construction
  - Home Renovation
  - NRI Construction
  - Farm House
  - Plot Collaboration
- What We Take Care Of
- Our Promises
- What We Offer
- Contact Us

---

## Page Directory Structure

```
website/
├── index.html                                   HOME PAGE
├── about.html                                   ABOUT PAGE
├── services.html                                SERVICES HUB
├── properties.html                              PROPERTIES/PORTFOLIO
├── gallery.html                                 GALLERY
├── contact.html                                 CONTACT PAGE
├── projects.html                                LEGACY PROJECTS PAGE
├── calculator.html                              COST CALCULATOR
├── style.css                                    MAIN STYLESHEET
├── server.py                                    HTTP SERVER
├── README.md                                    DOCUMENTATION
├── BUILD_SUMMARY.md                             BUILD SUMMARY
├── SITEMAP.md                                   THIS FILE
└── pages/                                       SERVICE DETAIL PAGES
    ├── services-home-construction.html
    ├── services-home-renovation.html
    ├── services-nri-construction.html
    ├── services-farm-house.html
    └── services-plot-collaboration.html
```

---

## Global Navigation Menu (on all pages)

All pages include this header navigation:
```
Home        →  /
About       →  /about.html
Services    →  /services.html
Properties  →  /properties.html
Gallery     →  /gallery.html
Contact     →  /contact.html

CTA Button: "Get Quote" → /contact.html
```

---

## Forms & Contact Points

### Contact Forms Available
1. **Homepage** (#contact section) — General inquiry
2. **Services Page** (#contact section) — Service selection form
3. **Home Construction** (/pages/services-home-construction.html) — Service-specific
4. **Home Renovation** (/pages/services-home-renovation.html) — Service-specific
5. **NRI Construction** (/pages/services-nri-construction.html) — NRI-specific
6. **Farm House** (/pages/services-farm-house.html) — Service-specific
7. **Plot Collaboration** (/pages/services-plot-collaboration.html) — Service-specific
8. **Contact Page** (/contact.html) — Primary contact page with full form

### Direct Contact Information (same on all pages)
- **Email:** shiwari@gmail.com
- **Phone:** +91 99999 99999
- **Address:** Faridabad / Gurgaon, Haryana, India
- **Hours:** 9 AM - 7 PM (Daily)

---

## Properties Displayed

### Delivered Projects
1. Green Valley Homes, Sector 8 (3BHK, 1200 sq.ft)
2. Sunshine Residency, Sector 19 (2BHK, 900 sq.ft)

### Ongoing Projects
3. Urban Heights, Sector 37 (3BHK & 4BHK, Expected Q3 2026)
4. Royal Villas, Gurgaon (4BHK, Expected Q4 2026)

### Upcoming Projects
5. Skyline Towers, Sector 21 (Mixed-use, Launch Q2 2026)
6. City Square, Sector 15 (Plotted, Pre-launch)

*All with images, descriptions, and "View Details" links*

---

## Gallery Content

### Photo Gallery
- 12 construction phase photos
- Foundation work
- Steel reinforcement
- RCC & masonry
- Electrical & plumbing
- Interiors & finishes
- Kitchen & bathroom
- Community spaces

### Video Section
- 4 construction videos/timelapse
- Foundation work
- Structural construction
- Finishing & interiors
- Home walkthrough

---

## Tools & Utilities

### Cost Calculator (`/calculator.html`)
**Inputs:**
- Built-up area (sq.ft)
- Rate per sq.ft (default ₹1800)
- Number of floors
- Finishing & interiors (%)

**Outputs:**
- Total built-up area
- Base construction cost
- Finishing cost
- Estimated total cost

---

## FAQ Content (on /contact.html)

1. What is your typical project timeline?
2. Do you provide fixed-price contracts?
3. Can NRIs use your services?
4. Do you handle approvals and permits?
5. What about post-handover support?
6. How do I get a free cost estimate?

---

## Service Coverage Areas

- **Faridabad** — All sectors and localities
- **Gurgaon** — All sectors and localities
- **Surrounding Areas** — Noida, Greater Noida, and nearby NCR (case-by-case)

---

## Quick Links Reference

### For Homeowners
1. Start at: `/` (Homepage)
2. Browse: `/services.html` → Choose service
3. Read details: `/pages/services-home-construction.html`
4. Get quote: `/contact.html`

### For NRIs
1. Start at: `/` (Homepage)
2. Go to: `/services.html`
3. Click: "NRI Construction Services"
4. Details: `/pages/services-nri-construction.html`
5. Contact: `/contact.html`

### For Investors (Plot Collaboration)
1. Start at: `/` (Homepage)
2. Go to: `/services.html`
3. Click: "Plot Collaboration"
4. Details: `/pages/services-plot-collaboration.html`
5. Contact: `/contact.html`

### View Portfolio
1. **Properties:** `/properties.html` (with filters)
2. **Gallery:** `/gallery.html` (photos & videos)
3. **Legacy Projects:** `/projects.html`

### Estimate Costs
- **Calculator:** `/calculator.html`

### Get Info
- **About:** `/about.html`
- **Contact:** `/contact.html`

---

## Meta Information

**Domain:** localhost:8000 (local development)
**Production:** Ready to deploy to any web host
**Server:** Python SimpleHTTPServer (included)
**Protocol:** HTTP (change to HTTPS in production)
**SSL:** Add SSL certificate for production

**Last Updated:** April 18, 2026
**Version:** 1.0
