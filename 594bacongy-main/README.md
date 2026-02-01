# BuildRight Construction - Marketing Website

A professional, production-ready marketing website for a local construction company built with Next.js 14, TypeScript, and Tailwind CSS.

## 🏗️ Features

### Pages
- **Home** - Hero section with strong value proposition, services overview, trust indicators, recent projects, and clear CTAs
- **About** - Company story, values (Integrity, Quality, Respect, Innovation), timeline of milestones
- **Services** - Detailed service sections including:
  - Residential Construction
  - Commercial Projects
  - Renovations & Remodeling
  - Custom Carpentry
  - Exterior Work
  - Project Management
- **Projects** - Portfolio of completed work with project details, locations, and high-quality images
- **Contact** - Contact form with validation, business information, and multiple contact options

### Technical Features
- ✅ **Next.js 14** with App Router
- ✅ **TypeScript** for type safety (JS implementation, TypeScript-ready)
- ✅ **Tailwind CSS** with professional construction-themed color palette
- ✅ **shadcn/ui** components for consistent, accessible UI
- ✅ **Fully responsive** - Mobile, tablet, and desktop optimized
- ✅ **SEO optimized** - Meta tags, Open Graph, Twitter cards
- ✅ **Fast performance** - Optimized images and code splitting
- ✅ **Form validation** - Client and server-side validation
- ✅ **API routes** - Contact form submission handling

### Design System
- **Colors**: Professional construction blue (#0066A1) with orange accents
- **Typography**: Clean, readable Inter font family
- **Components**: Cards, buttons, forms, navigation using shadcn/ui
- **Icons**: Lucide React icons for consistency
- **Images**: High-quality professional construction photography

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- Yarn package manager

### Installation

1. **Install dependencies:**
```bash
yarn install
```

2. **Start development server:**
```bash
yarn dev
```

The website will be available at `http://localhost:3000`

### Build for Production

```bash
yarn build
yarn start
```

## 📁 Project Structure

```
/app
├── app/
│   ├── api/
│   │   └── [[...path]]/
│   │       └── route.js          # API routes (contact form)
│   ├── about/
│   │   └── page.js                # About page
│   ├── services/
│   │   └── page.js                # Services page
│   ├── projects/
│   │   └── page.js                # Projects portfolio
│   ├── contact/
│   │   └── page.js                # Contact page with form
│   ├── layout.js                  # Root layout with nav & footer
│   ├── page.js                    # Home page
│   └── globals.css                # Global styles & theme colors
├── components/
│   ├── ui/                        # shadcn/ui components
│   ├── Navigation.js              # Header navigation
│   └── Footer.js                  # Site footer
├── lib/
│   └── utils.js                   # Utility functions
└── public/                        # Static assets

```

## 🎨 Customization

### Brand Colors
Edit `/app/app/globals.css` to customize the color scheme:

```css
:root {
  --primary: 210 100% 35%;     /* Construction blue */
  --accent: 30 95% 50%;        /* Orange accent */
  /* ... other colors */
}
```

### Company Information
Update the following files with your actual business details:
- Company name, logo in `/components/Navigation.js` and `/components/Footer.js`
- Contact information in `/app/contact/page.js`
- About story in `/app/about/page.js`
- Projects in `/app/projects/page.js`

### Images
Replace placeholder images with your actual project photos:
- Update image URLs in each page component
- Images are currently from Unsplash (professional construction photos)

## 📧 Contact Form

### Current Implementation
The contact form currently logs submissions to the console for testing purposes.

**Console output includes:**
- Timestamp
- Name
- Email
- Phone
- Project Type
- Message

### Adding Google Sheets Integration

To integrate with Google Sheets:

1. **Set up Google Sheets API:**
   - Create a Google Cloud project
   - Enable Google Sheets API
   - Create a service account and download JSON credentials
   - Create a Google Sheet and share it with the service account email

2. **Install dependencies:**
```bash
yarn add googleapis
```

3. **Add environment variables to `.env`:**
```env
GOOGLE_SHEETS_CLIENT_EMAIL=your-service-account@project.iam.gserviceaccount.com
GOOGLE_SHEETS_PRIVATE_KEY=your-private-key
GOOGLE_SHEET_ID=your-sheet-id
```

4. **Update `/app/app/api/[[...path]]/route.js`** with Google Sheets integration code

## 🧪 Testing

### Manual Testing Checklist
- [ ] All pages load correctly
- [ ] Navigation works on mobile and desktop
- [ ] Contact form validation works
- [ ] Form submission succeeds
- [ ] All images load properly
- [ ] Responsive design on mobile/tablet/desktop
- [ ] SEO meta tags present on all pages

### Test Contact Form
```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "(555) 123-4567",
    "projectType": "Kitchen Renovation",
    "message": "Test message"
  }'
```

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

All components use Tailwind's responsive utilities (sm:, md:, lg:, xl:)

## ⚡ Performance

- **Image optimization**: Next.js Image component with lazy loading
- **Code splitting**: Automatic with Next.js App Router
- **CSS optimization**: Tailwind CSS purges unused styles
- **Fast builds**: Hot reload in development

## 🔒 Security

- **Form validation**: Client-side and server-side
- **Environment variables**: Sensitive data stored in .env
- **API routes**: Server-side only, no client exposure
- **CORS**: Can be configured in API routes if needed

## 📄 SEO

Each page includes:
- Custom title and description
- Open Graph tags for social sharing
- Twitter card meta tags
- Semantic HTML structure
- Fast load times

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + shadcn/ui
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod validation
- **Toasts**: Sonner for notifications
- **Database**: Ready for MongoDB integration (template includes MongoDB setup)

## 📝 License

This is a custom project for BuildRight Construction.

## 🤝 Support

For questions or support, contact the development team.

---

**Built with ❤️ for BuildRight Construction**
