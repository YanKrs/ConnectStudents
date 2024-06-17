<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class StudentProject extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('alunos_projetos', function (Blueprint $table) {
            $table->id();
            $table->foreignId('id_aluno')->constrained('users');
            $table->foreignId('id_projeto')->constrained('projetos');
   
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('alunos_projetos');
    }
}

