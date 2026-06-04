# Editable Research Project Website

Static university research project website draft designed for GitHub Pages.

## Edit the content

Open `content.js` and replace the placeholder values. It contains:

- University logo text and project title
- Optional university logo image
- Research title and introduction
- Lecturer profile
- Six group-member names, IDs and photos
- Research description and journey labels
- Google Form questionnaire link
- References and contact details
- Optional chart or diagram images for each research section

Image fields accept public image URLs. To use your own images, add them to an
`images/` folder and replace the URL with a relative path such as
`"./images/member-1.jpg"`.

For a university logo, set:

```js
universityLogoImage: "./images/unikl-logo.png",
```

For a research diagram or chart, add a path to the matching section:

```js
media: "./images/research-framework.png",
```

Leave an optional image path as `""` to keep the designed placeholder visible.

## Preview locally

Run:

```powershell
python -m http.server 4173
```

Then open `http://localhost:4173`.

## Publish with GitHub Pages

1. Create a GitHub repository.
2. Upload these files or push the folder with Git.
3. In the repository, open **Settings > Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and the `/ (root)` folder.
6. Save. GitHub will provide a link like `https://username.github.io/repository-name/`.

For a root GitHub subdomain such as `https://username.github.io/`, name the
repository `username.github.io`.
