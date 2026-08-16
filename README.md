# GondarProject — Portfolio

Personal portfolio website showcasing my work as a Fullstack Web Developer. Built with React and Vite, styled for a modern dark-mode aesthetic, and animated with Framer Motion.

🔗 **Live demo:** _coming soon_

## Features

- Animated hero section with a live-style code snippet display
- Smooth scroll navigation (Home / Projects / Contact)
- Project showcase grid
- Working contact form powered by EmailJS
- Fully responsive layout with Framer Motion transitions

## Tech Stack

**Frontend:** React, Vite, Framer Motion, Font Awesome
**Contact form:** EmailJS
**Tooling:** ESLint

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

\`\`\`bash
git clone https://github.com/Gondarrr/Portfolio.git
cd Portfolio
npm install
\`\`\`

### Environment Variables

This project uses [EmailJS](https://www.emailjs.com/) to power the contact form. Create a `.env` file in the project root:

\`\`\`
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
\`\`\`

### Run locally

\`\`\`bash
npm run dev
\`\`\`

The app will be available at `http://localhost:5173`.

### Build for production

\`\`\`bash
npm run build
npm run preview
\`\`\`

## Project Structure

\`\`\`
src/
├── components/
│ ├── Navbar.jsx
│ ├── Hero.jsx
│ ├── Projects.jsx
│ └── Contact.jsx
├── App.jsx
├── app.css
├── index.css
└── main.jsx
\`\`\`

## Contact

- GitHub: [@Gondarrr](https://github.com/Gondarrr)
- LinkedIn: [Yuflih Agil](https://www.linkedin.com/in/yuflih-agil-0781592a1/)
- Instagram: [@yagildp](https://www.instagram.com/yagildp)

---

© 2026 GondarProject. All rights reserved.
