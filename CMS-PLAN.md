# CMS Integration Plan — Acro Refrigeration
> Supabase backend + custom React admin panel
> Status: Planned — not yet implemented
> Last updated: Feb 2026 (reflects current codebase state)

---

## Overview

Replace all hardcoded content arrays across the site with data fetched from Supabase. Build a protected `/admin` panel using existing shadcn components so non-technical editors can manage content without touching code.

**Stack additions:**
- `@supabase/supabase-js` — database + auth + storage
- `@tiptap/react` — rich text editor for blog posts

**Already installed (no action needed):**
- `@tanstack/react-query` v5 — ready for `useQuery` hooks
- `react-hook-form` + `zod` — ready for admin forms
- `shadcn/ui` — ready for admin panel UI

---

## Content Areas — Where CMS Applies

The following files contain hardcoded arrays that should be migrated to Supabase.

| File | Content | Items |
|---|---|---|
| `src/pages/Services.tsx` | 6 services + 6 process steps | 12 |
| `src/pages/Projects.tsx` | 6 project case studies | 6 |
| `src/pages/Industries.tsx` | 5 industry categories + features | 5 |
| `src/components/home/Testimonials.tsx` | 3 client testimonials | 3 |
| `src/components/home/FAQSection.tsx` | 6 FAQ pairs | 6 |
| `src/components/home/ClientsSection.tsx` | 8 client logos (local assets) | 8 |
| `src/components/home/BrandsSection.tsx` | 3 featured + 10 other brands | 13 |
| `src/components/home/CapabilitiesGrid.tsx` | 6 capability cards | 6 |
| `src/data/resources.ts` | 6 guides/articles/case studies (nested sections) | 6 |
| `src/data/locations.ts` | 3 cities, 23 suburbs (rich local content) | 23 |

> **Highest priority for CMS:** `resources.ts` (most complex, most editable) and `locations.ts` (largest dataset, SEO-critical).

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

### `service_steps`
| Column | Type | Notes |
|---|---|---|
| id | uuid (PK) | |
| num | text | e.g. "01", "02" |
| title | text | |
| description | text | |
| sort_order | int | |

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

### `industries`
| Column | Type | Notes |
|---|---|---|
| id | uuid (PK) | |
| title | text | |
| description | text | |
| icon | text | Lucide icon name |
| features | text[] | Array of feature strings |
| sort_order | int | |

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

### `brands`
| Column | Type | Notes |
|---|---|---|
| id | uuid (PK) | |
| slug | text | unique |
| name | text | |
| speciality | text | e.g. "Compressors" |
| description | text | |
| featured | boolean | true = show in featured section |
| sort_order | int | |

### `capabilities`
| Column | Type | Notes |
|---|---|---|
| id | uuid (PK) | |
| title | text | |
| description | text | |
| icon | text | Lucide icon name |
| sort_order | int | |

### `posts`
| Column | Type | Notes |
|---|---|---|
| id | uuid (PK) | |
| title | text | |
| slug | text | unique, used for `/resources/:slug` |
| excerpt | text | short summary shown on cards |
| cover_image_url | text | stored in Supabase Storage |
| category | text | e.g. Compliance, Maintenance, Industry News |
| type | text | Guide / Article / Case Study / Video |
| published | boolean | draft vs live toggle |
| published_at | timestamp | |
| sort_order | int | |

### `post_sections`
| Column | Type | Notes |
|---|---|---|
| id | uuid (PK) | |
| post_id | uuid (FK → posts.id) | |
| heading | text | |
| content | jsonb | Array of paragraph/list/callout blocks |
| sort_order | int | |

> **Note on resources schema:** The current `src/data/resources.ts` uses a nested `sections[]` structure with typed content blocks (paragraphs, lists, callouts). Rather than a single Tiptap rich text field, `post_sections` mirrors this structure. Tiptap is still useful for the `content` jsonb field within each section if freeform editing is needed.

### `locations_city`
| Column | Type | Notes |
|---|---|---|
| id | uuid (PK) | |
| slug | text | unique, e.g. "brisbane" |
| name | text | |
| jobs_done | int | e.g. 1800 |
| local_techs | int | |
| avg_response | text | e.g. "90 min" |
| sort_order | int | |

