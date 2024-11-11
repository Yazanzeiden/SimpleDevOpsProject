# Simple DevOps Project

This project demonstrates a full-stack application setup with Flask (Python) for the backend and Nginx for the frontend, all orchestrated with Docker, Docker Compose, Ansible, jenkins, and AWS S3 for backup.

---

## Project Structure

### Here is the directory structure of the project:


SimpleDevOpsProject/
│
├── ansible/                         # Infrastructure configuration
│   ├── inventory/                   # Ansible inventory files
│   │   └── hosts                    # Hosts configuration for Ansible
│   ├── playbooks/                   # Playbooks for deployment, backup, and rollback
│   │   ├── deploy.yaml              # Playbook for deployment and setup
│   │   ├── backup.yaml              # Playbook for backing up Redis and code
│   │   └── rollback.yaml            # Playbook for restoring from backup
│   └── roles/                       # Optional: Custom roles for reusable tasks
│       └── redis/                   # Redis-related tasks
│           └── tasks/               # Redis task files
│
├── backend/                         # Backend Flask application
│   ├── src/                         # Application source code
│   │   └── app.py                   # Flask API with Redis integration
│   └── Dockerfile                   # Dockerfile for backend container
│   └── requirements.txt             # Python dependencies for Flask app
│
├── frontend/                        # Frontend static content (Nginx)
│   ├── src/                         # Static files and app logic
│   │   └── app.js                   # JavaScript to call backend API and display data
│   └── Dockerfile                   # Dockerfile for frontend container
│   └── nginx.conf                   # Nginx configuration for reverse proxy
│
├── docker-compose.yml               # Docker Compose config for backend, frontend, Redis
│
├── .gitignore                       # Git ignore file (for ignoring build artifacts, etc.)
├── README.md                        # Documentation file for the project
└── LICENSE                          # License file (if applicable)



---

## Jenkins

 Jenkins used to run ansible playbooks please note that the jenkins is using ansible plugin not jenkins pipeline since this project let the    ansible do most of the work jenkins here is only for trggering playbooks.

Jenkins IP: http://44.204.183.193/

![alt text](image.png)

