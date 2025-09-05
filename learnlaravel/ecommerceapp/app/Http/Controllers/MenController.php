<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class MenController extends Controller
{
    function get() {
        $prodNum = DB::table('cart_products')->count();
        return Inertia::render('men', ['prodNum' => $prodNum]);
    }
}
