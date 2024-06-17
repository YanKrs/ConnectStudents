<?php

use App\Http\Controllers\AuthController;

use App\Http\Controllers\ProjectController;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/login',  [AuthController::class, 'login']);
Route::post ('/cadastrar',[AuthController::class,'cadastrar']);
Route::get ('/alunos',[AuthController::class,'listarAlunos']);
Route::get('/projetos', [ProjectController::class,  'listarProjetos']);

// Rotas protegidas

Route::group(['middleware' => ['auth:sanctum']], function() {

    Route::get('/projetos/{id}', [ProjectController::class,  'listarProjetosEmpresa']);
    Route::post('/projetos', [ProjectController::class, 'criarProjeto']);
    Route::post('/projetos/associar', [ProjectController::class, 'associarAlunoProjeto']);
    Route::delete('/projetos/{id}', [ProjectController::class, 'deleteProjeto']);
    Route::get('/projetos/aluno/{id_aluno}',[ProjectController::class, 'listarProjetosAluno']);
    Route::get('/projetos/projeto/{id_projeto}', [ProjectController::class,  'projetoTemAlunoAssociado']);
    Route::post('/projetos/{id_projeto}/proposta/{id_aluno}', [ProjectController::class, 'criarProposta']);
    Route::get('/projetos/{id_projeto}/proposta', [ProjectController::class, 'listarPropostasAluno']);
});
