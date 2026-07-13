# Render Deployment Checklist

- [ ] **GitHub Setup**
  - [ ] Repository is public
  - [ ] Code is committed and pushed
  - [ ] .gitignore includes .env and node_modules

- [ ] **Database Setup (Aiven)**
  - [ ] Sign up for Aiven (https://aiven.io/)
  - [ ] Create MySQL service
  - [ ] Create database named `zamato`
  - [ ] Get connection details (host, port, username, password)
  - [ ] Test connection locally
  - [ ] Note down Aiven connection info

- [ ] **Backend Deployment**
  - [ ] Create Render account (https://render.com)
  - [ ] Create new Web Service from GitHub repo
  - [ ] Set build command: `cd Backend && npm install`
  - [ ] Set start command: `cd Backend && npm start`
  - [ ] Add all environment variables (DB, Razorpay, JWT)
  - [ ] Deploy and verify logs
  - [ ] Note backend URL (e.g., https://zamato-backend.onrender.com)

- [ ] **Frontend Deployment**
  - [ ] Create Static Site from GitHub repo
  - [ ] Set build command: `cd project && npm install && npm run build`
  - [ ] Set publish directory: `project/dist`
  - [ ] Set VITE_API_URL to backend URL
  - [ ] Deploy and verify

- [ ] **Admin Dashboard Deployment**
  - [ ] Create Static Site from GitHub repo
  - [ ] Set build command: `cd admin-ace && npm install && npm run build`
  - [ ] Set publish directory: `admin-ace/.output/public`
  - [ ] Set VITE_API_URL to backend URL
  - [ ] Deploy and verify

- [ ] **Post-Deployment Testing**
  - [ ] Test API endpoints
  - [ ] Test user login/registration
  - [ ] Test database operations
  - [ ] Check frontend connectivity to backend
  - [ ] Monitor error logs

- [ ] **Production Optimization**
  - [ ] Enable analytics in Render dashboard
  - [ ] Set up alerting
  - [ ] Consider paid tier for reliability
  - [ ] Configure custom domain (optional)
  - [ ] Set up SSL/TLS (automatic on Render)

## Quick Links
- Render Dashboard: https://dashboard.render.com/
- PlanetScale Dashboard: https://app.planetscale.com/
- Zamato Backend: https://zamato-backend.onrender.com
- Zamato Frontend: https://zamato-frontend.onrender.com
- Zamato Admin: https://zamato-admin.onrender.com

## Support
If deployment fails:
1. Check Render deployment logs
2. Verify all environment variables are set
3. Test backend connection to database
4. Ensure GitHub repo is connected properly
