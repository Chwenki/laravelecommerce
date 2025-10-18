<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Laravel\Socialite\Facades\Socialite;


class GoogleRedirectController extends Controller
{
    function get () {
        return Socialite::driver('google')->redirect();
    }
}
