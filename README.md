# LARAVEL BASED ECOMMERCE WEBSITE

This is an ecommerce website based on the laravel framework. Technologies used here are PHP, SQL and the Laravel framework.

## Prerequisites
The following have to be installed for the website to launch
- Laravel framework
- NPM (Node Package Manager)
- Swipperjs

## How to install

Clone repository:

`git clone https://github.com/Chwenki/laravelecommerce.git`

Execute the following commands:

```bash
# Navigate to main folder 
cd learnlaravel\ecommerceapp

# Install composer and npm
composer install && npm install

# Fix any remaining issues
npm audit fix --force

# Create .env file
cp .env.example .env

# Generate new application key
php artisan key:generate

# Generate database
php artisan migrate

# Launch website
composer run dev
```

The command 'npm audit fix --force' fixes issues with swipper js. No need for seperate installation.