### `locations_suburb`
| Column | Type | Notes |
|---|---|---|
| id | uuid (PK) | |
| city_id | uuid (FK → locations_city.id) | |
| slug | text | unique |
| name | text | |
| zone | text | |
| business_types | text[] | |
| venue_types | text[] | |
| local_context | text | long-form SEO paragraph |
| nearby_suburbs | text[] | |
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
| `/admin/services` | Add / edit / delete services + process steps, reorder |
| `/admin/projects` | Add / edit / delete projects, image upload, reorder |
| `/admin/industries` | Add / edit / delete industries + features list |
| `/admin/testimonials` | Add / edit / delete testimonials |
| `/admin/faqs` | Add / edit / delete FAQs, reorder |
| `/admin/clients` | Add / edit / delete clients, logo upload |
| `/admin/brands` | Add / edit / delete brands, toggle featured |
| `/admin/capabilities` | Add / edit / delete capability cards |
| `/admin/posts` | Create / edit / delete blog posts, section editor, draft/publish toggle |
| `/admin/locations` | Add / edit / delete cities + suburbs, manage local context |

**Image uploads** (projects + clients + post covers):
- Upload via Supabase Storage
- Store public URL in the relevant table column

---

## Phase 5 — Wire Up Frontend Pages

Replace hardcoded arrays with `useQuery` hooks (TanStack Query already installed).

| File | Current | Change |
|---|---|---|
| `src/pages/Services.tsx` | `const services = [...]` | `useQuery` → `services` + `service_steps` tables |
| `src/pages/Projects.tsx` | `const projects = [...]` | `useQuery` → `projects` table |
| `src/pages/Industries.tsx` | `const industries = [...]` | `useQuery` → `industries` table |
| `src/components/home/Testimonials.tsx` | `const testimonials = [...]` | `useQuery` → `testimonials` table |
| `src/components/home/FAQSection.tsx` | `const faqs = [...]` | `useQuery` → `faqs` table |
| `src/components/home/ClientsSection.tsx` | local image imports | `useQuery` → `clients` table + Storage URLs |
| `src/components/home/BrandsSection.tsx` | `const brands = [...]` | `useQuery` → `brands` table |
| `src/components/home/CapabilitiesGrid.tsx` | `const capabilities = [...]` | `useQuery` → `capabilities` table |
| `src/data/resources.ts` | exported array | Delete file — `useQuery` → `posts` + `post_sections` tables |
| `src/data/locations.ts` | exported array | Delete file — `useQuery` → `locations_city` + `locations_suburb` tables |

**New pages to create:**
- `src/pages/Post.tsx` — already referenced in routes as `/resources/:resourceSlug`, renders post by slug from Supabase

---

## Phase 6 — Seed Initial Data

Before launch, migrate all current hardcoded content into Supabase so the live site looks identical to what it does today. Nothing should visually change for visitors on go-live.

Content to seed:
- 6 services + 6 process steps
- 6 projects
- 5 industries
- 3 testimonials
- 6 FAQs
- 8 clients (upload local logo assets from `src/assets/clients/` to Supabase Storage)
- 13 brands (3 featured + 10 other)
- 6 capabilities
- 6 blog posts + ~35 nested sections (from `src/data/resources.ts`)
- 3 cities + 23 suburbs (from `src/data/locations.ts`)

---

## File Structure (additions)

```
src/
  lib/
    supabase.ts          # Supabase client singleton
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
      Industries.tsx
      Testimonials.tsx
      FAQs.tsx
      Clients.tsx
      Brands.tsx
      Capabilities.tsx
      Posts.tsx
      Locations.tsx
```

---

## Notes

- Do not start implementation until Supabase project credentials are available
- Tiptap should be installed only when beginning Phase 4 (posts admin)
- Client logo images are currently bundled as local assets in `src/assets/clients/` — these will be replaced by Supabase Storage URLs once seeded
- The `/admin` route should not be linked anywhere publicly on the site
- `src/data/locations.ts` is the largest and most complex dataset — consider seeding it last or via a migration script rather than manually through the admin panel
- The `resources.ts` nested `sections[]` format maps to the `post_sections` table; the existing `content` field within each section block is typed (paragraph/list/callout) and can be stored as jsonb
