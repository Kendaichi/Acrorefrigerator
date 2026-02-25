# CMS Integration Plan — Acro Refrigeration
> Supabase backend + custom React admin panel
> Status: Planned — not yet implemented

---

## Overview

Replace all hardcoded content arrays across the site with data fetched from Supabase. Build a protected `/admin` panel using existing shadcn components so non-technical editors can manage content without touching code.

**Stack additions:**
- `@supabase/supabase-js` — database + auth + storage
- `@tiptap/react` — rich text editor for blog posts

---

## Phase 1 — Supabase Setup

- Create Supabase project
- Install `@supabase/supabase-js`
- Set up client singleton at `src/lib/supabase.ts`
- Configure env vars in `.env`:
  - `VITE_SUPABASE_URL`
  - `VITE_SUPABASE_ANON_KEY`
- Create Storage buckets:
  - `project-images`
  - `client-logos`
  - `post-covers`

---

## Phase 2 — Database Schema

Run the following table definitions in the Supabase SQL editor.

### `services`
| Column | Type |
|---|---|
| id | uuid (PK) |
| title | text |
| description | text |
| icon | text |
| sort_order | int |

### `projects`
| Column | Type |
|---|---|
| id | uuid (PK) |
| title | text |
| type | text |
| size | text |
| description | text |
| image_url | text |
| sort_order | int |

### `testimonials`
| Column | Type |
|---|---|
| id | uuid (PK) |
| name | text |
| role | text |
| quote | text |
| sort_order | int |

### `faqs`
| Column | Type |
|---|---|
| id | uuid (PK) |
| question | text |
| answer | text |
| sort_order | int |

### `clients`
| Column | Type |
|---|---|
| id | uuid (PK) |
| name | text |
| logo_url | text |
| sort_order | int |

### `posts`
| Column | Type | Notes |
|---|---|---|
| id | uuid (PK) | |
| title | text | |
| slug | text | unique, used for `/resources/:slug` |
| excerpt | text | short summary shown on cards |
| content | text | rich text HTML from Tiptap |
| cover_image_url | text | stored in Supabase Storage |
| category | text | e.g. Compliance, Maintenance, Industry News |
| type | text | Guide / Article / Case Study / Video |
| published | boolean | draft vs live toggle |
| published_at | timestamp | |
| sort_order | int | |

### Row Level Security
Enable RLS on all tables:
- **Public:** SELECT only
- **Authenticated:** INSERT, UPDATE, DELETE

---

## Phase 3 — Auth & Admin Route Protection

- Enable Supabase Auth (email + password) in Supabase dashboard
- Create `src/hooks/useAuth.ts` + `AuthContext`
- Create `src/components/AdminRoute.tsx` — redirects unauthenticated users
- Add `/admin/login` page — simple email/password form using shadcn
- All `/admin/*` routes wrapped in `<AdminRoute>`

---

## Phase 4 — Admin Panel Pages

All routes live under `/admin`. Protected by Supabase Auth.
Forms built with existing shadcn + react-hook-form + zod.

| Route | Functionality |
|---|---|
| `/admin` | Dashboard overview / nav links |
| `/admin/login` | Email + password login |
| `/admin/services` | Add / edit / delete services, reorder |
| `/admin/projects` | Add / edit / delete projects, image upload, reorder |
| `/admin/testimonials` | Add / edit / delete testimonials |
| `/admin/faqs` | Add / edit / delete FAQs, reorder |
| `/admin/clients` | Add / edit / delete clients, logo upload |
| `/admin/posts` | Create / edit / delete blog posts, Tiptap rich text, draft/publish toggle |

**Image uploads** (projects + clients + post covers):
- Upload via Supabase Storage
- Store public URL in the relevant table column

---

## Phase 5 — Wire Up Frontend Pages

Replace hardcoded arrays with `useQuery` hooks (TanStack Query already installed).

| File | Current | Change |
|---|---|---|
| `src/pages/Services.tsx` | `const services = [...]` | `useQuery` → Supabase `services` table |
| `src/pages/Projects.tsx` | `const projects = [...]` | `useQuery` → Supabase `projects` table |
| `src/components/home/Testimonials.tsx` | `const testimonials = [...]` | `useQuery` → Supabase `testimonials` table |
| `src/components/home/FAQSection.tsx` | `const faqs = [...]` | `useQuery` → Supabase `faqs` table |
| `src/components/home/ClientsSection.tsx` | local image imports | `useQuery` → Supabase `clients` table + Storage URLs |
| `src/pages/Resources.tsx` | `const articles = [...]` | `useQuery` → Supabase `posts` table (published only) |
| `src/pages/Post.tsx` | does not exist yet | New page — renders individual post at `/resources/:slug` |

---

## Phase 6 — Seed Initial Data

Before launch, migrate all current hardcoded content into Supabase so the live site looks identical to what it does today. Nothing should visually change for visitors on go-live.

Content to seed:
- 6 services
- 6 projects
- 3 testimonials
- 5 FAQs
- 8 clients (upload local logo assets to Supabase Storage)
- 6 blog posts (from Resources page)

---

## File Structure (additions)

```
src/
  lib/
    supabase.ts          # Supabase client
  hooks/
    useAuth.ts           # Auth context + hook
  components/
    AdminRoute.tsx       # Protected route wrapper
    admin/
      AdminNav.tsx       # Sidebar/nav for admin panel
      ImageUpload.tsx    # Reusable image upload component
  pages/
    Post.tsx             # Individual blog post page (/resources/:slug)
    admin/
      Login.tsx
      Dashboard.tsx
      Services.tsx
      Projects.tsx
      Testimonials.tsx
      FAQs.tsx
      Clients.tsx
      Posts.tsx
```

---

## Notes

- Do not start implementation until Supabase project credentials are available
- Tiptap should be installed only when beginning Phase 4 (posts admin)
- Client logo images are currently bundled as local assets in `src/assets/clients/` — these will be replaced by Supabase Storage URLs once seeded
- The `/admin` route should not be linked anywhere publicly on the site
