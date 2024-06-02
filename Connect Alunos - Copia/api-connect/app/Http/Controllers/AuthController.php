<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            $user = Auth::user();
            $token = $user->createToken('primeirotoken')->plainTextToken;

            $response = [
                'user' => $user,
                'token' => $token
            ];

            return response()->json($response, 200); // Alterando o status code para 200
        } else {
            return response()->json(['message' => 'Credenciais inválidas'], 401);
        }
    }

    public function cadastrar(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|min:6',
            'email' => 'required|email|unique:users',
            'password' => 'required|string|min:8',
            'type' => 'required|string',

        ]);



        $user = User::create([
            'name' => $validatedData['name'],
            'email' => $validatedData['email'],
            'password' => bcrypt($validatedData['password']), // Criptografando a senha
            'type' => $validatedData['type'],
            'cpf' => $request->cpf ?? null,
            'cnpj' => $request->cnpj ?? null,

        ]);

        return response()->json([
            'message' => 'Usuário registrado com sucesso',
            'user' => $user
        ], 201);
    }


    public function listarAlunos()
    {
        $alunos = User::where('type', 'aluno')->get();
        return response()->json($alunos);
    }
}
