# Studio37 Web 2.0 - Setup & Development Guide

## 🎯 Project Overview

**studio37web-2.0** is a fresh, simplified version of the Studio37 website built with modern tech. It shares the same Supabase database and backend infrastructure as the original site, allowing for a smooth transition when ready.

### Current Status
- ✅ Project structure created
- ✅ Dependencies configured
- ✅ Database schema documented
- ✅ Basic components scaffolded
- ⏳ Ready for development

---

## 📦 Installation

### 1. Navigate to Project
```bash
cd /Users/ceostudio37.cc/Desktop/Websitefors37-2.0
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Setup Environment Variables
```bash
# Copy the example file
cp .env.example .env.local

# Edit with your actual values
nano .env.local
```

**Required Environment Variables:**
```
# Supabase (get from your existing project)
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# Email
RESEND_API_KEY=re_xxxx
NEXT_PUBLIC_SENDER_EMAIL=noreply@studio37.cc

# Site
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 4. Start Development Server
```bash
npm run dev
```

Visit **http://localhost:3000** in your browser.

---

## 📁 Project Structure

```
studio37web-2.0/
├── app/                          # Next.js 15 App Router
│   ├── (main)/                   # Public pages
│   │   ├── layout.tsx            # Main layout with nav/footer
│   │   ├── page.tsx              # Home page
│   │   ├── gallery/              # Gallery page
│   │   ├── blog/                 # Blog listing
│   │   ├── services/             # Services page
│   │   └── contact/              # Contact form
│   ├── admin/                    # Admin dashboard
│   │   ├── page.tsx              # Dashboard home
│   │   ├── gallery/              # Gallery management
│   │   ├── blog/                 # Blog editor
│   │   ├── leads/                # Lead management
│   │   ├── bookings/             # Booking calendar
│   │   └── settings/             # Admin settings
│   ├── api/                      # API routes
│   │   ├── auth/                 # Authentication
│   │   ├── leads/                # Lead submission
│   │   ├── bookings/             # Booking creation
│   │   ├── gallery/              # Gallery management
│   │   └── email/                # Email sending
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Home (old)
│   └── globals.css               # Global styles
├── components/                   # React components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── ui/                       # UI components
│   └── admin/                    # Admin components
├── lib/                          # Utilities
│   ├── supabase.ts              # Supabase client
│   └── utils.ts                 # Helpers
├── types/                        # TypeScript definitions
│   └── index.ts
├── public/                       # Static assets
│   ├── images/
│   └── icons/
├── migrations/                   # Database migrations
├── .github/                      # GitHub config
├── .env.local                    # Local environment (git ignored)
├── .env.example                  # Example env file
├── .gitignore
├── .eslintrc.json
├── .prettierrc
├── tailwind.config.ts
├── tsconfig.json
├── next.config.js
├── netlify.toml                  # Netlify deployment config
├── package.json
├── DATABASE.md                   # Database documentation
├── README.md
└── SETUP.md                      # This file
```

---

## 🚀 Development Workflow

### Available Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Type checking
npm run typecheck

# Linting
npm run lint

# Format code
npm run format
```

### Adding New Pages

1. **Create in `app/(main)/`** for public pages:
```bash
mkdir -p app/(main)/my-page
touch app/(main)/my-page/page.tsx
```

2. **Add metadata and content:**
```tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My Page - Studio37',
  description: 'Page description here',
};

