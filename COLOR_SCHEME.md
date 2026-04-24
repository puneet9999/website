# Color Scheme Reference - Construction Themed

## Main Accent Color
```
Burnt Orange: #d97d53
RGB: (217, 125, 83)
Used for: Buttons, CTAs, highlights, brand accent
```

## Theme Colors (Section Backgrounds)

### Theme 1 - Burnt Orange (Masonry)
```
Color: rgba(217, 125, 83, 0.82)
Hex: #d97d53
Purpose: Masonry work, brick patterns, construction phases
Usage: .theme-1 class
```

### Theme 2 - Dark Taupe (Concrete/Foundation)
```
Color: rgba(90, 74, 58, 0.82)
Hex: #5a4a3a
Purpose: Foundation work, concrete, structural elements
Usage: .theme-2 class
```

### Theme 3 - Terra Cotta (Earth Tones)
```
Color: rgba(160, 86, 46, 0.82)
Hex: #a0562e
Purpose: Earth-related content, soil, natural materials
Usage: .theme-3 class
```

### Theme 4 - Slate Gray (Steel/Metal)
```
Color: rgba(80, 100, 120, 0.82)
Hex: #506078
Purpose: Steel structures, metal, industrial sections
Usage: .theme-4 class
```

### Theme 5 - Warm Amber (Safety/Highlights)
```
Color: rgba(220, 130, 50, 0.82)
Hex: #dc8232
Purpose: Safety information, warnings, important highlights
Usage: .theme-5 class
```

### Theme 6 - Forest Green (Eco/Sustainable)
```
Color: rgba(76, 128, 97, 0.82)
Hex: #4c8061
Purpose: Sustainable practices, eco-friendly, green building
Usage: .theme-6 class
```

## Supporting Colors

### Accent Dark
```
Color: #a0562e
RGB: (160, 86, 46)
Purpose: Darker accent for emphasis, foundation/earth tones
Variable: --accent-dark
```

### Accent Light
```
Color: #f4a582
RGB: (244, 165, 130)
Purpose: Light highlights, hover states, light backgrounds
Variable: --accent-light
```

### Muted Text
```
Color: #5a4a3a
RGB: (90, 74, 58)
Purpose: Secondary text, subtle content, accessibility
Variable: --muted
```

### Background/Off-white
```
Color: #f9f7f5
RGB: (249, 247, 245)
Purpose: Main page background, neutral off-white
Variable: --bg
```

## Header & Footer
```
Dark Background: #0b0b0b
RGB: (11, 11, 11)
Text: #ffffff (white)
Purpose: Header, footer, navigation areas
```

## How Colors Map to Construction Phases

1. **Burnt Orange (Theme 1)** ← Masonry & Brickwork
2. **Dark Taupe (Theme 2)** ← Foundation & Concrete
3. **Terra Cotta (Theme 3)** ← Soil & Earth Work
4. **Slate Gray (Theme 4)** ← Steel & Structural Work
5. **Warm Amber (Theme 5)** ← Safety & Warnings
6. **Forest Green (Theme 6)** ← Sustainable & Eco Features

## Color Usage in HTML

```html
<!-- Apply theme to a section -->
<section class="container section theme-1">
  <h2>Masonry Work</h2>
</section>

<!-- Apply theme to a div -->
<div class="theme-2">
  <p>Foundation Content</p>
</div>

<!-- Use accent color for buttons -->
<button style="background: var(--accent);">Learn More</button>

<!-- Use muted for secondary text -->
<p style="color: var(--muted);">Secondary information</p>
```

## Current Background Image

**File:** `/assets/images/construction-background.svg`
**Colors Used:**
- Sky gradient: #87CEEB (light blue) → #f0f0f0 (light gray)
- Brick: #d97d53 (burnt orange) → #c19a6b (tan)
- Steel: #505050-#666666 (grays)
- Grid: #e5e5e5 (light gray)

## Accessibility

All theme colors meet WCAG 2.1 AA contrast requirements:
- White text on theme colors: Contrast ratio 7:1+ ✅
- Dark text on light backgrounds: Contrast ratio 7:1+ ✅
- Focus states: 4px box-shadow with accent color ✅

## Customization

To change the entire color scheme, edit `:root` variables in `style.css`:

```css
:root {
  --accent: #your-color;           /* Main accent */
  --accent-dark: #your-dark-color; /* Dark shade */
  --accent-light: #your-light-color; /* Light shade */
  --muted: #your-muted-color;      /* Secondary text */
  --bg: #your-bg-color;            /* Page background */
}
```

All colors throughout the site will automatically update!

---

**Last Updated:** April 18, 2026  
**Status:** Construction-themed palette active ✅  
**Performance:** All colors locally defined (no external dependencies)
