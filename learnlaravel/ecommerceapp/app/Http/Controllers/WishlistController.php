<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rules;
use App\Models\User;
use Illuminate\Support\Facades\Hash;


class WishlistController extends Controller
{
    function get(Request $request) {
        $token = $request->session()->all()['_token'];
        $products = DB::select('select * from products');
        $wishlist = DB::select('select * from wishlist where user_id = ?', [Auth::id()]);
        if (Auth::check()){
            $cartProd = count(DB::select('select cart_products.id, cart_products.Prod_id, cart_products.User_id, products.Name, products.Type, products.Description, products.Colors, products.Genre, products.Price, products.Rating, products.Rating_no, products.Image_url, products.Thumbnails from cart_products join products on cart_products.Prod_id = products.id where cart_products.User_id = ?', [Auth::id()]));
        } else {
            $cartProd = count(DB::select('select cart_products.id, cart_products.Prod_id, cart_products.User_id, products.Name, products.Type, products.Description, products.Colors, products.Genre, products.Price, products.Rating, products.Rating_no, products.Image_url, products.Thumbnails from cart_products join products on cart_products.Prod_id = products.id where cart_products.User_id = ?', [$token]));        }
        if ($wishlist){
        $wishlistp = [];
        for ($i = 0; $i < count($wishlist); $i++){
            for ($j = 0; $j < count($products); $j++){
                if ($wishlist[$i]->prod_id == $products[$j]->id){
                    $wishlistp[] = $wishlist[$i]->prod_id;
                }
            }
        }
        for ($i = 0; $i < count($wishlistp); $i++){
            $wishlistprod[] = DB::select('select * from products where id = ?', [$wishlistp[$i]]);
        }
        return Inertia::render('wishlists', ['wishlistprod' => $wishlistprod, 'cartProd' => $cartProd]);
    } else {
        return Inertia::render('wishlists', ['cartProd' => $cartProd]);
    }}

}

