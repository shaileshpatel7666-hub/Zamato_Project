# Zamato - Food Delivery Platform

A full-stack food delivery application built with React, Node.js, Express, and MySQL.

## Project Structure

- **Backend**: Node.js + Express API server
- **project**: React + Vite frontend (customer app)
- **admin-ace**: React + TanStack Router admin dashboard

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- MySQL database server

## Setup Instructions

### 1. Backend Setup

```bash
cd Backend
npm install
cp .env.example .env
# Edit .env with your database credentials
npm start
```

The backend will run on `http://localhost:8001`

### 2. Frontend Setup (Customer App)

```bash
cd project
npm install
npm run dev
```

The frontend will run on `http://localhost:5173`

### 3. Admin Dashboard Setup

```bash
cd admin-ace
npm install
npm run dev
```

### Database Setup

1. Create a MySQL database named `zamato`
2. Update your `.env` file in Backend with database credentials
3. Tables will auto-sync on server start

## Environment Variables

### Backend (.env)
- `DB_NAME`: Database name
- `DB_USER`: Database user
- `DB_PASSWORD`: Database password
- `DB_HOST`: Database host
- `PORT`: Server port (default: 8001)
- `RAZORPAY_KEY_ID`: Razorpay API key
- `RAZORPAY_KEY_SECRET`: Razorpay API secret
- `JWT_SECRET`: JWT signing secret

### Frontend (.env)
- `VITE_API_URL`: Backend API URL (default: http://localhost:8001/api)
- `VITE_APP_NAME`: Application name

## Available Scripts

### Backend
- `npm start` - Start the server

### Frontend (project)
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

### Admin Dashboard (admin-ace)
- `npm run dev` - Start development server
- `npm run build` - Build for production

## API Routes

### Users
- `POST /api/users/register` - Register new user
- `POST /api/users/login` - User login
- `GET /api/users/:id` - Get user profile

### Products
- `GET /api/products` - Get all products
- `POST /api/products` - Create product (vendor)
- `PUT /api/products/:id` - Update product

### Categories
- `GET /api/categories` - Get all categories
- `POST /api/categories` - Create category

### Orders
- `GET /api/orders` - Get user orders
- `POST /api/orders` - Create order
- `PUT /api/orders/:id` - Update order status

### Vendors
- `POST /api/vendors/register` - Register vendor
- `GET /api/vendors` - Get vendors

## Technologies Used

### Frontend
- React 18
- Vite
- React Router DOM
- Tailwind CSS
- TypeScript

### Backend
- Express.js
- Sequelize ORM
- MySQL2
- JWT Authentication
- Multer (file upload)
- Razorpay (payments)

## Contributing

1. Create a feature branch
2. Make your changes
3. Submit a pull request

## License

ISC
