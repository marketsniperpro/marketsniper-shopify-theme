# Market Sniper Website

Modern, fast, and professional trading bot website built with vanilla JavaScript, Vite, and Stripe.

## Features

- ✅ **Clean, modern design** - Professional look without the "AI feel"
- ✅ **No hard-coded content** - All content managed in config files
- ✅ **Modular architecture** - Component-based JavaScript
- ✅ **Stripe integration** - Subscription and one-time payments
- ✅ **Fully responsive** - Mobile-first design
- ✅ **Fast performance** - Optimized with Vite
- ✅ **Easy deployment** - Ready for Vercel

## Project Structure

```
marketsniper-shopify-theme/
├── src/
│   ├── config/
│   │   ├── site.js          # Site-wide configuration
│   │   ├── content.js       # Page content (hero, pricing, FAQ, etc.)
│   │   └── stripe.js        # Stripe configuration
│   ├── css/
│   │   └── main.css         # Main stylesheet (simplified, modern)
│   ├── js/
│   │   ├── main.js          # Main application & components
│   │   └── stripe-service.js # Stripe checkout service
│   └── assets/
│       └── images/          # Images and logos
├── index.html               # Main homepage
├── features.html            # Features page (to be added)
├── pricing.html             # Pricing page (to be added)
├── contact.html             # Contact page (to be added)
├── package.json             # Dependencies and scripts
├── vite.config.js           # Vite configuration
├── vercel.json              # Vercel deployment config
└── README.md                # This file
```

## Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Then edit `.env.local` and add your Stripe publishable key:

```env
VITE_STRIPE_PUBLIC_KEY=pk_test_your_key_here
```

### 3. Configure Stripe Price IDs

1. Go to your [Stripe Dashboard](https://dashboard.stripe.com/products)
2. Create products for:
   - Monthly subscription ($49/mo)
   - Annual subscription ($490/yr)
   - Setup service ($99 one-time)
3. Copy the Price IDs
4. Update `src/config/stripe.js` with your Price IDs:

```javascript
priceIds: {
  monthly: 'price_xxxxx',
  annual: 'price_xxxxx',
  setup: 'price_xxxxx',
}
```

### 4. Run Development Server

```bash
npm run dev
```

The site will open at `http://localhost:3000`

## Updating Content

All content is managed in configuration files - no need to edit HTML!

### Update Site Info

Edit `src/config/site.js`:

```javascript
export const siteConfig = {
  name: "Market Sniper",
  navigation: [...],
  footer: {...}
};
```

### Update Homepage Content

Edit `src/config/content.js`:

```javascript
export const homeContent = {
  hero: {...},
  howItWorks: {...},
  pricing: {...},
  faq: {...}
};
```

## Deployment

### Deploy to Vercel

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   npm run build
   vercel --prod
   ```

4. **Add Environment Variables in Vercel:**
   - Go to your project settings in Vercel
   - Add `VITE_STRIPE_PUBLIC_KEY` as an environment variable

### Automatic Deployments

Connect your GitHub repository to Vercel for automatic deployments on every push.

## Stripe Integration

The website uses Stripe Checkout for payments. Two payment modes are supported:

1. **Subscriptions** - Monthly and Annual plans
2. **One-time payments** - Setup service

### Testing Stripe

Use Stripe test mode:
- Use test publishable key: `pk_test_...`
- Use test card: `4242 4242 4242 4242`
- Any future expiry date and any CVC

### Production Stripe

1. Get your live publishable key from Stripe Dashboard
2. Update environment variable to use live key: `pk_live_...`
3. Update Price IDs in `src/config/stripe.js` to live Price IDs

## Customization

### Colors

Edit CSS variables in `src/css/main.css`:

```css
:root {
  --primary: #00d639;
  --bg-dark: #0a0e0d;
  /* ... */
}
```

### Fonts

Update the font family in `src/css/main.css`:

```css
:root {
  --font-sans: -apple-system, BlinkMacSystemFont, ...;
}
```

## Build for Production

```bash
npm run build
```

The optimized build will be in the `dist/` folder.

## Technologies Used

- **Vite** - Build tool and dev server
- **Vanilla JavaScript** - No framework, pure ES6+ modules
- **Stripe.js** - Payment processing
- **CSS3** - Modern styling with CSS variables
- **Vercel** - Hosting and deployment

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## License

Proprietary - © 2025 Market Sniper

## Support

For questions or support, contact: [your-email@example.com]
