browser server

│ │
│─── GET https://studies.cs.helsinki.fi/exampleapp/spa ────────────>│
│<── HTML document ────────────────────────────────────────────────────│
│ │
│─── GET https://studies.cs.helsinki.fi/exampleapp/main.css ──────────>│
│<── the css file ─────────────────────────────────────────────────────│
│ │
│─── GET https://studies.cs.helsinki.fi/exampleapp/main.js ───────────>│
│<── the JavaScript file ──────────────────────────────────────────────│
│ │
│ [Browser starts executing JS code that fetches JSON] │
│ │
│─── GET https://studies.cs.helsinki.fi/exampleapp/data.json ─────────>│
│<── [{"content": "your note", "date": "2026-07-30"}, ...] ────────────│
│ │
│ [Browser executes callback function that renders updated notes] │
│ │
