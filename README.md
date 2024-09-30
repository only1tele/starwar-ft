# Star Wars Frontend

## Overview

This is the frontend part of the Star Wars project that displays Star Wars characters and planets using a responsive UI. Users can filter characters by name and gender, and view detailed information for each character.

## Setup

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Summary of Tools and Technologies:

1. **Next.js**: For server-side rendering and static site generation.
2. **React**: To build the component-based UI.
3. **TypeScript**: For strong typing and error reduction.
4. **Tailwind CSS**: For fast and responsive UI design.
5. **@tanstack/react-table**: For creating interactive, filterable tables.
6. **Axios**: For fetching data from the API.
7. **Moment.js**: For date formatting.
8. **Lucide-react**: For icons.
9. **Docker**: For containerizing the application.
10. **Docker Compose**: To simplify running Docker containers.

## Features

- Search and filter Star Wars characters.
- View detailed character information.
- Responsive design for mobile and desktop.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/only1tele/starwar-ft.git
   ```

2. Navigate to the project directory:

   ```bash
   cd starwar-ft
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env.local` file at the root with:

   ```env
   NEXT_PUBLIC_API_URL=http://localhost:3007/api
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Docker Setup

You can also run this project using Docker and Docker Compose.

### Using Docker

1. Build the Docker image:

   ```bash
   docker build -t starwar-frontend .
   ```

2. Run the Docker container:

   ```bash
   docker run -p 3000:3000 starwar-frontend
   ```

### Using Docker Compose

1. Start the app with Docker Compose:

   ```bash
   docker-compose up
   ```
