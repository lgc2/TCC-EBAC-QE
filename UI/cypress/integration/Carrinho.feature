            #language: pt

            Funcionalidade: Adicionar item ao carrinho

            Contexto:
            Dado que eu esteja na página do carrinho

            @automatizado
            Cenário: Validar inserção de menos de 11 itens de um mesmo produto ao carrinho
            Quando eu inserir 10 itens de um mesmo produto no carrinho
            Então a quantidade apresentada na coluna “Quantity” será atualizada
            E os valores também serão atualizados de acordo com a nova quantidade de itens informada

            @automatizado
            Cenário: Validar valor sem direito a cumpom de desconto
            Quando eu inserir itens ao carrinho, totalizando um valor menor do que RS 200,00
            Então o sistema não me dará um cupom de desconto
            E verei o valor cheio na página do carrinho

            @manual
            Cenário: Validar inserção de 11 itens de um mesmo produto ao carrinho
            Quando eu inserir 11 itens de um mesmo produto no carrinho
            Então a quantidade apresentada na coluna “Quantity” será atualizada
            E receberei um alerta informando sobre a impossibilidade desta ação
            E o botão “Quantity” ficará desabilitado, impossibilitando que eu passe para o checkout

            @manual
            Esquema do Cenário: Validar direito ao cumpom de 10%
            Quando eu inserir itens ao carrinho, e o valor se atualizar para <valor>
            Então ganharei um cupom de 10%

            Exemplos:
            | valor  |
            | 200,00 |
            | 201,00 |
            | 599,00 |
            | 600,00 |

            @manual
            Esquema do Cenário: Validar direito ao cumpom de 15%
            Quando eu inserir itens ao carrinho, e o valor se atualizar para <valor>
            Então ganharei um cupom de 15%

            Exemplos:
            | valor  |
            | 600,01 |
            | 601,00 |
