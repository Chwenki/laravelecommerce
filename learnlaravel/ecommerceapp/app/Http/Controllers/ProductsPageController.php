<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\HTTP;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class ProductsPageController extends Controller
{
    function get_men() {
        $products = DB::select('select * from products where Genre = ?', ['Men']);
        if (Auth::check()){
            $prodNum = DB::table('cart_products')->where('User_id', '=', Auth::id())->count();
        } else {
            $prodNum = DB::table('cart_products')->where('id', '=', '123456789')->count();
        }
        $wishlist = DB::select('select * from wishlist where user_id = ?', [Auth::id()]);
        $wishlistprod = [];
        for ($i = 0; $i < count($wishlist); $i++){
            for ($j = 0; $j < count($products); $j++){
                if ($wishlist[$i]->prod_id == $products[$j]->id){
                    $wishlistprod[] = $wishlist[$i]->prod_id;
                }
            }
        }
        return Inertia::render('productspage', ['products' => $products, 'prodNum' => $prodNum, 'wishlistprod' => $wishlistprod]);
    }
    function get_women() {
        $products = DB::select('select * from products where Genre = ?', ['Women']);
        if (Auth::check()){
            $prodNum = DB::table('cart_products')->where('User_id', '=', Auth::id())->count();
        } else {
            $prodNum = DB::table('cart_products')->where('id', '=', '123456789')->count();
        }
        return Inertia::render('productspage',  ['products' => $products, 'prodNum' => $prodNum]);
    }
    function get_kids() {
        $products = DB::select('select * from products where Genre = ?', ['Kids']);
        if (Auth::check()){
            $prodNum = DB::table('cart_products')->where('User_id', '=', Auth::id())->count();
        } else {
            $prodNum = DB::table('cart_products')->where('id', '=', '123456789')->count();
        }
        return Inertia::render('productspage',  ['products' => $products, 'prodNum' => $prodNum]);
    }
    function post_men(Request $request) {
        $products = DB::select('select * from products where Genre = ?', ['Men']);
        if (Auth::check()){
            $prodNum = DB::table('cart_products')->where('User_id', '=', Auth::id())->count();
        } else {
            $prodNum = DB::table('cart_products')->where('id', '=', '123456789')->count();
        }

        if (Auth::check()) {
            if ( $request->all()["prodLiked"] == true) {
                DB::table('wishlist')->insert(['user_id' => Auth::id(), 'prod_id' => $request->all()["prodId"]]);
            } else {
                DB::table('wishlist')->where('user_id', Auth::id())->where('prod_id', $request->all()["prodId"])->delete();
            }
        } else {
            return Inertia::render('login');
        }
        return Inertia::render('productspage',  ['products' => $products, 'prodNum' => $prodNum]);
    }
    function post_women(Request $request) {
        $products = DB::select('select * from products where Genre = ?', ['Women']);
        if (Auth::check()){
            $prodNum = DB::table('cart_products')->where('User_id', '=', Auth::id())->count();
        } else {
            $prodNum = DB::table('cart_products')->where('id', '=', '123456789')->count();
        }

        if ($request->all()["prodLiked"]) {
            DB::table('products')->where('id', $request->all()["prodId"])->update(['Liked' => false]);
        } else {
            DB::table('products')->where('id', $request->all()["prodId"])->update(['Liked' => true]);
        }
        return Inertia::render('productspage',  ['products' => $products, 'prodNum' => $prodNum]);
    }
    function post_kids(Request $request) {
        $products = DB::select('select * from products where Genre = ?', ['Kids']);
        if (Auth::check()){
            $prodNum = DB::table('cart_products')->where('User_id', '=', Auth::id())->count();
        } else {
            $prodNum = DB::table('cart_products')->where('id', '=', '123456789')->count();
        }

        if ($request->all()["prodLiked"]) {
            DB::table('products')->where('id', $request->all()["prodId"])->update(['Liked' => false]);
        } else {
            DB::table('products')->where('id', $request->all()["prodId"])->update(['Liked' => true]);
        }
        return Inertia::render('productspage',  ['products' => $products, 'prodNum' => $prodNum]);
    }
}
