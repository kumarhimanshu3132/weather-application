# 🌤️ Real-Time Weather Application

[![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Deployed with GitHub Pages](https://img.shields.io/badge/github%20pages-121013?style=for-the-badge&logo=github&logoColor=white)](https://pages.github.com/)

A dynamic, interactive web application that provides real-time weather data for any location worldwide. Built with Vanilla JavaScript, this project demonstrates proficiency in interacting with third-party REST APIs, handling asynchronous operations, and utilizing browser-native APIs like Geolocation.

**🔗 [View Live Demo](https://kumarhimanshu3132.github.io/weather-application/)**

## ✨ Key Features
*   **Real-Time Data Fetching:** Integrates with the [WeatherAPI](https://www.weatherapi.com/) to fetch accurate current weather conditions, temperature, humidity, wind speed, pressure, and visibility.
*   **Device Geolocation:** Utilizes the HTML5 `navigator.geolocation` API to automatically detect the user's current coordinates and fetch local weather instantly.
*   **Asynchronous JavaScript:** Employs modern `async/await` syntax and `try/catch` error handling to manage API requests and edge cases (e.g., invalid city names or denied location permissions).
*   **Dynamic DOM Manipulation:** Smoothly transitions between search and result views by toggling CSS classes based on API response states.
*   **Modern UI/UX:** Features a fully responsive, mobile-first design utilizing CSS Flexbox, Grid, custom keyframe animations (`@keyframes`), and smooth gradient backgrounds.

## 🛠️ Tech Stack
*   **Frontend:** HTML5, CSS3, Vanilla JavaScript (ES6+)
*   **API:** WeatherAPI REST API
*   **Icons:** FontAwesome 6

## 🚀 Local Setup Instructions

1. Clone the repository:
   ```bash
   git clone [https://github.com/kumarhimanshu3132/weather-application.git](https://github.com/kumarhimanshu3132/weather-application.git)
   ```
  Navigate into the project directory:

  ```bash
  cd weather-application
  ```
  Get a free API key from WeatherAPI.

  Open script.js and replace the placeholder API_KEY string with your new key.

  Open the index.html file in your browser or run it via a local development server (like VS Code Live Server).

🧠 Learning Outcomes
This project was developed during Semester 4 (Advance Web Technology) to transition from static web pages to dynamic, data-driven applications. It solidified core concepts of the DOM, event listeners, promise-based HTTP requests (fetch), and handling JSON payloads.
