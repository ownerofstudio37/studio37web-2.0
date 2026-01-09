# Studio37 Website 2.0

Professional photography, videography, and marketing services website built with Next.js 15.

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Database**: Supabase (PostgreSQL)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: Netlify
- **Email**: Resend

## 📁 Project Structure

```
studio37web-2.0/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── admin/             # Admin dashboard
│   ├── gallery/           # Photography gallery
│   ├── blog/              # Blog posts
│   ├── contact/           # Contact form
│   └── layout.tsx         # Root layout
├── components/            # Reusable React components
├── lib/                   # Utility functions and helpers
├── public/                # Static assets
├── types/                 # TypeScript type definitions
└── migrations/            # Database migration scripts
```

## 🛠️ Setup

### 1. Clone & Install

```bash
cd /Users/ceostudio37.cc/Desktop/Websitefors37-2.0
npm install
```

### 2. Environment Variables

Copy `.env.example` to `.env.local` and fill in:

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# Email
RESEND_API_KEY=your_resend_key
```

### 3. Development Server

```bash
npm run dev
```

Visit `http://localhost:3000`

## 📋 Key Features

### Public Pages
- ✅ Home page
- 📸 Gallery (with Cloudinary integration)
- 📝 Blog
- 📞 Contact form
- ℹ️ Services page
- 🎯 About page

### Admin Dashboard (Simplified)
- 📊 Dashboard overview
- 📸 Gallery management
- 📝 Blog editor
- 👥 Lead management
- 📅 Booking calendar
- ⚙️ Settings

### Backend
- 🔐 Authentication with Supabase
- 📧 Email notifications via Resend
- 🗄️ PostgreSQL database
- 🔌 RESTful API routes

## 🚀 Deployment

### Netlify

1. Push to GitHub
2. Connect repo in Netlify dashboard
3. Set environment variables
4. Deploy (auto-builds with `npm run build`)

## 📝 Development Workflow

```bash
# Development
npm run dev

# Build
npm run build

# Start production server
npm start

# Type check
npm run typecheck

# Format code
npm run format

# Lint
npm run lint
```

## 🗄️ Database

Using the same Supabase instance as the original site. Key tables:

- `profiles` - User accounts
- `galleries` - Photo projects
- `gallery_images` - Individual photos
- `blog_posts` - Blog content
- `leads` - Contact form submissions
- `bookings` - Session bookings

## 📦 Key Dependencies

- `@supabase/supabase-js` - Database & auth
- `resend` - Email sending
- `date-fns` - Date utilities
- `zod` - Schema validation
- `clsx` - Classname utility

## 🔄 Migration from 1.0

This is a simplified 2.0 version. You can:

1. Keep both sites running (current: main domain, new: test subdomain)
2. Sync data using Supabase directly (same database)
3. Test thoroughly before switching DNS
4. Gradually port custom features as needed

## 📞 Support

For issues or questions, check:
- [Next.js Docs](https://nextjs.org/docs)
- [Supabase Docs](https://supabase.com/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

---

**Status**: 🚧 Initial setup complete. Ready for development.
