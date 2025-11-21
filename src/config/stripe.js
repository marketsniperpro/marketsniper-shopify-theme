/**
 * Stripe Configuration
 *
 * IMPORTANT: Add your Stripe keys as environment variables:
 * - VITE_STRIPE_PUBLIC_KEY (publishable key)
 * - Create price IDs in your Stripe Dashboard
 */

export const stripeConfig = {
  // Get from environment variable
  publicKey: import.meta.env.VITE_STRIPE_PUBLIC_KEY || 'pk_test_...',

  // Stripe Price IDs - Update these with your actual Stripe Price IDs
  priceIds: {
    monthly: 'price_...',  // Replace with your monthly price ID
    annual: 'price_...',   // Replace with your annual price ID
    setup: 'price_...',    // Replace with your setup price ID
  },

  // Success/Cancel URLs (will be updated dynamically based on domain)
  urls: {
    success: '/success.html?session_id={CHECKOUT_SESSION_ID}',
    cancel: '/pricing.html?canceled=true'
  }
};
