<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

class WomenController extends Controller
{
    function get() {
        $products = DB::select('select * from products');
        if (Auth::check()){
            $prodNum = DB::table('cart_products')->where('User_id', '=', Auth::id())->count();
        } else {
            $prodNum = DB::table('cart_products')->where('id', '=', '123456789')->count();
        }

        return Inertia::render('women', ['products' => $products, 'prodNum' => $prodNum]);
    }
}

