# Portfolio Website

This is a personal portfolio website built to showcase my projects, skills, and provide a point of contact. The frontend is built with HTML, CSS, and vanilla JavaScript, using Bootstrap for styling. The backend is a FastAPI application that serves project data from the GitHub API and handles a contact form.

## Features

- **Dynamic Project Display**: Fetches and displays a curated list of projects directly from my GitHub profile.
- **Interactive UI**: Smooth scrolling, animated dot grid background, typewriter effect, and interactive skill cards and project cards.
- **Contact Form**: A functional contact form that sends an email to my personal address upon submission.
- **Responsive Design**: The website is fully responsive and works on all devices.

## Technologies Used

### Frontend

- HTML5
- CSS3
- JavaScript (ES6+)
- Bootstrap 5

### Backend

- Python 3
- FastAPI
- Uvicorn

### APIs

- GitHub API

## Setup and Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Rcidshacker/Portfolio-website.git
    cd Portfolio-website
    ```

2.  **Create a virtual environment and activate it:**
    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
    ```

3.  **Install the required dependencies:**
    ```bash
    pip install -r requirements.txt
    ```

4.  **Create a `.env` file** in the root directory and add the following environment variables:
    ```
    GITHUB_TOKEN=your_github_personal_access_token
    EMAIL_ADDRESS=your_email_address
    EMAIL_PASSWORD=your_email_password
    ```

5.  **Run the backend server:**
    ```bash
    uvicorn main:app --reload
    ```
    The backend will be running at `http://127.0.0.1:8000`.

6.  **Open the `index.html` file** in your browser to view the website. You can use a live server extension in your code editor for a better development experience.

## Deployment Guide

This project is a full-stack application, which means we need to deploy the backend and frontend separately. We will use **Render** for the backend (Python/FastAPI) and **Netlify** for the frontend (HTML/CSS/JS). Both services have excellent free tiers.

### Step 1: Push Your Code to GitHub

Before deploying, make sure your code is pushed to a public GitHub repository. The `.gitignore` file will ensure your `.env` file with your secrets is not uploaded.

### Step 2: Deploy the Backend on Render

1.  **Create a Render Account**: Sign up for a free account at [render.com](https://render.com/).
2.  **Create a New Web Service**:
    *   On the Render dashboard, click **New + > Web Service**.
    *   Connect your GitHub account and select your portfolio repository.
3.  **Configure the Service**:
    *   **Name**: Give your service a name (e.g., `portfolio-backend`).
    *   **Region**: Choose a region close to you.
    *   **Branch**: Select your main branch (e.g., `main` or `master`).
    *   **Root Directory**: Leave this blank if your `main.py` is in the root, otherwise specify the folder.
    *   **Runtime**: Render should auto-detect `Python 3`.
    *   **Build Command**: `pip install -r requirements.txt`
    *   **Start Command**: `uvicorn main:app --host 0.0.0.0 --port $PORT`
4.  **Add Environment Variables**:
    *   Under the **Environment** section, add your secrets:
        *   `GITHUB_TOKEN`: Your GitHub token.
        *   `EMAIL_ADDRESS`: Your email address.
        *   `EMAIL_PASSWORD`: Your email password.
5.  **Create Web Service**: Click **Create Web Service**. Render will build and deploy your backend. This might take a few minutes.
6.  **Get Your Backend URL**: Once deployed, Render will provide you with a public URL for your backend (e.g., `https://portfolio-backend.onrender.com`). **Copy this URL.**

### Step 3: Deploy the Frontend on Netlify

1.  **Update Your Code**:
    *   **`main.py`**: In the `allow_origins` list, replace `"https://YOUR_NETLIFY_URL"` with the actual URL of your Netlify site (you'll get this in a moment). For now, you can add the Render URL here as well.
    *   **`script.js`**: Change the `API_BASE_URL` variable to your new Render backend URL:
        ```javascript
        const API_BASE_URL = 'https://portfolio-backend.onrender.com'; // Replace with your URL
        ```
    *   Commit and push these changes to GitHub.

2.  **Create a Netlify Account**: Sign up for a free account at [netlify.com](https://netlify.com/).
3.  **Create a New Site**:
    *   On the Netlify dashboard, click **Add new site > Import an existing project**.
    *   Connect your GitHub account and select your portfolio repository.
4.  **Configure the Site**:
    *   **Branch to deploy**: Select your main branch.
    *   **Build command**: Leave this blank.
    *   **Publish directory**: Leave this blank (or set to the folder containing `index.html`).
5.  **Deploy Site**: Click **Deploy site**. Netlify will deploy your frontend.
6.  **Get Your Frontend URL**: Netlify will give you a URL for your live site (e.g., `https://your-site-name.netlify.app`).

### Step 4: Final Configuration

1.  **Update Backend CORS**:
    *   Go back to your Render dashboard.
    *   In your service settings, go to the **Environment** section.
    *   Update the `allow_origins` in your `main.py` file to include your new Netlify URL.
    *   Commit and push this final change to GitHub. Render will automatically redeploy your backend.

Your full-stack portfolio website is now live!

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
