<?php

namespace App\Http\Controllers\Admin;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
      public function authenticate(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required|string|min:6',
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        $credentials = $request->only(['email', 'password']);

        if (Auth::attempt($credentials)) {
            $user = User::find(Auth::user()->id);
            if ($user->role !== 'admin') {
                return response()->json([
                    'status' => 401,
                    'message' => 'You are not Authorized to access admin panel'
                ], 401);

            }else{
                $token = $user->createToken('admin-token')->plainTextToken;
                return response()->json([
                    'status' => 200,
                    'message' => 'Admin authenticated successfully',
                    'token' => $token,
                    'id' => $user->id,
                    'name' => $user->name,
                    'email' => $user->email,
                ], 200);
            }
            // return response()->json(['message' => 'Admin authenticated successfully'], 200);
        } else {
            return response()->json(['message' => 'Invalid credentials/email or password'], 401);
        }
    }
}
