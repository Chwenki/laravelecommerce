<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Laravel\Socialite\Facades\Socialite;

use Illuminate\Support\Facades\Auth;
use App\Models\User;

class GoogleCallbackController extends Controller
{
    function get (Request $request) {
    // Auth::guard('web')->logout();

    // $request->session()->invalidate();
    // $request->session()->regenerateToken();
    // dd($request->all());
    $user = Socialite::driver('google')->user();
    $googleUser = Socialite::driver('google')->user();
 
    $user = User::updateOrCreate([
        'google_id' => $googleUser->id,
    ], [
        'name' => $googleUser->name,
        'email' => $googleUser->email,
        'google_token' => $googleUser->token,
        'google_refresh_token' => $googleUser->refreshToken,
    ]);
 
    Auth::login($user);
 
    return redirect('/');
    // $user->token
}
}
