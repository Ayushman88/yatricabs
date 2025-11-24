# YATRI CABS Landing Page

A modern, responsive landing page for YATRI CABS built with Next.js 14, TypeScript, Redux Toolkit, and custom CSS.

## Features

- **Next.js 14** - Latest version with App Router
- **TypeScript** - Type-safe development
- **Redux Toolkit** - State management for booking form
- **Custom CSS** - Exact replica of the original design
- **Responsive Design** - Works on all devices

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
yatri/
├── app/
│   ├── layout.tsx          # Root layout with Redux provider
│   ├── page.tsx             # Main landing page
│   └── globals.css          # Global styles
├── components/
│   ├── Header.tsx           # Header component
│   ├── HeroSection.tsx      # Hero section with booking form
│   ├── FeatureBar.tsx       # Feature bar component
│   ├── FeatureBlocks.tsx    # Three feature blocks
│   ├── CompanyDescription.tsx # Company description section
│   ├── WhyYatri.tsx         # Why Yatri section
│   ├── PricingTable.tsx     # Pricing table component
│   └── ReduxProvider.tsx    # Redux provider wrapper
└── store/
    ├── store.ts             # Redux store configuration
    ├── hooks.ts             # Typed Redux hooks
    └── slices/
        └── bookingSlice.ts  # Booking form state slice
```

## Technologies Used

- **Next.js 14** - React framework
- **React 18** - UI library
- **TypeScript** - Type safety
- **Redux Toolkit** - State management
- **CSS3** - Custom styling

## Build for Production

```bash
npm run build
npm start
```

## License

2025 Ayushman Mishra. All Rights Reserved.

# yatricabs
