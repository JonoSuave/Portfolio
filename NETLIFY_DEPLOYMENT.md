# Deploying Your Portfolio to Netlify

This guide will walk you through deploying your portfolio website to Netlify.

## Prerequisites

- A GitHub account
- Your portfolio code pushed to a GitHub repository
- A Netlify account (you can sign up for free at [netlify.com](https://netlify.com))

## Environment Variables

Based on your codebase, you'll need to set up the following environment variables in Netlify:

- `VITE_SUPABASE_URL` - Your Supabase project URL
- `VITE_SUPABASE_ANON_KEY` - Your Supabase anonymous key
- `VITE_TEMPO` - Set to "false" for production deployment

## Deployment Steps

### 1. Push Your Code to GitHub

If you haven't already, push your portfolio code to a GitHub repository:

```bash
# Initialize git if you haven't already
git init

# Add all files
git add .

# Commit changes
git commit -m "Prepare for Netlify deployment"

# Add your GitHub repository as remote
git remote add origin https://github.com/JonoSuave/Portfolio.git

# Push to GitHub
git push -u origin main
```

### 2. Connect to Netlify

1. Log in to your Netlify account
2. Click "Add new site" > "Import an existing project"
3. Select GitHub as your Git provider
4. Authorize Netlify to access your GitHub account
5. Select your portfolio repository

### 3. Configure Build Settings

Netlify should automatically detect that you're using Vite and suggest the correct build settings. If not, use these settings:

- **Build command:** `npm run build`
- **Publish directory:** `dist`

### 4. Set Environment Variables

1. Go to Site settings > Environment variables
2. Add the environment variables listed in the prerequisites section

### 5. Deploy

1. Click "Deploy site"
2. Wait for the build to complete
3. Your site will be live at a Netlify subdomain (e.g., `your-portfolio.netlify.app`)

### 6. Custom Domain (Optional)

1. Go to Site settings > Domain management
2. Click "Add custom domain"
3. Follow the instructions to connect your domain

## Continuous Deployment

Netlify will automatically rebuild and redeploy your site whenever you push changes to your GitHub repository.

## Troubleshooting

If you encounter any issues during deployment:

1. Check the Netlify build logs for errors
2. Ensure all environment variables are correctly set
3. Verify that your `netlify.toml` file is in the root directory
4. Make sure your build command is correctly generating the `dist` directory
