# DIT205 CRUD Web - Full-Stack Next.js with MySQL

A Netflix-style dashboard application built with Next.js 16, MySQL, and TailwindCSS featuring a complete CRUD system for attractions and users.

## Features

- 🎨 Netflix-style UI with green theme
- 📱 Fully responsive design (mobile, tablet, desktop)
- 🗄️ MySQL database integration with mysql2
- 🔄 RESTful API routes
- ⚡ Server-side rendering with Next.js App Router
- 🎯 Dynamic routing for attraction details
- 🔍 Search and filter functionality

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Database:** MySQL
- **Styling:** TailwindCSS v4
- **Database Driver:** mysql2
- **Language:** JavaScript/TypeScript

## Project Structure

\`\`\`
├── app/
│   ├── api/
│   │   └── attractions/
│   │       ├── route.js          # GET all attractions
│   │       └── [id]/route.js     # GET single attraction
│   ├── attractions/
│   │   ├── page.js               # List all attractions
│   │   └── [id]/page.js          # Attraction details
│   ├── users/                    # User management pages
│   ├── page.tsx                  # Homepage (Dashboard)
│   └── layout.tsx
├── components/
│   ├── AttractionViewer.tsx      # Main attraction viewer
│   ├── AttractionItem.tsx        # Single attraction card
│   └── ...
├── utils/
│   └── db.js                     # MySQL connection pool
├── scripts/
│   └── setup-attractions.sql     # Database setup script
└── public/                       # Static assets
\`\`\`

## Setup Instructions

### 1. Install Dependencies

\`\`\`bash
npm install
\`\`\`

### 2. Setup MySQL Database

Make sure you have MySQL installed and running on your system.

#### Run the SQL Setup Script

\`\`\`bash
# Login to MySQL
mysql -u root -p

# Run the setup script
source scripts/setup-attractions.sql
\`\`\`

Or manually execute the SQL commands from `scripts/setup-attractions.sql`

### 3. Configure Environment Variables

Create a `.env.local` file in the root directory:

\`\`\`env
MYSQL_HOST=localhost
MYSQL_USER=root
MYSQL_PASSWORD=your_password
MYSQL_DATABASE=attractions_db
\`\`\`

### 4. Run Development Server

\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser.

## API Endpoints

### Attractions API

- **GET** `/api/attractions` - Get all attractions
  \`\`\`json
  [
    {
      "id": 1,
      "name": "Phi Phi Islands",
      "detail": "Beautiful tropical islands...",
      "coverimage": "https://...",
      "latitude": 7.7407,
      "longitude": 98.7784
    }
  ]
  \`\`\`

- **GET** `/api/attractions/[id]` - Get single attraction
  \`\`\`json
  {
    "id": 1,
    "name": "Phi Phi Islands",
    "detail": "Beautiful tropical islands...",
    "coverimage": "https://...",
    "latitude": 7.7407,
    "longitude": 98.7784
  }
  \`\`\`

## Testing URLs

- **Homepage (Dashboard):** http://localhost:3000
- **All Attractions:** http://localhost:3000/attractions
- **Single Attraction:** http://localhost:3000/attractions/1
- **API - All Attractions:** http://localhost:3000/api/attractions
- **API - Single Attraction:** http://localhost:3000/api/attractions/1

## Pages

### Main Pages

- `/` - Homepage with featured destinations
- `/attractions` - List all attractions from MySQL
- `/attractions/[id]` - View single attraction details
- `/users` - User management
- `/01_state` - State management examples
- `/02_event_pops` - Event handling examples
- `/03_use_effect` - useEffect examples

## Features Implemented

### Backend (Step 3 - Full-stack Web)

✅ MySQL database connection (`utils/db.js`)
✅ API route for all attractions (`app/api/attractions/route.js`)
✅ API route for single attraction (`app/api/attractions/[id]/route.js`)
✅ Connection pooling for better performance
✅ Error handling and logging

### Frontend

✅ Attractions list page with Netflix-style cards
✅ Dynamic routing with `useParams()`
✅ React Hooks (`useState`, `useEffect`)
✅ Link navigation between pages
✅ Responsive grid (1 col mobile, 2 tablet, 4 desktop)
✅ Search and filter functionality
✅ Loading states and error handling
✅ Back button navigation

## Color Palette

- Primary: `#008000` (Green)
- Dark Green: `#1B5E20`
- Light Green: `#A5D6A7`
- Background: `#F5FFF5`

## Responsive Breakpoints

- Mobile: 1 column
- Tablet (sm): 2 columns
- Desktop (lg): 4 columns

## Database Schema

### attractions table

| Column | Type | Description |
|--------|------|-------------|
| id | INT (PK, AUTO_INCREMENT) | Unique identifier |
| name | VARCHAR(255) | Attraction name |
| detail | TEXT | Description |
| coverimage | VARCHAR(500) | Image URL |
| latitude | DECIMAL(10,8) | GPS latitude |
| longitude | DECIMAL(11,8) | GPS longitude |
| created_at | TIMESTAMP | Creation time |
| updated_at | TIMESTAMP | Last update time |

## Troubleshooting

### MySQL Connection Error

If you see "Failed to fetch attractions" error:

1. Check MySQL is running: `mysql -u root -p`
2. Verify database exists: `SHOW DATABASES;`
3. Check `.env.local` credentials are correct
4. Ensure `attractions` table has data: `SELECT * FROM attractions;`

### Port Already in Use

If port 3000 is busy:
\`\`\`bash
npm run dev -- -p 3001
\`\`\`

## License

MIT

## Author

DIT205 CRUD Web Project
