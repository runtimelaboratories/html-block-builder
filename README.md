# Drag & Drop UI Builder

[![Stars|128](https://img.shields.io/github/stars/runtimelaboratories/html-block-builder.svg)](https://github.com/runtimelaboratories/html-block-builder/stargazers)
[![License](https://img.shields.io/github/license/runtimelaboratories/html-block-builder.svg)](LICENSE)


---


## 📋 Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Screenshots](#screenshots)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)


---


## Overview
**Drag & Drop UI Builder** is a web-based visual editor that lets you build HTML pages using drag-and-drop, custom CSS, and interactive UI components. Perfect for designers and developers who want a live preview while coding elements for their websites or entire web pages.


---


## Features
- Drag and drop HTML elements
- Add custom CSS classes
- Export projects as ZIP
- Editable code viewer for advanced customisation
- Reset project/local storage feature


---


## Screenshots
![Editor Screenshot](./screenshots/editor.png)
![Code Viewer Screenshot](./screenshots/code-viewer.png)


---


## Requirements
- **Node.js** (v22.22 or above)
- **nvm** (Node Version Manager)
- **npm** (Comes with Node.js)

**Install NVM using BREW:**
```bash
brew install nvm
nvm install 22
nvm use 22
```


----


## Installation
Clone the repository:
```bash
git clone https://github.com/runtimelaboratories/html-block-builder.git  
cd html-block-builder
```

Then, Install the dependencies:
```bash
npm init -y  
npm install grapesjs  
npm install vite  
npm install grapesjs-blocks-basic   
npm install grapesjs-plugin-forms  
npm install grapesjs-navbar  
npm install grapesjs-tabs  
npm install grapesjs-tooltip  
npm install grapesjs-plugin-export
```


----


## Usage
Run the development server:
```bash
npm run dev
```

Open your browser and go to `http://localhost:5173` (Vite' default).


----


## Contributing
Contributions are welcome! Here’s how you can help:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -m "Add my feature"`
4. Push to the branch: `git push origin feature/my-feature`
5. Open a pull request

Please follow the code of conduct and write clear, concise commits.


---


## License

This project is licensed under the MIT License.


---


> Created with ❤️ using GrapesJS
