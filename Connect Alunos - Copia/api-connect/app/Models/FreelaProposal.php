<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class FreelaProposal extends Model
{
    protected $fillable = ['proposta', 'preco', 'id', 'id_projeto', 'name']; 

    // Relacionamento com o aluno que enviou a proposta
    public function aluno()
    {
        return $this->belongsTo(User::class, 'id');
    }

    // Relacionamento com o projeto relacionado à proposta
    public function projeto()
    {
        return $this->belongsTo(Project::class, 'id_projeto');
    }

  
}
