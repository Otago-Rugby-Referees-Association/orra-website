# ORRA Website v2 - Complete with Photos & Sponsors!

## 🎉 What's New in Version 2

✅ **Photo Galleries Throughout** - Placeholders ready for your referee photos
✅ **Prominent Sponsor Recognition** - Professional sponsor section on homepage  
✅ **Honours & Service History** - Complete records from your Excel file
✅ **Life Members Page** - All current life members displayed
✅ **Years of Service** - Metro, Central, and South region recognition
✅ **Executive History** - Past chairs and presidents
✅ **Photo Upload Instructions** - Easy guides for adding photos

## 📁 New Files & Structure

```
orra-final/
├── images/
│   ├── logo.jpg (your ORRA logo)
│   ├── referees/ (add referee photos here)
│   ├── sponsors/ (add sponsor logos here)
│   └── events/ (add event photos here)
├── index.html (with sponsor section & photo previews)
├── honours.html (NEW - service history & life members)
├── gallery.html (NEW - extensive photo gallery)
├── panels.html (updated with photo placeholders)
├── standards.html (Bronco & Law test standards)
├── contacts.html (executive contacts)
├── honesty-box.html (anonymous submissions)
├── about.html
├── resources.html
├── fuel-reimbursements.html
├── key-dates.html
├── draw.html
├── training.html
├── policies.html
└── styles.css (updated with photo & sponsor styles)
```

## 🖼️ Adding Photos

### Quick Method (Individual Photos)
1. Save photos to `images/referees/`, `images/events/`, or `images/sponsors/`
2. Open the HTML file you want to edit
3. Find a placeholder like:
   ```html
   <div class="photo-item photo-placeholder">
   ```
4. Replace with:
   ```html
   <div class="photo-item">
       <img src="images/referees/john-smith.jpg" alt="John Smith">
       <div class="photo-caption">John Smith - Premier Panel</div>
   </div>
   ```

### Recommended Photo Sizes
- **Portrait photos**: 600x800px
- **Landscape photos**: 800x600px
- **Team photos**: 1200x800px
- **Sponsor logos**: 400x200px (transparent PNG preferred)

### Google Photos Integration (Easier for Bulk Photos!)
1. Create Google Photos album: "ORRA Gallery"
2. Add all your photos
3. Get embed code from album
4. Add to gallery.html

See **PHOTO_GUIDE.md** for detailed instructions.

## 🏢 Adding Sponsor Logos

### On Homepage (Most Visible)
1. Save sponsor logo to `images/sponsors/sponsor-name.png`
2. Open `index.html`
3. Find the sponsors section (around line 50)
4. Replace placeholder with:
   ```html
   <div class="sponsor-logo">
       <img src="images/sponsors/sponsor-name.png" alt="Sponsor Name">
   </div>
   ```

### Logo Requirements
- **Format**: PNG (transparent background) or JPG
- **Size**: 400x200px recommended
- **Quality**: High resolution for print-ready look
- **Naming**: lowercase, no spaces (e.g., `smith-electrical.png`)

### Multiple Sponsor Tiers
The grid automatically adjusts. Add as many sponsors as you have - they'll display in a responsive grid.

## 📊 Honours & Service Data

Your service history is already integrated! The honours.html page includes:

✅ **Life Members** (12 current members)
✅ **Years of Service**:
   - Metro: Top 15 referees (Bryce Adie & Ivan Richards - 33 years!)
   - Central: Top 10 referees (David Burton & Roger Hill - 31 years!)
   - South: Top 9 referees (Wayne Carruthers & Neville Muir - 22 years!)
✅ **Test Referees**: James Doleman, Lindsay McLachlan, Dave Bishop, Don Millar
✅ **Recent Award Winners**: 2020-2024
✅ **Executive History**: Recent chairs and presidents

### To Update Honours Data
1. Update your Excel file
2. Send to webmaster or
3. Edit `honours.html` directly with new data

## 🚀 Setup Instructions

### Same as Before!
1. Upload ALL files to GitHub (including `images` folder)
2. Enable GitHub Pages
3. Configure DNS for orra.co.nz
4. Site goes live!

**NEW: Make sure to upload the `images` folder structure!**

## 📸 Photo Organization Tips

### Folder Structure
```
images/
├── referees/
│   ├── premier-panel/
│   ├── development-panel/
│   ├── action-shots/
│   └── portraits/
├── events/
│   ├── 2024-preseason/
│   ├── social-events/
│   └── awards-night/
└── sponsors/
    └── [sponsor logos]
```

