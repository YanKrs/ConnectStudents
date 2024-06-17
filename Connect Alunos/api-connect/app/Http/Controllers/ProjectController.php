<?php

namespace App\Http\Controllers;

use App\Models\FreelaProposal;
use App\Models\Project;
use App\Models\ProjectAluno;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;


class ProjectController extends Controller
{
    public function listarProjetos()
    {
        // Carregar os projetos com o relacionamento "empresa"
        $projetos = Project::with('empresa')->get();

        // Retornar os projetos com o nome da empresa
        return response()->json($projetos);
    }
    public function listarProjetosEmpresa($id_empresa)
    {
        // Recupere os projetos associados à empresa específica
        $projetos = Project::where('id_empresa', $id_empresa)->get();
        return response()->json($projetos);
    }
    public function criarProposta(Request $request, $id_aluno,$id_projeto)
    {
       
        // Criar uma nova proposta de freela
        $proposal = new FreelaProposal();
        $proposal->proposta = $request->proposta;
        $proposal->preco = $request->preco;
        $proposal->id_aluno = $id_aluno;
       
        $proposal->id_projeto = $id_projeto;
        $proposal->save();

        // Retornar a proposta criada
        return response()->json($proposal, 201);
    }
    public function listarPropostasAluno($id_projeto)
    {
        // Buscar todas as propostas para o projeto específico, incluindo a relação com o aluno
        $propostas = FreelaProposal::with('aluno')->where('id_projeto', $id_projeto)->get();
    
        // Verificar se existem propostas para o projeto
        if ($propostas->isEmpty()) {
            return response()->json(['message' => 'Não há propostas para este projeto'], 404);
        }
    
        // Criar uma coleção para armazenar as propostas com o nome do aluno
        $propostasComNomeAluno = $propostas->map(function ($proposta) {
            // Verificar se o aluno está carregado corretamente
            $nomeAluno = $proposta->aluno ? $proposta->aluno->name : 'Aluno não encontrado';
            
            return [
                'id' => $proposta->id,
                'proposta' => $proposta->proposta,
                'preco' => $proposta->preco,
                'id_aluno' => $proposta->id_aluno,
                'nome_aluno' => $nomeAluno, // Nome do aluno
            ];
        });
    
        // Retornar as propostas com o nome do aluno
        return response()->json($propostasComNomeAluno);
    }
    
    
    

    public function criarProjeto(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'titulo' => 'required',
            'descricao' => 'required',
            'preco' => 'required',
            'id_empresa' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => 'Dados inválidos'], 400);
        }

        $projeto = Project::create($request->all());
        return response()->json($projeto, 201);
    }

    public function deleteProjeto($id)
    {
        $projeto = Project::find($id);
        if (!$projeto) {
            return response()->json(['error' => 'Projeto não encontrado'], 404);
        }
        $projeto->delete();
        return response()->json($projeto, 204);
    }
    public function associarAlunoProjeto(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'id_aluno' => 'required|exists:users,id', 
            'id_projeto' => 'required|exists:projetos,id', // Verifica se o ID do projeto existe na tabela de projetos
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => 'Dados inválidos'], 400);
        }

        // Cria a associação entre o aluno e o projeto
        $projectAluno = ProjectAluno::create($request->all());

        return response()->json($projectAluno, 201);
    }

    public function listarProjetosAluno($id_aluno)
    {
        // Recupere os projetos associados ao aluno específico
        $projetos = ProjectAluno::where('id_aluno', $id_aluno)->with('projeto')->get();
        return response()->json($projetos);
    }
    public function projetoTemAlunoAssociado($id_projeto)
    {
        // Verifica se há algum aluno associado ao projeto
        $projetoAssociado = ProjectAluno::where('id_projeto', $id_projeto)->first();
        if ($projetoAssociado) {
            return response()->json([
                'associado' => true,
                'id_aluno' => $projetoAssociado->id_aluno
            ]);
        } else {
            return response()->json(['associado' => false]);
        }
    }
}
