# main.py
# This file contains the backend logic for the portfolio website.
# It uses FastAPI to create API endpoints for fetching GitHub projects and handling contact form submissions.

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import requests
import os
from dotenv import load_dotenv
from typing import List, Dict, Any
from pydantic import BaseModel
import smtplib
from email.mime.text import MIMEText

# Load environment variables from a .env file
load_dotenv()

# Initialize the FastAPI application
app = FastAPI()

# Configure CORS (Cross-Origin Resource Sharing) to allow the frontend to communicate with this backend.
# This is a critical security measure to prevent other websites from making requests to your API.
app.add_middleware(
    CORSMiddleware,
    # Replace "YOUR_NETLIFY_URL" with your actual Netlify domain once deployed.
    # The local development server origin is included for testing.
    allow_origins=[
        "http://127.0.0.1:5500",
        "https://rcidshacker-portfolio.netlify.app" 
    ],
    allow_credentials=True,
    allow_methods=["GET", "POST"],  # Only allow the methods that are actually used
    allow_headers=["Content-Type"], # Only allow necessary headers
)

# GitHub API configuration
GITHUB_USERNAME = "Rcidshacker"
GITHUB_TOKEN = os.getenv("GITHUB_TOKEN")  # Your GitHub Personal Access Token

# Pydantic model for structuring project data
class Project(BaseModel):
    name: str
    description: str | None = None
    html_url: str
    languages: Dict[str, Any]

# API endpoint to get a list of featured GitHub projects
@app.get("/api/projects", response_model=List[Project])
def get_projects() -> List[Project]:
    """
    Fetches a curated list of projects from GitHub and returns their details.
    """
    if not GITHUB_TOKEN:
        return []
        
    headers = {"Authorization": f"token {GITHUB_TOKEN}"}
    
    # A specific list of project names to be showcased on the portfolio
    project_names = [
        "Nutria-in-react",
        "Air-canvas-new",
        "Neko-Tasks",
        "sentiment-analysis-app"
    ]
    
    projects: List[Project] = []
    # Iterate over the project names and fetch their data from the GitHub API
    for name in project_names:
        response = requests.get(f"https://api.github.com/repos/{GITHUB_USERNAME}/{name}", headers=headers)
        if response.status_code == 200:
            repo = response.json()
            # Fetch language data for each repository
            languages_response = requests.get(repo["languages_url"], headers=headers)
            languages: Dict[str, Any] = languages_response.json() if languages_response.status_code == 200 else {}
            
            projects.append(Project(
                name=repo["name"],
                description=repo["description"],
                html_url=repo["html_url"],
                languages=languages
            ))
            
    return projects

# Pydantic model for the contact form data
class ContactForm(BaseModel):
    name: str
    email: str
    phone: str | None = None
    message: str

# API endpoint to handle contact form submissions
@app.post("/api/contact")
def contact(form: ContactForm):
    """
    Receives contact form data and sends it as an email.
    """
    email_address = os.getenv("EMAIL_ADDRESS")
    email_password = os.getenv("EMAIL_PASSWORD")

    # Check if email credentials are configured in the environment
    if not email_address or not email_password:
        return {"message": "Email credentials not configured"}

    # Create the email message
    msg = MIMEText(f"Name: {form.name}\nEmail: {form.email}\nPhone: {form.phone}\n\nMessage:\n{form.message}")
    msg["Subject"] = f"New Contact Form Submission from {form.name}"
    msg["From"] = email_address
    msg["To"] = email_address

    # Send the email using Gmail's SMTP server
    try:
        with smtplib.SMTP_SSL("smtp.gmail.com", 465) as server:
            server.login(email_address, email_password)
            server.send_message(msg)
        return {"message": "Email sent successfully"}
    except Exception as e:
        return {"message": f"Failed to send email: {e}"}
