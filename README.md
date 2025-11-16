# E-Commerce Platform

A full-stack e-commerce application built with Laravel (backend) and React (frontend).

## 🚀 Features

- **Admin Panel**: Secure admin authentication and dashboard
- **Category Management**: Create, read, update, and delete product categories
- **Brand Management**: Manage product brands
- **Product Catalog**: Browse and shop products
- **Shopping Cart**: Add products to cart and checkout
- **Responsive Design**: Mobile-friendly user interface

## 🛠️ Tech Stack

### Backend
- **Laravel 11**: PHP framework for the REST API
- **MySQL**: Database management
- **Laravel Sanctum**: API authentication
- **RESTful API**: Clean API architecture

### Frontend
- **React 18**: Modern UI library
- **Vite**: Fast build tool and dev server
- **React Router**: Client-side routing
- **Axios**: HTTP client for API requests
- **SCSS**: Styling with Sass

## 📋 Prerequisites

- PHP >= 8.2
- Composer
- Node.js >= 18
- MySQL
- Git

## 🔧 Installation

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install PHP dependencies:
```bash
composer install
```

3. Create environment file:
```bash
cp .env.example .env
```

4. Generate application key:
```bash
php artisan key:generate
```

5. Configure your database in `.env`:
```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=your_database_name
DB_USERNAME=your_username
DB_PASSWORD=your_password
```

6. Run migrations:
```bash
php artisan migrate
```

7. Start the Laravel development server:
```bash
php artisan serve
```

The backend API will be available at `http://localhost:8000`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install Node dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env
```

4. Configure API URL in `.env`:
```env
VITE_API_URL=http://localhost:8000/api
```

5. Start the development server:
```bash
npm run dev
```

The frontend will be available at `http://localhost:5173`

## 📁 Project Structure

```
e-commerce/
├── backend/                 # Laravel backend
│   ├── app/
│   │   ├── Http/
│   │   │   └── Controllers/
│   │   │       └── Admin/   # Admin controllers
│   │   ├── Models/          # Eloquent models
│   │   └── Traits/          # Reusable traits
│   ├── database/
│   │   └── migrations/      # Database migrations
│   └── routes/
│       └── api.php          # API routes
│
└── frontend/                # React frontend
    ├── src/
    │   ├── components/
    │   │   ├── admin/       # Admin components
    │   │   ├── Cart/        # Shopping cart
    │   │   ├── common/      # Shared components
    │   │   ├── context/     # React context
    │   │   ├── Layouts/     # Layout components
    │   │   ├── Main/        # Main pages
    │   │   └── Products/    # Product components
    │   └── assets/          # Static assets
    └── public/              # Public files
```

## 🔑 API Endpoints

### Authentication
- `POST /api/admin/login` - Admin login
- `POST /api/admin/logout` - Admin logout

### Categories
- `GET /api/categories` - Get all categories
- `POST /api/categories` - Create category (Admin)
- `PUT /api/categories/{id}` - Update category (Admin)
- `DELETE /api/categories/{id}` - Delete category (Admin)

### Brands
- `GET /api/brands` - Get all brands
- `POST /api/brands` - Create brand (Admin)
- `PUT /api/brands/{id}` - Update brand (Admin)
- `DELETE /api/brands/{id}` - Delete brand (Admin)

## 🧪 Testing

### Backend Tests
```bash
cd backend
php artisan test
```

### Frontend Tests
```bash
cd frontend
npm run test
```

## 🚀 Deployment

### Backend Deployment
1. Set `APP_ENV=production` in `.env`
2. Run `composer install --optimize-autoloader --no-dev`
3. Run `php artisan config:cache`
4. Run `php artisan route:cache`
5. Run `php artisan view:cache`

### Frontend Deployment
1. Build the production bundle:
```bash
npm run build
```
2. Deploy the `dist/` folder to your hosting service

## 📝 License

This project is open-source and available under the MIT License.

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

For any inquiries, please reach out to the project maintainer.

---

**Note**: This is a development project. Make sure to properly configure security settings before deploying to production.
