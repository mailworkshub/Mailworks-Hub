# Mailworks Hub – Next.js 14 + Tailwind (Stripe removed)
Marketing site + mock Customer and Operator dashboards, with SendGrid contact form.

## Quick start
npm install
cp .env.local.example .env.local  # fill your keys
npm run dev
# open http://localhost:3000

## Routes
/           (marketing)
/customer   (dashboard mock)
/operator   (operator console mock)

## Environment
- SendGrid: SENDGRID_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL (optional)
