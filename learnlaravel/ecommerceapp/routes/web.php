<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\MenController;
use App\Http\Controllers\WomenController;
use App\Http\Controllers\KidsController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\ProductsPageController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProductsPageShoesController;
use App\Http\Controllers\ProductsPageClothingController;
use App\Http\Controllers\ProductsPageAccessoriesController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\WishlistController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\SubscribeController;
use Laravel\Socialite\Facades\Socialite;
use App\Http\Controllers\GoogleRedirectController;
use App\Http\Controllers\GoogleCallbackController;
use App\Http\Controllers\AccountController;

use Illuminate\Support\Facades\Auth;
use App\Models\User;
// use Illuminate\Http\Request;

Route::post('/account', [AccountController::class, 'destroy'])->name('logout');
Route::get('/account', [AccountController::class, 'get'])->name('acccount');

Route::post('/subscribe', [SubscribeController::class, 'post'])->name('prodadd');


Route::get('/auth/redirect', [GoogleRedirectController::class, 'get'])->name('googleredirect.get');
Route::get('/auth/callback', [GoogleCallbackController::class, 'get'])->name('googlecallback.get');

Route::get('/', [HomeController::class, 'get'])->name('home.get');
Route::post('/', [HomeController::class, 'post'])->name('home.post');

Route::post('/login', [LoginController::class, 'post'])->name('login');
Route::post('/register', [RegisterController::class, 'post'])->name('register');

Route::get('/wishlists', [WishlistController::class, 'get'])->name('wishlist');
Route::post('/wishlists', [WishlistController::class, 'post'])->name('wishlist');

Route::get('/men', [MenController::class, 'get'])->name('men.show');
Route::post('/men', [MenController::class, 'post'])->name('men.show');

Route::get('/women', [WomenController::class, 'get'])->name('women.show');

Route::get('/kids', [KidsController::class, 'get'])->name('kids.show');

Route::get('/cart', [CartController::class, 'get'])->name('cart.show');

Route::post('/cart', [CartController::class, 'post'])->name('cart.show');

Route::get('/men-sale', [ProductsPageController::class, 'get_men'])->name('sale.show');
Route::get('/women-sale', [ProductsPageController::class, 'get_women'])->name('sale.show');
Route::get('/kids-sale', [ProductsPageController::class, 'get_kids'])->name('sale.show');

Route::post('/men-sale', [ProductsPageController::class, 'post_men'])->name('sale.show');
Route::post('/women-sale', [ProductsPageController::class, 'post_women'])->name('sale.show');
Route::post('/kids-sale', [ProductsPageController::class, 'post_kids'])->name('sale.show');

Route::get('/men-shoes', [ProductsPageShoesController::class, 'get_men'])->name('saleshoes.show');
Route::get('/women-shoes', [ProductsPageShoesController::class, 'get_women'])->name('saleshoes.show');
Route::get('/kids-shoes', [ProductsPageShoesController::class, 'get_kids'])->name('saleshoes.show');

Route::post('/men-shoes', [ProductsPageShoesController::class, 'post_men'])->name('saleshoes.show');
Route::post('/women-shoes', [ProductsPageShoesController::class, 'post_women'])->name('saleshoes.show');
Route::post('/kids-shoes', [ProductsPageShoesController::class, 'post_kids'])->name('saleshoes.show');

Route::get('/men-clothing', [ProductsPageClothingController::class, 'get_men'])->name('saleclothing.show');
Route::get('/women-clothing', [ProductsPageClothingController::class, 'get_women'])->name('saleclothing.show');
Route::get('/kids-clothing', [ProductsPageClothingController::class, 'get_kids'])->name('saleclothing.show');

Route::post('/men-clothing', [ProductsPageClothingController::class, 'post_men'])->name('saleclothing.show');
Route::post('/women-clothing', [ProductsPageClothingController::class, 'post_women'])->name('saleclothing.show');
Route::post('/kids-clothing', [ProductsPageClothingController::class, 'post_kids'])->name('saleclothing.show');

Route::get('/men-accessories', [ProductsPageAccessoriesController::class, 'get_men'])->name('saleaccessories.show');
Route::get('/women-accessories', [ProductsPageAccessoriesController::class, 'get_women'])->name('saleaccessories.show');
Route::get('/kids-accessories', [ProductsPageAccessoriesController::class, 'get_kids'])->name('saleaccessories.show');

Route::post('/men-accessories', [ProductsPageAccessoriesController::class, 'post_men'])->name('saleaccessories.show');
Route::post('/women-accessories', [ProductsPageAccessoriesController::class, 'post_women'])->name('saleaccessories.show');
Route::post('/kids-accessories', [ProductsPageAccessoriesController::class, 'post_kids'])->name('saleaccessories.show');

Route::get('/products/{productName}', [ProductController::class, 'get'])->name('products.show');

Route::post('/products/{productName}', [ProductController::class, 'post'])->name('prodadd');



Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
