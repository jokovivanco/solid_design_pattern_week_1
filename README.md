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

## 📁 Project Structure

```
src/
  services/
    strategies/
      VerificationEmailStrategy.ts
      WelcomeEmailStrategy.ts
    EmailService.ts
    IEmailStrategy.ts
    InMemoryUserRepository.ts
    IUser.ts
    IUserRepository.ts
    UserRepository.ts
    UserService.ts
    UserValidator.ts
test/
  UserService.test.ts
```

---

## 🎯 Goals

- Practice Single Responsibility Principle (SRP)
- Apply Strategy Pattern for flexible email behavior
- Prepare codebase for Open/Closed Principle (OCP)
- Use interfaces to decouple implementations

---

## 🚀 Installation

Make sure you have Node.js (v14+) and npm or yarn installed.

```bash
git clone https://github.com/jokovivanco/solid_design_pattern_week_1.git
cd solid_design_pattern_week_1
npm install
```

---

## 🧠 Key Concepts Demonstrated

### ✅ Single Responsibility Principle (SRP)

- `UserValidator`: Responsible only for validation logic
- `UserRepository` / `InMemoryUserRepository`: Handle data persistence
- `EmailService`: Delegates sending emails
- `UserService`: Coordinates user registration without mixing responsibilities

### 🧩 Strategy Pattern (part of OCP)

- `IEmailStrategy`: Interface for email behaviors
- `WelcomeEmailStrategy`, `VerificationEmailStrategy`: Implement different email-sending behaviors
- `EmailService`: Uses injected strategy to decouple email logic

---

## 📈 Roadmap

- Week 2: Implement **OCP** + Strategy Pattern
- Week 3: Practice **LSP** and interfaces
- Week 4: Explore **DIP** with manual Dependency Injection

---

## 🧪 Testing

Unit tests are located in `/test/UserService.test.ts` and cover:

- Input validation
- Email strategy usage
- Repository interaction

Run tests using:

```bash
npm test
```

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
