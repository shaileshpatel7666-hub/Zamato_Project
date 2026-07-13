# Aiven Deployment Guide for Zamato

## What is Aiven?
Aiven is a managed database and data service platform. Perfect for production databases with free trial credits.

## Setup Instructions

### 1. Create Aiven Account
1. Go to https://aiven.io/
2. Sign up (free trial with credits)
3. Verify email

### 2. Create MySQL Database on Aiven

1. **Create New Service**
   - Click "Create Service" 
   - Select "MySQL" from options
   - Choose plan: **Business-4** (free credits should cover)
   - Select cloud region (closest to your users)
   - Click "Create Service"

2. **Get Connection Details**
   - Wait for service to be ready (5-10 minutes)
   - Go to "Connection Information" tab
   - Copy the following:
     - **Host**: `host-xxxxx.a.aivencloud.com`
     - **Port**: `12345` (usually 12345)
     - **Username**: `avnadmin`
     - **Password**: Copy the password
     - **Database**: `defaultdb` (or create new)

3. **Create Database (optional)**
   - Go to "Databases" tab
   - Click "Create Database"
   - Name: `zamato`
   - Character set: `utf8mb4`
   - Click "Create"

### 3. Update Environment Variables

Replace in your `.env` file or Render dashboard:

```
DB_HOST=host-xxxxx.a.aivencloud.com
DB_PORT=12345
DB_USER=avnadmin
DB_PASSWORD=your_aiven_password
DB_NAME=zamato
DB_DIALECT=mysql
```

### 4. Enable SSL/TLS (Important!)
Aiven requires SSL connection:

1. Go to "Overview" tab
2. Under "Connection" → Download CA Certificate
3. For Node.js, add to `Backend/Confiq/db.js`:

```javascript
const fs = require('fs');
const Sequelize = require('sequelize');
require('dotenv').config();

const db = new Sequelize(
  process.env.DB_NAME || 'zamato',
  process.env.DB_USER || 'avnadmin',
  process.env.DB_PASSWORD || '',
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 12345,
    dialect: 'mysql',
    logging: false,
    dialectOptions: {
      ssl: {
        ca: process.env.DB_SSL_CERT ? Buffer.from(process.env.DB_SSL_CERT) : undefined
      },
      decimalNumbers: true,
    },
  }
);

module.exports = db;
```

### 5. Deploy on Render

**Update render.yaml:**

```yaml
services:
  - type: web
    name: zamato-backend
    env: node
    plan: free
    buildCommand: cd Backend && npm install
    startCommand: cd Backend && npm start
    envVars:
      - key: DB_NAME
        value: zamato
      - key: DB_USER
        value: avnadmin
      - key: DB_HOST
        value: host-xxxxx.a.aivencloud.com
      - key: DB_PORT
        value: "12345"
      - key: DB_DIALECT
        value: mysql
      - key: PORT
        value: 8001
      - key: NODE_ENV
        value: production
      - key: DB_PASSWORD
        sync: false
      - key: RAZORPAY_KEY_ID
        sync: false
      - key: RAZORPAY_KEY_SECRET
        sync: false
      - key: JWT_SECRET
        sync: false
```

### 6. Set Render Environment Variables

In Render dashboard for Backend service, add:

```
DB_NAME=zamato
DB_USER=avnadmin
DB_HOST=host-xxxxx.a.aivencloud.com
DB_PORT=12345
DB_PASSWORD=<your_aiven_password>
DB_DIALECT=mysql
PORT=8001
NODE_ENV=production
RAZORPAY_KEY_ID=<your_key>
RAZORPAY_KEY_SECRET=<your_secret>
JWT_SECRET=<your_secret>
```

## Aiven Dashboard

- Monitor database health
- View logs and metrics
- Backup and restore
- Scale up/down as needed
- Manage backups

Dashboard: https://console.aiven.io/

## Advantages of Aiven

✅ Managed database (no maintenance)
✅ Automated backups
✅ High availability options
✅ Free trial with credits
✅ Global data centers
✅ Easy scaling
✅ Great documentation

## Pricing

- Free trial: $300 credits (usually lasts 1-2 months)
- Paid plans start from ~$20/month
- Pay-as-you-go pricing

## Testing Connection

Before deploying, test connection locally:

```bash
cd Backend
npm start
```

Check console for: "Database connected successfully"

## Troubleshooting

**Connection refused:**
- Verify host, port, username, password
- Check if Aiven service is running (green status)
- Ensure firewall allows MySQL port

**SSL error:**
- Verify dialectOptions in db.js
- Download fresh CA certificate from Aiven

**Database doesn't exist:**
- Create database in Aiven dashboard first
- Verify DB_NAME matches exactly
