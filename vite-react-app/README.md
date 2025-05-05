# DevOps Team 10 - Cloud Microservice Project

This repository contains a React-based web application that demonstrates the implementation of DevOps practices using GitHub's ecosystem of tools and services. The project was developed as part of the SWE455 course on DevOps methodologies.

## Project Overview

Our team developed this application to showcase a complete CI/CD pipeline implementation, including:

- Automated testing and code quality checks
- Containerization with Docker
- Continuous integration and deployment with GitHub Actions
- Security scanning and vulnerability detection

## Live Demo

The application is deployed and can be accessed at [GitHub Pages URL].

## Technology Stack

- **Frontend Framework**: React.js
- **Build Tool**: Vite
- **Testing**: Jest for unit testing
- **Containerization**: Docker
- **CI/CD**: GitHub Actions
- **Version Control**: Git & GitHub
- **Deployment**: GitHub Pages

## Project Structure

```
devops-team10/
├── vite-react-app/       # React application
│   ├── public/           # Static assets
│   ├── src/              # Source code
│   ├── __tests__/        # Test files
│   ├── Dockerfile        # Docker configuration
│   └── ...
├── .github/workflows/    # GitHub Actions workflows
└── project.md            # Project documentation and final report
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm (v8 or higher)
- Docker (optional, for containerization)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/devops-team10.git
   cd devops-team10/vite-react-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

### Running Tests

```bash
npm test
```

## CI/CD Pipeline

Our CI/CD pipeline consists of the following workflows:

1. **CI Workflow**: Runs on pull requests and pushes to main
   - Installs dependencies
   - Runs linting
   - Executes unit tests
   - Generates test reports

2. **Security Workflow**: Runs on schedule and on pull requests
   - Performs dependency scanning
   - Runs CodeQL analysis
   - Reports security vulnerabilities

3. **Deployment Workflow**: Runs on pushes to main
   - Builds the application
   - Deploys to GitHub Pages

## Docker Support

The application can be run in a Docker container:

```bash
# Build the Docker image
docker build -t devops-team10 .

# Run the container
docker run -p 8080:80 devops-team10
```

## Team Members

- Developer: Responsible for core application features
- CI/CD Engineer: Managed GitHub Actions workflows
- Operations/QA Analyst: Oversaw testing, logging, and monitoring

## License

This project is licensed under the MIT License - see the LICENSE file for details.
