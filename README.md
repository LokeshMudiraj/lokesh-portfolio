# Manapati Lokesh | Professional Portfolio & Bento Grid Showcase

A premium, highly-optimized responsive developer portfolio designed with a modern Bento Grid aesthetic. Built using React, Tailwind CSS, and lightweight frontend architecture, this platform showcases full-stack expertise, interactive competence matrices, dynamic project filtering, and zero-backend form-to-email channels.

---

## 🚀 Key Features

*   **Bento Grid Interface:** Sleek, high-density dashboard layouts inspired by premium design systems.
*   **Dynamic Component Router:** Seamless client-side tab switching (`About`, `Skills`, `Projects`, `Contact`) with zero page reloads.
*   **Dual-Action Communication Layer:** 
    *   **Automated Email Routing:** Custom-tailored clipboard fallback system integrated with native `mailto:` links to prevent browser restriction blocks.
    *   **Serverless Form Processing:** Production-ready `ContactTab` configured to dispatch directly to email pipelines via Web3Forms without a server footprint.
*   **Responsive Tailwind UX:** Built-in fluidity ranging from mobile screens up to multi-column ultra-wide monitors.

---

## 🛠️ Built With

*   **Frontend Framework:** React 18
*   **Styling Engine:** Tailwind CSS
*   **Icons & Branding:** React Icons (`fa` / `fa6` packages)
*   **Form Infrastructure:** Web3Forms API

---

## 📦 Project Structure

```text
src/
├── assets/
│   └── resume.pdf         # Digital CV download asset
├── components/
│   ├── AboutTab.jsx       # Profile profile & internship metrics
│   ├── SkillsTab.jsx      # Technical stack grid matrix
│   ├── ProjectsTab.jsx    # Project showcase filters
│   └── ContactTab.jsx     # Web3Forms operational contact form
├── App.jsx                # Central Layout manager & Bento system core
└── index.css              # Application injection point