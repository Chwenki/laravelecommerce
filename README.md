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

```
`# Navigate to main folder`
cd learnlaravel\ecommerceapp
composer install && npm install
npm audit fix --force
cp .env.example .env
php artisan key:generate
php artisan migrate
composer run dev
```

The command 'npm audit fix --force' fixes issues with swipper js. No need for seperate installation.
