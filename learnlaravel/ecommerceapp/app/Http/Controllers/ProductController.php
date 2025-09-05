<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\HTTP;
use Inertia\Inertia;

class ProductController extends Controller
{
    function get($category, $id) {
        // $url = "https://dummyjson.com/products/" . $id;
        // $response = HTTP::get($url)->throw();
        // $product = $response->json();
        $product = DB::table('products')->where('id', $id)->first();
        $thumbs = DB::table('products')->where('id', $id)->value('Thumbnails');
        $thumbnails = explode(',', $thumbs);
        $prodNum = DB::table('cart_products')->count();
        
        return Inertia::render('product', ['product' => $product, 'thumbnails' => $thumbnails, 'prodNum' => $prodNum]);
    }

    function post(Request $request) {
        $prodId = $request->all()["prodId"];
        $product = DB::table('products')->where('id', $prodId)->first();
        $thumbs = DB::table('products')->where('id', $prodId)->value('Thumbnails');
        $thumbnails = explode(',', $thumbs);
        DB::table('cart_products')->insert([
            'Id' => $product->Id,
            'Name' => $product->Name,
            'Type' => $product->Type,
            'Description' => $product->Description,
            'Colors' => $product->Colors,
            'Price' => $product->Price,
            'Image_url' => $product->Image_url,
        ]);
        $prodNum = DB::table('cart_products')->count();
        return Inertia::render('product', ['product' => $product, 'thumbnails' => $thumbnails, 'prodNum' => $prodNum]);
    }
}
