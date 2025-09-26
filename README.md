# DJs on Demand

A comprehensive system designed to streamline the booking and management of DJs for events. DJs on Demand helps event organizers efficiently manage events by maintaining detailed records of DJs, clients, music playlists, venues, and event details.

## 🎵 Features

- **Event Management**: Create, update, and track events with comprehensive details
- **DJ Database**: Maintain profiles and availability of professional DJs
- **Client Management**: Store and manage client information and preferences  
- **Playlist Management**: Organize and curate music playlists for different events
- **Venue Tracking**: Keep records of event venues and their specifications
- **Booking System**: Streamlined booking process for DJ services
- **Real-time Updates**: Live data synchronization across the platform

## 🚀 Tech Stack

- **Frontend**: React.js with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **Routing**: React Router DOM
- **Backend Services**: Supabase JavaScript Client
- **Linting**: ESLint
- **CSS Processing**: PostCSS
- **Package Manager**: npm/Bun (lockfile detected)
- **Development Environment**: Visual Studio Code

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 16 or higher)
- [npm](https://www.npmjs.com/) or [Bun](https://bun.sh/)
- A [Supabase](https://supabase.com/) account and project

## ⚡ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/djs-on-demand.git
   cd djs-on-demand
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   bun install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory and add your Supabase credentials:
   ```env
   VITE_SUPABASE_URL=https://jacecfkyvowsylckxojv.supabase.co
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Start the development server**
   ```bash
   npm run dev
   # or
   bun dev
   ```

   The application will open in your browser at `http://localhost:5173`

## 🗄️ Database Setup

The project uses Supabase for database management. Make sure to:

1. Create the necessary tables in your Supabase project:
   - `djs` - DJ profiles and information
   - `clients` - Client details and contacts
   - `events` - Event records and details
   - `playlists` - Music playlist management
   - `venues` - Venue information and specifications

2. Set up Row Level Security (RLS) policies as needed
3. Configure authentication settings in Supabase dashboard

## 📁 Project Structure

```
djs-on-demand/
├── node_modules/
├── public/
├── src/
│   ├── components/          # Reusable UI components
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility libraries and configurations
│   ├── pages/              # Page components
│   ├── App.css
│   ├── App.tsx             # Main application component
│   ├── index.css           # Global styles
│   ├── main.tsx            # Application entry point
│   └── vite-env.d.ts       # Vite environment types
├── .gitignore
├── .hintrc                 # Hint configuration
├── bun.lockb              # Bun lockfile
├── components.json         # shadcn/ui components config
├── eslint.config.js        # ESLint configuration
├── index.html             # HTML template
├── next-env.d.ts          # Next.js types (if applicable)
├── package-lock.json      # npm lockfile
├── package.json           # Project dependencies and scripts
├── postcss.config.js      # PostCSS configuration
├── README.md              # Project documentation
├── tailwind.config.ts     # Tailwind CSS configuration
├── tsconfig.app.json      # TypeScript config for app
├── tsconfig.json          # Main TypeScript configuration
├── tsconfig.node.json     # TypeScript config for Node.js
└── vite.config.ts         # Vite configuration
```

## 🎯 Usage

1. **Dashboard**: View overview of upcoming events and system statistics
2. **DJ Management**: Add, edit, and manage DJ profiles and availability
3. **Event Planning**: Create and organize events with all necessary details
4. **Client Portal**: Manage client information and booking history
5. **Playlist Curation**: Build and organize music playlists for events
6. **Venue Management**: Track venue details and booking availability

## 🛠️ Available Scripts

- `npm run dev` - Runs the app in development mode with Vite
- `npm run build` - Builds the app for production
- `npm run lint` - Runs ESLint for code quality checks
- `npm run preview` - Preview the production build locally

## 🔧 Configuration Files

- **`vite.config.ts`** - Vite build tool configuration
- **`tailwind.config.ts`** - Tailwind CSS customization
- **`tsconfig.json`** - TypeScript compiler options
- **`eslint.config.js`** - Code linting rules
- **`postcss.config.js`** - CSS processing configuration
- **`components.json`** - UI components configuration

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Support

For support, email support@djsondemand.com or join our community Discord server.

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - Frontend framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Vite](https://vitejs.dev/) - Build tool and dev server
- [Supabase](https://supabase.com/) - Backend and database services
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [React Router](https://reactrouter.com/) - Routing library

---