<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class KidsController extends Controller
{
    function get() {
        $products = DB::select('select * from products');
        $prodNum = DB::table('cart_products')->count();
        return Inertia::render('kids', ['products' => $products, 'prodNum' => $prodNum]);
    }
}
