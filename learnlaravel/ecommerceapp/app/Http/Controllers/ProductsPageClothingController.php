<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\HTTP;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ProductsPageClothingController extends Controller
{
    function get_men(Request $request) {
        $token = $request->session()->all()['_token'];
        $products = DB::select('select * from products where Genre = ? and Type = ?', ['Men', 'Clothing']);
        if (Auth::check()){
            $cartProd = count(DB::select('select cart_products.id, cart_products.Prod_id, cart_products.User_id, products.Name, products.Type, products.Description, products.Colors, products.Genre, products.Price, products.Rating, products.Rating_no, products.Image_url, products.Thumbnails from cart_products join products on cart_products.Prod_id = products.id where cart_products.User_id = ?', [Auth::id()]));
        } else {
            $cartProd = count(DB::select('select cart_products.id, cart_products.Prod_id, cart_products.User_id, products.Name, products.Type, products.Description, products.Colors, products.Genre, products.Price, products.Rating, products.Rating_no, products.Image_url, products.Thumbnails from cart_products join products on cart_products.Prod_id = products.id where cart_products.User_id = ?', [$token]));        }
        return Inertia::render('productspage',  ['products' => $products, 'cartProd' => $cartProd]);
    }
    function get_women(Request $request) {
        $token = $request->session()->all()['_token'];
        $products = DB::select('select * from products where Genre = ? and Type = ?', ['Women', 'Clothing']);
        if (Auth::check()){
            $cartProd = count(DB::select('select cart_products.id, cart_products.Prod_id, cart_products.User_id, products.Name, products.Type, products.Description, products.Colors, products.Genre, products.Price, products.Rating, products.Rating_no, products.Image_url, products.Thumbnails from cart_products join products on cart_products.Prod_id = products.id where cart_products.User_id = ?', [Auth::id()]));
        } else {
            $cartProd = count(DB::select('select cart_products.id, cart_products.Prod_id, cart_products.User_id, products.Name, products.Type, products.Description, products.Colors, products.Genre, products.Price, products.Rating, products.Rating_no, products.Image_url, products.Thumbnails from cart_products join products on cart_products.Prod_id = products.id where cart_products.User_id = ?', [$token]));        }
        return Inertia::render('productspage',  ['products' => $products, 'cartProd' => $cartProd]);
    }
    function get_kids(Request $request) {
        $token = $request->session()->all()['_token'];
        $products = DB::select('select * from products where Genre = ? and Type = ?', ['Kids', 'Clothing']);
        if (Auth::check()){
            $cartProd = count(DB::select('select cart_products.id, cart_products.Prod_id, cart_products.User_id, products.Name, products.Type, products.Description, products.Colors, products.Genre, products.Price, products.Rating, products.Rating_no, products.Image_url, products.Thumbnails from cart_products join products on cart_products.Prod_id = products.id where cart_products.User_id = ?', [Auth::id()]));
        } else {
            $cartProd = count(DB::select('select cart_products.id, cart_products.Prod_id, cart_products.User_id, products.Name, products.Type, products.Description, products.Colors, products.Genre, products.Price, products.Rating, products.Rating_no, products.Image_url, products.Thumbnails from cart_products join products on cart_products.Prod_id = products.id where cart_products.User_id = ?', [$token]));        }
        return Inertia::render('productspage',  ['products' => $products, 'cartProd' => $cartProd]);
    }
    function post_men(Request $request) {
        $token = $request->session()->all()['_token'];
        $products = DB::select('select * from products where Genre = ? and Type = ?', ['Men', 'Clothing']);
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
    function post_women(Request $request) {
        $token = $request->session()->all()['_token'];
        $products = DB::select('select * from products where Genre = ? and Type = ?', ['Women', 'Clothing']);
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
        $products = DB::select('select * from products where Genre = ? and Type = ?', ['Kids', 'Clothing']);
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
