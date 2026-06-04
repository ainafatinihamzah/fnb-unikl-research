# Digital Growth F&B Research Website

Static research website for the UniKL Business School project, "The Influence of Social Media Marketing on Business Growth Stability."

## Project Structure

- `index.html` - page structure and section layout
- `styles.css` - responsive visual styling
- `content.js` - editable research content, links, image paths, and references
- `app.js` - content rendering and navigation behaviour
- `images/` - site images, charts, portraits, logo, and research visuals

## Local Preview

Run a local static server from the project folder:

```powershell
python -m http.server 8080 --bind 127.0.0.1
```

Open:

```text
http://127.0.0.1:8080/
```

## GitHub Pages

1. Push the project to GitHub.
2. Open the repository settings.
3. Go to **Pages**.
4. Choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)`.
6. Save the settings.

GitHub will publish the site at the Pages URL shown in the repository settings.
