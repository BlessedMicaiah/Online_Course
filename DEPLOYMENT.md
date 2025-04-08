# Deployment Guide for 3D Code Academy Platform

This guide provides instructions for deploying the 3D Code Academy platform to various environments.

## Deploying to Replit

The project is already set up to work with Replit's deployment system.

1. From your Replit project, click the "Deploy" button in the top right corner
2. Follow the prompts to deploy your application
3. Replit will automatically handle the deployment process

## Deploying to Vercel

1. Create an account on [Vercel](https://vercel.com/) if you don't already have one
2. Install the Vercel CLI:
```bash
npm install -g vercel
```

3. Login to Vercel:
```bash
vercel login
```

4. Deploy the application:
```bash
vercel
```

5. Follow the prompts to configure your deployment

## Deploying to Heroku

1. Create an account on [Heroku](https://heroku.com/) if you don't already have one
2. Install the Heroku CLI:
```bash
npm install -g heroku
```

3. Login to Heroku:
```bash
heroku login
```

4. Create a new Heroku app:
```bash
heroku create your-app-name
```

5. Add the PostgreSQL addon:
```bash
heroku addons:create heroku-postgresql:hobby-dev
```

6. Configure the build script:
Create a `Procfile` in the root of your project with:
```
web: npm start
```

7. Deploy to Heroku:
```bash
git push heroku main
```

## Database Configuration

### For Production

For production environments, update your database connection settings in the environment variables:

1. Set the `DATABASE_URL` environment variable to your production database connection string
2. Ensure your database allows connections from your deployment environment

### Database Migration

When deploying to production, run the database migration:

```bash
npm run db:push
```

## Environment Variables

Ensure the following environment variables are set in your deployment environment:

- `DATABASE_URL`: PostgreSQL connection string
- `NODE_ENV`: Set to 'production' for production environments
- `PORT`: Port to run the server on (often set automatically by the platform)

## Post-Deployment Checks

After deploying, verify:

1. The application loads correctly
2. User authentication works
3. Database connections are functioning
4. Course and challenge data is displaying correctly
5. All API endpoints respond as expected

## Monitoring and Maintenance

For ongoing monitoring:

1. Set up logging with a service like Sentry or LogRocket
2. Configure alerts for application errors
3. Regularly backup your database
4. Schedule regular maintenance and updates

## Troubleshooting

Common issues and solutions:

1. Database Connection Errors:
   - Verify database credentials are correct
   - Check network permissions and firewall settings

2. Asset Loading Issues:
   - Ensure all static assets have the correct paths for production
   - Check CORS settings if loading assets from another domain

3. Performance Issues:
   - Consider implementing caching strategies
   - Optimize database queries
   - Use a CDN for static assets