<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Http\Requests\Auth\LoginRequest;


class HomeController extends Controller
{
    function get(Request $request) {
        $token = $request->session()->all()['_token'];

        if (Auth::check()){
            $prodNum = DB::table('cart_products')->where('User_id', '=', Auth::id())->count();
            $cart_products = DB::select('select cart_products.id, cart_products.Prod_id, cart_products.User_id, products.Name, products.Type, products.Description, products.Colors, products.Genre, products.Price, products.Rating, products.Rating_no, products.Image_url, products.Thumbnails from cart_products join products on cart_products.Prod_id = products.id where cart_products.User_id = ?', [Auth::id()]);
        } else {
            $prodNum = DB::table('cart_products')->where('id', '=', '123456789')->count();
            $cart_products = DB::select('select cart_products.id, cart_products.Prod_id, cart_products.User_id, products.Name, products.Type, products.Description, products.Colors, products.Genre, products.Price, products.Rating, products.Rating_no, products.Image_url, products.Thumbnails from cart_products join products on cart_products.Prod_id = products.id where cart_products.User_id = ?', [$token]);
        }
        if ($cart_products){
        return Inertia::render('index', ['cart_products' => $cart_products, 'prodNum' => $prodNum]);

        } else {
        return Inertia::render('index', ['prodNum' => $prodNum]);

        }
    }
    public function post(LoginRequest $request) {
        $request->authenticate();

        $request->session()->regenerate();

        return redirect()->intended(route('men.show'));
    }
}
