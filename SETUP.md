# DesignSolutions Portfolio - Setup Guide

## 🎉 Congratulations! Your portfolio website is ready.

The DesignSolutions portfolio website has been successfully built with a clean, minimal aesthetic inspired by Humphrey Orr and Studio McGee. Here's what you need to do to customize it for your needs.

## 📋 What's Included

### ✅ Completed Features
- **Homepage**: Hero section, introduction, and featured projects
- **Portfolio Page**: Grid layout showcasing design projects
- **About Page**: Designer bio, philosophy, and experience
- **Contact Page**: Contact form and business information
- **Navigation**: Clean, responsive navigation
- **Footer**: Social links and contact information
- **Responsive Design**: Mobile-first approach
- **SEO Optimized**: Proper meta tags and structure
- **Performance Optimized**: Fast loading with Next.js

### 🎨 Design System
- **Typography**: Playfair Display (serif) + Inter (sans-serif)
- **Colors**: Elegant charcoal, soft gray, warm white palette
- **Spacing**: Generous white space for premium feel
- **Animations**: Subtle hover effects and transitions

## 🚀 Next Steps

### 1. Replace Placeholder Content

#### Images
- **Hero Image**: Replace the placeholder in `src/app/page.tsx` (around line 15)
- **Project Images**: Add real project photos to `public/projects/` directory
- **Designer Portrait**: Add your photo to the About page

#### Text Content
- **About Page**: Update bio, experience, and philosophy in `src/app/about/page.tsx`
- **Contact Info**: Update email, phone, and service area in `src/app/contact/page.tsx`
- **Footer**: Update Instagram handle and email in `src/components/Footer.tsx`

#### Portfolio Projects
- **Project Data**: Update projects in `src/data/projects.ts`
- **Project Images**: Add images to `public/projects/` directory
- **Project Details**: Add location, size, duration, and services for each project

### 2. Add Real Images

1. Create a `public/projects/` directory
2. Add your project images (recommended: WebP format, 1200x800px)
3. Update the image paths in `src/data/projects.ts`
4. Replace placeholder divs with Next.js Image components

Example image replacement:
```tsx
// Replace this placeholder
<div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
  <div className="text-center text-soft-gray">
    <p className="font-sans text-sm">Project Image</p>
  </div>
</div>

// With this
<Image
  src="/projects/your-project-image.jpg"
  alt="Project description"
  width={800}
  height={600}
  className="w-full h-full object-cover"
/>
```

### 3. Set Up Contact Form (Optional)

The contact form is ready for Supabase integration:

1. **Create Supabase Project**:
   - Go to [supabase.com](https://supabase.com)
   - Create a new project
   - Get your project URL and anon key

2. **Set Environment Variables**:
   ```bash
   # Create .env.local file
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

3. **Create Database Table**:
   ```sql
   CREATE TABLE contacts (
     id SERIAL PRIMARY KEY,
     name TEXT NOT NULL,
     email TEXT NOT NULL,
     phone TEXT,
     project_type TEXT,
     message TEXT NOT NULL,
     created_at TIMESTAMP DEFAULT NOW()
   );
   ```

4. **Update Contact Form**: Replace the simulated submission in `src/app/contact/page.tsx` with actual Supabase calls

### 4. Customize Branding

#### Colors
Update colors in `tailwind.config.ts`:
```ts
colors: {
  'charcoal': '#374151',      // Primary text
  'soft-gray': '#6b7280',     // Secondary text
  'warm-white': '#fafafa',    // Background
  'cream': '#fefefe',         // Cards
}
```

#### Typography
Update fonts in `tailwind.config.ts`:
```ts
fontFamily: {
  serif: ['Playfair Display', 'serif'],
  sans: ['Inter', 'sans-serif'],
}
```

#### Logo/Brand Name
Update "DesignSolutions" throughout the codebase:
- `src/components/Navigation.tsx`
- `src/components/Footer.tsx`
- `src/app/layout.tsx` (metadata)

## 🌐 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms
- **Netlify**: Supports Next.js out of the box
- **Railway**: Good for full-stack apps
- **DigitalOcean App Platform**: Reliable hosting

## 📱 Mobile Optimization

The site is already mobile-responsive, but test on:
- iPhone (Safari)
- Android (Chrome)
- iPad (Safari)
- Various screen sizes

## 🔍 SEO Optimization

### Meta Tags
Update in `src/app/layout.tsx`:
- Title
- Description
- Keywords
- Open Graph data

### Additional SEO
- Add structured data (JSON-LD)
- Create a sitemap.xml
- Set up Google Analytics
- Add robots.txt

## 🎯 Performance Tips

1. **Optimize Images**:
   - Use WebP format
   - Compress images (TinyPNG, Squoosh)
   - Use appropriate sizes

2. **Font Loading**:
   - Fonts are already optimized with Google Fonts
   - Consider self-hosting for better performance

3. **Code Splitting**:
   - Next.js handles this automatically
   - Each page loads only necessary code

## 🛠️ Development

### Running Locally
```bash
npm run dev          # Development server
npm run build        # Production build
npm run start        # Production server
npm run lint         # Check for issues
```

### File Structure
```
src/
├── app/             # Pages (Next.js App Router)
├── components/      # Reusable components
├── data/           # Static data (projects)
└── styles/         # Global styles
```

## 📞 Support

If you need help customizing your portfolio:
1. Check the [Next.js documentation](https://nextjs.org/docs)
2. Review [Tailwind CSS docs](https://tailwindcss.com/docs)
3. Look at the [Supabase docs](https://supabase.com/docs) for contact form setup

## 🎨 Design Inspiration

The site is inspired by:
- [Humphrey Orr Interiors](https://www.humphreyorr.com/)
- [Studio McGee](https://studio-mcgee.com/)

Key design principles:
- Clean, minimal aesthetic
- Large imagery
- Generous white space
- Elegant typography
- Premium feel

---

**Your beautiful portfolio website is ready to showcase your interior design work!** 🏠✨ 