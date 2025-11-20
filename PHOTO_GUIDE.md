# Photo Management Guide for ORRA Website

## 📸 Complete Guide to Adding and Managing Photos

This guide covers everything you need to know about adding photos to your ORRA website.

---

## Method 1: Direct Upload (Simplest)

### Step 1: Prepare Your Photos
1. **Collect photos** from matches, training, events
2. **Resize** to recommended dimensions:
   - Portraits: 600x800px
   - Landscapes: 800x600px
   - Team photos: 1200x800px
3. **Compress** if needed (keep under 500KB each)
4. **Rename** with descriptive names:
   - `james-doleman-premier-match.jpg`
   - `2024-preseason-training-group.jpg`
   - `awards-night-2024.jpg`

### Step 2: Organize Into Folders
Create this structure on your computer:
```
images/
├── referees/
│   ├── action/
│   ├── portraits/
│   └── team/
├── events/
│   ├── training/
│   ├── social/
│   └── awards/
└── sponsors/
    └── [logos go here]
```

### Step 3: Upload to GitHub
1. Go to your repository on GitHub
2. Click `images` folder
3. Click "Upload files"
4. Drag your organized folders
5. Commit changes

### Step 4: Update HTML Files
Open the page where you want photos (e.g., `gallery.html`):

**Find a placeholder:**
```html
<div class="photo-item photo-placeholder">
    <div>Add photo here</div>
</div>
```

**Replace with:**
```html
<div class="photo-item">
    <img src="images/referees/action/james-doleman.jpg" alt="James Doleman refereeing">
    <div class="photo-caption">James Doleman - Premier Match 2024</div>
</div>
```

---

## Method 2: Google Photos Integration (Best for Bulk Photos)

### Why Use Google Photos?
- ✅ Upload hundreds of photos easily
- ✅ No need to edit HTML for each photo
- ✅ Automatic organization and albums
- ✅ Share links with members
- ✅ Mobile-friendly upload

### Setup Instructions

#### Step 1: Create Google Photos Album
1. Go to https://photos.google.com
2. Click "Albums" → "Create album"
3. Name it: "ORRA Gallery 2024" (or by event)
4. Add all your photos
5. Organize into albums:
   - Match Day Action
   - Training Sessions
   - Social Events
   - Awards Ceremonies

#### Step 2: Get Embed Code
Google Photos doesn't provide direct embed, so we'll use a workaround:

**Option A: Link to Album**
1. Open album in Google Photos
2. Click Share → Copy link
3. Add to your website:
```html
<div class="card">
    <h3>View Our Photo Album</h3>
    <p>See all photos from the 2024 season</p>
    <a href="YOUR_GOOGLE_PHOTOS_LINK" target="_blank" class="btn">
        View Full Album
    </a>
</div>
```

**Option B: Individual Photo Links**
1. Right-click photo → "Copy image address"
2. Use in HTML:
```html
<div class="photo-item">
    <img src="GOOGLE_PHOTOS_IMAGE_URL" alt="Description">
    <div class="photo-caption">Caption here</div>
</div>
```

#### Step 3: Update Gallery Page
Add album links to `gallery.html`:
```html
<h3>📸 View Our Complete Photo Albums</h3>
<div class="cards">
    <div class="card">
        <h3>Season 2024</h3>
        <a href="GOOGLE_PHOTOS_LINK" target="_blank" class="btn">
            View Album (150+ photos)
        </a>
    </div>
    <div class="card">
        <h3>Awards Night 2024</h3>
        <a href="GOOGLE_PHOTOS_LINK" target="_blank" class="btn">
            View Album (50+ photos)
        </a>
    </div>
</div>
```

---

## Method 3: Google Drive Folder (Team Access)

### Best For:
- Sharing with executive/members
- Organizing by season/event
- Easy team contributions

### Setup
1. Create Google Drive folder: "ORRA Photos"
2. Add subfolders by year/event
3. Share with team (Edit access)
4. Members can upload directly
5. Link from website:
```html
<a href="GOOGLE_DRIVE_LINK" target="_blank" class="btn">
    Access Photo Library (Google Drive)
</a>
```

---

## Photo Guidelines

### Quality Standards
✅ **Resolution**: Minimum 1200px on longest side
✅ **Format**: JPG (photos), PNG (logos with transparency)
✅ **File Size**: Under 500KB per photo (compress if needed)
✅ **Orientation**: Portrait for people, landscape for groups
✅ **Lighting**: Well-lit, clear faces
✅ **Focus**: Sharp, not blurry

### What Makes a Good Photo?
- **Action shots**: Referee making a call, in position
- **Group photos**: Everyone visible and identifiable
- **Event photos**: Capturing the atmosphere
- **Award photos**: Clear view of award recipient
- **Training photos**: Showing development activities

### What to Avoid
- ❌ Blurry or out-of-focus photos
- ❌ Poor lighting (too dark/bright)
- ❌ Photos where people can't be identified
- ❌ Copyrighted photos without permission
- ❌ Photos with inappropriate content

---

## Organizing Your Photos

