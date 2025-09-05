<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\HTTP;
use Inertia\Inertia;

class CartController extends Controller
{
    function get() {
        $prodNum = DB::table('cart_products')->count();
        $cart_products = DB::select('select * from cart_products');
        $total = DB::select('select Price from cart_products');
        $totalPrice = 0;
        $i = 0;
        while ($i < $prodNum) {
            $totalPrice += $cart_products[$i]->Price; 
            $i++;
        }
        return Inertia::render('cart', ['cart_products' => $cart_products, 'prodNum' => $prodNum, 'totalPrice' => $totalPrice]);
    }
    function post(Request $request) {
        $cprodId = $request->all()["cprodId"];
        $cproduct = DB::table('cart_products')->where('id', $cprodId)->delete();
    }
}
