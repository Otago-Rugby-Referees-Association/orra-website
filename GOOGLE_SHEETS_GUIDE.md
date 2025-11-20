# Google Sheets Integration Guide

## 📊 Embedding Your ORRA Service Sheet

This guide shows you how to display your ORRA_Service.xlsx spreadsheet directly on your website.

---

## Quick Setup (5 Minutes)

### Step 1: Upload to Google Drive
1. Go to https://drive.google.com
2. Click "New" → "File upload"
3. Select your `ORRA_Service.xlsx` file
4. Wait for upload to complete

### Step 2: Open with Google Sheets
1. Find the uploaded file in Google Drive
2. Right-click → "Open with" → "Google Sheets"
3. Google will convert it (original Excel file stays in Drive)

### Step 3: Publish to Web
1. In Google Sheets, click **File** → **Share** → **Publish to web**
2. In the dialog:
   - **First dropdown**: Choose which sheet to publish
     - "Entire Document" = all sheets (Executive History, Honours Board, Life Members, etc.)
     - Or select individual sheet (e.g., "Metro Service")
   - **Second dropdown**: Select "Embed"
3. Click **"Publish"**
4. Click **"OK"** on the confirmation dialog
5. **Copy the iframe code** that appears

### Step 4: Add to Website
1. Open `honours.html` in a text editor
2. Find the placeholder section (around line 100)
3. Look for the commented example:
   ```html
   <!-- EXAMPLE of what the embedded sheet code looks like
   ```
4. Replace the placeholder with your copied iframe code
5. Adjust width and height if needed:
   ```html
   <iframe src="YOUR_GOOGLE_SHEETS_URL" 
           width="100%" 
           height="800" 
           frameborder="0">
   </iframe>
   ```

### Step 5: Upload and Test
1. Save the file
2. Upload to GitHub
3. Visit your website
4. Check that the sheet displays correctly

---

## Complete Example

### What You'll Copy from Google Sheets:
```html
<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQR.../pubhtml?widget=true&amp;headers=false" width="640" height="480"></iframe>
```

### What to Put in honours.html:
```html
<div class="form-container">
    <h3>ORRA Years of Service - All Regions</h3>
    <iframe src="https://docs.google.com/spreadsheets/d/e/YOUR_SHEET_ID/pubhtml?widget=true&amp;headers=false" 
            width="100%" 
            height="800" 
            frameborder="0"
            style="border: 0;">
    </iframe>
</div>
```

---

## Multiple Sheet Options

### Option 1: Embed Entire Workbook
**Best for:** Showing all data with tabs users can click
```
1. File → Share → Publish to web
2. Select "Entire Document"
3. Choose "Embed"
4. Copy iframe code
```
Users will see tabs and can switch between:
- Executive History
- Honours Board
- Life Members
- Metro Service
- Central Service
- South Service

### Option 2: Embed Individual Sheets
**Best for:** Showing specific data only

Embed Metro Service only:
```
1. File → Share → Publish to web
2. Select "Metro Service" from dropdown
3. Choose "Embed"
4. Copy iframe code
```

You can add multiple embeds on the same page:
```html
<h3>Metro Region</h3>
<iframe src="METRO_SHEET_URL" width="100%" height="400"></iframe>

<h3>Central Region</h3>
<iframe src="CENTRAL_SHEET_URL" width="100%" height="400"></iframe>

<h3>South Region</h3>
<iframe src="SOUTH_SHEET_URL" width="100%" height="400"></iframe>
```

---

## Customizing the Display

### Adjust Height
If your sheet is too tall/short:
```html
height="600"   <!-- Shorter -->
height="1000"  <!-- Taller -->
height="100vh" <!-- Full screen height -->
```

### Remove Headers
Add to the URL:
```
?headers=false
```

### Remove Gridlines
Add to the URL:
```
?gridlines=false
```

### Combine Options
```
?headers=false&gridlines=false&widget=true
```