### Naming Convention
Use descriptive names:
- **Date first**: `2024-03-15-preseason-training.jpg`
- **Event type**: `awards-night-2024-trophy-presentation.jpg`
- **People**: `james-doleman-bryce-adie-premier-final.jpg`

### Folder Structure
```
images/
├── referees/
│   ├── action/           # Referee during matches
│   ├── portraits/        # Professional headshots
│   ├── team/            # Group photos
│   └── training/        # Training activities
├── events/
│   ├── 2024/
│   │   ├── preseason/
│   │   ├── midseason/
│   │   └── awards/
│   └── 2023/
│       └── ...
└── sponsors/
    ├── major/           # Major sponsor logos
    └── supporting/      # Supporting sponsors
```

---

## Adding Photos to Specific Pages

### Homepage (index.html)
Show 4 featured photos:
```html
<div class="photo-gallery">
    <div class="photo-item">
        <img src="images/referees/featured1.jpg" alt="Description">
        <div class="photo-caption">Caption</div>
    </div>
    <!-- Repeat for 3 more photos -->
</div>
```

### Gallery Page (gallery.html)
Many photo sections - replace ALL placeholders:
```html
<!-- Find all instances of -->
<div class="photo-item photo-placeholder">

<!-- Replace with -->
<div class="photo-item">
    <img src="images/path/to/photo.jpg" alt="Description">
    <div class="photo-caption">Caption here</div>
</div>
```

### Panels Page (panels.html)
Add referee portraits to each panel:
```html
<div class="photo-gallery" style="margin: 20px 0;">
    <div class="photo-item" style="max-width: 150px;">
        <img src="images/referees/portraits/john-smith.jpg" alt="John Smith">
        <div class="photo-caption">John Smith</div>
    </div>
    <!-- Add more panel members -->
</div>
```

### Honours Page (honours.html)
Add historical photos if available.

---

## Batch Photo Processing

### Before Uploading Many Photos

#### 1. Resize All at Once
**Windows**: Use IrfanView (free)
- Batch resize: 800px width, keep aspect ratio

**Mac**: Use Preview
- Select all → Tools → Adjust Size

**Online**: Use bulkresizephotos.com
- Upload multiple → Set size → Download all

#### 2. Compress All Files
Use tinypng.com or squoosh.app
- Upload multiple photos
- Compress to web-optimized sizes
- Download all

#### 3. Rename in Batch
- Select all files
- Right-click → Rename
- Windows: Adds numbers automatically
- Mac: Use "Name & Extension" dropdown

---

## Mobile Photo Tips

### Taking Photos at Matches
- **Use landscape** for action shots
- **Good lighting** - avoid backlight
- **Multiple shots** - take several of each moment
- **Focus on referee** - make them prominent
- **Capture context** - show the match environment

### Uploading from Phone
1. Upload to Google Photos first
2. Download to computer
3. Process/resize as needed
4. Upload to GitHub

Or use Google Photos method above!

---

## Troubleshooting

### "My photos aren't showing"
- ✅ Check file path is correct
- ✅ Ensure image file is actually uploaded
- ✅ Check file name matches exactly (case-sensitive!)
- ✅ Verify image is in correct folder
- ✅ Hard refresh browser (Ctrl+F5)

### "Photos are too big/slow to load"
- Compress images (tinypng.com)
- Resize to recommended dimensions
- Aim for under 500KB per image
- Consider using Google Photos for large galleries

### "Photos look stretched"
- Use correct aspect ratio (3:4 for portrait)
- Don't force square images into portrait frames
- Check `object-fit: cover` is in CSS

### "Can't upload to GitHub"
- File size limit: 100MB per file, 1GB total
- For many large photos, use Git command line or GitHub Desktop
- Or link to Google Photos instead

---

## Best Practices Summary

### DO ✅
- Use high-resolution photos
- Compress before uploading
- Name files descriptively
- Organize into folders
- Add captions to important photos
- Get permission for photos of people
- Update regularly with new photos

### DON'T ❌
- Upload massive uncompressed files
- Use unclear file names (IMG_001.jpg)
- Mix different photo types in same folder
- Upload copyrighted images
- Forget to update HTML after adding photos
- Leave placeholder text visible

---

## Quick Reference

### File Paths
- Referees: `images/referees/filename.jpg`
- Events: `images/events/filename.jpg`
- Sponsors: `images/sponsors/logo.png`

### HTML Template
```html
<div class="photo-item">
    <img src="images/FOLDER/FILENAME.jpg" alt="DESCRIPTION">
    <div class="photo-caption">CAPTION TEXT</div>
</div>
```

### Recommended Sizes
- Portrait: 600x800px
- Landscape: 800x600px
- Team: 1200x800px
- Sponsor logo: 400x200px

---

## 📞 Need Help?

If you're stuck:
1. Check file paths match exactly
2. Verify images are uploaded to GitHub
3. Try on different browser
4. Ask in Honesty Box!
5. Email webmaster

**Remember**: It's easier than it seems! Start with just a few photos and build from there.

Good luck! 📸
