# Stopwatch Web Component

This is a simple, modern stopwatch implemented using Web Components and JavaScript.

## 🚀 Features
- Start, Stop, and Reset functionality.
- Custom Web Component implementation.
- Modern and aesthetic UI.
- Emits a custom event (`timeUpdate`) with the updated time.

## 🛠️ Installation & Usage
1. Clone the repository:
   ```bash
   git clone https://github.com/aestheticscoder/stopwatch-web-component.git
   cd stopwatch-web-component
   ```

2. Open the `index.html` file in a browser:
   ```bash
   xdg-open index.html  # Linux
   open index.html      # macOS
   start index.html     # Windows
   ```

## 📜 How It Works
- The **`<stopwatch-component>`** is a custom Web Component.
- Listens for `timeUpdate` events:
   ```js
   document.addEventListener("timeUpdate", (event) => {
       console.log("Updated Time:", event.detail.time);
   });
   ```

## 🖌️ Styling
- The UI is styled using CSS for a modern look.
- You can modify styles in `styles.css`.

## 🛠️ Development
If you want to make changes:
1. Edit `stopwatch.js` for functionality.
2. Edit `styles.css` for design updates.

## 🤝 Contributing
Feel free to fork the repo and submit pull requests.

## 📝 License
This project is licensed under the MIT License.

---
Made with ❤️ by aestheticscoder
