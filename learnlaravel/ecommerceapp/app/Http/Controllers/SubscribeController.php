<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use App\Mail\ConfirmNewsletterSubscription;

class SubscribeController extends Controller
{
    function post(Request $request) {
        Mail::to("test@gmail.com")->send(new ConfirmNewsletterSubscription());
        $email = $request->all()['email'];
        DB::insert('insert into newslettersubs (email) values (?)', [$email]);
    }
}                                                                   
