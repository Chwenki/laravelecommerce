<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\DB;

class WomenController extends Controller
{
    function get() {
        $products = DB::select('select * from products');
        $prodNum = DB::table('cart_products')->count();
        return Inertia::render('women', ['products' => $products, 'prodNum' => $prodNum]);
    }
}

