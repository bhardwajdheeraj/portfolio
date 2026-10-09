/* ==========================================================================
   DHEERAJ BHARDWAJ | DATA ANALYST & DATA SCIENTIST PORTFOLIO - JAVASCRIPT
   Tech Stack: Vanilla JavaScript (ES6+)
   Description: Handles central config, navigation, active tab highlight, 
                category filters, project modal popups, and email handling.
   ========================================================================== */

/* --------------------------------------------------------------------------
   1. Central Configuration (Customize your URLs & info here)
   -------------------------------------------------------------------------- */
const SITE_CONFIG = {
  name: "Dheeraj Bhardwaj",
  initials: "DB",
  title: "Data Analyst & Data Scientist",
  email: "bhardwajdheeraj7388@gmail.com",
  linkedinUrl: "", // Add your LinkedIn URL when ready e.g., "https://linkedin.com/in/dheerajbhardwaj"
  githubUrl: "",   // Add your GitHub URL when ready e.g., "https://github.com/dheerajbhardwaj"
  fiverrUrl: "",   // Optional Fiverr profile URL
  upworkUrl: "",   // Optional Upwork profile URL
  resumeUrl: "",   // Optional Resume download URL
  availabilityStatus: "Available for Analytics & Data Science Roles"
};

document.addEventListener('DOMContentLoaded', () => {
  initNavbarScroll();
  initMobileMenu();
  initActiveLinkHighlight();
  initProjectFilters();
  initSocialLinks();
});

/* --------------------------------------------------------------------------
   2. Navbar Scroll Behavior
   -------------------------------------------------------------------------- */
function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

/* --------------------------------------------------------------------------
   3. Mobile Navigation Menu Toggle
   -------------------------------------------------------------------------- */
function initMobileMenu() {
  const mobileToggle = document.getElementById('mobile-toggle');
  const navLinks = document.getElementById('nav-links');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }
}

/* --------------------------------------------------------------------------
   4. Active Nav Link Highlighting on Scroll
   -------------------------------------------------------------------------- */
function initActiveLinkHighlight() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let currentSectionId = '';
    const scrollPosition = window.scrollY + 120;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  });
}

/* --------------------------------------------------------------------------
   5. Dynamic Project Category Filtering
   -------------------------------------------------------------------------- */
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Toggle active button
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const categories = card.getAttribute('data-category').split(' ');

        if (filterValue === 'all' || categories.includes(filterValue)) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
   6. Dynamic Social Links Config Renderer
   Hides any social profile button if the URL is empty
   -------------------------------------------------------------------------- */
function initSocialLinks() {
  const socialContainer = document.getElementById('social-links-container');
  if (!socialContainer) return;

  const links = [
    { label: 'LinkedIn', url: SITE_CONFIG.linkedinUrl, icon: '💼' },
    { label: 'GitHub', url: SITE_CONFIG.githubUrl, icon: '💻' },
    { label: 'Fiverr', url: SITE_CONFIG.fiverrUrl, icon: '🟢' },
    { label: 'Upwork', url: SITE_CONFIG.upworkUrl, icon: '🚀' },
    { label: 'Resume / CV', url: SITE_CONFIG.resumeUrl, icon: '📄' }
  ];

  let html = '';
  links.forEach(item => {
    if (item.url && item.url.trim() !== '') {
      html += `<a href="${item.url}" target="_blank" rel="noopener noreferrer" class="social-btn">${item.icon} ${item.label}</a>`;
    }
  });

  socialContainer.innerHTML = html;
}

/* --------------------------------------------------------------------------
   7. Comprehensive Project Modal Dialog System (All 6 Projects)
   -------------------------------------------------------------------------- */
