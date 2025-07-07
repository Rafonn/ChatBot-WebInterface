# ChatBotInterface

A modern web interface for the PFR AI ChatBot, built with Next.js, React, and Tailwind CSS.  
Supports authentication, real-time chat, and user presence tracking.

## Features

- User authentication with NextAuth.js and SQL Server
- Real-time chat via WebSocket
- Animated UI with Framer Motion
- Tailwind CSS for styling
- User presence and activity tracking

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- SQL Server instance (see `.env` for connection details)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/Rafonn/ChatBot-WebInterface.git
   cd ChatBotInterface
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Configure environment variables:

   - Copy `.env` and `.env.local` and update with your database and NextAuth credentials.

4. Run the development server:
   ```sh
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `src/app` - Next.js app directory (pages, layout, providers)
- `src/components` - React UI components
- `src/lib` - Utility and database connection logic
- `public/` - Static assets

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server