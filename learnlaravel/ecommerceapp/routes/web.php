<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\MenController;
use App\Http\Controllers\WomenController;
use App\Http\Controllers\KidsController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CartController;

Route::get('/', function () {
    return Inertia::render('index');
})->name('home');

Route::get('/men', [MenController::class, 'get'])->name('men.show');

Route::get('/women', [WomenController::class, 'get'])->name('women.show');

Route::get('/kids', [KidsController::class, 'get'])->name('kids.show');

Route::get('/cart', [CartController::class, 'get'])->name('cart.show');

Route::post('/cart', [CartController::class, 'post'])->name('cart.show');



Route::get('/{category}/products/{id}', [ProductController::class, 'get'])->name('products.show');

Route::post('{category}/products/{id}', [ProductController::class, 'post'])->name('prodadd');



Route::get('/', function () {
    return Inertia::render('index');
})->name('home');



Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
