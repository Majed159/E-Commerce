<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Traits\ApiResponseTrait;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CategoryController extends Controller
{
    use ApiResponseTrait;

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $categories = Category::orderBy('created_at', 'DESC')->get();
        return $this->successResponse($categories, 'Categories retrieved successfully');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'name'=>'required|string|max:255',

        ]);

        if ($validator->fails()) {
            return $this->validationErrorResponse($validator->errors(), 'Validation failed');
        }

        try {
            $category = Category::create([
                'name'=>$request->name,
               'status'=> $request->status ?? true
            ]);

            return $this->successResponse($category, 'Category created successfully', 201);
        } catch (\Exception $e) {
            return $this->errorResponse('Failed to create category', 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show( $id)
    {
        $category = Category::find($id);
        if (!$category) {
            return $this->errorResponse('Category not found', 404,);
        }else{
        return $this->successResponse($category, 'Category retrieved successfully');
    }
}

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
