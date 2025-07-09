# Grocify – Grocery Delivery Website

A full‑stack grocery ordering platform built with the **MERN stack**. Shoppers can browse products, add them to a cart, pay online via Stripe, and track their orders in real time. Sellers manage inventory and orders through a secure admin dashboard. The project is deployed on **Vercel** for fast global access.

---

## Table of Contents

1. [Features](#features)
2. [Tech Stack](#tech-stack)
3. [Live Demo](#live-demo)
4. [Screenshots](#screenshots)
5. [Getting Started](#getting-started)
6. [Deployment](#deployment)
7. [Folder Structure](#folder-structure)
8. [API Endpoints](#api-endpoints)
9. [Contributing](#contributing)
10. [License](#license)

---

## Features

* **Product Catalogue & Search** – real‑time browsing, category filters, and keyword search.
* **Shopping Cart & Checkout** – persistent cart, quantity updates, coupon logic (optional).
* **Secure Payments with Stripe** – Stripe Checkout & webhooks for payment‑confirmed order status.
* **Role‑Based Admin Panel** – JWT‑protected dashboard for adding/editing products, inventory control, and viewing customer orders.
* **JWT Authentication** – email/password sign‑up & login, refresh tokens, and protected routes.
* **Responsive UI** – built with React 18 + Tailwind CSS, optimised for mobile and desktop.
* **Cloud‑hosted Images** – product and avatar uploads via Cloudinary with CDN delivery.
* **CI/CD & Hosting** – automatic deployments on push to `main`, served globally by Vercel’s Edge Network.

---

## Tech Stack

| Layer      | Technology                                |
| ---------- | ----------------------------------------- |
| Front‑end  | React 18, Vite, Tailwind CSS, Axios       |
| Back‑end   | Node.js 18, Express 4                     |
| Database   | MongoDB Atlas (Mongoose ODM)              |
| Auth       | JSON Web Tokens (JWT)                     |
| Payments   | Stripe API & Webhooks                     |
| Storage    | Cloudinary                                |
| Dev Tools  | ESLint + Prettier, Husky, GitHub Actions  |
| Deployment | Vercel (frontend & serverless API routes) |

---

## Live Demo

> **[https://grocify-delta.vercel.app/](https://grocify-delta.vercel.app/)** — *replace with your actual URL*

---

## Screenshots

*Add screenshots or GIFs here to showcase the UI.*

---

## Getting Started

### Prerequisites

* **Node.js ≥ 18**
* **pnpm** / **npm** / **yarn**

### Environment Variables

Create a `.env` file in both `/server` and `/client` (or in the root, depending on setup). Required keys:

```ini
# Server
MONGODB_URI=<your‑mongodb‑atlas‑uri>
JWT_SECRET=<strong‑random‑secret>
STRIPE_SECRET_KEY=<your‑stripe‑secret‑key>
STRIPE_WEBHOOK_SECRET=<your‑stripe‑webhook‑secret>
CLOUDINARY_CLOUD_NAME=<cloud-name>
CLOUDINARY_API_KEY=<api-key>
CLOUDINARY_API_SECRET=<api-secret>

# Client
VITE_STRIPE_PUBLISHABLE_KEY=<your‑stripe‑publishable‑key>
```

### Installation

```bash
# 1. Clone the repo
$ git clone https://github.com/9DFF-2B31/Grocify.git
$ cd Grocify

# 2. Install dependencies
$ pnpm install            # or npm install / yarn install

# 3. Start development servers (concurrently)
$ pnpm dev                # frontend at http://localhost:5173
$ pnpm server             # backend at http://localhost:5000
```

> Adjust scripts in `package.json` to suit your setup. By default, Vite serves the client and Nodemon runs the API.

---

## Deployment

The project is pre‑configured for **Vercel**:

1. Push to `main` ➜ Vercel triggers a build.
2. Environment variables are injected via the Vercel dashboard.
3. Serverless API routes live under `/api/*` for free hosting.

For self‑hosting (e.g., DigitalOcean, Render, Railway), build the React app with `pnpm build` and serve `dist/` from Express or Nginx.

---

## Folder Structure

```
Grocify/
├─ client/            # React + Tailwind source
│  ├─ public/
│  └─ src/
│     ├─ components/
│     ├─ pages/
│     ├─ hooks/
│     └─ utils/
├─ server/            # Express API
│  ├─ controllers/
│  ├─ models/
│  ├─ routes/
│  ├─ middleware/
│  └─ services/       # Stripe, Cloudinary, etc.
├─ .github/           # GitHub Actions workflows
└─ README.md
```

---

## API Endpoints

| Method | Endpoint             | Description                          |
| ------ | -------------------- | ------------------------------------ |
| GET    | `/api/products`      | List all products                    |
| GET    | `/api/products/:id`  | Get single product                   |
| POST   | `/api/orders`        | Create order (Stripe session)        |
| POST   | `/api/webhook`       | Stripe webhook receiver              |
| POST   | `/api/auth/register` | User registration                    |
| POST   | `/api/auth/login`    | User login (returns JWT)             |
| ...    |                      | *More endpoints in `/server/routes`* |

---

## Contributing

1. **Fork** the repository
2. Create your feature branch: `git checkout -b feat/amazing-feature`
3. Commit your changes: `git commit -m "feat: add amazing feature"`
4. Push to the branch: `git push origin feat/amazing-feature`
5. Open a Pull Request

---

## License

This project is licensed under the **MIT License**. See `LICENSE` for details.

---

## Acknowledgements

* [Stripe Docs](https://stripe.com/docs)
* [Tailwind CSS](https://tailwindcss.com)
* [Cloudinary](https://cloudinary.com)
* [Vercel](https://vercel.com)

Happy coding! \:rocket:
