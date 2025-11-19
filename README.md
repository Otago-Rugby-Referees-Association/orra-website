# ORRA Website Setup Guide

This guide will help you get the Otago Rugby Referees Association website live on orra.co.nz using GitHub Pages (free hosting).

## What's Included

Your website includes the following pages:
- **Home** - Welcome page with quick links to all sections
- **Fuel Reimbursements** - Information about travel expense claims
- **Key Dates** - Important dates and calendar
- **Key Contacts** - Committee members and contact information
- **Training and Development** - Resources for referee development
- **Internal Draw** - Match appointments and schedules
- **ORRA Policies** - Association policies and procedures
- **Other Resources** - Useful links and materials
- **Referee Review Platform** - Performance review information

## Setup Steps

### Step 1: Create a GitHub Account (if you don't have one)

1. Go to https://github.com
2. Click "Sign up"
3. Follow the registration process
4. Verify your email address

### Step 2: Create a Repository for Your Website

1. Log in to GitHub
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name your repository: `orra-website` (or any name you prefer)
5. Make it **Public**
6. Do NOT initialize with README, .gitignore, or license
7. Click "Create repository"

### Step 3: Upload Your Website Files

**Option A: Using GitHub Web Interface (Easiest)**

1. On your new repository page, click "uploading an existing file"
2. Drag and drop ALL the files from the orra-website folder:
   - index.html
   - styles.css
   - fuel-reimbursement.html
   - key-dates.html
   - contacts.html
   - training.html
   - draw.html
   - policies.html
   - resources.html
   - review.html
3. Add a commit message: "Initial website upload"
4. Click "Commit changes"

**Option B: Using Git Command Line (If you're comfortable with Git)**

```bash
cd path/to/orra-website
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/orra-website.git
git push -u origin main
```

### Step 4: Enable GitHub Pages

1. In your repository, click "Settings" (top menu)
2. Scroll down to "Pages" in the left sidebar
3. Under "Source", select "Deploy from a branch"
4. Under "Branch", select "main" and "/ (root)"
5. Click "Save"
6. Wait 2-3 minutes for GitHub to build your site
7. Your site will be live at: `https://YOUR-USERNAME.github.io/orra-website/`

### Step 5: Configure Your Custom Domain (orra.co.nz)

#### A. In GitHub:

1. Still in Settings → Pages
2. Under "Custom domain", enter: `orra.co.nz`
3. Click "Save"
4. Check the box "Enforce HTTPS" (may need to wait a few minutes for this option)

#### B. In Your Domain Registrar:

You need to add DNS records for orra.co.nz. Log in to wherever you manage your .nz domain and add these DNS records:

**For apex domain (orra.co.nz):**

Add these A records:
```
Type: A
Name: @ (or leave blank for root domain)
Value: 185.199.108.153

Type: A
Name: @ (or leave blank for root domain)
Value: 185.199.109.153

Type: A
Name: @ (or leave blank for root domain)
Value: 185.199.110.153

Type: A
Name: @ (or leave blank for root domain)
Value: 185.199.111.153
```

**For www subdomain:**

Add this CNAME record:
```
Type: CNAME
Name: www
Value: YOUR-USERNAME.github.io
```

**Important:** DNS changes can take 24-48 hours to fully propagate, but often work within an hour.

### Step 6: Verify It's Working

1. Wait at least 30 minutes after adding DNS records
2. Visit http://orra.co.nz in your browser
3. You should see your new website!
4. Once HTTPS is enforced, https://orra.co.nz should also work

## Updating Your Website Content

To update contact details, dates, or any other content:

1. Go to your GitHub repository
2. Click on the file you want to edit
3. Click the pencil icon (Edit this file)
4. Make your changes
5. Scroll down and click "Commit changes"
6. Your website will automatically update within a few minutes

## Customization Tips

### Update Contact Information

Edit `contacts.html` to add:
- Names of committee members
- Email addresses (use your new Google Workspace emails once approved!)
- Phone numbers
- Physical address

### Add Your Logo

If you have an ORRA logo:
1. Upload the logo image to your repository
2. Edit the header section in each HTML file to add:
```html
<img src="your-logo.png" alt="ORRA Logo" style="height: 60px;">
```

### Update Colors

The website uses these main colors (in styles.css):
- Primary: `#003d7a` (dark blue)
- Secondary: `#0059b3` (medium blue)
- Accent: `#00a86b` (green)

You can change these in the `:root` section of `styles.css` to match your branding.

## Troubleshooting

**Website not showing up:**
- Check that GitHub Pages is enabled (Settings → Pages)
- Verify your files are in the root directory (not in a subfolder)
- Make sure `index.html` exists

**Domain not working:**
- DNS changes can take up to 48 hours
- Verify DNS records are correct
- Check your domain registrar's DNS settings
- Use https://dnschecker.org to verify DNS propagation

**HTTPS not working:**
- Wait 24 hours after adding custom domain
- Ensure DNS is properly configured
- Try unchecking and rechecking "Enforce HTTPS" in GitHub Pages settings

## Google Workspace Application

Once your website is live at orra.co.nz:

1. Take screenshots of your live website
2. Reapply for Google for Nonprofits Workspace
3. In the application, provide the URL: https://orra.co.nz
4. Explain that the website shows your organization is active and legitimate

Google should approve your application now that you have a functioning website on your domain!

## Support

If you need help:
- GitHub Pages documentation: https://docs.github.com/en/pages
- GitHub Community Forum: https://github.community/
- This README file!

## License

This website is created for the Otago Rugby Referees Association Incorporated. All content is copyright ORRA unless otherwise stated.
