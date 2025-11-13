<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Container\Attributes\Auth;
use App\Http\Controllers\Admin\AuthController;
use App\Http\Controllers\Admin\CategoryController;

Route::post('admin/login',[AuthController::class,'authenticate']);


// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');
Route::group(['middleware'=>'auth:sanctum'],function(){
Route::get('categories', [CategoryController::class,'index']);
Route::post('categories',[CategoryController::class,'store']);
});