const projectModalData = {
  'project-1': {
    title: 'Excel Sales Performance Dashboard',
    badge: 'Demonstration Project • Excel',
    image: 'assets/images/excel-dashboard.png',
    tools: ['Microsoft Excel', 'PivotTables', 'XLOOKUP & Dynamic Formulas', 'Nested IF', 'Conditional Formatting', 'Interactive Charts'],
    problem: 'Retail store managers needed a clear, consolidated view of multi-branch revenue, regional performance bottlenecks, and top product category margins.',
    objectives: 'Build an interactive Excel dashboard that cleans raw multi-branch sales records, calculates key financial metrics, and presents dynamic slicer filtering.',
    dataset: 'Sanitized retail sales transactional dataset (10,000+ records) containing order dates, product IDs, customer types, regional costs, and revenue.',
    workflow: 'Data hygiene with Power Query → PivotTable aggregations → Dynamic XLOOKUP calculations → Visual dashboard layout with timeline slicers.',
    findings: 'Identified a 24% revenue dip in Q3 caused by regional warehouse inventory delays; rebalancing stock allocation projected a $42K quarterly recovery.',
    limitations: 'Excel files can experience performance slowing with extremely large datasets (>1 million rows), making SQL or Power BI preferable for massive scaling.',
    learned: 'Mastered dynamic chart layout design, clean conditional formatting color scales, and structured data validation for non-technical users.'
  },
  'project-2': {
    title: 'SQL Business Sales Analysis',
    badge: 'Demonstration Project • SQL',
    image: 'assets/images/sql-analysis.png',
    tools: ['SQL (PostgreSQL)', 'Common Table Expressions (CTEs)', 'Window Functions (ROW_NUMBER, NTILE)', 'Multi-Table JOINs', 'Cohort Analysis'],
    problem: 'An e-commerce business wanted to identify customer lifetime value (CLV) cohorts, repeat purchase cycles, and top-tier customer spending distributions.',
    objectives: 'Write modular PostgreSQL queries using CTEs and window functions to segment customers and profile multi-year revenue trends.',
    dataset: 'Relational PostgreSQL database containing 50,000+ transactional order records, customer profile tables, and inventory logs.',
    workflow: 'Database schema exploration → Multi-table JOIN aggregation → Window function quartile ranking → Customer cohort retention matrices.',
    findings: 'Top 15% VIP customers generated 62% of annual revenue; referral acquisition channels delivered 35% higher repeat purchase rates than paid ads.',
    limitations: 'Query execution times required indexing optimization on transactional date and customer ID columns.',
    learned: 'Deepened expertise in advanced SQL window functions (NTILE, LAG/LEAD) and CTE readability for peer code reviews.'
  },
  'project-3': {
    title: 'Power BI Executive Dashboard',
    badge: 'Demonstration Project • Power BI',
    image: 'assets/images/powerbi-dashboard.png',
    tools: ['Power BI Desktop', 'DAX Measures', 'Time Intelligence Functions', 'Power Query M', 'Star Schema Modeling', 'Interactive Slicers'],
    problem: 'C-suite executives lacked real-time visibility into cross-departmental gross margin variations and monthly target achievements.',
    objectives: 'Design an end-to-end interactive Power BI dashboard featuring custom DAX measures, time intelligence comparisons, and automated refresh pipelines.',
    dataset: 'Enterprise sales & financial target dataset structured into 1 Fact Table (Sales) and 4 Dimension Tables (Date, Product, Region, Customer).',
    workflow: 'Star Schema data modeling in Power Query → DAX metric engineering (YoY growth, YTD sales) → Interactive drill-down page design.',
    findings: 'Automated weekly executive reporting saved ~8 hours/week while spotlighting 3 underperforming product lines previously masked in summary totals.',
    limitations: 'Requires Power BI service gateway setup for on-premises automated data refresh.',
    learned: 'Gained advanced fluency in DAX CALCULATE modifiers, dynamic visual bookmarks, and corporate UI layout principles.'
  },
  'project-4': {
    title: 'Exploratory Data Analysis (EDA)',
    badge: 'Demonstration Project • Python Data Science',
    image: 'assets/images/eda-analysis.png',
    tools: ['Python 3', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Jupyter Notebook'],
    problem: 'Unstructured customer demographic and behavioral dataset required comprehensive data profiling, outlier detection, and correlation analysis.',
    objectives: 'Perform systematic exploratory analysis using Pandas and Seaborn to identify key variable correlations, missing data patterns, and skewness.',
    dataset: 'Multivariate dataset (15,000 observations, 22 attributes) covering customer tenure, spending scores, engagement metrics, and churn status.',
    workflow: 'Data profiling & missing value imputation → Distribution histograms & boxplot outlier analysis → Correlation heatmap matrix → Key findings summary.',
    findings: 'Discovered strong negative correlation (-0.68) between customer service calls and retention tenure; extreme outliers detected in spending score column.',
    limitations: 'Exploratory findings reveal correlation, not direct causation; statistical hypothesis testing is required for causal confirmation.',
    learned: 'Refined structured EDA workflows, missing value handling strategies, and aesthetic data visualization techniques using Seaborn.'
  },
  'project-5': {
    title: 'Customer Churn Prediction Model',
    badge: 'Demonstration Project • Machine Learning',
    image: 'assets/images/churn-prediction.png',
    tools: ['Python', 'Pandas', 'Scikit-Learn', 'Logistic Regression', 'Confusion Matrix', 'ROC-AUC Curve'],
    problem: 'Subscription services face revenue loss from customer churn and need early risk detection to prioritize proactive retention offers.',
    objectives: 'Build and evaluate a binary classification machine learning model to predict customer churn probability based on historical usage features.',
    dataset: 'Telecom customer churn dataset containing 7,000+ customer records with demographic attributes, contract terms, monthly charges, and churn status.',
    workflow: 'Data preprocessing & encoding → Train/test split (80/20) → Feature scaling → Model training (Logistic Regression) → Confusion matrix evaluation.',
    findings: 'Model achieved 82% classification accuracy and 0.84 ROC-AUC score; contract length and monthly charge were the top predictive features for churn risk.',
    limitations: 'Class imbalance in baseline dataset required SMOTE oversampling to improve minority class recall.',
    learned: 'Strengthened practical understanding of classification evaluation metrics (Precision, Recall, F1-Score) beyond simple accuracy.'
  },
  'project-6': {
    title: 'Random Forest Classification Project',
    badge: 'Demonstration Project • Machine Learning',
    image: 'assets/images/random-forest.png',
    tools: ['Python', 'Pandas', 'Scikit-Learn', 'Random Forest Classifier', 'Feature Importance', 'Hyperparameter Tuning'],
    problem: 'Complex nonlinear relationships in multi-class business data required an ensemble tree-based algorithm to maximize predictive accuracy.',
    objectives: 'Implement a Random Forest classifier with hyperparameter tuning to evaluate feature importance rankings and compare against baseline models.',
    dataset: 'Standardized multi-attribute dataset with 20 input features covering financial indicators, transaction frequency, and risk ratings.',
    workflow: 'Data cleaning & One-Hot Encoding → Random Forest ensemble training → GridSearch cross-validation → Feature importance visualization.',
    findings: 'Random Forest ensemble outperformed single Decision Tree baseline by +11% F1-score; top 3 features accounted for 54% of predictive weight.',
    limitations: 'Random Forest models require greater computational memory and offer lower intrinsic interpretability compared to simple linear models.',
    learned: 'Mastered ensemble learning mechanics, decision tree bagging principles, and feature selection optimization.'
  }
};

function openProjectModal(projectId) {
  const data = projectModalData[projectId];
  if (!data) return;

  const modal = document.getElementById('project-modal');
  const content = document.getElementById('modal-content');

  const toolsHtml = data.tools.map(t => `<span class="tool-tag">${t}</span>`).join(' ');

  content.innerHTML = `
    <span class="project-badge" style="position:static; display:inline-block; margin-bottom:1rem;">${data.badge}</span>
    <h2 style="margin-bottom:1rem; font-size:1.75rem;">${data.title}</h2>

    <img src="${data.image}" alt="${data.title}" class="modal-img-preview">

    <div style="margin-bottom:1.5rem;">
      <h4 style="font-size:0.85rem; margin-bottom:0.5rem; text-transform:uppercase; letter-spacing:0.04em; color:var(--text-light);">Tools & Technologies Used:</h4>
      <div class="tools-used">${toolsHtml}</div>
    </div>

    <div style="background:var(--bg-secondary); border:1px solid var(--border-color); border-radius:var(--radius-md); padding:1.25rem; margin-bottom:1.25rem;">
      <h4 style="font-size:1rem; margin-bottom:0.4rem; color:var(--accent-blue);">1. Problem Statement & Objectives</h4>
      <p style="font-size:0.9rem; color:var(--text-muted); line-height:1.5; margin-bottom:0.5rem;"><strong>Problem:</strong> ${data.problem}</p>
      <p style="font-size:0.9rem; color:var(--text-muted); line-height:1.5;"><strong>Objective:</strong> ${data.objectives}</p>
    </div>

    <div style="background:var(--bg-secondary); border:1px solid var(--border-color); border-radius:var(--radius-md); padding:1.25rem; margin-bottom:1.25rem;">
      <h4 style="font-size:1rem; margin-bottom:0.4rem; color:var(--accent-blue);">2. Dataset & Workflow</h4>
      <p style="font-size:0.9rem; color:var(--text-muted); line-height:1.5; margin-bottom:0.5rem;"><strong>Dataset:</strong> ${data.dataset}</p>
      <p style="font-size:0.9rem; color:var(--text-muted); line-height:1.5;"><strong>Workflow:</strong> ${data.workflow}</p>
    </div>

    <div style="background:var(--accent-blue-light); border:1px solid var(--accent-blue-border); border-radius:var(--radius-md); padding:1.25rem; margin-bottom:1.25rem;">
      <h4 style="font-size:1rem; margin-bottom:0.4rem; color:var(--accent-blue);">3. Key Findings & Deliverables</h4>
      <p style="font-size:0.925rem; color:var(--text-main); font-weight:500; line-height:1.5;">✓ ${data.findings}</p>
    </div>

    <div style="display:grid; grid-template-columns: 1fr 1fr; gap:1rem; margin-bottom:1.5rem;">
      <div style="background:var(--bg-tertiary); padding:1rem; border-radius:var(--radius-md); border:1px solid var(--border-color);">
        <h5 style="font-size:0.85rem; text-transform:uppercase; letter-spacing:0.03em; color:var(--text-light); margin-bottom:0.3rem;">Limitations:</h5>
        <p style="font-size:0.85rem; color:var(--text-muted);">${data.limitations}</p>
      </div>
      <div style="background:var(--bg-tertiary); padding:1rem; border-radius:var(--radius-md); border:1px solid var(--border-color);">
        <h5 style="font-size:0.85rem; text-transform:uppercase; letter-spacing:0.03em; color:var(--text-light); margin-bottom:0.3rem;">What I Learned:</h5>
        <p style="font-size:0.85rem; color:var(--text-muted);">${data.learned}</p>
      </div>
    </div>

    <div style="display:flex; justify-content:flex-end; gap:1rem; padding-top:1rem; border-top:1px solid var(--border-color);">
      <button class="btn btn-secondary" onclick="closeProjectModal()">Close Project Details</button>
      <a href="#contact" class="btn btn-primary" onclick="closeProjectModal()">Discuss Similar Project</a>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  const modal = document.getElementById('project-modal');
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

function closeModalOnOverlay(e) {
  if (e.target.id === 'project-modal') {
    closeProjectModal();
  }
}

/* --------------------------------------------------------------------------
   8. Email Copy & Form Submission Features
   -------------------------------------------------------------------------- */
function copyEmail() {
  const email = SITE_CONFIG.email;
  navigator.clipboard.writeText(email).then(() => {
    alert(`Email address copied to clipboard:\n${email}`);
  }).catch(err => {
    console.error('Could not copy text: ', err);
  });
}

function handleFormSubmit(e) {
  e.preventDefault();
  
  const name = document.getElementById('client-name').value;
  const email = document.getElementById('client-email').value;
  const service = document.getElementById('service-needed').value;
  const details = document.getElementById('project-details').value;
  const statusMsg = document.getElementById('form-status-msg');

  if (name && email && service && details) {
    statusMsg.innerText = '✓ Thank you! Opening your email client...';
    
    // Construct mailto link fallback so client can send email directly
    const mailtoSubject = encodeURIComponent(`Inquiry: ${service} - from ${name}`);
    const mailtoBody = encodeURIComponent(`Hi Dheeraj,\n\nName: ${name}\nEmail: ${email}\nService: ${service}\n\nProject Details:\n${details}\n\nBest regards,\n${name}`);
    
    setTimeout(() => {
      window.location.href = `mailto:${SITE_CONFIG.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
      statusMsg.innerText = '✓ Form ready! Mail client opened or email copied.';
      document.getElementById('contact-form').reset();
    }, 800);
  }
}

/* --------------------------------------------------------------------------
   9. Scroll To Top
   -------------------------------------------------------------------------- */
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
