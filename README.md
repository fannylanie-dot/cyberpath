[CyberPath-README.txt](https://github.com/user-attachments/files/33134046/CyberPath-README.txt)
# cyberpathCyberPath: installable cybersecurity learning app (PWA)

FILES: index.html, course.html, library.html, tools.html, checklist.html, reference.html,
manifest.webmanifest, sw.js, icon-192.png, icon-512.png  (keep them all in ONE folder)

HOST FREE ON GITHUB PAGES
1. Create a GitHub account and a new PUBLIC repository (e.g. cyberpath).
2. Click "Add file" > "Upload files", drag in ALL files from this folder, commit.
3. Repo Settings > Pages > Source: "Deploy from a branch", Branch: main, folder: / (root), Save.
4. After a minute open https://YOUR-USERNAME.github.io/cyberpath/

INSTALL
- Android: open the link in Chrome, menu (3 dots) > "Install app" / "Add to Home screen".
- Windows/Mac/Linux: in Chrome or Edge click the install icon in the address bar.

TEST ON YOUR PC FIRST (optional): in this folder run  python3 -m http.server 8000
then open http://localhost:8000 (service workers work on localhost).

UPDATING: replace files on GitHub; the app refreshes on the next visit.
Alternative hosts: Netlify Drop or Cloudflare Pages (check their current free terms).
Progress is stored in each browser separately and does not sync between devices.
