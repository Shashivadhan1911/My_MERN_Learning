# 🌦️ Weather App

A simple and responsive **Weather App** built using **React + Vite**. This app allows users to search for any city and get **real-time weather details** such as temperature, humidity, and conditions.

## ✨ Features

* 🌍 Search weather by city name
* 🌡️ Displays temperature, humidity, and condition
* 🎨 Clean and responsive UI
* ⚡ Built with React + Vite for fast performance
* 📱 Responsive design optimized for desktop and mobile devices
* 🌦️ Visual weather condition representations

## 🛠️ Tech Stack

* **React 18** – Frontend framework
* **Vite** – Build tool & dev server for lightning-fast development
* **CSS3** – Modern styling and responsive design
* **OpenWeatherMap API** – To fetch live weather data
* **ESLint** – Code quality and consistency

## 📦 Installation & Setup

### Prerequisites
- Node.js (version 14.0 or higher)
- npm or yarn package manager

### Steps

Clone the repository:

```bash
git clone https://github.com/Shashivadhan1911/My_MERN_Learning.git
cd My_MERN_Learning/Weather_App
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

## 🔑 API Configuration

This project uses the **OpenWeatherMap API**. To set it up:

1. Create a free account on [OpenWeatherMap](https://openweathermap.org/).
2. Generate an API key from your dashboard.
3. Create a `.env` file in the root directory and add:

```env
VITE_WEATHER_API_KEY=your_api_key_here
```

4. In your code, access it with:

```javascript
const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
```

## 🚀 Usage

1. Open the app in your browser (default: `http://localhost:5173/`).
2. Enter a **city name** in the search bar.
3. Press Enter or click the search button.
4. Get real-time weather updates instantly with:
   - Current temperature
   - Humidity levels
   - Weather conditions
   - Visual weather representations

## 📂 Project Structure

```
Weather_App/
 ├─ .gitignore
 ├─ eslint.config.js
 ├─ index.html
 ├─ package-lock.json
 ├─ package.json
 ├─ vite.config.js
 ├─ public/
 │   └─ vite.svg
 └─ src/
     ├─ index.css                 # Global styles
     ├─ main.jsx                  # Application entry point
     ├─ assets/
     │   └─ react.svg
     └─ components/
         ├─ weather.css           # Weather component styles
         └─ weather.jsx           # Main weather component
```

### File Descriptions
- **`src/main.jsx`** - Application entry point and React DOM rendering
- **`src/components/weather.jsx`** - Main weather component with search and display logic
- **`src/components/weather.css`** - Styling for weather component
- **`src/index.css`** - Global application styles
- **`vite.config.js`** - Vite build configuration
- **`eslint.config.js`** - Code quality configuration

## 🔮 Future Improvements

* ⛅ **5-day forecast view** - Extended weather predictions
* 📍 **Auto-detect location-based weather** - Geolocation support
* 🌐 **Multi-language support** - Internationalization features
* 🎨 **UI enhancements with animations** - Smooth transitions and micro-interactions
* 🌓 **Dark/Light mode toggle** - Theme switching capability
* 💾 **Recent searches** - Save and display recently searched cities
* 🌍 **Multiple units support** - Celsius/Fahrenheit and metric/imperial units
* 📊 **Weather charts** - Visual temperature and humidity trends
* 📱 **PWA support** - Progressive Web App features
* 🗺️ **Weather maps integration** - Radar and satellite imagery

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🐛 Issues & Support

If you encounter any issues or have questions:
- Check the [Issues](https://github.com/Shashivadhan1911/My_MERN_Learning/issues) section
- Create a new issue with detailed information
- Provide steps to reproduce any bugs

## 📞 Contact

**Shashivadhan** - [GitHub Profile](https://github.com/Shashivadhan1911)

Project Link: [Weather App](https://github.com/Shashivadhan1911/My_MERN_Learning/tree/main/Weather_App)

---

💡 *Made with ❤️ using React & Vite*

⭐ **Don't forget to star this repository if you found it helpful!**