export default function MyPage() {
  return <div>{/* content */}</div>;
}
```

### Adding API Routes

Create in `app/api/`:
```tsx
// app/api/my-endpoint/route.ts
export async function POST(request: Request) {
  // Handle POST
}
```

### Adding Components

Store reusable components in `components/`:
```tsx
// components/MyComponent.tsx
export function MyComponent() {
  return <div>{/* component */}</div>;
}
```

---

## 🗄️ Database Setup

### Using Same Supabase Instance

The 2.0 version uses the **exact same** Supabase database as 1.0. No migration needed!

1. Get your Supabase credentials from the original project
2. Add them to `.env.local`
3. All tables and data are immediately available

### Schema Overview

See [DATABASE.md](./DATABASE.md) for complete schema.

Key tables:
- `profiles` - User accounts
- `galleries` - Photo projects
- `gallery_images` - Individual photos
- `blog_posts` - Blog content
- `leads` - Contact form submissions
- `bookings` - Session bookings

---

## 🎨 Styling

Using **Tailwind CSS** for all styling.

### Customizing Theme

Edit `tailwind.config.ts`:
```ts
theme: {
  extend: {
    colors: {
      primary: '#1f2937',
      secondary: '#f97316',
    },
  },
}
```

Global CSS in `app/globals.css`.

---

## 🔐 Authentication

Using Supabase Auth. Implementation planned for:
- Admin login
- Password reset
- Client portals

See `app/api/auth/` for auth routes (placeholder).

---

## 📧 Email Setup

Using **Resend** for transactional emails.

Example implementation:
```ts
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: process.env.NEXT_PUBLIC_SENDER_EMAIL,
  to: 'recipient@example.com',
  subject: 'Hello',
  html: '<p>Message</p>',
});
```

---

## 🚀 Deployment

### Deploy to Netlify

1. **Push to GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/ownerofstudio37/studio37web-2.0
git push -u origin main
```

2. **Connect in Netlify Dashboard**
   - Connect your GitHub repo
   - Set build command: `npm run build`
   - Set publish directory: `.next`

3. **Set Environment Variables**
   - Add all `.env.local` variables in Netlify dashboard
   - Build should succeed automatically

### Netlify Configuration

Edit `netlify.toml` to customize:
- Build command
- Publish directory
- Redirects
- Headers
- Environment variables

---

## 🧪 Testing & QA

### Before Switching Domains

1. Test all pages load
2. Test forms work (leads, contact)
3. Test admin dashboard
4. Check mobile responsiveness
5. Run Lighthouse audit
6. Test email notifications

### Browser Support

Tested on:
- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)

---

## 🔄 Migration Strategy

### Phase 1: Setup & Testing ✅ (current)
- New project created
- Dev environment working
- Netlify staging ready

### Phase 2: Feature Parity (next)
- Implement all core features
- Test with real data
- Performance optimization

### Phase 3: Launch Preview (then)
- Deploy to test domain
- Gather feedback
- Bug fixes

### Phase 4: Go Live (finally)
- Swap DNS to 2.0
- Keep 1.0 as backup
- Gradual rollout

---

## 📋 Common Tasks

### Add Gallery Image
1. Admin dashboard → Gallery
2. Select gallery → Upload image
3. Add title/description (optional)

### Create Blog Post
1. Admin → Blog
2. Title + slug
3. Content (markdown supported)
4. Set featured image
5. Publish

### Accept a Booking
1. Admin → Leads
2. Contact lead
3. Create booking
4. Send confirmation email

---

## 🐛 Troubleshooting

### Port 3000 Already in Use
```bash
lsof -i :3000
kill -9 <PID>
```

### Supabase Connection Issues
- Check `.env.local` values
- Verify API is enabled in Supabase dashboard
- Check network connectivity

### Build Errors
```bash
# Clear cache
rm -rf .next node_modules
npm install
npm run build
```

### TypeScript Errors
```bash
npm run typecheck
```

---

## 📚 Documentation

- [Next.js Docs](https://nextjs.org/docs)
- [Supabase Docs](https://supabase.com/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Resend Docs](https://resend.com/docs)

---

## 🤝 Contributing

Workflow:
1. Create feature branch: `git checkout -b feature/my-feature`
2. Make changes
3. Test thoroughly
4. Commit: `git commit -m "feat: description"`
5. Push: `git push origin feature/my-feature`
6. Create pull request

---

## ✅ Checklist for Go-Live

- [ ] All pages working
- [ ] Mobile responsive
- [ ] Forms tested
- [ ] Email sending working
- [ ] Admin dashboard functional
- [ ] Database backups in place
- [ ] Netlify deployed and tested
- [ ] DNS ready to switch
- [ ] 1.0 site backed up
- [ ] Team trained on new interface

---

**Next Steps**: Install dependencies and start developing! 🚀

For questions, refer to the documentation or check the individual guide files.
