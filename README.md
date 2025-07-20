# SOLID & Design Pattern Practice – Week 1

This repository contains a practice project applying **SOLID principles** and **design patterns** using TypeScript.  
It demonstrates **Single Responsibility Principle (SRP)** and introduces the **Strategy Pattern** as part of applying **Open/Closed Principle (OCP)**.

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

## 🛣 Roadmap

- ✅ Week 1: SRP + Strategy Pattern (you are here)
- 🔜 Week 2: Open/Closed Principle (OCP) deeper usage
- 🔜 Week 3: Liskov Substitution & Interface Segregation
- 🔜 Week 4: Dependency Inversion & Project Refactor

---

## 📄 License

This project is licensed under the MIT License.
