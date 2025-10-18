<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\HTTP;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class CartController extends Controller
{
    function get(Request $request) {
        $token = $request->session()->all()['_token'];
        if (Auth::check()){
            $prodNum = DB::table('cart_products')->where('User_id', '=', Auth::id())->count();
            $cart_products = DB::select('select cart_products.id, cart_products.Prod_id, cart_products.User_id, products.Name, products.Type, products.Description, products.Colors, products.Genre, products.Price, products.Rating, products.Rating_no, products.Image_url, products.Thumbnails from cart_products join products on cart_products.Prod_id = products.id where cart_products.User_id = ?', [Auth::id()]);
        }else {
            $prodNum = DB::table('cart_products')->where('User_id', '=', $token)->count();
            $cart_products = DB::select('select cart_products.id, cart_products.Prod_id, cart_products.User_id, products.Name, products.Type, products.Description, products.Colors, products.Genre, products.Price, products.Rating, products.Rating_no, products.Image_url, products.Thumbnails from cart_products join products on cart_products.Prod_id = products.id where cart_products.User_id = ?', [$token]);
        }
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
