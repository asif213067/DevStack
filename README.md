# 🚀 DevStack

DevStack is a modern and responsive web application that allows developers to explore popular technologies and build their own personalized technology stack. Users can browse technologies, add them to their stack, and easily manage their selected technologies.

---

## ✨ Features

### 🔎 Explore Technologies
Browse a collection of popular technologies with useful information such as category, skill level, rating, badge, and description.

### 🧩 Build Your Own Stack
Add your favorite technologies to your personal stack and see your selected technologies instantly.

### 🗑️ Manage Your Stack
Remove individual technologies or remove all selected technologies from your stack with interactive toast notifications.

---

## 🛠️ Technologies Used

- ⚛️ React
- 📘 TypeScript
- 🎨 Tailwind CSS
- 🌼 DaisyUI
- 🎯 React Icons
- 🔔 React Toastify
- ⚡ Vite

---

## 🎨 Brand Theme

DevStack uses a consistent brand gradient throughout the application:

**Orange → Pink → Violet**

The gradient is used across the brand name, hero section, primary buttons, and other important UI elements to maintain a consistent visual identity.

---

## 📱 Responsive Design

DevStack is designed to provide a smooth experience across different screen sizes:

- 📱 Mobile
- 📲 Tablet
- 💻 Laptop
- 🖥️ Desktop

---

## ⚙️ Main Functionality

- View available technologies
- View technology details
- Add technologies to your stack
- Prevent duplicate technologies
- Remove individual technologies
- Remove all technologies
- Display toast notifications
- Responsive navigation
- Responsive technology cards
- Dynamic selected stack count

---

## 📂 Project Structure

src/
├── assets/
│
├── components/
|   ├── Navbar/
│   ├── Banner/
│   ├── Explore/
│   │   ├── Explore.tsx
│   │   ├── Technologies.tsx
│   │   ├── TechCard.tsx
│   │   ├── Stack.tsx
│   │   └── StackCard.tsx
│   │
│   └── Footer/
│
├── types/
│   └── types.ts
│
├── App.tsx
├── main.tsx
└── index.css# React + TypeScript + Vite

🧠 Learning Goals

This project was built to practice and demonstrate:

React component architecture
React state management
Props and data passing
TypeScript interfaces and types
Array methods such as map, filter, and some
Conditional rendering
Event handling
Responsive design with Tailwind CSS
Reusable components
Third-party NPM packages
Toast notifications
Modern UI development

🌐 Live Demo
🔗 Live Website: https://devstack-by-asif.netlify.app/
🔗 GitHub Repository: https://github.com/asif213067/DevStack/

👨‍💻 Author
Asif Hosen
Frontend Developer | React | TypeScript | Tailwind CSS

❤️ Acknowledgement
This project was created as part of my learning journey with Programming Hero, focusing on modern frontend development using React, TypeScript, and Tailwind CSS.

FAQ: 

1. What is JSX, and why is it used in React?
Answer: JSX stands for JavaScript XML. It is a syntax extension for JavaScript that allows us to write HTML-like markup directly inside JavaScript code. JSX makes it easier to create and structure React components and design user interfaces in a readable and declarative way. It can also combine JavaScript logic with UI elements, making React components easier to build and maintain.

2. What is the difference between props and state?
Answer: Props are used to pass data from a parent component to a child component. They are read-only, so the child component should not directly modify them. Props help make components reusable and allow the parent to control the data passed to the child.
State is data managed by a component that can change over time based on user interactions or application logic. When state changes, React re-renders the component and updates the user interface dynamically.

3. What does the useState hook do, and where did you use it in this project?
Answer: useState is a React Hook that allows a functional component to store and update data (state). When the state changes, React re-renders the component and updates the user interface dynamically.
When a user adds or removes a technology from the stack, the state is updated, and the UI automatically reflects the changes. This allows the selected technology count and stack list to update dynamically.

4. What does the useEffect hook do, and why did you need it to load the JSON data?
Answer: useEffect is a React Hook used to handle side effects in React components. A side effect is something that happens outside the normal process of rendering the UI, such as fetching data from an API or JSON file, updating the document title, using timers like setTimeout and setInterval, adding event listeners, accessing localStorage, or logging information.
In this project, useEffect was used to load the JSON data after the component renders and then update the component's state with the fetched data.

5. Why does every item in a .map() list need a unique key prop?
Answer: When we render a list of data using .map(), React needs a unique key prop for each item. The key helps React identify each element uniquely and understand which items have been added, removed, or changed.
Using a unique ID as the key is the best approach because even if multiple items have similar names or properties, their IDs remain unique. This allows React to efficiently update the correct elements, avoid unnecessary re-renders, and keep the UI working smoothly.

6. What is conditional rendering? Show one place you used it (example: the empty stack message).
Answer: Conditional rendering means displaying different UI elements based on a certain condition or the current state of the application.
In this project, I used conditional rendering for the empty stack state. If the selected technogires stack is empty, the application displays an empty-state message. Once one or more technplogies are added to the stack, the UI changes and displays the selected technologies instead.

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
Answer: In this project, I use props drilling to pass data from a parent component to its child components. When a child component needs to send data or trigger an action in the parent, I use the lifting state up technique.
Lifting state up is a React pattern where shared state is moved from a child component to their closest common parent, allowing multiple components to access and update the same data.
