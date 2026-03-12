# AMG MotoG

A responsive Next.js application for motorbike parts search and order requests. The project provides a user‑friendly interface allowing riders and workshop owners to search for parts, request hard-to-find items, track orders, and access company information. An admin section enables team members to log in, manage requests, and review order status.

Built with the latest React and Next.js features, styled using Tailwind CSS, and powered by React Query and Axios for data fetching.

---

## 🚀 Features

- **Landing page** with hero section, quick search, and explanation of how the service works.
- **Request a part** form supporting text input, photo uploads, and screenshots.
- **Track order** page to view the status of previously submitted requests.
- **Informational pages**: About Us, Contact, and GDPR/Terms guidelines.
- **Admin portal** with login and password recovery (stubbed routes). 
- Client‑side data fetching with **React Query** and **Axios**.
- Fully responsive design using **Tailwind CSS**.
- API base URL configurable via environment variables.


## 📁 Project Structure

```
src/
  app/                # Next.js App Router pages
    (root)/           # Public site
    admin/            # Admin area with auth and dashboard
  components/         # Reusable UI components (forms, inputs, footer, etc.)
  constants/          # Static data (guidelines, shipping info, etc.)
  lib/                # Utility libraries (axios instance)
  sections/           # Section-level components used on pages (Hero, HowItWorks)
...
```

For full details, browse the `src` directory.

## 🛠 Tech Stack

- [Next.js](https://nextjs.org/) 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- React Query (@tanstack/react-query)
- Axios
- ESLint with Next.js configuration

## 🧩 Prerequisites

Make sure you have the following installed:

- Node.js 18+ (recommended) or newer
- npm (comes with Node.js) or yarn

## 🔧 Setup & Development

```bash
# clone the repository
git clone <repo-url> amg_motog
cd amg_motog

# install dependencies
npm install
# or with yarn
# yarn

# create environment file
cp .env.example .env.local
# set your API endpoint
# NEXT_PUBLIC_BASE_URL=https://api.example.com

# run development server
npm run dev
# open http://localhost:3000 in your browser
```

### Available Scripts

| Command       | Description                       |
|---------------|-----------------------------------|
| `npm run dev` | Start development server          |
| `npm run build` | Build for production            |
| `npm run start` | Run the production build         |
| `npm run lint` | Run ESLint                       |

## 📝 Environment Variables

The project uses the following environment variable(s):

- `NEXT_PUBLIC_BASE_URL` – base URL for the backend API. Used by the custom axios instance in `src/lib/axios.ts`.

Customize them in `.env.local` or your deployment platform settings.

## 📦 Deployment

This is a standard Next.js application and can be deployed to any platform that supports Node.js such as [Vercel](https://vercel.com/), [Netlify](https://www.netlify.com/), or AWS.

1. Build the project: `npm run build`
2. Start the server: `npm run start`
3. Configure environment variables on your host.

## 🤝 Contributing

Contributions are welcome! Please fork the repository, create a feature branch, and open a pull request. Make sure linting passes and that any new code is covered by tests (if present).

## 🛡 License

This project is currently unlicensed – add a `LICENSE` file if you wish to make it open source.

---

> Developed by AMG MotoG team
