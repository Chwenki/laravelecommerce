<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\Auth\LoginRequest;

class NavController extends Controller
{
    public function store(LoginRequest $request, Request $req) {
        dd($request->all());
        dd($request);
        $request->authenticate();

        $request->session()->regenerate();

        return redirect()->intended(route('men.show'));
    }
}
