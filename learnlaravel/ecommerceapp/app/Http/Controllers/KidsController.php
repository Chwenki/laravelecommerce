<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class KidsController extends Controller
{
    function get() {
        $products = DB::select('select * from products');
        if (Auth::check()){
            $prodNum = DB::table('cart_products')->where('User_id', '=', Auth::id())->count();
        } else {
            $prodNum = DB::table('cart_products')->where('id', '=', '123456789')->count();
        }
        return Inertia::render('kids', ['products' => $products, 'prodNum' => $prodNum]);
    }
}
