<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class KidsController extends Controller
{
    function get() {
        return Inertia::render('kids');
    }
}
