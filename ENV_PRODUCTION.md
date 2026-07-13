# Production Environment Variables

Use these in Render dashboard or your hosting provider.

## Backend Environment Variables (Aiven)

```
DB_NAME=defaultdb
DB_USER=avnadmin
DB_PASSWORD=AVNS_CZBFYIqLb4Y9w9dXDOH
DB_HOST=zamato-shaileshpatel7666-b62d.h.aivencloud.com
DB_PORT=25237
DB_DIALECT=mysql
DB_SSL=true

PORT=8001
NODE_ENV=production

RAZORPAY_KEY_ID=<your_razorpay_key>
RAZORPAY_KEY_SECRET=<your_razorpay_secret>
RAZORPAY_MODE=live
RAZORPAY_ENABLED=true

JWT_SECRET=<your_secure_jwt_secret>

MAX_FILE_SIZE=10mb
UPLOAD_DIR=uploads
```

## Frontend Environment Variables

```
VITE_API_URL=https://zamato-backend.onrender.com/api
VITE_APP_NAME=Zamato
```

## Admin Dashboard Environment Variables

```
VITE_API_URL=https://zamato-backend.onrender.com/api
VITE_APP_NAME=Zamato Admin
VITE_AUTH_REQUIRED=true
```

## Important Security Notes

1. **Never commit sensitive values** - Use Render's secret manager
2. **Use strong JWT_SECRET** - Generate with: `openssl rand -base64 32`
3. **Enable HTTPS** - Render provides free HTTPS
4. **Add CORS headers** - Update Backend/Server.js for production domains
5. **Use PlanetScale for MySQL** - Free tier with 5GB storage
