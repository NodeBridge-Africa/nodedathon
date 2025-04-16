# Nodedathon – African Node Operator Training Program

Welcome to Nodedathon, Africa's premier node operator training platform. This project empowers users to learn validator setup, DVT integration, and earn POAPs through hands-on challenges, building the future of blockchain in Africa.

## Features

- **Modern Next.js 13+ App** with App Router and React Server Components
- **Supabase Integration** for user registration and data storage
- **Tailwind CSS** for rapid, themeable UI development
- **Radix UI** and custom UI components for accessible, beautiful interfaces
- **Animated registration dialog** with Framer Motion
- **Toast notifications** with Sonner, styled to match the app theme
- **Modular, scalable component structure**
- **Database migrations** for easy schema management

## Project Structure

```
.
├── app/                # Next.js app directory (routing, layout, pages)
│   ├── layout.tsx      # Root layout with Toaster
│   ├── page.tsx        # Main landing page
│   └── globals.css     # Global styles
├── components/         # Reusable UI and logic components
│   ├── registration-dialog.tsx
│   ├── sections/       # Landing page sections
│   └── ui/             # UI primitives (button, dialog, input, etc.)
├── hooks/              # Custom React hooks
├── lib/                # Utility libraries (if any)
├── supabase/           # Supabase backend integration
│   └── migrations/     # SQL migration files
├── package.json        # Project metadata and dependencies
├── tailwind.config.ts  # Tailwind CSS configuration
└── tsconfig.json       # TypeScript configuration
```

## Database Schema

The main table is `registrations`:

| Column      | Type      | Description            |
| ----------- | --------- | ---------------------- |
| id          | uuid      | Primary key            |
| full_name   | text      | User's full name       |
| telegram    | text      | Telegram handle        |
| eth_address | text      | Ethereum address       |
| email       | text      | Email address          |
| created_at  | timestamp | Registration timestamp |

- **Row Level Security** is enabled.
- Policies allow public inserts and authenticated users to read their own registrations.

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Supabase project (for backend)

### Installation

1. **Clone the repository:**

   ```bash
   git clone <your-repo-url>
   cd nodedathon
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables:**

   - Copy `.env.local.example` to `.env.local` (if provided) and fill in your Supabase credentials:
     ```
     NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
     NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
     ```

4. **Run database migrations:**

   - Use the SQL in `supabase/migrations/` to set up your database schema in Supabase.

5. **Start the development server:**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. **Open your browser:**
   - Visit [http://localhost:3000](http://localhost:3000)

## Scripts

- `npm run dev` – Start the development server
- `npm run build` – Build for production
- `npm run start` – Start the production server
- `npm run lint` – Lint the codebase

## Technologies Used

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [Supabase](https://supabase.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Sonner](https://sonner.emilkowal.ski/) (toast notifications)
- [TypeScript](https://www.typescriptlang.org/)

## Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements or bug fixes.

## License

[MIT](LICENSE)
