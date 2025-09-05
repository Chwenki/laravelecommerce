<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\HTTP;
use Illuminate\Support\Str;

class ProductSeeder extends Seeder
{
    public function run(): void
    {
        $url = 'https://dummyjson.com/products';

        $response = HTTP::get($url)->throw();
        $items = $response->json();

        $rows = collect($items['products'])->map(function ($p) {
            $name = $p['title'] ?? 'Unnamed Product';
            $desc = $p['description'] ?? '';
            $price = $p['price'] ?? 0;
            return [
                'name' => $name,
                'description' => $desc,
                'price' => $price,
                'image_path' => $p['images'][0]
            ];
        })->values()->all();

        DB::table('products')->upsert(
            $rows,
            ['id'],
            ['name', 'description', 'price', 'image_path']
        );
        

        $this->command->info('Products seeded from CDN: '.count($rows));
    }
}