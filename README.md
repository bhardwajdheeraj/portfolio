# Dheeraj Bhardwaj | Data Analyst & Data Scientist Portfolio

A complete, modern, responsive personal portfolio website designed for **Dheeraj Bhardwaj** to showcase data analytics, business intelligence, exploratory data analysis, and machine learning capabilities.

Suitable for LinkedIn, GitHub, resume/CV links, job applications, recruiters, Upwork, Fiverr, and direct business outreach.

Built with **HTML5, CSS3, and Vanilla JavaScript**—fast, responsive, lightweight, with zero external dependencies!

---

## 🌟 Features & Structure

- **Personal Brand Identity:** Branded for **Dheeraj Bhardwaj** (*Data Analyst & Data Scientist*).
- **Hero Section:** Tagline *"DATA ANALYTICS • DATA SCIENCE • MACHINE LEARNING"*, primary headline *"Hi, I'm Dheeraj Bhardwaj."*, value proposition *"Turning Data Into Insights. Building Intelligence From Data."*, toolkit summary pills, and interactive ML/Analytics visual card.
- **About Me Section:** Covers analytical problem-solving approach, data hygiene, SQL querying, dynamic dashboarding, and machine learning fundamentals.
- **4 Skills Categories:**
  1. *Data Analytics* (Excel, SQL, Data Cleaning, Data Validation, EDA, KPI Reporting, Data Visualization)
  2. *Business Intelligence* (Power BI, DAX, Data Modeling, Power Query, Automated Reporting, Refresh Workflows)
  3. *Programming & Data Science* (Python, Pandas, NumPy, Matplotlib, Seaborn, Jupyter Notebook)
  4. *Machine Learning* (Logistic Regression, Decision Trees, Random Forest, Classification, Train/Test Split, Confusion Matrix, Precision/Recall, ROC-AUC)
- **6 Demonstration Projects with Category Filtering:**
  1. *Excel Sales Performance Dashboard* (Analytics / Excel)
  2. *SQL Business Sales Analysis* (Analytics / SQL)
  3. *Power BI Executive Dashboard* (Analytics / Power BI)
  4. *Exploratory Data Analysis (EDA)* (Data Science / Python)
  5. *Customer Churn Prediction* (Machine Learning / Data Science)
  6. *Random Forest Classification* (Machine Learning / Data Science)
- **Interactive Project Modal Popup:** Detailed view covering Problem Statement, Dataset, Workflow, Findings, Limitations, and What I Learned.
- **6 Services & Areas of Expertise:** Clear service cards for Excel, SQL, Power BI, Python EDA, KPI Visualization, and Machine Learning.
- **4-Step Analytical Workflow:** Understand → Prepare → Analyze → Communicate.
- **Contact & Central Configuration:** Email link (`bhardwajdheeraj7388@gmail.com`), mailto fallback form, copy email button, and dynamic social link rendering system.

---

## 📁 File Structure

```text
data_portfolio/
│
├── index.html              # Main HTML structure with semantic sections
├── style.css               # Modern CSS system, custom properties & responsive grid
├── script.js               # Central config, navbar scroll, category filters, project modals
├── assets/
│   └── images/
│       ├── excel-dashboard.png   # Excel project preview
│       ├── sql-analysis.png      # SQL project preview
│       ├── powerbi-dashboard.png # Power BI project preview
│       ├── eda-analysis.png      # Python EDA project preview
│       ├── churn-prediction.png  # Churn ML project preview
│       └── random-forest.png     # Random Forest ML project preview
└── README.md               # Overview and publishing instructions
```

---

## ⚙️ Central Configuration (`script.js`)

You can configure your optional social links and personal information in `script.js`:

```javascript
const SITE_CONFIG = {
  name: "Dheeraj Bhardwaj",
  initials: "DB",
  title: "Data Analyst & Data Scientist",
  email: "bhardwajdheeraj7388@gmail.com",
  linkedinUrl: "https://linkedin.com/in/yourusername", // Fill when ready
  githubUrl: "https://github.com/yourusername",       // Fill when ready
  fiverrUrl: "",   // Optional
  upworkUrl: "",   // Optional
  resumeUrl: "",   // Optional
  availabilityStatus: "Available for Analytics & Data Science Roles"
};
```
*Note: Any social link with an empty string `""` will automatically be hidden on the live website.*

---

## 🚀 How to Run the Website Locally

### Option 1: Direct Browser Open
Double-click `index.html` or open it with Google Chrome / Microsoft Edge / Safari.

### Option 2: Live Server in VS Code
1. Open the project folder in VS Code.
2. Click **"Go Live"** at the bottom status bar (using Live Server extension).

### Option 3: Python HTTP Server
Open terminal in the project directory:
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000` in your browser.

---

## 🌐 Free Publishing Instructions

### Method 1: Netlify Drop (30-Second Upload)
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop).
2. Drag and drop the `data_portfolio` folder into the Netlify drop zone.
3. You will receive a live URL (e.g., `https://dheeraj-bhardwaj-portfolio.netlify.app`).

### Method 2: GitHub Pages (Recommended)
1. Push this folder to a GitHub repository named `data-portfolio`.
2. Go to **Repository Settings** -> **Pages**.
3. Set **Branch** to `main` and click **Save**.
4. Your portfolio will be live at `https://YOUR-GITHUB-USERNAME.github.io/data-portfolio/`!

---

## 📜 License & Copyright

© 2026 Dheeraj Bhardwaj. All rights reserved. Portfolio demonstration project.
