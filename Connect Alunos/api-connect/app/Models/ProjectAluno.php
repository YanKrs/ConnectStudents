<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class ProjectAluno extends Model
{
    protected $table = 'alunos_projetos';

    protected $fillable = [
        'id_aluno',  'id_projeto','name', 
    ];

    // Relacionamento com a tabela de usuários (empresas)
    public function aluno()
    {
        return $this->belongsTo('App\Models\User', 'id_aluno');
    }

   

    public function projeto()
    {
        return $this->belongsTo(Project::class, 'id_projeto');
    }
}

    
