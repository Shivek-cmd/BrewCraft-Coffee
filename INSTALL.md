# BrewCraft Coffee — Setup Instructions

## 1. Create Next.js project

```bash
npx create-next-app@latest brewcraft-coffee --typescript --tailwind --app --import-alias="@/*"
cd brewcraft-coffee
```

## 2. Install dependencies

```bash
# Core UI & Animation
npm install framer-motion lucide-react clsx tailwind-merge

# Blog / MDX
npm install next-mdx-remote gray-matter

# Types
npm install -D @types/node
```

## 3. Copy files

Replace / add these files from this project into your Next.js folder:

```
Copy everything in this folder → your project root
```

Key folders to copy:
- `app/`
- `components/`
- `content/`
- `constants/`
- `lib/`
- `types/`
- `hooks/`
- `next.config.ts`
- `tailwind.config.ts`
- `.env.local`  ← update GTM_ID here

## 4. Update your GTM ID

Open `.env.local` and replace:
```
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```
with your real GTM container ID from tagmanager.google.com

## 5. Update site URL

Open `constants/index.ts` and update:
```ts
url: 'https://brewcraftcoffee.in'
```

## 6. Run locally

```bash
npm run dev
```

Open http://localhost:3000

## 7. Build for production

```bash
npm run build
npm start
```

## 8. Deploy to Vercel (free)

```bash
npx vercel
```
Or connect your GitHub repo at vercel.com → auto-deploys on every push.

---

## Pages
- `/`          Homepage
- `/about`     About page
- `/services`  Products & services
- `/pricing`   Subscription plans
- `/blog`      Blog listing
- `/blog/[slug]` Individual blog post
- `/contact`   Contact form

## Adding Blog Posts

Create `.mdx` files in `content/blog/` with this frontmatter:

```mdx
---
title: "Post Title"
slug: "post-slug"
excerpt: "150 char description"
date: "2024-03-01"
author: "BrewCraft Team"
category: "Brew Guides"
tags: ["coffee", "guide"]
ogImage: "https://images.unsplash.com/..."
featured: false
readTime: "5 min read"
---

Your MDX content here...
```

## Adding Services

Edit `constants/index.ts` → `SERVICES` array.
Each service automatically gets:
- A card on the homepage
- A card on /services
- A linked URL at /services/[slug]

## Changing Colors

Edit `app/globals.css` → `:root {}` block.
Change `--color-primary` and `--color-accent` to your brand colors.
Everything updates automatically.
