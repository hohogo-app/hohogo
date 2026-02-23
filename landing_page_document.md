Here is a **Landing Page Specification Document** designed to convert web visitors into app downloads, while fulfilling all of Apple's legal and support requirements. 

You can use this document as a blueprint if you hire a web designer, build it in a tool like Webflow/Framer, or code it yourself.

***

# Landing Page Specification Document
**Product:** HoHoGo
**Platform:** Web (Mobile-Optimized / Responsive)
**Hosting:** GitHub Pages
**Primary Goal:** Drive iOS App Store downloads.
**Secondary Goal:** Host mandatory App Store legal & support documents.

---

## 1. Design Language & Vibe
*   **Aesthetic:** "Modern Retro" / Travel Journal.
*   **Color Palette:**
    *   **Background:** Vintage Cream (`#F4F1EA`)
    *   **Primary Text:** Navy Ink (`#002147` or `#111827`)
    *   **Accents:** Stamp Red (`#C04000`) and Retro Gold/Yellow (`#E9C46A`).
*   **Typography:** Bold, rounded sans-serifs for headings (matching the app's `AppFont.swift`), and clean serifs or monospaced fonts for accents to give it that "printed ticket" feel.

---

## 2. Page Structure (Top to Bottom)

### Section 1: The Global Header (Sticky)
*   **Left:** App Logo
*   **Right:** A small, high-contrast button: `[ Get the App ]` (Links to App Store).

### Section 2: The Hero Section (Above the Fold)
*This is the most critical section. It must explain the app in 3 seconds.*
*   **Layout:** 50/50 Split on Desktop, Stacked on Mobile.
*   **Left Side (Text):**
    *   **Headline:** "Turn your travels into a playable collection."
    *   **Sub-headline:** "Scan your camera roll to unlock past trips, check in to famous landmarks, and build a beautiful digital passport. The world is your game board."
    *   **Call to Action (CTA):** The official "Download on the App Store" black SVG badge.
*   **Right Side (Visual):**
    *   A high-quality mockup of an iPhone angled slightly.
    *   **Image inside screen:** The `WorldMapView` showing the 3D map with colorful badge pins and the user's custom vehicle.

### Section 3: The "Aha!" Moment (Social Proof / Hook)
*   **Banner:** A full-width, slightly darker colored band (e.g., Navy Blue text on Light Blue background).
*   **Text:** *"Your journey doesn't start from zero. Our privacy-first, on-device scanner instantly awards badges for places you’ve already been."*

### Section 4: Value Propositions (Grid Layout)
*A 3-column grid explaining the core features, using emojis or custom icons.*
*   **Card 1: 🎖️ Collect Badges**
    *   *Text:* "Visit real-world landmarks to verify your location and earn stunning, full-color digital trophies."
*   **Card 2: 🛂 Build Your Passport**
    *   *Text:* "Complete travel quests to unlock exclusive map vehicles and vintage themes for your profile."
*   **Card 3: ✈️ Offline Ready**
    *   *Text:* "Deep in the mountains? No problem. Check in and journal completely offline. We'll sync it when you reconnect."

### Section 5: The "Digital Postcard" Feature (Feature Highlight)
*   **Layout:** Image on Left, Text on Right.
*   **Image:** A phone mockup showing the `ShareStudioView` (creating a polaroid).
*   **Headline:** "Flex your footprint."
*   **Body:** "Generate beautiful, retro-styled digital postcards of your newly earned badges and share them directly to your Instagram Story."

### Section 6: Final Call to Action
*   **Background:** Navy Blue (`#002147`).
*   **Headline:** "Ready to start your Odyssey?" (White text).
*   **CTA:** Another "Download on the App Store" badge.

### Section 7: The Footer (Legal & Support)
*This section is mandatory for App Store approval.*
*   **Background:** Dark Charcoal or Navy.
*   **Layout:**
    *   **Top Left:** App Name & Copyright (e.g., *© 2026 HoHo Inc. All rights reserved.*).
    *   **Top Right (Links):**
        *   **Support & FAQ** -> links to `/faq.html` (or `faq.md` on GitHub)
        *   **Privacy Policy** -> links to `/privacy.html`
        *   **Terms & Conditions** -> links to `/terms.html`
        *   **Contact Us** -> `mailto:hohogo.app@gmail.com`
    *   **Bottom:** Brief disclaimer: *"Apple and the Apple Logo are trademarks of Apple Inc."*

---

## 3. Technical Requirements (If coding in HTML/CSS)

1.  **Responsive Design:** The layout must use Flexbox or CSS Grid so it looks perfect on a mobile browser. (Most people clicking a link from Instagram will be on their phones).
2.  **Fast Loading:** Use `.webp` or compressed `.png` for the phone mockups. No heavy Javascript frameworks are needed.
3.  **App Store Link:** Use the Apple-provided SVG for the "Download on the App Store" badge. It builds trust instantly.
4.  **Smart App Banner (Optional but highly recommended):** Add this `<meta>` tag to the `<head>` of your HTML. If a user visits your website on an iPhone, Safari will automatically show a native banner at the top of the screen linking to your app.
    ```html
    <meta name="apple-itunes-app" content="app-id=YOUR_APP_STORE_ID">
    ```

---