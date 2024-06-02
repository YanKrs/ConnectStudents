<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFreelaProposalsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('freela_proposals', function (Blueprint $table) {
            $table->id();
            $table->foreignId('id_aluno')->nullable()->constrained('users');
            $table->foreignId('id_projeto')->nullable()->constrained('projetos');
           
            $table->text('proposta');
            $table->decimal('preco', 10, 2);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('freela_proposals');
    }
}
