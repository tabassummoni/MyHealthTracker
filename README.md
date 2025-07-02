# My Health Tracker

**My Health Tracker** is a full-stack wellness logging web application that allows users to track their daily habits — including meals, mood, water intake, and exercise — while visualizing their data in a user-friendly dashboard. The project is built with the MERN stack (MongoDB, Express, React, Node.js) and includes Chart.js for interactive data summaries.

---

## Features

- Log daily health activities: meals, mood, exercise, and water intake.
- View logs in a dynamic table and trend chart (Chart.js).
- Add and delete entries in real-time.
- Data stored securely in MongoDB Atlas.
- Responsive design for both mobile and desktop.

---

## Tech Stack

| Component  | Technology         | Purpose                                |
|------------|--------------------|----------------------------------------|
| Frontend   | React.js, Chart.js | Responsive UI and data visualization   |
| Backend    | Node.js, Express   | REST API to handle health log entries  |
| Database   | MongoDB Atlas      | Cloud-based NoSQL document storage     |
| Tools      | Axios, dotenv      | API communication, environment config  |
| Hosting    | (Optional) Netlify & Render | Deployment-ready structure     |

---

## Folder Structure
MyHealthTracker/
├── client/ → React frontend
├── server/ → Express + MongoDB backend
├── docs_phase2/ → Deliverables folder
│ ├── Phase2_Presentation.pptx
│ ├── screencast.mp4
│ └── Phase2_Report.pdf (optional)
├── README.md → This file
├── .gitignore → Git tracking exclusions
---

## How to Run Locally

### Backend (Node.js + Express)

1. Open terminal in project root:
    ```bash
    cd server
    npm install
    ```

2. Create a `.env` file in the `/server` folder with the following:
    ```
    MONGO_URI=your_mongodb_connection_string
    PORT=5000
    ```

3. Start the backend:
    ```bash
    node server.js
    ```

---

### 🌐 Frontend (React.js)

1. In a new terminal window/tab:
    ```bash
    cd client
    npm install
    npm start
    ```

2. Visit `http://localhost:3000` in your browser.

---

## 📁 Submission Files (`docs_phase2/`)

- `Phase2_Presentation.pptx` – 8-slide summary of app, tools, and demo
- `screencast.mp4` – 2–4 min walkthrough of app functionality
- `Phase2_Report.pdf` *(optional but recommended)* – Covers Phase 1 & 2

---

## ✅ Final Notes

- Tested on Chrome and Edge browsers
- Requires MongoDB Atlas cluster URI in `.env`

---


