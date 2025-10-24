<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\HTTP;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ProductController extends Controller
{
    function get(Request $request, $productName) {
        $token = $request->session()->all()['_token'];
        $productName = str_replace("-", " ", $productName);
        $i = strlen($productName) - 1;
        while ($i > -1){
            if ($productName[$i] == " "):
                $productName[$i+1] = strtoupper($productName[$i+1]);
                $i--;
            else:
                $i--;  
            endif;}
        $productName = ucfirst($productName);
        if (str_contains($productName, 'T Shirt')) {
            $productName = str_replace("T Shirt", "T-shirt", $productName);
        }
        $product = DB::table('products')->where('Name', $productName)->first();
        $thumbs = DB::table('products')->where('Name', $productName)->value('Thumbnails');
        $thumbnails = explode(',', $thumbs);
        if (Auth::check()){
            $cartProd = count(DB::select('select cart_products.id, cart_products.Prod_id, cart_products.User_id, products.Name, products.Type, products.Description, products.Colors, products.Genre, products.Price, products.Rating, products.Rating_no, products.Image_url, products.Thumbnails from cart_products join products on cart_products.Prod_id = products.id where cart_products.User_id = ?', [Auth::id()]));
        } else {
            $prodNum = DB::table('cart_products')->where('id', '=', $token)->count();
        }
        if (!$product){
            return response()->view('notfound', ['Error'], 404);
        } else {
            return Inertia::render('product', ['product' => $product, 'thumbnails' => $thumbnails, 'cartProd' => $cartProd]);  
        }
    }

    function post(Request $request) {
        $token = $request->session()->all()['_token'];
        $prodId = $request->all()["prodId"];
        $product = DB::table('products')->where('id', $prodId)->first();
        $thumbs = DB::table('products')->where('id', $prodId)->value('Thumbnails');
        $thumbnails = explode(',', $thumbs);
        if (Auth::check()){ 
            DB::table('cart_products')->insert([
                'Prod_id' => $prodId,
                'User_id' => Auth::id(),
            ]);
        } else {
            DB::table('cart_products')->insert([
                'Prod_id' => $prodId,
                'User_id' => $token,
            ]);
        }
        
        if (Auth::check()){
            $cartProd = count(DB::select('select cart_products.id, cart_products.Prod_id, cart_products.User_id, products.Name, products.Type, products.Description, products.Colors, products.Genre, products.Price, products.Rating, products.Rating_no, products.Image_url, products.Thumbnails from cart_products join products on cart_products.Prod_id = products.id where cart_products.User_id = ?', [Auth::id()]));
        } else {
            $prodNum = DB::table('cart_products')->where('id', '=', $token)->count();
        }

        return Inertia::render('product', ['product' => $product, 'thumbnails' => $thumbnails, 'cartProd' => $cartProd]);
    }
}
