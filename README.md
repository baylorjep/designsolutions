# DesignSolutions - Interior Design Portfolio

A beautiful, modern portfolio website for a freelance interior designer, built with Next.js, TypeScript, and Tailwind CSS. Inspired by the clean, minimal aesthetic of Humphrey Orr and Studio McGee.

## Features

- **Clean, Minimal Design**: Elegant typography and generous white space
- **Large Imagery**: Optimized for showcasing interior design projects
- **Responsive Layout**: Mobile-first design that works on all devices
- **Performance Optimized**: Fast loading with Next.js and image optimization
- **SEO Friendly**: Proper metadata and structured content
- **Contact Form**: Ready for Supabase integration
- **Modern Stack**: Next.js 14, TypeScript, Tailwind CSS

## Pages

- **Home**: Hero section, introduction, and featured projects
- **Portfolio**: Grid layout showcasing design projects
- **About**: Designer bio, philosophy, and experience
- **Contact**: Contact form and business information

## Tech Stack

- **Frontend**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom design system
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Database**: Supabase (for contact form)
- **Hosting**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd designsolutions
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Replacing Placeholder Content

1. **Images**: Replace placeholder divs with actual images
   - Hero image on homepage
   - Project images in portfolio
   - Designer portrait on about page

2. **Content**: Update text content in each page component
   - Designer bio and experience
   - Project descriptions
   - Contact information

3. **Branding**: Update colors and fonts in `tailwind.config.ts`

### Adding Real Images

1. Place images in the `public/` directory
2. Replace placeholder divs with Next.js Image components
3. Optimize images for web (recommended: WebP format)

### Supabase Integration

1. Create a Supabase project
2. Set up environment variables:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

3. Create a contacts table in Supabase:
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

4. Update the contact form submission in `src/app/contact/page.tsx`

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform

## Design System

### Colors
- **Charcoal**: `#374151` - Primary text and buttons
- **Soft Gray**: `#6b7280` - Secondary text
- **Warm White**: `#fafafa` - Background
- **Cream**: `#fefefe` - Card backgrounds

### Typography
- **Serif**: Playfair Display - Headings
- **Sans**: Inter - Body text and navigation

### Spacing
- Consistent spacing scale using Tailwind's spacing utilities
- Generous white space for premium feel

## Performance

- Image optimization with Next.js Image component
- Font optimization with Google Fonts
- CSS purging with Tailwind
- Lazy loading for better performance

## SEO

- Proper meta tags and Open Graph data
- Semantic HTML structure
- Optimized page titles and descriptions
- Sitemap generation (can be added)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For questions or support, please contact [your-email@example.com]

---

Built with ❤️ for beautiful interior design
