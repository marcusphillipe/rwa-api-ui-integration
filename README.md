# RWA – API & UI Tests Integration

This project contains automated API and UI tests for the [Real World App](https://github.com/cypress-io/cypress-realworld-app.git), using Cypress.

The main goal is to validate both frontend and backend functionalities through real-world test scenarios, combining E2E tests, data validation, and integration logic in a single structured repository.

## 🚀 How to Run Locally

```bash
# 1. Clone this repository
git clone https://github.com/marcusphillipe/rwa-api-ui-integration.git
cd rwa-api-ui-integration

# 2. Install and run the Real World App server
cd rwa-base
yarn install
yarn dev
# → Server will run at http://localhost:3000

# 3. Run the Cypress tests
cd ../api-ui-tests
yarn install
yarn test         # Headless mode
# or
yarn cypress open # GUI mode
```

## 👨‍💻 Author

Project developed for learning, professional growth, and showcasing QA automation skills.

**Marcus Phillipe**  
🔗 [LinkedIn](https://www.linkedin.com/in/marcusparamos/)  
📁 [GitHub Repo](https://github.com/marcusphillipe/rwa-api-ui-integration.git)

## 📬 Contributions

Suggestions and feedback are welcome!
