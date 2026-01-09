# 🚀 Quick Start Guide - Studio37 2.0

Get up and running in **5 minutes**.

## Step 1: Install Dependencies
```bash
cd /Users/ceostudio37.cc/Desktop/Websitefors37-2.0
npm install
```

## Step 2: Configure Environment
```bash
# Copy example
cp .env.example .env.local

# Edit with your values (from original site's Supabase project)
nano .env.local
```

**You need:**
- `NEXT_PUBLIC_SUPABASE_URL` 
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `RESEND_API_KEY`

> 📌 Tip: These are in your original `websitefors37` repo's `.env` file!

## Step 3: Run Development Server
```bash
npm run dev
```

Open **http://localhost:3000** - you should see the Studio37 homepage! ✅

## What's Included

### Pages (Ready to Use)
- ✅ Home page
- ✅ Gallery placeholder
- ✅ Blog placeholder  
- ✅ Services page
- ✅ Contact form
- ✅ Admin dashboard (placeholder)

### Components (Ready to Customize)
- ✅ Navigation bar
- ✅ Footer
- ✅ Layout wrapper

### Backend
- ✅ Supabase integration
- ✅ API route structure
- ✅ TypeScript types for database
- ✅ Email setup (Resend)

## Next Steps

1. **Customize Home Page** - Edit `app/page.tsx`
2. **Update Brand Colors** - Edit `tailwind.config.ts` and `app/globals.css`
3. **Add Your Content** - Update text in all page components
4. **Connect Database** - Gallery/blog will auto-sync with Supabase
5. **Test Forms** - Forms are connected and ready to use
6. **Deploy to Netlify** - Push to GitHub, connect Netlify

## Common Commands

```bash
npm run dev        # Start dev server
npm run build      # Build for production
npm start          # Start production server
npm run lint       # Check for errors
npm run typecheck  # Check TypeScript
npm run format     # Format code automatically
```

## File Structure Quick Reference

```
app/
  ├── (main)/        ← Public pages (gallery, blog, contact)
  ├── admin/         ← Admin dashboard
  ├── api/           ← API routes (forms, auth, etc)
  └── layout.tsx     ← Root layout

components/         ← Navbar, Footer, UI components
lib/               ← Supabase client, utilities
types/             ← Database type definitions
public/            ← Images, static files
```

## Troubleshooting

### Port 3000 in use?
```bash
lsof -i :3000
kill -9 <PID>
npm run dev
```

### Supabase error?
Check `.env.local` has correct values from original site.

### TypeScript error?
```bash
npm run typecheck
```

---

## 📚 Full Documentation

- **[SETUP.md](./SETUP.md)** - Complete setup guide
- **[DATABASE.md](./DATABASE.md)** - Database schema & tables
- **[README.md](./README.md)** - Project overview

## 🎯 Your Next Goals

- [ ] Get dependencies installed ✅
- [ ] Get dev server running ✅
- [ ] Update home page with your copy
- [ ] Add your brand colors
- [ ] Test contact form
- [ ] Deploy test version to Netlify
- [ ] Compare with v1.0 and gather feedback

**Good luck! 🎨📸**
