<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class MenController extends Controller
{
    function get(Request $request) {
        $token = $request->session()->all()['_token'];
        $products = DB::select('select * from products where Genre = ?', ['Men']);
        $wishlist = DB::select('select * from wishlist where user_id = ?', [Auth::id()]);
        $wishlistprod = [];
        for ($i = 0; $i < count($wishlist); $i++){
            for ($j = 0; $j < count($products); $j++){
                if ($wishlist[$i]->prod_id == $products[$j]->id){
                    $wishlistprod[] = $wishlist[$i]->prod_id;
                }
            }
        }
        if (Auth::check()){
            $cartProd = count(DB::select('select cart_products.id, cart_products.Prod_id, cart_products.User_id, products.Name, products.Type, products.Description, products.Colors, products.Genre, products.Price, products.Rating, products.Rating_no, products.Image_url, products.Thumbnails from cart_products join products on cart_products.Prod_id = products.id where cart_products.User_id = ?', [Auth::id()]));
        } else {
            $prodNum = DB::table('cart_products')->where('id', '=', $token)->count();
        }
        return Inertia::render('men', ['products' => $products,'cartProd' => $cartProd, 'wishlistprod' => $wishlistprod]);
    }
    function post(Request $request) {
        $modal = false;
        $token = $request->session()->all()['_token'];
        $products = DB::select('select * from products where Genre = ?', ['Men']);
        if (Auth::check()){
            $cartProd = count(DB::select('select cart_products.id, cart_products.Prod_id, cart_products.User_id, products.Name, products.Type, products.Description, products.Colors, products.Genre, products.Price, products.Rating, products.Rating_no, products.Image_url, products.Thumbnails from cart_products join products on cart_products.Prod_id = products.id where cart_products.User_id = ?', [Auth::id()]));
        } else {
            $prodNum = DB::table('cart_products')->where('id', '=', $token)->count();
        }

        if (Auth::check()) {
            if ( $request->all()["prodLiked"] == true) {
                DB::table('wishlist')->insert(['user_id' => Auth::id(), 'prod_id' => $request->all()["prodId"]]);
            } else {
                DB::table('wishlist')->where('user_id', Auth::id())->where('prod_id', $request->all()["prodId"])->delete();
            }
        } else {
            return $modal = true;
        }
        return Inertia::render('men',  ['products' => $products, 'cartProd' => $cartProd, 'modal' => $modal]);
    }
}
