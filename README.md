# Next.js

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Knowledge

1. To convert a server side component into client side component we use `"use client"` on the top of the file.
2. We have to convert a server-side component to client-side component with next.js when we use any react hook like `useState()` in a component.
3. Whenever you use eventListeners like onClick etc. we use `"use client"`.
4. Error components must be client components.
5. There are 3 data fetching strategies that next.js uses.
   1. Server Side Rendering (SSR)
   2. Static Site Generation (SSG)
   3. Incremental Static Generation (ISG)
6. We can also create API calls inside a next.js project. To create an API call of `http://localhost:3000/api/users` we need to create an `api/users` folder inside `app` folder which will then have route.js file in it. Via route.js we can define different kind of HTTP requests.
7. To generate SEO related data statically we need to just export an object in the variable `metadata`. Inside that object we can define the keys like `title`, `description` etc.
8. To generate SEO related data dynamically we need to export a function called `generateMetadata()` in the `page.js`. Now we can make call to database inside this function to get the SEO data.
