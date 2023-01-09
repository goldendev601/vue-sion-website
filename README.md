# Sion landing page

Website for `sioncentral.com` built using Gridsome.


## Scripts

- `yarn dev` for local development
- `yarn build` for local build
- `yarn lint` to lint files

## Deploy

- Production (master branch): http://bi-sion-website-production.s3-website-us-east-1.amazonaws.com/
- Staging (develop branch): http://bi-sion-website-staging.s3-website-us-east-1.amazonaws.com/

Deployment is configured in gitlab CI/CD (`.gitlab-ci.yml`) and it's hosted on S3. Buckets are set up in `variables folder`. 
AWS credentials (`AWS_SECRET_ACCESS_KEY` and `AWS_ACCESS_KEY_ID`) are set up in Gitlab project settings (CI variables).


## Environment

| Variable                  | Description                                                        | 
| ------------------------- | -----------------------------------------------------------------  |
| GRIDSOME_APP_VERSION      | A variable set up in gitlab-ci, shows version (short commit hash). |
| GRIDSOME_GOOGLE_ANALYTICS_ID | enable google analytics by setting id (eg. UA-XXXX)             |
| GRIDSOME_SITE_URL         | set in CI/CD pipeline, required for setting up the head tags. (eg. https://sioncentral.com) |

## Structure

Source code is placed in `/src` folder.


## Data

Data folder includes `yaml` files which are accessed via gridsome graphql layer.

## Keys on pages 

Keys on pages are required because of animated transition when changing the pages.