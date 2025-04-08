# 3D Code Academy

A Three.js course platform with interactive learning experiences, designed to help developers master 3D web graphics through comprehensive lessons and challenges.

## Features

- **Interactive Lessons**: Comprehensive courses on 3D modeling, animation, and graphics
- **Coding Challenges**: Hands-on projects to apply your knowledge
- **Community Section**: Connect with other learners and share your work
- **Day/Night Theme**: Toggle between light and dark modes for comfortable viewing
- **Responsive Design**: Works on desktop, tablet, and mobile devices

## Technology Stack

- **Frontend**: React with Vite, Tailwind CSS, shadcn UI components
- **3D Graphics**: Three.js with React Three Fiber
- **Backend**: Express.js API
- **Database**: PostgreSQL with Drizzle ORM
- **Authentication**: Passport.js (in development)

## Installation

Clone the repository:

```bash
git clone https://github.com/BlessedMicaiah/Online_Course.git
cd Online_Course
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

## Database Setup

The project uses PostgreSQL for data storage. Database migrations are handled by Drizzle ORM.

```bash
npm run db:push
```

## Features in Development

- User authentication and profile management
- Course progress tracking
- Assignment submission and grading
- Interactive 3D model viewer
- Community forums and discussion

## License

[MIT](LICENSE)