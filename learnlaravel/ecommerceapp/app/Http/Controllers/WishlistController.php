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
    function get() {
        $products = DB::select('select * from products');
        $wishlist = DB::select('select * from wishlist where user_id = ?', [Auth::id()]);
        if (Auth::check()){
            $prodNum = DB::table('cart_products')->where('User_id', '=', Auth::id())->count();
        } else {
            $prodNum = DB::table('cart_products')->where('id', '=', '123456789')->count();
        }
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
        return Inertia::render('wishlists', ['wishlistprod' => $wishlistprod, 'prodNum' => $prodNum]);
    } else {
        return Inertia::render('wishlists', ['prodNum' => $prodNum]);
    }}

}

