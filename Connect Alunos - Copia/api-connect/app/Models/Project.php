<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Project extends Model
{
    protected $table = 'projetos';

    protected $fillable = [
        'titulo', 'descricao', 'id_empresa', 'preco'
    ];

    // Relacionamento com a tabela de usuários (empresas)
    public function empresa()
    {
        return $this->belongsTo('App\Models\User', 'id_empresa','id');
    }

    
}