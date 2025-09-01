# Next.js Repository Pattern - Coding Skills Test

A minimal Next.js TypeScript application demonstrating the Repository Pattern with clean architecture, dependency injection, and RESTful API design. This project serves as a coding skills assessment for developers.

## 🎯 Objective

**Fix the project and implement the missing codes** to make the application work as shown in the screenshots below.

## 📸 Expected Results

The application should function exactly as demonstrated in these screenshots:

### 1. Messages Display
<img width="2064" height="1792" alt="image" src="https://github.com/user-attachments/assets/963be419-2374-4352-ae09-89438d930251" />

### 2. Adding a New Message
<img width="2064" height="1792" alt="image" src="https://github.com/user-attachments/assets/d550e60b-0fbc-404d-9edd-fe1fa395928a" />

### 3. Complete Functionality
<img width="2064" height="2160" alt="image" src="https://github.com/user-attachments/assets/7019bed6-009e-404d-9a80-6be2c571a04c" />

## 🏗️ Architecture Overview

This project follows the **Repository Pattern** with clean architecture principles:

```
├── types/                 # TypeScript interfaces and DTOs
├── repositories/          # Data access layer
│   ├── interfaces/        # Repository contracts
│   └── MessageRepository  # Implementation
├── services/              # Business logic layer
├── lib/                   # Dependency injection container
├── pages/
│   ├── api/messages/      # REST API endpoints
│   └── index.tsx          # Main UI component
```

## 🚀 Getting Started

1. **Clone/Download** the project
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Start development server**:
   ```bash
   npm run dev
   ```
4. **Open** [http://localhost:3000](http://localhost:3000)

## 📋 Requirements

### What's Already Implemented
- ✅ Project structure and architecture
- ✅ TypeScript interfaces and types
- ✅ Repository pattern setup
- ✅ Service layer foundation
- ✅ Basic API endpoints structure
- ✅ UI components layout

#### 🔌 API Requirements
- `GET /api/messages` - Retrieve all messages
- `POST /api/messages` - Create new message

---

**Good luck! Remember to ask questions if you need clarification on requirements.**
