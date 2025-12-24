<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        // Pass data to the view if needed
        $data = [
            'title' => 'Welcome to My Home Page',
            'content' => 'This is the dynamic content of the home page.'
        ];
        return view('home.home', $data);
    }
}
