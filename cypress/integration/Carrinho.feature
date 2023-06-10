            #language: pt

            Funcionalidade: Adicionar item ao carrinho

            Contexto:
            Dado que eu esteja na página do carrinho

            @automatizado
            Cenário: Validar inserção de menos de 11 itens de um mesmo produto ao carrinho
            Quando eu inserir "10" itens de um mesmo produto no carrinho
            Então a quantidade apresentada na coluna “Quantity” será atualizada
            E os valores também serão atualizados de acordo com a nova quantidade de itens informada

            @automatizado
            Cenário: Validar valor sem direito a cumpom de desconto
            Quando eu inserir itens ao carrinho, totalizando um valor menor do que RS 200,00
            Então o sistema não me dará um cupom de desconto
            E verei o valor cheio na página do carrinho
