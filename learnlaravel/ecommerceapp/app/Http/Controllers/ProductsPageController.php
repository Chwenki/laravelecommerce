<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\HTTP;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class ProductsPageController extends Controller
{
    function get_men(Request $request) {
        $token = $request->session()->all()['_token'];
        $products = DB::select('select * from products where Genre = ?', ['Men']);
        if (Auth::check()){
            $cartProd = count(DB::select('select cart_products.id, cart_products.Prod_id, cart_products.User_id, products.Name, products.Type, products.Description, products.Colors, products.Genre, products.Price, products.Rating, products.Rating_no, products.Image_url, products.Thumbnails from cart_products join products on cart_products.Prod_id = products.id where cart_products.User_id = ?', [Auth::id()]));
        } else {
            $cartProd = count(DB::select('select cart_products.id, cart_products.Prod_id, cart_products.User_id, products.Name, products.Type, products.Description, products.Colors, products.Genre, products.Price, products.Rating, products.Rating_no, products.Image_url, products.Thumbnails from cart_products join products on cart_products.Prod_id = products.id where cart_products.User_id = ?', [$token]));        }
        $wishlist = DB::select('select * from wishlist where user_id = ?', [Auth::id()]);
        $wishlistprod = [];
        for ($i = 0; $i < count($wishlist); $i++){
            for ($j = 0; $j < count($products); $j++){
                if ($wishlist[$i]->prod_id == $products[$j]->id){
                    $wishlistprod[] = $wishlist[$i]->prod_id;
                }
            }
        }
        return Inertia::render('productspage', ['products' => $products, 'cartProd' => $cartProd, 'wishlistprod' => $wishlistprod]);
    }
    function get_women(Request $request) {
        $token = $request->session()->all()['_token'];
        $products = DB::select('select * from products where Genre = ?', ['Women']);
        if (Auth::check()){
            $cartProd = count(DB::select('select cart_products.id, cart_products.Prod_id, cart_products.User_id, products.Name, products.Type, products.Description, products.Colors, products.Genre, products.Price, products.Rating, products.Rating_no, products.Image_url, products.Thumbnails from cart_products join products on cart_products.Prod_id = products.id where cart_products.User_id = ?', [Auth::id()]));
        } else {
            $cartProd = count(DB::select('select cart_products.id, cart_products.Prod_id, cart_products.User_id, products.Name, products.Type, products.Description, products.Colors, products.Genre, products.Price, products.Rating, products.Rating_no, products.Image_url, products.Thumbnails from cart_products join products on cart_products.Prod_id = products.id where cart_products.User_id = ?', [$token]));        }
        return Inertia::render('productspage',  ['products' => $products, 'cartProd' => $cartProd]);
    }
    function get_kids(Request $request) {
        $token = $request->session()->all()['_token'];
        $products = DB::select('select * from products where Genre = ?', ['Kids']);
        if (Auth::check()){
            $cartProd = count(DB::select('select cart_products.id, cart_products.Prod_id, cart_products.User_id, products.Name, products.Type, products.Description, products.Colors, products.Genre, products.Price, products.Rating, products.Rating_no, products.Image_url, products.Thumbnails from cart_products join products on cart_products.Prod_id = products.id where cart_products.User_id = ?', [Auth::id()]));
        } else {
            $cartProd = count(DB::select('select cart_products.id, cart_products.Prod_id, cart_products.User_id, products.Name, products.Type, products.Description, products.Colors, products.Genre, products.Price, products.Rating, products.Rating_no, products.Image_url, products.Thumbnails from cart_products join products on cart_products.Prod_id = products.id where cart_products.User_id = ?', [$token]));        }
        return Inertia::render('productspage',  ['products' => $products, 'cartProd' => $cartProd]);
    }
    function post_men(Request $request) {
        $token = $request->session()->all()['_token'];
        $products = DB::select('select * from products where Genre = ?', ['Men']);
        if (Auth::check()){
            $cartProd = count(DB::select('select cart_products.id, cart_products.Prod_id, cart_products.User_id, products.Name, products.Type, products.Description, products.Colors, products.Genre, products.Price, products.Rating, products.Rating_no, products.Image_url, products.Thumbnails from cart_products join products on cart_products.Prod_id = products.id where cart_products.User_id = ?', [Auth::id()]));
        } else {
            $cartProd = count(DB::select('select cart_products.id, cart_products.Prod_id, cart_products.User_id, products.Name, products.Type, products.Description, products.Colors, products.Genre, products.Price, products.Rating, products.Rating_no, products.Image_url, products.Thumbnails from cart_products join products on cart_products.Prod_id = products.id where cart_products.User_id = ?', [$token]));        }

        if (Auth::check()) {
            if ( $request->all()["prodLiked"] == true) {
                DB::table('wishlist')->insert(['user_id' => Auth::id(), 'prod_id' => $request->all()["prodId"]]);
            } else {
                DB::table('wishlist')->where('user_id', Auth::id())->where('prod_id', $request->all()["prodId"])->delete();
            }
        } else {
            return Inertia::render('login');
        }
        return Inertia::render('productspage',  ['products' => $products, 'cartProd' => $cartProd]);
    }
    function post_women(Request $request) {
        $token = $request->session()->all()['_token'];
        $products = DB::select('select * from products where Genre = ?', ['Women']);
        if (Auth::check()){
            $cartProd = count(DB::select('select cart_products.id, cart_products.Prod_id, cart_products.User_id, products.Name, products.Type, products.Description, products.Colors, products.Genre, products.Price, products.Rating, products.Rating_no, products.Image_url, products.Thumbnails from cart_products join products on cart_products.Prod_id = products.id where cart_products.User_id = ?', [Auth::id()]));
        } else {
            $cartProd = count(DB::select('select cart_products.id, cart_products.Prod_id, cart_products.User_id, products.Name, products.Type, products.Description, products.Colors, products.Genre, products.Price, products.Rating, products.Rating_no, products.Image_url, products.Thumbnails from cart_products join products on cart_products.Prod_id = products.id where cart_products.User_id = ?', [$token]));        }

        if ($request->all()["prodLiked"]) {
            DB::table('products')->where('id', $request->all()["prodId"])->update(['Liked' => false]);
        } else {
            DB::table('products')->where('id', $request->all()["prodId"])->update(['Liked' => true]);
        }
        return Inertia::render('productspage',  ['products' => $products, 'cartProd' => $cartProd]);
    }
    function post_kids(Request $request) {
        $token = $request->session()->all()['_token'];
        $products = DB::select('select * from products where Genre = ?', ['Kids']);
        if (Auth::check()){
            $cartProd = count(DB::select('select cart_products.id, cart_products.Prod_id, cart_products.User_id, products.Name, products.Type, products.Description, products.Colors, products.Genre, products.Price, products.Rating, products.Rating_no, products.Image_url, products.Thumbnails from cart_products join products on cart_products.Prod_id = products.id where cart_products.User_id = ?', [Auth::id()]));
        } else {
            $cartProd = count(DB::select('select cart_products.id, cart_products.Prod_id, cart_products.User_id, products.Name, products.Type, products.Description, products.Colors, products.Genre, products.Price, products.Rating, products.Rating_no, products.Image_url, products.Thumbnails from cart_products join products on cart_products.Prod_id = products.id where cart_products.User_id = ?', [$token]));        }

        if ($request->all()["prodLiked"]) {
            DB::table('products')->where('id', $request->all()["prodId"])->update(['Liked' => false]);
        } else {
            DB::table('products')->where('id', $request->all()["prodId"])->update(['Liked' => true]);
        }
        return Inertia::render('productspage',  ['products' => $products, 'cartProd' => $cartProd]);
    }
}
