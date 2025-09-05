<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\HTTP;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function post(Request $request)
    {
        dd($request->all());
    }
}
