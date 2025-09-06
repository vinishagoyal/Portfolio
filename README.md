<div align="center">
  <h1>Vinisha Goyal's Portfolio</h1>
  <p>A modern portfolio website built with Next.js, TypeScript, and Tailwind CSS</p>
</div>

# Portfolio [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvinishagoyal%2Fdigital-resume)

Built with Next.js, [shadcn/ui](https://ui.shadcn.com/), and [magic ui](https://magicui.design/), optimized for Vercel deployment.

## Features

- **Easy Configuration**: Edit your profile information in the [single config file](./src/data/resume.tsx)
- **Modern Tech Stack**: Built using Next.js 14, React, TypeScript, Shadcn/UI, TailwindCSS, Framer Motion, Magic UI
- **Blog Integration**: Includes a blog section with MDX support
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Vercel Optimized**: Configured for seamless deployment on Vercel
- **SEO Friendly**: Built-in SEO optimization for better search engine visibility
- **Dark/Light Mode**: Theme toggle functionality

## Quick Start

### Prerequisites

- Node.js 18+ 
- Git
- pnpm (recommended) or npm

### Local Development

1. Clone this repository:

   ```bash
   git clone https://github.com/vinishagoyal/digital-resume
   ```

2. Navigate to the project directory:

   ```bash
   cd digital-resume
   ```

3. Install dependencies:

   ```bash
   pnpm install
   # or
   npm install
   ```

4. Start the development server:

   ```bash
   pnpm dev
   # or
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

### Configuration

Edit your profile information in [`src/data/resume.tsx`](./src/data/resume.tsx):
- Personal details (name, location, description)
- Work experience
- Education
- Skills
- Projects
- Certifications
- Social media links

## Deployment

### Vercel (Recommended)

1. Push your code to a GitHub repository
2. Connect your repository to [Vercel](https://vercel.com)
3. Vercel will automatically detect the Next.js project and deploy it
4. Configure environment variables if needed in Vercel dashboard

### Manual Deployment

1. Build the project:

   ```bash
   pnpm build
   # or
   npm run build
   ```

2. Start the production server:

   ```bash
   pnpm start
   # or
   npm start
   ```

## Project Structure

```
digital-resume/
├── public/           # Static assets
├── src/
│   ├── app/          # Next.js app directory
│   ├── components/   # React components
│   ├── data/         # Configuration files
│   └── lib/          # Utility functions
├── content/          # Blog posts (MDX)
├── .gitignore       # Git ignore rules
├── next.config.mjs  # Next.js configuration
├── package.json     # Project dependencies
├── tailwind.config.ts # Tailwind CSS configuration
└── README.md        # This file
```

## Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## License

Licensed under the [MIT license](./LICENSE).

## Support

For issues and questions, please open an issue in the GitHub repository.
