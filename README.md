# Luca Pappalardo — personal website

A responsive, single-page academic website prepared for GitHub Pages.

## Before publishing

1. Replace the placeholder links (`href="#"`) for Google Scholar, ORCID, GitHub and LinkedIn.
2. Replace `name.surname@cnr.it` with the preferred email address.
3. Add the CV as `assets/files/luca-pappalardo-cv.pdf`.
4. Replace the two placeholder publications and the placeholder news item.
5. Edit any wording in `index.html` as needed.

## Publish with GitHub Pages

Create the repository `lucapappalardo`, upload these files to its default branch, then open **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, select the default branch and the `/ (root)` folder, then save.

Because all asset links are relative, the site works both at a project URL such as `https://USERNAME.github.io/lucapappalardo/` and with a future custom domain.

## Local preview

From this folder, run:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.