### Naming Convention
- **Referees**: `firstname-lastname-action.jpg`
- **Events**: `2024-03-15-preseason-training.jpg`
- **Sponsors**: `company-name-logo.png`

## 🎨 Customizing Photo Displays

### Change Photo Grid Columns
In `styles.css`, find `.photo-gallery` and adjust:
```css
grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
```
Change `200px` to:
- `150px` for more columns (smaller photos)
- `250px` for fewer columns (larger photos)

### Photo Hover Effects
Already included! Photos lift up and cast shadow on hover.

### Add Captions
```html
<div class="photo-caption">
    Your caption here - visible on hover
</div>
```

## 🏆 Showcase Your Sponsors

### Homepage Sponsor Section
- **Prominent placement** between hero and quick links
- **Professional layout** with hover effects
- **Responsive grid** - looks great on all devices
- **Call-to-action** for new sponsor inquiries

### Add Sponsor Links
```html
<div class="sponsor-logo">
    <a href="https://sponsor-website.com" target="_blank">
        <img src="images/sponsors/logo.png" alt="Sponsor">
    </a>
</div>
```

## 📱 Mobile Optimization

All photo galleries and sponsor sections are **fully responsive**:
- Desktop: 4-5 photos per row
- Tablet: 2-3 photos per row  
- Mobile: 1-2 photos per row

Photos automatically resize and reflow!

## ✅ Pre-Launch Checklist

### Photos
- [ ] Collect referee photos
- [ ] Collect event photos
- [ ] Organize into folders
- [ ] Name files consistently
- [ ] Upload to `images/` folders

### Sponsors
- [ ] Get high-res sponsor logos
- [ ] Convert to PNG if needed
- [ ] Add to `images/sponsors/`
- [ ] Update homepage sponsor section
- [ ] Test sponsor links (if applicable)

### Content
- [ ] Add referee names to panels
- [ ] Update executive contacts
- [ ] Verify honours data is current
- [ ] Replace "[To be updated]" placeholders
- [ ] Add photo captions

### Technical
- [ ] Upload entire site to GitHub
- [ ] Enable GitHub Pages
- [ ] Configure DNS
- [ ] Test all photo galleries
- [ ] Test on mobile device
- [ ] Verify sponsor logos display correctly

## 💡 Pro Tips

### Bulk Photo Upload
1. Use GitHub web interface: "Upload files"
2. Drag entire `images` folder
3. Commit with message: "Add referee and event photos"
4. All photos upload at once!

### Photo Quality
- Use **high resolution** photos (min 1200px wide)
- Photos will be automatically resized by browser
- **Compress** large files before upload (use tinypng.com)
- Aim for under 500KB per photo

### Sponsor Logo Tips
- **Square or horizontal** logos work best
- Remove backgrounds (use PNG transparency)
- Ensure logos are **legible** at small sizes
- Test on mobile - logos should still be clear

## 📞 Need Help?

### Adding Photos
See **PHOTO_GUIDE.md** (included)

### Google Photos Integration
See **GOOGLE_INTEGRATION.md**

### General Setup
See original **README.md**

## 🎉 You're Ready!

Your website now has:
✅ Professional photo galleries
✅ Prominent sponsor recognition
✅ Complete service history
✅ Honours and awards
✅ Life member recognition
✅ Executive history
✅ Beautiful, responsive design
✅ Easy photo management
✅ Zero monthly cost!

**Just add your photos and sponsor logos, and you're live!**

---

## 📸 Quick Photo Guide

### Example: Adding a Referee Photo

**Current (placeholder):**
```html
<div class="photo-item photo-placeholder">
    <div>Add photo</div>
</div>
```

**Updated (with photo):**
```html
<div class="photo-item">
    <img src="images/referees/john-doe.jpg" alt="John Doe">
    <div class="photo-caption">John Doe - Premier Panel Referee</div>
</div>
```

### Example: Adding Sponsor Logo

**Current (placeholder):**
```html
<div class="sponsor-logo sponsor-placeholder">
    <div>Sponsor Logo</div>
</div>
```

**Updated (with logo):**
```html
<div class="sponsor-logo">
    <img src="images/sponsors/acme-sports.png" alt="ACME Sports">
</div>
```

That's it! 🎉
