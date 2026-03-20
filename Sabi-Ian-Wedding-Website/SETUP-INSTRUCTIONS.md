# Sabi & Ian Wedding Website — Setup Instructions

## What's in this folder

| File | Page |
|------|------|
| `index.html` | Home (Info) |
| `when-where.html` | When & Where |
| `our-story.html` | Our Story |
| `guide.html` | Wedding Guide |
| `travel-guide.html` | Travel Guide |
| `faq.html` | FAQ |
| `rsvp.html` | RSVP page |
| `style.css` | All shared styles |

---

## Before you go live — two things to update

### 1. Add your Google Form link
Open `rsvp.html` and find this line:

```html
<a href="YOUR_GOOGLE_FORM_URL_HERE" ...>
```

Replace `YOUR_GOOGLE_FORM_URL_HERE` with the actual URL of your Google Form.

### 2. Download your photos from Squarespace
The site currently links to your images on the Squarespace CDN — they'll work as long as your Squarespace account is active. To make the site fully independent:

1. Log into your Squarespace account
2. Go to **Settings → Media** (or the **Files** panel)
3. Download all your photos
4. Create an `images/` folder in this directory and place them there
5. Then update the `<img src="...">` tags in the HTML files to use local paths like `images/couple-hero.jpg`

The images currently in use are:
- `floral-hero.png` — the botanical illustration on the homepage
- `couple-hero.jpg` — the engagement photo (used on homepage and Our Story)
- `story-meet.jpg` — first meeting photo
- `story-firstdate.jpg` — first date photo
- `story-rhcp.png` — Red Hot Chili Peppers gig photo
- `story-boomtown.jpg` — Boomtown festival photo
- `story-event.png` — additional event photo
- `story-trip.jpg` — first trip abroad photo

---

## Hosting on GitHub Pages (free)

### Step 1 — Create a GitHub account
If you don't have one, sign up at [github.com](https://github.com).

### Step 2 — Create a new repository
1. Click the **+** button in the top right → **New repository**
2. Name it: `sabi-ian-wedding` (or any name you like)
3. Set it to **Public**
4. Click **Create repository**

### Step 3 — Upload your files
1. On the repository page, click **uploading an existing file**
2. Drag and drop ALL the files from this folder (including `style.css` and the `images/` folder)
3. Click **Commit changes**

### Step 4 — Enable GitHub Pages
1. In your repository, go to **Settings** → **Pages** (left sidebar)
2. Under "Source", select **Deploy from a branch**
3. Choose **main** branch, **/ (root)** folder
4. Click **Save**

Your site will be live at: `https://YOUR-USERNAME.github.io/sabi-ian-wedding/`

### Step 5 — Connect your custom domain (sabi-ian-wedding.info)
1. In **Settings → Pages**, scroll to **Custom domain**
2. Type `sabi-ian-wedding.info` and click **Save**
3. GitHub will create a `CNAME` file automatically

Then go to your domain registrar (wherever you bought `sabi-ian-wedding.info`) and update your DNS:

| Type | Name | Value |
|------|------|-------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | YOUR-USERNAME.github.io |

DNS changes can take up to 24 hours to propagate. Once done, your site will be live at `https://sabi-ian-wedding.info`.

> **Tip:** GitHub Pages also provides a free SSL certificate (https) automatically — just check the "Enforce HTTPS" checkbox in Settings → Pages after your domain connects.

---

## Keeping the site updated

To make changes after publishing:
1. Edit the HTML file you want to change
2. Go to GitHub, navigate to that file, click the ✏️ pencil icon
3. Paste in your updated content and click **Commit changes**

The site updates within about 30 seconds.

---

## Questions?

Email: ianandsabiwedding@gmail.com
