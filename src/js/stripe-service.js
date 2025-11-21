/**
 * Stripe Service
 * Handles all Stripe checkout functionality
 */

import { loadStripe } from '@stripe/stripe-js';
import { stripeConfig } from '../config/stripe.js';

class StripeService {
  constructor() {
    this.stripe = null;
    this.init();
  }

  async init() {
    try {
      this.stripe = await loadStripe(stripeConfig.publicKey);
      console.log('✅ Stripe initialized');
    } catch (error) {
      console.error('❌ Stripe initialization failed:', error);
    }
  }

  /**
   * Create a Stripe Checkout session
   * @param {string} planId - The plan ID (monthly, annual, setup)
   */
  async createCheckoutSession(planId) {
    if (!this.stripe) {
      console.error('Stripe not initialized');
      return;
    }

    const priceId = stripeConfig.priceIds[planId];

    if (!priceId) {
      console.error(`No price ID found for plan: ${planId}`);
      alert('This plan is not yet available. Please contact support.');
      return;
    }

    try {
      // Get the current domain for redirect URLs
      const origin = window.location.origin;
      const successUrl = `${origin}${stripeConfig.urls.success}`;
      const cancelUrl = `${origin}${stripeConfig.urls.cancel}`;

      // Create checkout session via your backend
      // You'll need to implement this endpoint
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          priceId,
          successUrl,
          cancelUrl,
        }),
      });

      const { sessionId } = await response.json();

      // Redirect to Stripe Checkout
      const result = await this.stripe.redirectToCheckout({
        sessionId,
      });

      if (result.error) {
        console.error(result.error.message);
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Checkout error:', error);
      alert('Unable to process checkout. Please try again later.');
    }
  }

  /**
   * Alternative: Direct redirect to Stripe Checkout (for testing)
   * This method redirects directly to Stripe without a backend
   */
  async redirectToCheckout(planId) {
    if (!this.stripe) {
      console.error('Stripe not initialized');
      return;
    }

    const priceId = stripeConfig.priceIds[planId];

    if (!priceId) {
      console.error(`No price ID found for plan: ${planId}`);
      alert('This plan is not yet available. Please contact support.');
      return;
    }

    try {
      const result = await this.stripe.redirectToCheckout({
        lineItems: [{ price: priceId, quantity: 1 }],
        mode: planId === 'setup' ? 'payment' : 'subscription',
        successUrl: `${window.location.origin}${stripeConfig.urls.success}`,
        cancelUrl: `${window.location.origin}${stripeConfig.urls.cancel}`,
      });

      if (result.error) {
        console.error(result.error.message);
        alert(result.error.message);
      }
    } catch (error) {
      console.error('Checkout error:', error);
      alert('Unable to process checkout. Please try again later.');
    }
  }
}

// Export singleton instance
export const stripeService = new StripeService();
