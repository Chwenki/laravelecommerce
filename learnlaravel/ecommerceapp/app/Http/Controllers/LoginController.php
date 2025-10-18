<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\Auth\LoginRequest;


class LoginController extends Controller
{
    public function post (LoginRequest $request) {
        $request->authenticate();

        $request->session()->regenerate();

        return redirect()->intended(route('home.get'));
    }
}
