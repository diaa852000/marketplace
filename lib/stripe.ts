import Stripe from 'stripe';

const SECRET_KEY = process.env.STRIPE_SECRET_KEY!;

export const stripe = new Stripe(SECRET_KEY, {
    apiVersion:'2024-09-30.acacia',
    typescript: true,
});
