<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        DB::table('products')->insert([
            'Name' => 'Adiddas Shoes A',
            'Type' => "Shoes",
            'Description' => "Experience the pinnacle of performance and comfort with the new adidas Ultraboost 25. Engineered to elevate every run, this shoe seamlessly blends cutting-edge technology with a sleek, modern design. Whether you're a seasoned marathoner or just starting your fitness journey, the Ultraboost 25 is designed to support you every step of the way.",
            'Colors' => 5,
            'Genre' => "Men",
            'Price' => 15000,
            'Rating' => 0,
            'Rating_no' => 0,
            'Image_url' => "/products/shoes1.png",
            'Thumbnails' => "/products/shoes2.png,/products/shoes2.png,/products/shoes1.png,/products/shoes2.png",
            'Liked' => true,
        ]);
        DB::table('products')->insert([
            'Name' => 'Adiddas Shoes B',
            'Type' => "Shoes",
            'Description' => "Experience the pinnacle of performance and comfort with the new adidas Ultraboost 25. Engineered to elevate every run, this shoe seamlessly blends cutting-edge technology with a sleek, modern design. Whether you're a seasoned marathoner or just starting your fitness journey, the Ultraboost 25 is designed to support you every step of the way.",
            'Colors' => 5,
            'Genre' => "Men",
            'Price' => 15000,
            'Rating' => 0,
            'Rating_no' => 0,
            'Image_url' => "/products/shoes1.png",
            'Thumbnails' => "/products/shoes2.png,/products/shoes2.png,/products/shoes1.png,/products/shoes2.png",
            'Liked' => true,
        ]);
        DB::table('products')->insert([
            'Name' => 'Adiddas Shoes C',
            'Type' => "Shoes",
            'Description' => "Experience the pinnacle of performance and comfort with the new adidas Ultraboost 25. Engineered to elevate every run, this shoe seamlessly blends cutting-edge technology with a sleek, modern design. Whether you're a seasoned marathoner or just starting your fitness journey, the Ultraboost 25 is designed to support you every step of the way.",
            'Colors' => 5,
            'Genre' => "Men",
            'Price' => 15000,
            'Rating' => 0,
            'Rating_no' => 0,
            'Image_url' => "/products/shoes1.png",
            'Thumbnails' => "/products/shoes2.png,/products/shoes2.png,/products/shoes1.png,/products/shoes2.png",
            'Liked' => true,

        ]);
        DB::table('products')->insert([
            'Name' => 'Adiddas Shoes D',
            'Type' => "Shoes",
            'Description' => "Experience the pinnacle of performance and comfort with the new adidas Ultraboost 25. Engineered to elevate every run, this shoe seamlessly blends cutting-edge technology with a sleek, modern design. Whether you're a seasoned marathoner or just starting your fitness journey, the Ultraboost 25 is designed to support you every step of the way.",
            'Colors' => 5,
            'Genre' => "Men",
            'Price' => 15000,
            'Rating' => 0,
            'Rating_no' => 0,
            'Image_url' => "/products/shoes1.png",
            'Thumbnails' => "/products/shoes2.png,/products/shoes2.png,/products/shoes1.png,/products/shoes2.png",
            'Liked' => true,

        ]);
        DB::table('products')->insert([
            'Name' => 'Adiddas Sneakers A',
            'Type' => "Shoes",
            'Description' => "Step into a legacy of innovation with the adidas Ultraboost, a sneaker that redefined comfort and performance for athletes and everyday wearers alike. More than a shoe, the Ultraboost is an icon, blending adidas's rich heritage in running technology with a modern, adaptable design that fits every lifestyle.",
            'Colors' => 10,
            'Genre' => "Men",
            'Price' => 20000,
            'Rating' => 0,
            'Rating_no' => 0,
            'Image_url' => "/products/shoes2.png",
            'Thumbnails' => "/products/shoes1.png,/products/shoes1.png,/products/shoes2.png,/products/shoes1.png",
            'Liked' => true,

        ]);
        DB::table('products')->insert([
            'Name' => 'Adiddas Sneakers B',
            'Type' => "Shoes",
            'Description' => "Step into a legacy of innovation with the adidas Ultraboost, a sneaker that redefined comfort and performance for athletes and everyday wearers alike. More than a shoe, the Ultraboost is an icon, blending adidas's rich heritage in running technology with a modern, adaptable design that fits every lifestyle.",
            'Colors' => 10,
            'Genre' => "Women",
            
            'Price' => 20000,
            'Rating' => 0,
            'Rating_no' => 0,
            'Image_url' => "/products/shoes2.png",
            'Thumbnails' => "/products/shoes1.png,/products/shoes1.png,/products/shoes2.png,/products/shoes1.png",
            'Liked' => true,

        ]);
        DB::table('products')->insert([
            'Name' => 'Adiddas Sneakers C',
            'Type' => "Shoes",
            'Description' => "Step into a legacy of innovation with the adidas Ultraboost, a sneaker that redefined comfort and performance for athletes and everyday wearers alike. More than a shoe, the Ultraboost is an icon, blending adidas's rich heritage in running technology with a modern, adaptable design that fits every lifestyle.",
            'Colors' => 10,
                        'Genre' => "Women",
            
            'Price' => 20000,
            'Rating' => 0,
            'Rating_no' => 0,
            'Image_url' => "/products/shoes2.png",
            'Thumbnails' => "/products/shoes1.png,/products/shoes1.png,/products/shoes2.png,/products/shoes1.png",
            'Liked' => true,

        ]);
        DB::table('products')->insert([
            'Name' => 'Adiddas Sneakers D',
            'Type' => "Shoes",
            'Description' => "Step into a legacy of innovation with the adidas Ultraboost, a sneaker that redefined comfort and performance for athletes and everyday wearers alike. More than a shoe, the Ultraboost is an icon, blending adidas's rich heritage in running technology with a modern, adaptable design that fits every lifestyle.",
            'Colors' => 10,
            'Genre' => "Kids",
            'Price' => 20000,
            'Rating' => 0,
            'Rating_no' => 0,
            'Image_url' => "/products/shoes2.png",
            'Thumbnails' => "/products/shoes1.png,/products/shoes1.png,/products/shoes2.png,/products/shoes1.png",
            'Liked' => true,

        ]);
        DB::table('products')->insert([
            'Name' => 'Adiddas Sneakers E',
            'Type' => "Shoes",
            'Description' => "Step into a legacy of innovation with the adidas Ultraboost, a sneaker that redefined comfort and performance for athletes and everyday wearers alike. More than a shoe, the Ultraboost is an icon, blending adidas's rich heritage in running technology with a modern, adaptable design that fits every lifestyle.",
            'Colors' => 10,
                        'Genre' => "Kids",
            'Price' => 20000,
            'Rating' => 0,
            'Rating_no' => 0,
            'Image_url' => "/products/shoes2.png",
            'Thumbnails' => "/products/shoes1.png,/products/shoes1.png,/products/shoes2.png,/products/shoes1.png",
            'Liked' => true,

        ]);
        DB::table('products')->insert([
            'Name' => 'Adiddas Sneakers F',
            'Type' => "Shoes",
            'Description' => "Step into a legacy of innovation with the adidas Ultraboost, a sneaker that redefined comfort and performance for athletes and everyday wearers alike. More than a shoe, the Ultraboost is an icon, blending adidas's rich heritage in running technology with a modern, adaptable design that fits every lifestyle.",
            'Colors' => 10,
                        'Genre' => "Kids",
            'Price' => 20000,
            'Rating' => 0,
            'Rating_no' => 0,
            'Image_url' => "/products/shoes2.png",
            'Thumbnails' => "/products/shoes1.png,/products/shoes1.png,/products/shoes2.png,/products/shoes1.png",
            'Liked' => true,

        ]);
        DB::table('products')->insert([
            'Name' => 'Adiddas Sneakers G',
            'Type' => "Shoes",
            'Description' => "Step into a legacy of innovation with the adidas Ultraboost, a sneaker that redefined comfort and performance for athletes and everyday wearers alike. More than a shoe, the Ultraboost is an icon, blending adidas's rich heritage in running technology with a modern, adaptable design that fits every lifestyle.",
            'Colors' => 10,
                        'Genre' => "Kids",
            'Price' => 20000,
            'Rating' => 0,
            'Rating_no' => 0,
            'Image_url' => "/products/shoes2.png",
            'Thumbnails' => "/products/shoes1.png,/products/shoes1.png,/products/shoes2.png,/products/shoes1.png",
            'Liked' => true,

        ]);
        DB::table('products')->insert([
            'Name' => 'Adiddas Sneakers H',
            'Type' => "Shoes",
            'Description' => "Step into a legacy of innovation with the adidas Ultraboost, a sneaker that redefined comfort and performance for athletes and everyday wearers alike. More than a shoe, the Ultraboost is an icon, blending adidas's rich heritage in running technology with a modern, adaptable design that fits every lifestyle.",
            'Colors' => 10,
                        'Genre' => "Kids",
            'Price' => 20000,
            'Rating' => 0,
            'Rating_no' => 0,
            'Image_url' => "/products/shoes2.png",
            'Thumbnails' => "/products/shoes1.png,/products/shoes1.png,/products/shoes2.png,/products/shoes1.png",
            'Liked' => true,

        ]);
        DB::table('products')->insert([
            'Name' => 'T-shirt Women A',
            'Type' => "Clothing",
            'Description' => "A perfect blend of comfort and classic style, this women's t-shirt is designed for everyday wear. Made from ultra-soft, breathable cotton, it features a relaxed fit and a flattering crew neck. Pair it with your favorite jeans, skirts, or shorts for an effortlessly chic look.",
            'Colors' => 10,
                        'Genre' => "Women",
            'Price' => 17000,
            'Rating' => 0,
            'Rating_no' => 0,
            'Image_url' => "/products/women-clothing-1.png",
            'Thumbnails' => "/products/women-clothing-2.png,/products/women-clothing-2.png,/products/women-clothing-1.png,/products/women-clothing-2.png",
            'Liked' => false,

        ]);
        DB::table('products')->insert([
            'Name' => 'T-shirt Women B',
            'Type' => "Clothing",
            'Description' => "A perfect blend of comfort and classic style, this women's t-shirt is designed for everyday wear. Made from ultra-soft, breathable cotton, it features a relaxed fit and a flattering crew neck. Pair it with your favorite jeans, skirts, or shorts for an effortlessly chic look.",
            'Colors' => 10,
                        'Genre' => "Women",
            'Price' => 17000,
            'Rating' => 0,
            'Rating_no' => 0,
            'Image_url' => "/products/women-clothing-1.png",
            'Thumbnails' => "/products/women-clothing-2.png,/products/women-clothing-2.png,/products/women-clothing-1.png,/products/women-clothing-2.png",
            'Liked' => false,

        ]);
        DB::table('products')->insert([
            'Name' => 'T-shirt Women C',
            'Type' => "Clothing",
            'Description' => "A perfect blend of comfort and classic style, this women's t-shirt is designed for everyday wear. Made from ultra-soft, breathable cotton, it features a relaxed fit and a flattering crew neck. Pair it with your favorite jeans, skirts, or shorts for an effortlessly chic look.",
            'Colors' => 10,
                        'Genre' => "Women",
            'Price' => 17000,
            'Rating' => 0,
            'Rating_no' => 0,
            'Image_url' => "/products/women-clothing-1.png",
            'Thumbnails' => "/products/women-clothing-2.png,/products/women-clothing-2.png,/products/women-clothing-1.png,/products/women-clothing-2.png",
            'Liked' => false,

        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
