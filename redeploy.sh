#!/bin/bash

# Build the project
echo "Building the project..."
npm run build

# Check if build was successful
if [ $? -ne 0 ]; then
  echo "Build failed. Please fix the errors and try again."
  exit 1
fi

# Ask which deployment method to use
echo "How would you like to deploy?"
echo "1. Push to GitHub (automatic deployment)"
echo "2. Deploy using Netlify CLI"
read -p "Enter your choice (1 or 2): " choice

if [ "$choice" = "1" ]; then
  # Git deployment
  echo "Committing and pushing changes to GitHub..."
  git add .
  read -p "Enter a commit message: " commit_message
  git commit -m "$commit_message"
  git push
  echo "Changes pushed to GitHub. Netlify will automatically deploy your site."
  echo "Check your Netlify dashboard for deployment status."
elif [ "$choice" = "2" ]; then
  # Netlify CLI deployment
  echo "Deploying with Netlify CLI..."
  
  # Check if user is logged in to Netlify
  netlify status > /dev/null 2>&1
  if [ $? -ne 0 ]; then
    echo "You need to log in to Netlify first."
    netlify login
  fi
  
  # Check if the project is linked to a Netlify site
  if ! netlify status | grep -q "Netlify Site"; then
    echo "This project is not linked to a Netlify site yet."
    netlify link
  fi
  
  # Deploy to production
  echo "Deploying to production..."
  netlify deploy --prod
else
  echo "Invalid choice. Please run the script again and select 1 or 2."
  exit 1
fi

echo "Deployment process completed!"
