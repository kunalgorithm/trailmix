# Trailmix

https://daliakatan.com/trailmix

## Development

Clone the repository then install dependencies

```
yarn
```

To create the `.env` files with example values run

```
yarn setup
```

> NOTE: only run `yarn setup` once. This will create a `.env` file in the root directory with a `JWT_SECRET` and an `.env` in `prisma` with a `DATABASE_URL` pointing to a local sqlite file.

Now, run the development server

```
yarn dev
```

and visit [localhost:3000](http://localhost:3000).

## Deploy to Render

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/kunalgorithm/fullstack-twitter)

Clicking the button above will spin up a web service ($/7 month) connected to this repo and a postgres instance (an additional $/7 month). Environment variable `DATABASE_URL` will automatically be pointed to the new database, and `JWT_SECRET` will be assigned a randomly-generated 256-bit secret.

You'll be asked for permission on the render interface before the magic happens.

## Deploy on Render manually

You'll need to deploy a postgres instance (starts at \$7/month on render) and then copy over the internal access url to the environment variable `DATABASE_URL`.

The only other variable you'll have to set is `JWT_SECRET` with `jsonwebtoken` uses to create unique cookies to authenticate user sessions.

### Production build and start scripts

Render should detect that you're deploying a next app and set the appropriate build and start commands automatically, but in case you need them

Build

```
yarn && yarn generate && yarn build
```

Start

```
yarn start
```
