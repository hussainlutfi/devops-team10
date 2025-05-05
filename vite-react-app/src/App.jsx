import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>DevOps Team 10 - Cloud Microservice Project</h1>
        <p className="subtitle">SWE455 - DevOps Pipeline Implementation</p>
      </header>

      <main>
        <section className="project-overview">
          <h2>Project Overview</h2>
          <p>
            Our team developed a React-based web application deployed using modern DevOps practices.
            This application demonstrates the implementation of a complete CI/CD pipeline using GitHub's
            ecosystem of tools and services.
          </p>
        </section>

        <section className="devops-pipeline">
          <h2>Our DevOps Pipeline</h2>
          <div className="image-container">
            <img src="/workflows.png" alt="GitHub Workflows" className="screenshot" />
            <p className="caption">GitHub Actions Workflows</p>
          </div>
        </section>

        <section className="features-grid">
          <div className="feature-card">
            <h3>Continuous Integration</h3>
            <p>Automated testing and code quality checks on every pull request</p>
            <img src="/github issues.png" alt="GitHub Issues" className="feature-image" />
          </div>

          <div className="feature-card">
            <h3>Containerization</h3>
            <p>Docker-based deployment for consistent environments</p>
            <img src="/dockerfile code.png" alt="Dockerfile Configuration" className="feature-image" />
          </div>

          <div className="feature-card">
            <h3>Continuous Deployment</h3>
            <p>Automated deployment to production environments</p>
            <img src="/deployments.png" alt="Deployment History" className="feature-image" />
          </div>

          <div className="feature-card">
            <h3>Security Scanning</h3>
            <p>Automated security vulnerability detection</p>
            <img src="/Security overview.png" alt="Security Scanning" className="feature-image" />
          </div>
        </section>

        <section className="tech-stack">
          <h2>Technology Stack</h2>
          <ul className="tech-list">
            <li><strong>Frontend:</strong> React.js with Vite</li>
            <li><strong>Testing:</strong> Jest</li>
            <li><strong>CI/CD:</strong> GitHub Actions</li>
            <li><strong>Containerization:</strong> Docker</li>
            <li><strong>Deployment:</strong> GitHub Pages</li>
          </ul>
        </section>

        <section className="team-info">
          <h2>Our Team</h2>
          <div className="team-members">
            <div className="team-member">
              <h3>Developer</h3>
              <p>Responsible for core application features</p>
            </div>
            <div className="team-member">
              <h3>CI/CD Engineer</h3>
              <p>Managed GitHub Actions workflows</p>
            </div>
            <div className="team-member">
              <h3>Operations/QA Analyst</h3>
              <p>Oversaw testing, logging, and monitoring</p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>DevOps Team 10 - SWE455 Project - {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App;
