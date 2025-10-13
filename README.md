🎵 Musician Store

An interactive web application built with React that allows users to browse musical instruments, book consultations, and learn more about music services.

🚀 Features

🎸 Browse a curated list of musical instruments

📅 Book a consultation directly from the website

📄 Learn more through dedicated pages: Homepage, About, Blog

💡 Responsive design optimized for mobile and desktop

♿ Accessible layout and navigation based on WCAG principles

🛠️ Tech Stack

React (Functional components, Hooks)

React Router for navigation

CSS Grid & Flexbox for layout

Jest + React Testing Library for unit tests

📁 Project Structure
musician-store/
├── public/
│ └── musician-logo.png
├── src/
│ ├── components/
│ │ ├── Header/
│ │ ├── Footer/
│ │ ├── InstrumentType/
│ │ ├── PhoneNumber/
│ │ ├── Question/
│ ├── Main/
│ ├── pages/
│ │ ├── Home/
│ │ ├── About/
│ │ ├── Blog/
│ │ ├── Booking/
│ ├── App.js
│ ├── App.css
│ ├── main.jsx
├── README.md
└── package.json

📦 Installation

Clone the repo

git clone https://github.com/IrshakAnna-Mariia/musician-store.git
cd musician-store

Install dependencies

npm install

Start development server

npm run dev

🧪 Running Tests
npm run test

Uses @testing-library/react for component tests.

✍️ Booking Form Example

Includes a custom form to book a consultation with the store. Fields:

Phone number

Instrument type

Comment/question

Submit button

Values are managed using React Refs or State.

🌐 Accessibility

Built with POUR accessibility principles:

Perceivable

Operable

Understandable

Robust

Semantic HTML and ARIA roles where needed

📱 Responsive Design

CSS Grid layout for 3-column layout on desktop

Single column for mobile (via media queries)

Images and cards scale responsively
