# GitHub Copilot Instructions for Studio37 Web 2.0

This is a Next.js 15 project for the Studio37 website redesign. Simplified, modern version of the original monorepo.

## Project Quick Facts

- **Framework**: Next.js 15 (App Router)
- **Database**: Supabase PostgreSQL (shared with v1.0)
- **Styling**: Tailwind CSS v3
- **Language**: TypeScript
- **Deployment**: Netlify
- **Email**: Resend API

## Key Files & Directories

- `app/` - Next.js app directory with routes
- `components/` - Reusable React components
- `lib/` - Utility functions (supabase client, helpers)
- `types/` - TypeScript type definitions
- `.env.local` - Environment variables (DO NOT COMMIT)
- `DATABASE.md` - Database schema documentation
- `SETUP.md` - Complete setup instructions

## Important Context

1. **Shared Database**: Uses SAME Supabase as original websitefors37 repo
2. **No Data Loss**: All existing data is preserved
3. **Parallel Running**: Can run 2.0 on test domain while 1.0 is live
4. **Simplified**: Removed monorepo complexity, single app focus

## Development Guidelines

### When Adding Features:
1. Keep components simple and focused
2. Use TypeScript for all new code
3. Follow Tailwind CSS for styling (no CSS modules needed)
4. Add types to `types/index.ts` for database entities
5. Use server components by default (async/await)
6. Use `'use client'` only when needed for interactivity

### Database Work:
1. Check `DATABASE.md` for existing schema
2. Don't modify tables without coordination with v1.0 team
3. Use Supabase client from `lib/supabase.ts`
4. All database types defined in `types/index.ts`

### Styling:
1. Use Tailwind classes (no CSS files except globals.css)
2. Theme colors in `tailwind.config.ts`
3. Global styles in `app/globals.css`
4. Dark mode support planned

### API Routes:
1. Use `app/api/` directory
2. One endpoint per file (e.g., `app/api/leads/route.ts`)
3. Use TypeScript strict mode
4. Add zod validation for request bodies

## Common Tasks

### Add a New Page
```bash
mkdir -p app/(main)/my-page
# Create app/(main)/my-page/page.tsx
```

### Add a Component
```bash
# Create components/MyComponent.tsx
# Export as: export function MyComponent() { }
```

### Add API Endpoint
```bash
mkdir -p app/api/my-endpoint
# Create app/api/my-endpoint/route.ts
```

### Modify Database
1. Check existing schema in DATABASE.md
2. Plan changes with team
3. Test migrations
4. Document changes

## Environment Variables Required

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
RESEND_API_KEY=
NEXT_PUBLIC_SENDER_EMAIL=
NEXT_PUBLIC_SITE_URL=
```

Get these from the original websitefors37 `.env` file.

## Testing Before Deployment

- [ ] All pages load without errors
- [ ] Forms submit successfully
- [ ] Supabase queries work
- [ ] Email notifications send
- [ ] Mobile responsive
- [ ] TypeScript type checking passes
- [ ] ESLint passes

## Related Projects

- **Original Site**: `/Users/ceostudio37.cc/Code Projects/Momma's New Website/websitefors37`
- **Database**: Shared Supabase project
- **Deployment**: Netlify

## Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Supabase Docs](https://supabase.com/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- Project docs: SETUP.md, DATABASE.md, QUICKSTART.md

---

**Remember**: Keep it simple. This is the 2.0 redesign - remove complexity, not add it.
