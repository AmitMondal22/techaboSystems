<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProductsController extends Controller
{
    public function index(Request $request)
    {
        // $query = Product::query();

        // // Filter by communication
        // if ($request->filled('communication')) {
        //     $query->whereIn('communication', (array) $request->communication);
        // }

        // // Filter by power source
        // if ($request->filled('power_source')) {
        //     $query->whereIn('power_source', (array) $request->power_source);
        // }

        // // Filter by input/output type
        // if ($request->filled('io_type')) {
        //     $query->whereIn('io_type', (array) $request->io_type);
        // }

        // // Filter by application
        // if ($request->filled('application')) {
        //     $query->whereIn('application', (array) $request->application);
        // }

        // $products = $query->paginate(10); // Pagination

         $data = [
            'title' => 'Welcome to My Home Page',
            'content' => 'This is the dynamic content of the home page.'
        ];
        return view('products.product', $data);

        // return view('products.index', compact('products'));
    }

}
