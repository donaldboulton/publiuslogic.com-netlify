# To Publish Logic

## Technical notes about this website

Upgrade as of Aug 31st, 2022 to Gatsby 4.22.0

🎁 [![LICENSE](https://img.shields.io/badge/license-MIT-lightgrey.svg)](https://raw.githubusercontent.com/donaldboulton/publiuslogic.com/master/LICENSE.txt)
[![Tip Me via PayPal](https://img.shields.io/badge/PayPal-tip%20me-green.svg?logo=paypal)](https://www.paypal.me/donaldboulton)
[![Join the community on Spectrum](https://withspectrum.github.io/badge/badge.svg)](https://spectrum.chat/?t=fa5cdbee-00bf-4ca8-be8f-f150a6f643e1)
[![Netlify Status](https://api.netlify.com/api/v1/badges/27d2be12-eb4a-4da2-a471-aea92e199948/deploy-status)](https://app.netlify.com/sites/publiuslogic/deploys)

<h2 align="center">Awesome Tailwind CSS</h2>

<p align="center">
  <a href="https://tailwindcss.com">Tailwind CSS</a> is a utility-first CSS framework for rapidly building custom user interfaces.
  <br />
  <br />
  <a href="https://github.com/sindresorhus/awesome">
    <img src="https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg" alt="Awesome badge">
  </a>
  &nbsp;
  <a href="https://github.com/sindresorhus/awesome-lint">
    <img src="https://github.com/aniftyco/awesome-tailwindcss/workflows/Lint/badge.svg" alt="Lint status badge">
  </a>
  <br />
  <br />
</p>

- 🚋Serverless Functions
- 🔏Authentication (with Netlify Identity)
- 🔐Authenticated Serverless Functions
- 😻External Provider login with GitHub, Bitbucket, Google, etc.
- 🏠Protected Routes
- 👋🏼Dynamic Clientside Pages in Gatsby (enabling all the above)
- 🕵🏼‍♂️Hide API Secrets from being exposed to Frontend

This is starter template for a full featured marketing and blog website based on the following:

- [Gatsby Starter Default](https://github.com/gatsbyjs/gatsby-starter-default)
- [How To Set Up a Gatsby Project with TypeScript](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-gatsby-project-with-typescript)
- [Gatsby](https://gatsbyjs.org)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com) and [TailwindUI](https://tailwindui.com)
- [HeroIcons](https://heroicons.com/)
- [Hero Patterns](https://heropatterns.com/)
- [HeadlessUI](https://headlessui.dev/)
- [unDraw](https://undraw.co/) for illustrations
- [MDX](https://mdxjs.com/) and [Markdown](https://www.markdownguide.org/)
- [ESLint](https://eslint.org)for type-checking
- [SendGrid](https://sendgrid.com/) email delivery
- [Schema.org](https://schema.org/) and [JSON for Linking Data](https://json-ld.org/)
- [Open Graph](https://ogp.me/) used by [Facebook](https://developers.facebook.com/docs/sharing/webmasters/#markup)
- [Twitter Cards](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)

## Features

- Full-featured blog with frontmatter (title, description, author, date, image, tags)
- Tags index page and individual tag pages
- Pagination in posts and tag pages
- Support for RSS feed, sitemap and robots.txt
- Automatic optimization of images in Markdown/MDX posts
- SVG design (unDraw, Hero Patterns, HeroIcons)
- Support for code syntax highlighting
- Manifest and offline support
- Contact form using sendgrid email and Gatsby functions
- Full SEO support (via Gatsby v4.20.0 Head ) including Open Graph, Twitter Cards and Schema.org via JSON-LD
- Tailwind Css v3.0.7, for super styling

## How to use the starter

1. Clone your own version of the starter template or fork the repository. Run `yarn` then `yarn build` or `yarn develop`.
2. The default colour scheme is purple to match the Gatsby logo. Change to your preferred hue by doing a global search and replace of '-gray-' to your favourite colour.
3. The home (landing) page consists of a number of components (Hero, Feature, CTA, ...) - edit these components in `src/components` to customise.
4. The `/contact` page displays an OpenStreetMaps map via Leaflet - customise by changing to your preferred set of coordinates.
5. `gatsby-config.js` has all the site parameters - edit site metadata to suit.
6. Create new MDX pages in `src/mdx` (using either `.md` or `.mdx` extension). Add React components to MDX in the `src/pages/{mdx.slug}.tsx` file.
7. Any content created in the `src/mdx/blog` subdirectory will automatically be a blog post. Use `src/mdx/blog/2000-01-01-template.md` as a base for creating a new blog post.
8. If you create a new tag (eg. `newtag`) a new tag page will be created ie. `/tags/newtag`. The `/tags` page will enumerate all tags.
9. If you want to change the navigation menu, edit `src/components/header.tsx`. Similarly, edit `src/components/footer.tsx` to customise the footer.
10. If you make a lot of changes, use `yarn lint` and `yarn type-check` to check everything is okay.

## SendGrid configuration (for contact form)

Insert the following environment variables (either in .env or on deployment host):

- `SENDGRID_API_KEY`
- `SENDGRID_AUTHORIZED_EMAIL`

### React Spring Animations

Using react spring for menu animations from desktop to mobile, image gallery useChain animations for hidden gallery's display

## Just Having Fun

🍸 This website is built as static HTML with Gatsby component-modular Docker Container builds using React components and GraphQL, Built with WebPack. Including a user data backend on FaunaDB.

Served on Netlify via a continuous deployment (CD) workflow. Pull requests are automatically built into preview apps, while commits to the master branch trigger the production build and deploy onto Netlify’s CDN edge node infrastructure. Since the whole site is just a bunch of static files copied onto multiple CDN nodes around the world, time to first byte (TTFB) is consistently fast at around 1ms to 2ms. Instant Notifications through my Slack Bots or GMail and phone notifications using Netlify Functions for my Mansbooks.com publiuslogic.com workspace.

## Gatsby Starter Publius

🚀 This repo powers the Gatsby site hosted at publiuslogic.com. I use it to write about my personal interests, ranging from theoretical physics and spiritual learning to sustainability, web development and spending time outdoors... oh and not to forget breaking conventions like a Gatsby Site with Json-Ld per template for SEO, Internet Positioning.

Feel free to reuse any part of this repo to create your own Gatsby site.

A [Gatsby v4](https://www.gatsbyjs.org/) 🗸 and [Netlify CMS](https://www.netlifycms.org) 🗸 powered generic business website starter based on [gatsby-starter-netlify-cms](https://github.com/AustinGreen/gatsby-starter-netlify-cms) 🗸

### Server-less

🔥 No run time dependency or vulnerable server stack required Pre-built pages served over a CDN for fastest time to first byte Fast and cheap CDN scaling results in ultra-high availability worldwide Server-side processes abstracted into microservice APIs for reduced attack surface areas Modern Continuous Deployment (CD) Git workflows with instant rollbacks Headless CMS for complete separation from your app/site and with full version control Modern authentication methods such as OAuth 2 for ultimate security.

## Authenticati

#### What is Netlify Identity

⁉️ Netlify’s Identity service is a plug-and-play microservice for handling site
functionalities like signups, logins, password recovery, user metadata, and
roles. You can use it from single page apps instead of rolling your own, and
integrate with any service that understands JSON Web Tokens (JWTs).

Learn more about this service from this
[Blog Post](https://www.netlify.com/blog/2017/09/07/introducing-built-in-identity-service-to-streamline-user-management/) 🗸

It follows the [JAMstack architecture](https://jamstack.org) 🗸 by using Git as a single source of truth, and [Netlify](https://www.netlify.com) 🗸 for continuous deployment, and CDN distribution.

## Netlify CMS

[Static + content management = ❤️](https://www.netlifycms.org/) 🗸

🖥️ Netlify CMS is Always the latest Netlify CMS GitHub repo pull, with my custom Webpack hashed build, not the Gatsby plugin and netlify-cms node module way; which builds it into the frontend = slowing Gatsby way down; TEST it to see for yourself.

My custom dark build of the Netlify Identity Widget is used on the Gatsby frontend and in my git-gateway back-end.

Get the speed, security, and scalability of a static site, while still providing a convenient editing interface for content.

An integrated part of your Git workflow
Content is stored in your Git repository along side your code for easier versioning, multi-channel publishing, and the option to handle content updates directly in Git.

### An extensible CMS built on React

❤️ Netlify CMS is built as a single-page React app. Create custom-styled previews, UI widgets, and editor plugins or add backends to support different Git platform APIs.
My Netlify CMS backend will build and add Pages, Posts, My layout components with Event data for Bulma GCal fullCalendar localized events, Notifications, Authors, Products, Site Updates and charts data using charts.js displaying build, sales and analytics charts data on individual pages and posts. All edited from a CMS Backend on a Static Website!

## Features

> ✔️ Complete Website Suite - Pages = Home, Blog, About, Privacy, Sitemap and Contact

- Netlify CMS for Content Management
- Netlify Identity for Authentication
- FaunaDB for Authentication - Users Backend and Admin
- SEO Friendly (Sitemap, Schemas, Meta Tags, GTM etc.)
- All Twitter Widgets, Meta and SEO
- Styled Components, screen mediaMatch mediaQuerys & Bulma for styling
- React Spring for Animated Menus, Blogs Lists and Image Gallery's
- Table Of Contents, on or off through frontmatter
- Tags, Categories and a RSS Feed for Blog
- Time to Read tags categories and published time meta
- Comments with React withUtterances as GitHub Issues
- Follow, Mention, Star and Fork GitHub buttons
- Share Support
- Elastic-Lunr Search
- Pagination for Blog

#### Demo

[Gatsby Starter Publius](https://publiuslogic.com)

## Prerequisite

- Node
- Gatsby CLI (globally installed)

## Getting Started

Create your own project with Gatsby CLI:

```shell
gatsby new yourbusinessname https://github.com/donaldboulton/publiuslogic.git
```

## Available Scripts

### Develop

Start a hot-reloading development environment accessible at `localhost:8000`

```shell
yarn start
```

### Build

Get an optimized production build for your site generating static HTML and per-route JavaScript code bundles.

```shell
yarn build
```

### Serve

gatsby serve — Gatsby starts a local HTML server for testing your built site.

```shell
yarn serve
```

### Lint

Lint the code according to eslintrc file, for consistency.

```shell
yarn lint
```

### Clean

Remove the .cache and public for a scratch compile.

```shell
yarn clean
```

## Deployment

Clicking the button will ask for authentication via GitHub, which will create a repo in your github account with this starter. Then, it will build and deploy the site to Netlify.
💫
<a href="https://app.netlify.com/start/deploy?repository=https://github.com/donaldboulton/publiuslogic.com&amp;stack=cms"><img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify"></a>

You can read up on how to set up Identity(Authentication for CMS User) here [How To Set Up Netlify CMS](https://www.netlifycms.org/docs/add-to-your-site/)
