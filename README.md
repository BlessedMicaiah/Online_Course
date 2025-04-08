# 3D Code Academy Platform

A Three.js course platform with interactive learning experiences, designed to help developers master 3D web graphics through comprehensive lessons and challenges.

## Project Overview

This project is a modern web application that recreates the functionality of threejs-journey.com. It features:

- Interactive 3D content using Three.js
- Comprehensive lesson structure
- Community engagement features
- Coding challenges with submissions
- Day/night theme toggle

## Tech Stack

- **Frontend**: React with Vite
- **Styling**: Tailwind CSS with shadcn/ui components
- **3D Rendering**: Three.js with React Three Fiber
- **Database**: PostgreSQL with Drizzle ORM
- **Authentication**: Express-session with Passport

## Getting Started

### Prerequisites

- Node.js 16+
- PostgreSQL database

### Installation

1. Clone this repository:
```bash
git clone https://github.com/BlessedMicaiah/Online_Course.git
cd Online_Course
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file with the following content:
```
DATABASE_URL=postgresql://username:password@localhost:5432/dbname
```

4. Initialize the database:
```bash
npm run db:push
```

5. Start the development server:
```bash
npm run dev
```

## Features

- **Lessons Section**: Browse and access structured learning content
- **Challenges Section**: Participate in community challenges
- **Community Section**: Connect with other developers
- **Responsive Design**: Works on mobile, tablet, and desktop devices
- **Theme Toggle**: Switch between day and night modes
- **3D Visualization**: Interactive 3D models throughout the site

## Database Schema

The application uses a relational database with the following models:
- Users
- Courses
- Challenges
- Enrollments
- Submissions

## Pushing to Your GitHub (Instructions for Repository Owner)

To push this code to your GitHub repository:

1. Initialize Git in your local copy if not already done:
```bash
git init
```

2. Add the remote repository:
```bash
git remote add origin https://github.com/BlessedMicaiah/Online_Course.git
```

3. Add all files and commit:
```bash
git add .
git commit -m "Initial commit: 3D Code Academy platform"
```

4. Push to GitHub:
```bash
git push -u origin main
```

## License

MIT