# SOLID & Design Pattern Practice (Week 1)

A practice project to apply the **SOLID principles** (focusing on SRP) and basic design patterns using TypeScript.

---

## 📋 Table of Contents

- [About the Project](#about-the-project)
- [Motivation](#motivation)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Example Code](#example-code)
- [Testing](#testing)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)

---

## 🧩 About the Project

This repository is a learning playground for applying the **Single Responsibility Principle** using TypeScript.  
Each class handles one responsibility only: validation, persistence, or sending emails.

---

## 🎯 Motivation

Improve understanding of OOP & SOLID principles in real-world use cases by:

- Practicing clean code with separation of concerns
- Using TypeScript's OOP features
- Preparing for future refactors with other SOLID principles and design patterns

---

## 🗂 Project Structure

```
/
├── src/
│   ├── UserValidator.ts
│   ├── UserRepository.ts
│   ├── EmailService.ts
│   └── UserService.ts
├── tests/
│   └── UserService.test.ts
├── package.json
├── tsconfig.json
└── README.md
```

- `src/`: main source code
- `tests/`: unit test files
- `package.json`, `tsconfig.json`: project configurations

---

## 🚀 Installation

Make sure you have Node.js (v14+) and npm or yarn installed.

```bash
git clone https://github.com/jokovivanco/solid_design_pattern_week_1.git
cd solid_design_pattern_week_1
npm install
```

---

## 🧩 Usage

To run the project:

```bash
npm run build
npm start
```

To run unit tests:

```bash
npm test
```

---

## 🧑‍💻 Example Code

```ts
const validator = new UserValidator();
const repo = new UserRepository();
const email = new EmailService();

const service = new UserService(validator, repo, email);

service.register({
  name: "Joko",
  email: "joko@example.com",
});
```

---

## ✅ Testing

Test scenarios include:

- Input validation (success/failure)
- Repository and email simulation

Run tests with:

```bash
npm test
```

---

## 📈 Roadmap

- Week 2: Implement **OCP** + Strategy Pattern
- Week 3: Practice **LSP** and interfaces
- Week 4: Explore **DIP** with manual Dependency Injection

---

## 🤝 Contributing

1. Fork this repo
2. Create a feature or fix branch
3. Commit and push
4. Open a Pull Request

For major changes, please open an issue first to discuss.

---

## 📄 License

[MIT](LICENSE)  
You are free to use, modify, and distribute this code under the terms of the MIT license.
