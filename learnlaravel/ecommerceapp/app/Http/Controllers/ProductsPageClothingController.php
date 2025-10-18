<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\HTTP;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ProductsPageClothingController extends Controller
{
    function get_men() {
        $products = DB::select('select * from products where Genre = ? and Type = ?', ['Men', 'Clothing']);
        if (Auth::check()){
            $prodNum = DB::table('cart_products')->where('User_id', '=', Auth::id())->count();
        } else {
            $prodNum = DB::table('cart_products')->where('id', '=', '123456789')->count();
        }
        return Inertia::render('productspage',  ['products' => $products, 'prodNum' => $prodNum]);
    }
    function get_women() {
        $products = DB::select('select * from products where Genre = ? and Type = ?', ['Women', 'Clothing']);
        if (Auth::check()){
            $prodNum = DB::table('cart_products')->where('User_id', '=', Auth::id())->count();
        } else {
            $prodNum = DB::table('cart_products')->where('id', '=', '123456789')->count();
        }
        return Inertia::render('productspage',  ['products' => $products, 'prodNum' => $prodNum]);
    }
    function get_kids() {
        $products = DB::select('select * from products where Genre = ? and Type = ?', ['Kids', 'Clothing']);
        if (Auth::check()){
            $prodNum = DB::table('cart_products')->where('User_id', '=', Auth::id())->count();
        } else {
            $prodNum = DB::table('cart_products')->where('id', '=', '123456789')->count();
        }
        return Inertia::render('productspage',  ['products' => $products, 'prodNum' => $prodNum]);
    }
    function post_men(Request $request) {
        $products = DB::select('select * from products where Genre = ? and Type = ?', ['Men', 'Clothing']);
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
    function post_women(Request $request) {
        $products = DB::select('select * from products where Genre = ? and Type = ?', ['Women', 'Clothing']);
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
        $products = DB::select('select * from products where Genre = ? and Type = ?', ['Kids', 'Clothing']);
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
