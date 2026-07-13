# Render Deployment Guide for Zamato

## Prerequisites
- GitHub account with your Zamato repository
- Render account (https://render.com)

## Setup Instructions

### 1. Push to GitHub
```bash
cd ~/Desktop/Zamato
git add .
git commit -m "Setup for Render deployment"
git push origin main
```

### 2. Create Services on Render

#### Backend Setup:
1. Go to https://dashboard.render.com/
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Fill in:
   - **Name**: `zamato-backend`
   - **Environment**: `Node`
   - **Plan**: Free or Starter
   - **Build Command**: `cd Backend && npm install`
   - **Start Command**: `cd Backend && npm start`
   - **Publish directory**: Leave blank

5. Add Environment Variables:
   ```
   DB_NAME = zamato
   DB_USER = your_mysql_user
   DB_PASSWORD = your_mysql_password (from .env)
   DB_HOST = your_db_host (MySQL server hostname)
   DB_PORT = 3306
   DB_DIALECT = mysql
   PORT = 8001
   NODE_ENV = production
   RAZORPAY_KEY_ID = your_key
   RAZORPAY_KEY_SECRET = your_secret
   JWT_SECRET = your_jwt_secret
   ```

6. Click "Create Web Service"

#### Frontend Setup:
1. Click "New +" → "Static Site"
2. Connect same GitHub repository
3. Fill in:
   - **Name**: `zamato-frontend`
   - **Build Command**: `cd project && npm install && npm run build`
   - **Publish directory**: `project/dist`
4. Add Environment Variables:
   ```
   VITE_API_URL = https://zamato-backend.onrender.com/api
   ```
5. Click "Create Static Site"

#### Admin Dashboard Setup:
1. Click "New +" → "Static Site"
2. Connect same GitHub repository
3. Fill in:
   - **Name**: `zamato-admin`
   - **Build Command**: `cd admin-ace && npm install && npm run build`
   - **Publish directory**: `admin-ace/.output/public`
4. Add Environment Variables:
   ```
   VITE_API_URL = https://zamato-backend.onrender.com/api
   ```
5. Click "Create Static Site"

## Important Notes

### Database Connection
Render free tier doesn't include MySQL hosting. Choose one:

**✅ RECOMMENDED: Use Aiven** (Managed MySQL)
- Free trial with $300 credits
- Automated backups
- High availability
- See AIVEN_SETUP.md for instructions

**Alternative: PlanetScale** (Free MySQL hosting)
- Free tier with 5GB storage
- Simple setup
- No credit card required

**Not Recommended: Keep local MySQL**
- Won't work for production
- No automatic backups

### Database Setup with PlanetScale
1. Go to https://app.planetscale.com/
2. Create free account
3. Create new database `zamato`
4. Get connection string
5. Update `DB_HOST` in Render env vars with PlanetScale hostname

### URL Mapping
After deployment, you'll have:
- Backend: `https://zamato-backend.onrender.com`
- Frontend: `https://zamato-frontend.onrender.com`
- Admin: `https://zamato-admin.onrender.com`

Update `VITE_API_URL` in frontend and admin env vars after backend deploys.

### Auto-Deploy
Any push to your main branch will trigger automatic deployment on Render.

### Monitoring
- View logs in Render dashboard
- Check build status and deployment history
- Monitor performance metrics

## Troubleshooting

**Backend won't start:**
- Check if all env variables are set correctly
- Verify database connection details
- Check logs in Render dashboard

**API not connecting:**
- Ensure `VITE_API_URL` matches backend URL
- Check CORS settings in backend
- Verify firewall rules

**Database errors:**
- Confirm database exists and user has permissions
- Test connection string locally first
- Check if MySQL is accessible from Render

## Next Steps
1. Commit this file to GitHub
2. Create services in Render dashboard
3. Monitor deployment and logs
4. Test all endpoints
5. Set up custom domain (if needed)
