# Express File Upload & Joke API Project

## Overview

This project is a Node.js Express application with three main features:

- **File Upload:** Upload multiple files along with first and last name, and view the uploaded information.
- **Joke API:** Fetch and display a random joke, showing the setup first and the punchline after 2 seconds.
- **Error Handling:** Robust error handling middleware for catching and displaying errors.

## File Structure

```
WEEK 8/
│
├── app.js                  # Main Express app entry point
├── views/
│   ├── upload.ejs          # EJS template for file upload and display
│   └── joke.ejs            # EJS template for joke display
│
├── file-upload/
│   ├── upload.js           # Router for file upload functionality
│   └── uploads/            # Directory where uploaded files are stored
│
├── api/
│   └── joke.js             # Router for joke API functionality
│
└── README.MD               # This documentation file
```

## Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/HardikIsACoder/CSI-Week-8
   ```
2. **Navigate to the project directory:**
   ```sh
   cd "CSI-Week-8"
   ```
3. **Install dependencies:**
   ```sh
   npm install
   ```

## Running the Project

1. **Start the server:**
   ```sh
   node app.js
   ```
2. **The server will run on [http://localhost:3000](http://localhost:3000)**

## Usage

### 1. File Upload

- Go to [http://localhost:3000/uploads](http://localhost:3000/uploads)
- Fill in your first and last name, select one or more files, and submit.
- The page will display the uploaded information and list of files.
- **Uploaded files can be found in the `uploads` folder inside `file-upload`.**

### 2. Joke API

- Go to [http://localhost:3000/joke](http://localhost:3000/joke)
- The joke setup will be shown immediately.
- The punchline will appear after 2 seconds.

### 3. Error Handling

- Any errors during requests will be caught by the error handling middleware and displayed as a JSON error message.

---

**Enjoy using the Express File Upload & Joke API Project!**