### Center the Embed
```html
<div style="max-width: 1200px; margin: 0 auto;">
    <iframe src="..."></iframe>
</div>
```

---

## Keeping Data Updated

### The Best Part: Auto-Updates! 🎉
Once embedded, your website **automatically shows the latest data** from Google Sheets.

**To update the data on your website:**
1. Open Google Sheets (from Drive)
2. Edit the data
3. Save (auto-saves)
4. Refresh your website
5. **Done!** Changes appear immediately

**No need to:**
- Re-publish
- Re-embed
- Edit HTML
- Upload anything to GitHub

---

## Permissions

### Making Sheet Public
When you "Publish to web":
- ✅ Anyone can VIEW the sheet
- ❌ Only you (and people you share with) can EDIT
- ✅ Perfect for website embedding

### Sharing Edit Access
To let executive members edit:
1. Click **Share** (top right in Google Sheets)
2. Add email addresses
3. Set permission to "Editor"
4. They can now update the data

---

## Troubleshooting

### "Sheet not displaying"
- Check iframe code is complete
- Verify sheet is published (File → Share → Publish to web)
- Make sure you copied the EMBED code (not the link)
- Hard refresh browser (Ctrl+F5)

### "Permission denied"
- Sheet must be published to web
- Re-publish: File → Share → Publish to web → Publish

### "Shows wrong data"
- Make sure you selected correct sheet in publish dialog
- Try publishing again
- Clear browser cache

### "Too small/large"
- Adjust height value in iframe
- Try different heights: 600, 800, 1000
- Or use height="auto" (may not work in all browsers)

---

## Alternative: Link to Sheet Instead

If embedding doesn't work or you prefer a simpler option:

### Option A: Link to View-Only Sheet
```html
<div class="card">
    <h3>📊 View Complete Service Records</h3>
    <p>Click below to view our complete years of service data in Google Sheets</p>
    <a href="YOUR_GOOGLE_SHEETS_VIEW_URL" target="_blank" class="btn">
        View Service Records
    </a>
</div>
```

To get view-only link:
1. In Google Sheets, click **Share**
2. Click "Get link"
3. Set to "Anyone with the link" → "Viewer"
4. Copy link

### Option B: Download Excel File
```html
<div class="card">
    <h3>📥 Download Service Records</h3>
    <p>Download the complete ORRA service history Excel file</p>
    <a href="files/ORRA_Service.xlsx" download class="btn">
        Download Excel File
    </a>
</div>
```

Upload `ORRA_Service.xlsx` to GitHub in a `files/` folder.

---

## Best Practices

### ✅ DO:
- Keep sheet formatted cleanly
- Use clear column headers
- Sort by years of service (descending)
- Keep it updated regularly
- Test on mobile devices

### ❌ DON'T:
- Include sensitive personal information
- Use complex formulas that slow loading
- Make sheets unnecessarily wide
- Forget to publish after making changes
- Include unnecessary empty rows/columns

---

## Mobile Considerations

Google Sheets embeds work on mobile, but:
- May require horizontal scrolling if wide
- Consider simplifying columns for mobile
- Test on actual phone
- Or provide "Download" button for mobile users

---

## Quick Reference

### Publish to Web
```
File → Share → Publish to web → Select sheet → Embed → Copy code
```

### Basic Embed Code
```html
<iframe src="GOOGLE_SHEETS_EMBED_URL" 
        width="100%" 
        height="800" 
        frameborder="0">
</iframe>
```

### Update Data
```
Edit Google Sheet → Save → Website auto-updates!
```

---

## 🎉 You're Done!

Once you've embedded your Google Sheet:
✅ Service data displays on website
✅ Auto-updates when you edit the sheet
✅ No HTML editing needed for updates
✅ Professional, interactive display
✅ Mobile-accessible

**This is WAY easier than manually updating HTML tables!**

Questions? See the main GOOGLE_INTEGRATION.md guide.
